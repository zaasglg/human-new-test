import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Building2,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const Cases = () => {
  // Placeholder data for future case studies
  const futureCases = [
    {
      industry: "IT-компания",
      challenge: "Высокая текучесть разработчиков",
      solution: "Комплексная диагностика команды из 25 человек",
      results: [
        "Снижение текучести на 60%",
        "Повышение продуктивности на 35%",
        "Улучшение командного климата",
      ],
      timeframe: "6 месяцев",
      // savings: "12 млн ₸",
    },
    {
      industry: "Производственная компания",
      challenge: "Конфликты в управленческой команде",
      solution: "Углубленная диагностика топ-менеджмента",
      results: [
        "Разрешение ключевых конфликтов",
        "Оптимизация распределения ролей",
        "Рост операционной эффективности на 25%",
      ],
      timeframe: "3 месяца",
      // savings: "8 млн ₸",
    },
    {
      industry: "Финансовая организация",
      challenge: "Профессиональное выгорание",
      solution: "Мониторинг стресса и превентивные меры",
      results: [
        "Снижение уровня выгорания на 45%",
        "Уменьшение больничных на 30%",
        "Повышение клиентского сервиса",
      ],
      timeframe: "12 месяцев",
      // savings: "15 млн ₸",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
              Кейсы и Результаты
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Реальные истории успеха наших клиентов и подтверждённые
              бизнес-результаты от внедрения диагностики ГРВ.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mx-auto mb-6 w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Кейсы наших возможностей
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Мы сотрудничаем с компаниями из разных отраслей и подбираем
                решения, которые действительно работают. Наша команда
                готовит индивидуальные кейсы под задачи клиента,
                демонстрируя ROI и практические результаты.
              </p>
            </div>
          </div>

          {/* Preview Cases */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {futureCases.map((caseItem, index) => (
              <div key={index} className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-black hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {caseItem.industry}
                    </span>
                    <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      В разработке
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:scale-105 transition-transform duration-300">
                    {caseItem.challenge}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Решение:
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {caseItem.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Ожидаемые результаты:
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {caseItem.timeframe}
                    </div>
                  </div>
                </div>

                {/* Анимированная линия снизу */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why No Cases Yet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">
              Возможности индивидуального заказа
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Контент слева */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Инновация
                        </h4>
                        <p className="text-sm text-gray-600">
                          Наша методика интерпретации ГРВ-данных для
                          бизнес-задач является инновационной разработкой.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Качество данных
                        </h4>
                        <p className="text-sm text-gray-600">
                          Мы предоставляем полностью завершенные и
                          верифицированные кейсы с измеримыми результатами.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Конфиденциальность
                        </h4>
                        <p className="text-sm text-gray-600">
                          Все кейсы тщательно обезличены при сохранении ценности
                          для потенциальных клиентов.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Время для результатов
                        </h4>
                        <p className="text-sm text-gray-600">
                          Значимые изменения в командах требуют времени - мы
                          нацелены на долгосрочные эффекты.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <p className="text-black font-semibold mb-2">
                      Станьте одним из первых!
                    </p>
                    <p className="text-gray-700 text-sm">
                      Рассмотрите варианты индивидуального подхода и получите
                      дополнительные бонусы, а также возможность стать героем
                      наших будущих кейсов.
                    </p>
                  </div>
                </div>
              </div>

              {/* Анимация справа */}
              <div className="flex items-center justify-center">
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

      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Анимированная иллюстрация */}
            <div className="relative">
              <div className="w-full h-[400px] flex items-center justify-center">
                <div className="w-[600px] h-[600px] animate-spin" style={{ animationDuration: '10s' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    width="1024"
                    height="1024"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: 'translate3d(0px, 0px, 0px)'
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_3">
                        <rect width="1024" height="1024" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_3)">
                      <g transform="matrix(0.29506054520606995,-1.306321144104004,1.306321144104004,0.29506054520606995,606.83251953125,533.4199829101562)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(1.132347822189331,-0.7150692343711853,0.7150692343711853,1.132347822189331,563.9105224609375,594.2029418945312)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(1.306321144104004,0.29506054520606995,-0.29506054520606995,1.306321144104004,490.5800476074219,606.83251953125)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.7150692343711853,1.132347822189331,-1.132347822189331,0.7150692343711853,429.7970886230469,563.9105224609375)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(-0.29506054520606995,1.306321144104004,-1.306321144104004,-0.29506054520606995,417.16748046875,490.580078125)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(-1.132347822189331,0.7150692343711853,-0.7150692343711853,-1.132347822189331,460.0894775390625,429.797119140625)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(-1.306321144104004,-0.29506054520606995,0.29506054520606995,-1.306321144104004,533.419921875,417.1675109863281)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                      <g transform="matrix(-0.7150692343711853,-1.132347822189331,1.132347822189331,-0.7150692343711853,594.0852661132812,460.16375732421875)" opacity="0.5" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-150 C84.2699966430664,-150 150,-84.2699966430664 150,0 C150,84.2699966430664 84.2699966430664,150 0,150 C-84.2699966430664,150 -150,84.2699966430664 -150,0 C-150,-84.2699966430664 -84.2699966430664,-150 0,-150z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Контент */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Индивидуальный подход, реальные результаты
              </h2>

              <div className="space-y-6">
                {/* Пункт 1 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 text-black font-bold rounded-lg flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Инновация
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Методика интерпретации ГРВ-данных — наша оригинальная
                      разработка на основе 20-летнего опыта.
                    </p>
                  </div>
                </div>

                {/* Пункт 2 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 text-black font-bold rounded-lg flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Качество данных
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Все кейсы сопровождаются верифицированными результатами и
                      ключевыми метриками.
                    </p>
                  </div>
                </div>

                {/* Пункт 3 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 text-black font-bold rounded-lg flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Конфиденциальность
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Мы сохраняем анонимность кейсов, но демонстрируем ключевые
                      инсайты и результаты.
                    </p>
                  </div>
                </div>

                {/* Пункт 4 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 text-black font-bold rounded-lg flex items-center justify-center mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Фокус на ROI
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Мы нацелены на реальные изменения и ценим долгосрочные
                      эффекты, а не только быстрые результаты.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="mt-10 bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-black font-semibold text-lg mb-1">
                  Станьте частью будущих историй успеха
                </p>
                <p className="text-gray-600 text-sm">
                  Закажите индивидуальный кейс и получите приоритетный анализ от
                  нашей научной команды.
                </p>
              </div>
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

export default Cases;
