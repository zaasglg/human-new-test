import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { marked } from "marked";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Gift, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const questions = [
  {
    id: 1,
    question:
      "Удается ли вам завершать рабочий день с достаточным запасом сил для стратегического планирования на завтра?",
    options: ["Никогда ", "Редко", "Иногда", "Часто", "Почти всегда"],
  },
  {
    id: 2,
    question:
      "Насколько ясно вы видите приоритеты в своих задачах, когда находитесь под давлением или в условиях многозадачности?",
    options: ["Очень вовлечён", "Вовлечён", "Слабо вовлечён", "Не вовлечён"],
  },
  {
    id: 3,
    question:
      "Как часто вы посвящаете время анализу и рефлексии над своими управленческими решениями, а не только «тушению пожаров»?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 4,
    question:
      "Чувствуете ли вы, что ваша текущая рабочая нагрузка позволяет вам сохранять долгосрочную стратегическую ясность?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 5,
    question:
      "Насколько четко, на ваш взгляд, ваша команда понимает не только свои текущие задачи, но и их связь со стратегическими целями компании?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 6,
    question:
      "Как часто вы используете формальные и неформальные инструменты для признания достижений и вклада ваших ключевых сотрудников?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 7,
    question:
      "Существует ли в вашей команде понятный и прозрачный процесс, позволяющий сотрудникам предлагать и реализовывать новые идеи?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 8,
    question:
      "Как часто вы даете своим подчиненным обратную связь, сфокусированную не на критике ошибок, а на конкретных шагах для их профессионального роста?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 9,
    question:
      "Насколько быстро и конструктивно решаются рабочие разногласия и конфликты внутри вашей команды, не переходя на личности?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 10,
    question:
      "Существует ли в команде культура открытого обсуждения проблем, когда сотрудники не боятся сообщать о трудностях или ошибках?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 11,
    question:
      "Можете ли вы с уверенностью делегировать сложную и ответственную задачу, будучи уверенным в ее качественном исполнении без вашего микроменеджмента?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 12,
    question:
      "Насколько эффективно выстроены коммуникационные процессы между вашей командой и смежными отделами?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 13,
    question:
      "Как часто вы анализируете действия конкурентов и тренды рынка для корректировки стратегии своего подразделения?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 14,
    question:
      "Насколько легко ваша команда адаптируется к изменениям в процессах, технологиях или целях компании?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 15,
    question:
      "Посвящаете ли вы время целенаправленному развитию своих ключевых сотрудников, видя в них будущих лидеров?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
  {
    id: 16,
    question:
      "Насколько четко вы представляете, как будет выглядеть ваш отдел/проект через 1-2 года, и какие шаги для этого нужно предпринять уже сегодня?",
    options: ["Никогда", "Иногда", "Часто", "Постоянно"],
  },
];
const ExpressAudit = () => {
  // Для PDF-экспорта
  const pdfRef = useRef<HTMLDivElement>(null);
  // Для отправки формы через EmailJS
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    agreeToPrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeToPrivacy: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToPrivacy) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с политикой конфиденциальности",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Симуляция отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description:
          "В течение 5 минут на вашу почту придет ссылка для прохождения экспресс-аудита вашей команды.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        agreeToPrivacy: false,
      });
    }, 1500);
  };
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    occupation: "",
    position: "",
    age: "",
  });
  const [userInfoErrors, setUserInfoErrors] = useState<{ occupation?: string; position?: string; age?: string }>({});
  const [answers, setAnswers] = useState<string[]>([]);
  const [testErrors, setTestErrors] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [email, setEmail] = useState("");
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingGpt, setLoadingGpt] = useState(false);

  const auditData = {
    userInfo,
    answers,
    email,
  };

  // Формируем промпт для ChatGPT
  function buildPrompt() {
    let prompt = `Пользователь прошёл экспресс-аудит. Вот его данные:\n`;
    prompt += `Тип деятельности: ${userInfo.occupation || "-"}\n`;
    prompt += `Должность: ${userInfo.position || "-"}\n`;
    prompt += `Возраст: ${userInfo.age || "-"}\n`;
    prompt += `\nОтветы на вопросы:\n`;
    questions.forEach((q, i) => {
      prompt += `${i + 1}) ${q.question}\nОтвет: ${answers[i] || "-"}\n`;
    });
    prompt += `\nНа основе этих данных проанализируй риски и дай краткие рекомендации по улучшению состояния сотрудника. Ответ дай на русском языке.`;
    return prompt;
  }

  // Отправка данных в OpenAI и генерация PDF
  async function handleGetRecommendation() {
    setLoadingGpt(true);
    setRecommendation(null);
    try {

      // const open_ai_key = "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"

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "user", content: buildPrompt() }
          ],
        })
      });
      if (!res.ok) throw new Error("Ошибка запроса к OpenAI");
      const data = await res.json();
      // Для chat/completions: content лежит в data.choices[0].message.content
      const content = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || data.output || JSON.stringify(data);
      await sendRecommendationByEmail(content);
      setRecommendation(content);
      setShowModal(true);

      // Ждём, чтобы DOM обновился с рекомендацией
      // setTimeout(() => downloadPDF(content), 500);
    } catch (e: any) {
      setRecommendation("Ошибка получения рекомендации: " + e.message);
    } finally {
      setLoadingGpt(false);
    }
  }

  // Генерация и скачивание PDF
  async function downloadPDF(content: string) {
    if (!pdfRef.current) return;
    const element = pdfRef.current;
    // @ts-ignore: scale не типизирован, но работает
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const img = new window.Image();
    img.src = imgData;
    img.onload = async () => {
      const imgWidth = img.width;
      const imgHeight = img.height;
      const pdfWidth = pageWidth - 20;
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth;
      pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);
      // Отправляем только текст рекомендации на email
      pdf.save("recommendation.pdf");
    };
  }

  // Функция отправки только текста рекомендации через EmailJS
  async function sendRecommendationByEmail(recommendationText: string) {
    if (!email) return;
    try {
      await emailjs.send(
        'service_tm25ur6', // ← замените на свой
        'template_qj2gdsi', // ← замените на свой
        {
          to_email: email,
          message: recommendationText,
        },
        '6CuztgeRNfUZSy_AR' // ← замените на свой
      );
      toast({ title: 'Письмо отправлено!', description: 'Рекомендации отправлены на указанный email.' });
    } catch (error: any) {
      toast({ title: 'Ошибка отправки email', description: error.text || String(error), variant: 'destructive' });
    }
  }

  // (sendPdfByEmail больше не используется)

  const handleNextQuestion = () => {
    // Валидация: выбран ли ответ на текущий вопрос
    const errors = [...testErrors];
    if (!answers[currentQuestion]) {
      errors[currentQuestion] = "Выберите вариант ответа";
      setTestErrors(errors);
      return;
    } else {
      errors[currentQuestion] = "";
      setTestErrors(errors);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep(4); // Завершение опроса
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      setStep(2);
    }
  };
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      {step === 1 && (
        <section className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              {/* Бесплатно бейдж */}
              <div className="inline-flex items-center px-5 py-2 bg-black text-white rounded-full text-sm font-semibold tracking-wide mb-6">
                <Gift className="w-5 h-5 mr-2" />
                Бесплатно за 5 минут
              </div>

              {/* Заголовок */}
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                Быстрый аудит рисков команды
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                Пройдите анонимный экспресс-опрос и получите автоматический
                отчёт с анализом зон риска:
                <span className="text-black font-semibold">
                  {" "}
                  стресс, выгорание, вовлечённость
                </span>
                .
              </p>

              {/* Описание с иконкой ✔️ */}
              <div className="bg-gray-100 rounded-lg p-6 md:p-8 max-w-3xl mx-auto mb-8 border border-gray-200">
                <p className="text-gray-700 text-base leading-relaxed flex items-start gap-3">
                  <span className="mt-1">✅</span>
                  Это не полноценная диагностика, а «сигнальный радар», который
                  показывает, есть ли в команде тревожные сигналы. Никаких
                  звонков и продаж. Только инсайты.
                </p>
              </div>

              {/* CTA Кнопка */}
              <div className="mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="bg-black text-white text-lg px-10 py-4 rounded-full border border-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Начать Экспресс-Аудит
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {step === 2 && (
        <section className="min-h-screen flex items-center justify-center px-4 bg-white">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Краткая информация
            </h2>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Тип деятельности"
                value={userInfo.occupation}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, occupation: e.target.value });
                  setUserInfoErrors((prev) => ({ ...prev, occupation: undefined }));
                }}
                className={`w-full border-2 p-4 rounded-lg focus:border-black focus:outline-none transition-colors duration-300 ${userInfoErrors.occupation ? 'border-red-500' : 'border-gray-300'}`}
              />
              {userInfoErrors.occupation && <div className="text-red-500 text-sm">{userInfoErrors.occupation}</div>}
              <input
                type="text"
                placeholder="Должность"
                value={userInfo.position}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, position: e.target.value });
                  setUserInfoErrors((prev) => ({ ...prev, position: undefined }));
                }}
                className={`w-full border-2 p-4 rounded-lg focus:border-black focus:outline-none transition-colors duration-300 ${userInfoErrors.position ? 'border-red-500' : 'border-gray-300'}`}
              />
              {userInfoErrors.position && <div className="text-red-500 text-sm">{userInfoErrors.position}</div>}
              <input
                type="number"
                placeholder="Возраст"
                value={userInfo.age}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, age: e.target.value });
                  setUserInfoErrors((prev) => ({ ...prev, age: undefined }));
                }}
                className={`w-full border-2 p-4 rounded-lg focus:border-black focus:outline-none transition-colors duration-300 ${userInfoErrors.age ? 'border-red-500' : 'border-gray-300'}`}
              />
              {userInfoErrors.age && <div className="text-red-500 text-sm">{userInfoErrors.age}</div>}
              <button
                onClick={() => {
                  const errors: { occupation?: string; position?: string; age?: string } = {};
                  if (!userInfo.occupation.trim()) errors.occupation = 'Введите тип деятельности';
                  if (!userInfo.position.trim()) errors.position = 'Введите должность';
                  if (!userInfo.age.trim()) errors.age = 'Введите возраст';
                  setUserInfoErrors(errors);
                  if (Object.keys(errors).length === 0) setStep(3);
                }}
                className="bg-black text-white w-full py-4 rounded-full border border-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 font-semibold"
              >
                Перейти к вопросам
              </button>
            </div>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="min-h-screen pt-24 flex items-center justify-center bg-white px-4">
          <div className="max-w-2xl w-full">
            <div className="mb-8 text-gray-600 text-sm">
              Вопрос {currentQuestion + 1} из {questions.length}
              <div className="w-full bg-gray-200 h-3 mt-3 rounded-full overflow-hidden">
                <div
                  className="bg-black h-3 transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100
                      }%`,
                  }}
                ></div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-black">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, idx) => (
                <label
                  key={idx}
                  className={`block border-2 px-6 py-4 rounded-lg cursor-pointer transition-all duration-300 ${answers[currentQuestion] === option
                    ? "border-black bg-gray-100"
                    : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={() => {
                      const newAnswers = [...answers];
                      newAnswers[currentQuestion] = option;
                      setAnswers(newAnswers);
                      // Сброс ошибки при выборе
                      const newErrors = [...testErrors];
                      newErrors[currentQuestion] = "";
                      setTestErrors(newErrors);
                    }}
                    className="hidden"
                  />
                  <span className="font-medium">{option}</span>
                </label>
              ))}
              {testErrors[currentQuestion] && (
                <div className="text-red-500 text-sm mt-2">{testErrors[currentQuestion]}</div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevQuestion}
                className="text-black hover:underline font-medium"
              >
                Назад
              </button>
              <button
                onClick={handleNextQuestion}
                className="bg-black text-white px-8 py-3 rounded-full border border-black hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                {currentQuestion === questions.length - 1
                  ? "Завершить"
                  : "Далее"}
              </button>
            </div>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="min-h-screen pt-24 px-4 flex items-center justify-center bg-white">
          <div className="w-full max-w-lg bg-gray-100 rounded-lg p-8 md:p-10 border border-gray-200 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                ✔
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Спасибо за прохождение!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Мы собрали вашу предварительную оценку. Чтобы получить
                персональный PDF-отчёт с рекомендациями:
              </p>
            </div>

            <input
              type="text"
              placeholder="Email для получения PDF"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 p-4 rounded-lg mb-6 focus:outline-none focus:border-black transition-colors duration-300"
            />

            <button
              className="w-full bg-black text-white py-4 rounded-full border border-black hover:bg-white hover:text-black font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-60"
              onClick={handleGetRecommendation}
              disabled={loadingGpt}
            >
              {loadingGpt ? "Анализируем..." : "Получить рекомендации"}
            </button>

            {/* Модальное окно для рекомендации */}
            {showModal && recommendation && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] flex flex-col">
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                    onClick={() => setShowModal(false)}
                    aria-label="Закрыть"
                    style={{ zIndex: 10 }}
                  >
                    ×
                  </button>
                  <div className="font-semibold mb-2 text-gray-900 uppercase">Рекомендации от эксперта:</div>
                  <div
                    className="prose prose-blue max-w-none text-gray-900 overflow-y-auto"
                    style={{ maxHeight: '60vh', paddingRight: 8 }}
                    dangerouslySetInnerHTML={{ __html: String(marked.parse(recommendation || "")) }}
                  />
                </div>
              </div>
            )}
            {/* Старый блок рекомендации для PDF-генерации (скрыт) */}
            <div ref={pdfRef} style={{ display: 'none' }}>
              <div className="font-semibold mb-2 text-gray-900 uppercase">Рекомендации от эксперта:</div>
              <div className="prose prose-blue max-w-none text-gray-900" dangerouslySetInnerHTML={{ __html: String(marked.parse(recommendation || "")) }} />
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Это{" "}
              <span className="font-medium text-black">предварительная</span>{" "}
              оценка. Для полной диагностики — свяжитесь с нашей командой:
            </div>

            <Link
              href="/contacts"
              className="inline-block mt-4 text-black font-semibold hover:underline"
            >
              <p>Перейти на страницу контактов →</p>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ExpressAudit;
