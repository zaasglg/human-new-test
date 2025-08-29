import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedList } from "@/components/AnimatedList";
import {
  ArrowRight,
  AlertTriangle,
  UserX,
  DollarSign,
  Pencil,
  Lightbulb,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className=" flex flex-col items-center justify-center px-8 py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-sm uppercase text-gray-500 tracking-widest font-medium">
            PSYCHOLOGICAL PROFILE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight uppercase">
            Человеческий Фактор —
            <span className="block mt-2">
              под Вашим Контролем
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Перестаньте терять деньги на ошибках найма, выгорании и скрытых
            рисках. Внедрите систему объективной психодиагностики и принимайте
            кадровые решения, основанные на реальных данных, а не на догадках.
          </p>

          <div className="pt-8">
            <Link to="/express-audit">
              <button className="px-8 py-4 text-lg font-medium text-white bg-black border border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full">
                Пройти бесплатный Экспресс-Аудит Рисков
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Скрытые риски вашей организации
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Проблемы, которые остаются незамеченными до критического момента
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Карточка 1 */}
            <div className="group bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                <Pencil className="text-white w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                То, что скрыто
              </h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                Сократите потери из-за ошибок найма и выгорания
              </p>
              <ul className="text-sm text-gray-700 space-y-3 text-left">
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Неудачный найм — следствие несоответствия личности к должности
                </li>
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Традиционные собеседования субъективны
                </li>
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Скрытые личностные конфликты
                </li>
              </ul>
            </div>

            {/* Карточка 2 — акцентная */}
            <div className="group bg-black rounded-lg p-8 text-center border border-black hover:shadow-2xl hover:-translate-y-3 hover:scale-110 transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-gray-100 transition-all duration-500">
                  <MonitorSmartphone className="text-black w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  То, что влияет
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  Внедрите систему объективной психодиагностики
                </p>
                <ul className="text-sm text-gray-300 space-y-3 text-left">
                  <li className="flex items-start opacity-80 group-hover:opacity-100 group-hover:text-gray-200 transition-all duration-300 delay-100">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    Выявление стрессовых факторов
                  </li>
                  <li className="flex items-start opacity-80 group-hover:opacity-100 group-hover:text-gray-200 transition-all duration-300 delay-200">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    Анализ выгорания сотрудников
                  </li>
                  <li className="flex items-start opacity-80 group-hover:opacity-100 group-hover:text-gray-200 transition-all duration-300 delay-300">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    Оценка командной согласованности
                  </li>
                </ul>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="group bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="text-white w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                То, что можно изменить
              </h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                Принимайте кадровые решения, основанные на реальных данных
              </p>
              <ul className="text-sm text-gray-700 space-y-3 text-left">
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Объективная оценка рисков
                </li>
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Повышение продуктивности команды
                </li>
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Индивидуальные рекомендации
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Факты, которые нельзя игнорировать
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Данные, подтвержденные исследованиями в HR и нейрофизиологии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <UserX className="w-10 h-10 text-white" />,
                stat: ">70%",
                desc: "провалов при найме вызваны несоответствием личности и должности",
              },
              {
                icon: <AlertTriangle className="w-10 h-10 text-white" />,
                stat: "до 40%",
                desc: "текучести вызвано стрессом и выгоранием, которое не видно в тестах",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-white" />,
                stat: "x2",
                desc: "годовых оклада — цена замены неэффективного управленца",
              },
            ].map(({ icon, stat, desc }, i) => (
              <div
                key={i}
                className="group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-black hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
              >
                <div className="w-20 h-20 bg-black rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {icon}
                </div>
                <AnimatedCounter
                  value={stat}
                  className="text-6xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-700 leading-relaxed group-hover:text-black transition-colors duration-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Левая часть — контент */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Объективность. Научность.
                <span className="block mt-2">Практическая польза.</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Мы не просим ваших сотрудников рассказывать о себе. Мы измеряем их
                  <strong className="text-black font-semibold"> объективные психофизиологические реакции</strong>
                  с помощью технологии ГРВ-биоэлектрографии.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Наш уникальный подход к анализу этих данных позволяет с точностью от 85% увидеть то, что скрыто:
                </p>
              </div>

              <Link to="/about">
                <button className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-black border border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full mt-10">
                  Узнать больше о методе
                  <ArrowRight className="ml-3 w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Правая часть — анимированный список */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6 text-center">
                Что мы анализируем
              </h3>
              <AnimatedList
                items={[
                  "Истинный потенциал сотрудника",
                  "Реальный уровень стресса",
                  "Скрытые риски и зоны роста",
                  "Психоэмоциональное состояние",
                  "Совместимость с командой",
                  "Готовность к изменениям",
                  "Лидерские качества",
                  "Устойчивость к выгоранию"
                ]}
                className="min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              От диагностики к результату
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой процесс получения объективной оценки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Диагностика",
                subtitle: "5 минут",
                description: "Быстрое и неинвазивное сканирование с помощью нашей технологии"
              },
              {
                step: "02",
                title: "Обработка данных",
                subtitle: "Анализ",
                description: "Система анализирует психофизиологические параметры и строит профиль"
              },
              {
                step: "03",
                title: "Психологический портрет",
                subtitle: "Результат",
                description: "Вы получаете детализированный психологический портрет с рекомендациями"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-black hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer"
              >
                {/* Большой номер шага */}
                <div className="text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-bold text-black mb-2 group-hover:scale-105 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Подзаголовок */}
                <p className="text-sm font-medium text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {item.subtitle}
                </p>

                {/* Описание */}
                <p className="text-gray-600 leading-relaxed group-hover:text-black transition-colors duration-300">
                  {item.description}
                </p>

                {/* Анимированная линия внизу */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Решения на основе фактов
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Узнайте, какие риски скрыты в ваших сотрудниках. Пройдите наш
              <strong className="text-black font-semibold"> бесплатный и конфиденциальный Экспресс-Аудит</strong>
              — это займет всего <strong className="text-black">2 минуты</strong>.
            </p>

            {/* Преимущества */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                "Конфиденциально",
                "Без регистрации",
                "Займет 2 минуты"
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center gap-2 bg-white rounded-lg p-4 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  <span className="text-gray-600 group-hover:text-black font-medium transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/express-audit">
              <button className="inline-flex items-center px-12 py-5 text-xl font-semibold text-white bg-black border border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full mt-10">
                Пройти Экспресс-Аудит Рисков
                <ArrowRight className="ml-3 w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
