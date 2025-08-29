import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Brain,
  Activity,
  Target,
  ArrowRight,
  Shield,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Это научно?",
      answer:
        "Да. Сама технология ГРВ апробирована и используется в науке и медицине. Мы лично поставляли оборудование и обучали специалистов для МО и НГ РК. Наш метод интерпретации основан на моделях современной научной психологии.",
    },
    {
      question: "Насколько это точно?",
      answer:
        "Наша подтвержденная точность выводов составляет от 85%. Это значительно выше, чем у используемых тестов, где результаты легко исказить.",
    },
    {
      question: "Это безопасно для сотрудников?",
      answer:
        "Абсолютно. Метод неинвазивный (без вмешательства в организм) и полностью безвредный. Все данные обрабатываются конфиденциально, а сотрудники проходят диагностику после взаимного согласия.",
    },
    {
      question: "Как это помогает бизнесу?",
      answer:
        "Наш метод позволяет выявить скрытые риски и конфликты в компании, что снижает вероятность ошибок при найме и повышает общую продуктивность. Мы помогаем руководителям принимать более обоснованные решения.",
    },
    // {
    //   question: "Сколько времени занимает диагностика?",
    //   answer:
    //     "Обычно диагностика занимает около 10 минут на человека. Результаты предоставляются в виде подробного отчета с рекомендациями.",
    // },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
              Наука вместо догадок:
              <br />
              <span className="block mt-2">
                Как мы видим то, что скрыто
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Наш метод основан на трех китах: объективная технология, глубокая
              психологическая экспертиза и современные IT-решения.
            </p>
          </div>
        </div>
      </section>

      {/* What is GRV Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black mb-8">
                Что такое ГРВ-биоэлектрография?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ГРВ (Газоразрядная Визуализация) — это научный метод,
                позволяющий регистрировать и анализировать сверхслабые свечения,
                возникающие вокруг объектов в электромагнитном поле высокой
                напряженности.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Эти параметры напрямую коррелируют с активностью вегетативной
                нервной системы, уровнем стресса и энергетическим состоянием
                организма.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-black font-semibold">
                  Важно: Мы измеряем объективные физиологические параметры,
                  которые служат для нас «сырыми данными».
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Activity, value: "от 85%", label: "Точность" },
                { icon: Brain, value: "5 мин", label: "Диагностика" },
                { icon: Shield, value: "100%", label: "Безопасно" },
                { icon: Target, value: "20 лет", label: "Опыта" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-black hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-gray-600 group-hover:text-black group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  <div className="text-2xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">{item.value}</div>
                  <div className="text-sm text-gray-600 group-hover:text-black transition-colors duration-300">{item.label}</div>

                  {/* Анимированная линия снизу */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500 ease-out"></div>

                  {/* Пульсирующий эффект */}
                  <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-12 text-center">
              Почему наш подход действительно работает?
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Контент слева */}
              <div className="group bg-gray-100 rounded-lg p-8 md:p-10 border border-gray-200 space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  <strong className="text-black">ГРВ-технология</strong> — это
                  лишь инструмент. Главная сила — в уникальной системе научной
                  интерпретации данных, разработанной нашей командой для точной
                  оценки психологических и бизнес-рисков.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Основываясь на{" "}
                  <strong className="text-black">20-летнем опыте</strong> в
                  психодиагностике, мы создали метод, который переводит биоданные
                  в понятные и точные рекомендации для HR и управленцев.
                </p>

                <div className="bg-white rounded-lg p-6 border-l-4 border-black group-hover:border-l-8 group-hover:shadow-md transition-all duration-300">
                  <p className="text-black font-medium text-base">
                    Наша научная разработка помогает снизить риски, повысить
                    продуктивность и сделать психологический климат комфортным.
                  </p>
                </div>
              </div>

              {/* Анимация справа */}
              <div className="flex items-start justify-center">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://lottie.host/embed/e8177f8c-576f-409b-99cf-295dfbc28260/kgutbS68w0.lottie"
                    className="w-full h-full border-0"
                    title="Lottie Animation"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Удалён дублирующийся тяжёлый блок с фоном и повторяющимся текстом */}

      {/* FAQ Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-12 text-center">
              Ответы на частые вопросы
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-lg border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <button
                      className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-medium text-black hover:text-gray-800 transition-colors duration-300"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-gray-600 group-hover:text-black group-hover:scale-110 transition-all duration-300 mr-3" />
                        {faq.question}
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                        ? "max-h-40 opacity-100 pb-5"
                        : "max-h-0 opacity-0"
                        }`}
                      aria-hidden={!isOpen}
                    >
                      <p className="text-gray-700 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Решения на основе фактов
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Узнайте, какие риски скрыты в вашей команде. Пройдите наш
              <strong className="text-black font-semibold"> бесплатный и конфиденциальный Экспресс-Аудит</strong>
              — это займет всего <strong className="text-black">2 минуты</strong>.
            </p>

            <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
              <ShieldCheck className="text-gray-600 w-5 h-5" />
              Конфиденциально • Без регистрации
            </div>

            <div>
              <Link to="/express-audit">
                <button className="group inline-flex items-center px-10 py-5 text-xl font-semibold text-white bg-black border border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg">
                  Пройти Экспресс-Аудит Рисков
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
