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
  HelpCircle,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Index = () => {
const data = [
  {
    name: "Для финансового сектора",
    subtopics: [
      {
        title: "Финансовые риски, ошибки и качество/целостность данных: ",
        description:
          "Склонность к неоправданному риску, недостаточная внимательность, педантичность или ответственность при работе с финансовыми операциями, документами, клиентскими счетами. Потенциал к совершению ошибок, которые могут привести к прямым убыткам банка или клиентов. Риски, связанные с обеспечением качества и целостности данных: небрежность или ошибки персонала при вводе, обработке, сверке и верификации клиентских или транзакционных данных, что может привести к неверной финансовой и регуляторной отчетности, принятию ошибочных управленческих решений и необходимости последующих финансовых корректировок.",
      },
      {
        title: "Комплаенс-риски, нарушения процедур и этические стандарты: ",
        description:
          "нормам и процедурам (внутренним и регуляторным). Склонность к их игнорированию или формальному подходу, что критично для соблюдения банковского законодательства, инструкций регулятора, стандартов KYC/AML. Риски несоответствия этическим стандартам и корпоративной культуре: несоответствие поведения сотрудников заявленным этическим принципам, ценностям и стандартам обслуживания банка, что может проявляться в мисселинге банковских продуктов, недобросовестном или предвзятом отношении к клиентам или коллегам, создании токсичной рабочей атмосферы и нанесении ущерба бренду работодателя и доверию клиентов. Если в [Ключевые Задачи/Проблемы Компании] указаны специфические регуляторные требования или комплаенс-задачи (например, ПОД/ФТ, GDPR, Базель III, защита прав потребителей фин.услуг), проводится анализ, как личностные особенности могут влиять на их соблюдение или нарушение.",
      },
      {
        title: "Риски внутреннего и внешнего мошенничества:",
        description:
          "Выявление личностных черт (например, низкая добросовестность, склонность к манипулированию, скрытность), мотивационных особенностей (например, острая фрустрированная потребность в деньгах, игровая зависимость) или поведенческих паттернов, которые могут указывать на потенциальную нечестность, корыстные мотивы, предрасположенность к сговору или уязвимость к внешнему давлению с целью совершения мошеннических действий. По возможности, дифференцируется потенциальная предрасположенность к различным типам недобросовестного поведения (например, импульсивное хищение ‘по возможности’ vs. сложно спланированные мошеннические схемы; индивидуальные действия vs. участие в сговоре).",
      },
      {
        title: "Стресс, выгорание и снижение работоспособности: ",
        description:
          "Уязвимость к высокому уровню хронического стресса, связанного с ответственностью, работой с крупными суммами, конфликтными или требовательными клиентами, монотонностью операций, давлением планов продаж, многозадачностью. Признаки эмоционального истощения, цинизма, снижения мотивации и профессионального выгорания.",
      },
      {
        title: "Качество обслуживания клиентов и репутационные риски: ",
        description:
          "Недостаток эмпатии, выдержки, коммуникативных навыков (вербальных и невербальных), конфликтность, неумение работать с возражениями или сложными клиентами, что может приводить к потере клиентов, жалобам и значительному ущербу для имиджа и репутации банка.",
      },
      {
        title: "Информационная безопасность и киберриски, связанные с персоналом: ",
        description: "Отношение к конфиденциальной банковской и клиентской информации, риск ее разглашения (умышленного или по неосторожности), нарушения правил работы с чувствительными данными и информационными системами. Особое внимание уделяем уязвимости персонала к методам социальной инженерии (например, фишинг, претекстинг), несоблюдению политик парольной защиты и использования корпоративных ресурсов, что может привести к несанкционированному доступу, утечкам данных, финансовым потерям и серьезному репутационному ущербу для банка.",
      },
      {
        title: "Риски, связанные с управлением изменениями и адаптивностью персонала: ",
        description: "Низкая готовность или способность сотрудников к освоению и эффективному использованию новых банковских технологий (FinTech, AI, новые CRM и банковские системы), программного обеспечения, цифровых продуктов или быстрой адаптации к часто изменяющимся регуляторным требованиям и внутренним процедурам. Сопротивление изменениям, ригидность мышления, влияющие на скорость внедрения инноваций, комплаенс и конкурентоспособность банка.",
      },
      {
        title: "Риск потери ключевых и узкоспециализированных талантов: ",
        description:
          "Выявление факторов, способствующих уходу высококвалифицированных и труднозаменимых специалистов (например, финансовых аналитиков, специалистов по управлению рисками, IT-специалистов по кибербезопасности, экспертов по комплаенсу, персональных менеджеров VIP-клиентов) из-за неудовлетворенности условиями труда, отсутствия карьерных или профессиональных перспектив, высокого уровня стресса, выгорания или неэффективного управления.",
      },
      {
        title: "Командные риски и неэффективное взаимодействие: ",
        description:
          "Трудности в коммуникации и взаимодействии внутри отделов (например, фронт- и бэк-офиса, отдел продаж и андеррайтинг) или с другими подразделениями, которые могут снижать общую эффективность, приводить к ошибкам и затягиванию процессов.",
      },
      {
        title: "Управленческие риски (для руководителей): ",
        description:
          "Неэффективный стиль управления, неспособность мотивировать и развивать команду, принимать взвешенные решения в условиях неопределенности или давления, неэффективное делегирование полномочий, трудности в разрешении конфликтов. А также риски, связанные с отсутствием или неэффективностью системы планирования преемственности: недостаточный внутренний кадровый резерв на ключевые руководящие позиции, ошибки в объективной оценке лидерского потенциала и готовности сотрудников к продвижению. Оцениваются также, как личностные особенности и опыт руководителя могут влиять на его способность (или неспособность) готовить себе замену и развивать кадровый резерв в своем подразделении, а также какие риски для банка возникают при отсутствии такой работы.",
      },
    ],
  },
  {
    name: "Для промышленного сектора",
    subtopics: [
      {
        title: "Безопасность труда и производственный травматизм: ",
        description:
          "Склонность к рискованному поведению, игнорирование или пренебрежение правилами техники безопасности и охраны труда, недостаточная концентрация внимания, медленная психомоторная реакция, высокая утомляемость, импульсивность, что может привести к авариям, инцидентам и травмам.",
      },
      {
        title: "Надежность эксплуатации оборудования и технологических процессов:",
        description: "Безответственное или небрежное отношение к оборудованию, ошибки при управлении сложными техническими системами или технологическими процессами, недостаточная техническая грамотность или низкая обучаемость новым технологиям.",
      },
      {
        title: "Стрессоустойчивость в опасных, экстремальных или монотонных условиях: ",
        description: "Реакция на нештатные ситуации, способность сохранять работоспособность и принимать адекватные решения при работе в условиях монотонии (операторы), высокого психоэмоционального напряжения (например, на удаленных объектах, в замкнутых пространствах, при работе с опасными веществами, в условиях шума, вибраций).",
      },
      {
        title: "Командное взаимодействие в бригадах, сменах, на производственных участках: ",
        description: "Конфликтность, неспособность к слаженной работе в команде, проблемы с коммуникацией и координацией, которые могут нарушить производственный процесс, снизить качество продукции или общую безопасность.",
      },
      {
        title: "Профессиональное выгорание, хроническая усталость и утомление: ",
        description: "Особенно при сменном графике работы, тяжелых физических или высоких психоэмоциональных нагрузках, работе в неблагоприятных климатических условиях.",
      },
      {
        title: "Экологические риски: ",
        description:
          "Халатное отношение к экологическим нормам и требованиям, которое может привести к загрязнению окружающей среды и штрафным санкциям.",
      },
      {
        title: "Злоупотребление психоактивными веществами (алкоголь, наркотики): ",
        description: "Как критический фактор повышенного риска для безопасности, работоспособности и надежности персонала. Оцениваем косвенные признаки, если прямых данных нет.",
      },
      {
        title: "Управленческие риски (для руководителей на производстве): ",
        description:
          "Неэффективный стиль управления сменой/участком, неспособность обеспечить дисциплину и соблюдение норм безопасности, низкий авторитет, неэффективное планирование и распределение ресурсов.",
      },
    ],
  },
  {
    name: "Для сектора ритейла",
    subtopics: [
      {
        title: "Качество обслуживания клиентов и клиентоориентированность: ",
        description:
          "Низкий уровень эмпатии, нетерпеливость, грубость, безразличие к потребностям клиента, неумение активно слушать и выявлять потребности, неспособность эффективно работать с возражениями или жалобами, что ведет к потере клиентов, снижению лояльности и негативным отзывам.",
      },
      {
        title: "Стрессоустойчивость и эмоциональная регуляция: ",
        description:
          "Уязвимость к стрессу при работе с большим потоком покупателей, в пиковые часы, при общении с «трудными», конфликтными или агрессивными клиентами. Риск эмоционального выгорания из-за интенсивного общения, давления планов продаж, рутинной работы. Влияние особенностей физической рабочей среды (шум, освещение, эргономика рабочего места, интенсивность потока в узких пространствах) на утомляемость и стресс.",
      },
      {
        title: "Эффективность продаж и ориентация на результат (для продавцов-консультантов, кассиров с функцией допродаж):",
        description: "Низкая мотивация к активным продажам, отсутствие или слабые навыки продаж (установление контакта, выявление потребностей, презентация товара, работа с возражениями, завершение сделки). Недостаточная способность или мотивация к глубокому и постоянному изучению товарного ассортимента, его характеристик и преимуществ, что ведет к неквалифицированным консультациям. Слабо развитые навыки или отсутствие инициативы в предложении сопутствующих товаров/услуг (upselling/cross-selling). Боязнь отказа, недостаточная нацеленность на выполнение плановых показателей.",
      },
      {
        title: "Честность, лояльность и риски потерь (внутренние и внешние): ",
        description: "Склонность к нечестному поведению, присвоению товаров или денежных средств, махинациям с кассой, скидками, программами лояльности. Низкая лояльность к компании, способствующая таким действиям. Реакция и поведение персонала при столкновении с попытками краж со стороны покупателей (шоплифтинг), необходимость соблюдения процедур безопасности.",
      },
      {
        title: "Командная работа и атмосфера в коллективе (в магазине, отделе): ",
        description: "Конфликтность, нежелание помогать коллегам, создание негативной атмосферы, что влияет на общую производительность магазина и качество обслуживания. Проблемы взаимодействия между разными сменами или отделами.",
      },
      {
        title: "Текучесть персонала (особенно линейного): ",
        description:
          "Личностные факторы, способствующие быстрому уходу с работы: низкая адаптивность к условиям труда (график, интенсивность), неготовность к рутинным операциям, высокая конфликтность, низкая стрессоустойчивость, несовпадение ожиданий и реальности. Негативное влияние графика работы (сменность, работа в выходные/праздники, плавающие выходные) на личную жизнь и общее психоэмоциональное состояние.",
      },
      {
        title: "Исполнительность и ответственность: ",
        description:
          "Недобросовестное выполнение своих обязанностей (например, по выкладке товара согласно планограммам, поддержанию порядка и чистоты в торговом зале, соблюдению кассовой дисциплины, выполнению стандартов компании).",
      },
      {
        title: "Адаптивность и обучаемость: ",
        description:
          "Трудности с освоением нового ассортимента, частых акций и промо-мероприятий, изменений в процедурах работы, новых технологий (например, кассовых систем, программ лояльности, мобильных приложений для персонала).",
      },
      {
        title: "Специфические риски и требования при работе в омниканальной среде или сегменте e-commerce (если применимо): ",
        description: "Способность эффективно переключаться между задачами (например, обслуживание офлайн-клиентов и одновременная обработка онлайн-заказов или запросов из чатов), развитые навыки цифровой письменной коммуникации, стресс от управления онлайн-репутацией, публичными отзывами и необходимостью быстрой реакции на них.",
      },
      {
        title: "Управленческие риски (для администраторов, директоров магазинов, региональных менеджеров): ",
        description: "Неумение эффективно мотивировать, обучать и развивать торговый персонал, ставить четкие задачи и контролировать их исполнение, разрешать конфликты в команде, анализировать ключевые показатели эффективности (KPI) магазина и принимать на их основе оперативные решения, обеспечивать выполнение стандартов компании и плановых показателей.",
      },
    ],
  },
  {
    name: "Для транспортного сектора",
    subtopics: [
      {
        title: "Безопасность движения/полетов/перевозок: ",
        description:
          "Склонность к нарушениям правил дорожного движения (ПДД), правил эксплуатации транспортных средств (ТС), инструкций по безопасности полетов или перевозок. Рискованный стиль управления ТС, недостаточная или флуктуирующая концентрация внимания, высокая отвлекаемость, замедленная психомоторная реакция, проблемы со здоровьем (особенно зрение, слух, сердечно-сосудистая система, реакция на медикаменты), влияющие на работоспособность и безопасность.",
      },
      {
        title: "Реакция на нештатные, аварийные и экстремальные ситуации: ",
        description:
          "Способность сохранять самообладание, принимать быстрые, точные и адекватные решения в условиях дефицита времени, внезапного отказа техники, сложных метеорологических условий, террористической угрозы, агрессивного поведения пассажиров или иной опасности. Оценка склонности к панике, ступору или неадекватным действиям.",
      },
      {
        title: "Стрессоустойчивость и психоэмоциональная стабильность: ",
        description:
          "Уровень переносимости стресса, связанного с высокой ответственностью за жизнь и здоровье людей, сохранность ценных или опасных грузов. Влияние работы в условиях ненормированного графика, длительных рейсов, смены часовых поясов, монотонии, вибрации, шума. Психологическое давление со стороны диспетчерских служб, руководства, контролирующих органов, клиентов.",
      },
      {
        title: "Управление усталостью (Fatigue Risk Management): ",
        description:
          "Недостаточное осознание сотрудником индивидуальных признаков накапливающейся усталости (острой и хронической), неэффективные или отсутствующие стратегии восстановления между сменами/рейсами, влияние хронического недосыпа на когнитивные функции (внимание, память, принятие решений), особенно в условиях ненормированного графика или ночных смен. Недооценка влияния усталости на безопасность.",
      },
      {
        title: "Специфика когнитивных нагрузок роли: ",
        description:
          "Риск снижения бдительности (гиповигильность) и ошибок при выполнении монотонных задач (например, длительное управление ТС по однообразной местности) ИЛИ риски когнитивной перегрузки, ошибок обработки информации и принятия решений при работе с большим объемом быстро меняющихся данных или множеством одновременных задач (например, авиадиспетчеры, сложные логистические координаторы).",
      },
      {
        title: "Взаимодействие «Человек-Система/Технология»: ",
        description:
          "Трудности в освоении или эффективном использовании сложных бортовых систем управления, навигационного оборудования, диспетчерских пультов и другого высокотехнологичного оборудования. Потенциал для ошибок, вызванных сложностью интерфейса, недостаточной эргономикой, «эффектом самоуспокоенности» при работе с автоматизированными системами или недостаточной подготовкой/тренировкой.",
      },
      {
        title: "Коммуникативные навыки: ",
        description:
          "o	Для операторского состава (пилоты, машинисты, водители, диспетчеры): Четкость, лаконичность и точность передачи/приема служебной информации, особенно в условиях помех или стресса; умение работать в системе «человек-человек» и «человек-машина»./no	Для персонала, работающего с пассажирами/клиентами (бортпроводники, кассиры, сотрудники сервисных служб): Конфликтность, неумение работать с претензиями и жалобами, низкая клиентоориентированность, эмоциональная устойчивость при общении с «трудными» клиентами.",
      },
      {
        title: "Надежность, ответственность и дисциплинированность: ",
        description:
          "Склонность к халатности, неисполнительности, нарушениям режима труда и отдыха (РТО), неполному или некачественному выполнению технических регламентов и ремонтных работ (для технического персонала), что может привести к критической усталости, снижению внимания, ошибкам или отказам техники.",
      },
      {
        title: "Взаимодействие в экипаже/команде/смене (для пилотов, машинистов, судовых экипажей, диспетчерских смен, ремонтных бригад и т.д.):",
        description: "Проблемы межличностной совместимости, коммуникации, координации совместных действий, лидерства и подчинения внутри экипажа/команды, которые могут напрямую повлиять на безопасность и эффективность выполнения профессиональных задач.",
      },
      {
        title: "Риск злоупотребления психоактивными веществами (алкоголь, наркотики, сильнодействующие или запрещенные медпрепараты): ",
        description: "Как критический фактор риска для безопасности на транспорте. Оцениваем косвенные признаки и необходимость строгого предрейсового/предсменного контроля и регулярных проверок.",
      },
      {
        title: "Уязвимость к внешнему деструктивному влиянию: ",
        description:
          "Риск вовлечения персонала в противоправную деятельность (например, контрабанда, пособничество криминальным структурам, передача несанкционированных грузов) из-за личностных особенностей (например, низкая моральная устойчивость, внушаемость, финансовые проблемы, зависимости) или недостаточного контроля и профилактики со стороны компании.",
      },
      {
        title: "Профессиональная деформация: ",
        description:
          "Риск развития цинизма, эмоциональной черствости, снижения бдительности, излишней самоуверенности или, наоборот, повышенной тревожности с увеличением стажа работы.",
      },
      {
        title: "Управленческие риски (для руководителей транспортных подразделений, начальников колонн, старших диспетчеров, капитанов, руководителей технических служб): ",
        description: "Неэффективное планирование перевозок или работ по ТО, неумение управлять командой операторов или технических специалистов, недостаточное внимание к вопросам безопасности, психофизиологическому состоянию подчиненных и соблюдению ими РТО и технических регламентов.",
      },
    ],
  },
];

  const [activeCategory, setActiveCategory] = useState(data[0]);
  const [activeSubtopicIndex, setActiveSubtopicIndex] = useState(0);
  const [visibleDescriptions, setVisibleDescriptions] = useState(
    data[0].subtopics.map((_, i) => i === 0)
  );

  useEffect(() => {
    setActiveSubtopicIndex(0);
    setVisibleDescriptions(
      data
        .find((cat) => cat.name === activeCategory.name)
        .subtopics.map((_, i) => i === 0)
    );
  }, [activeCategory]);

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
    setActiveSubtopicIndex(index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-white text-center">
  <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
    <p className="text-xs sm:text-sm uppercase text-gray-500 tracking-widest font-medium">
    НАУКА ДЛЯ БЕЗОПАСНОСТИ БИЗНЕСА    </p>

    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black leading-tight uppercase">
      Человеческий Фактор —
      <span className="block mt-2">
        под Вашим Контролем
      </span>
    </h1>

    {/* <p className="text-xs sm:text-sm uppercase text-gray-500 tracking-widest font-medium">
      НАУКА ДЛЯ БЕЗОПАСНОСТИ БИЗНЕСА
    </p> */}
    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Перестаньте терять деньги на ошибках найма, выгорании и скрытых
            рисках. Внедрите систему объективной психодиагностики и принимайте
            кадровые решения, основанные на реальных данных, а не на догадках.
          </p>
    <div className="pt-6 sm:pt-8 flex justify-center">
      <Link to="/express-audit">
        <button className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white bg-black border border-black hover:bg-white hover:text-black transition-all duration-300 rounded-full">
          Пройти бесплатный Экспресс-Аудит Рисков
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </button>
      </Link>
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
              Данные, подтвержденные научными исследованиями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <UserX className="w-10 h-10 text-white" />,
                stat: ">75%",
                desc: "провалов при найме вызваны несоответствием личности к должности",
              },
              {
                icon: <AlertTriangle className="w-10 h-10 text-white" />,
                stat: "до 40%",
                desc: "текучести вызвано стрессом и выгоранием, которое не видно в тестах",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-white" />,
                stat: "x2",
                desc: "годовых оклада — минимальная цена замены неэффективного управленца",
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


 {/* Риски по типу деятельности */}


      <section className="py-16 sm:py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-12 text-center leading-snug">
      Потенциальные проблемы и риски, которые мы выявляем
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Категории */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar md:sticky md:top-24 h-fit">
    {data.map((category) => (
      <div
        key={category.name}
        onClick={() => setActiveCategory(category)}
        className={`flex items-center space-x-3 min-w-[200px] sm:min-w-[240px] md:min-w-0 md:w-full p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
          ${activeCategory.name === category.name
            ? "bg-black text-white border-black"
            : "bg-white text-gray-800 border-gray-200 hover:border-black hover:shadow-md"
          }`}
      >
        <LayoutGrid
          size={20}
          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="font-semibold text-sm sm:text-base leading-snug break-words overflow-hidden text-ellipsis">
          {category.name}
        </span>
      </div>
    ))}
  </div>



      {/* Подтемы */}
      <div className="md:col-span-2 space-y-4">
        {activeCategory.subtopics.map((sub, index) => (
          <div key={sub.title}>
            <button
              onClick={() => toggleDescription(index)}
              className="group flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-white rounded-lg border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <HelpCircle
                  className="text-gray-600 group-hover:text-black transition-all duration-300"
                  size={20}
                />
                <span className="text-sm sm:text-base font-medium group-hover:text-black transition-colors duration-300">
                  {sub.title}
                </span>
              </div>
              <ChevronDown
                className={`text-gray-400 group-hover:text-black transition-all duration-300 ${visibleDescriptions[index] ? "rotate-180" : ""}`}
                size={20}
              />
            </button>

            <AnimatePresence>
              {visibleDescriptions[index] && (
                <motion.div
                  key={sub.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg text-gray-800"
                >
                  <p className="leading-relaxed text-sm sm:text-base">
                    {sub.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
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
                <ul className="text-sm text-white space-y-3 text-left">
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
                <li className="flex items-start opacity-80 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  Психологическая коррекция
                </li>
              </ul>
            </div>
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
                  <strong className="text-black font-semibold"> объективные психофизиологические реакции </strong>
                   с помощью технологии ГРВ-биоэлектрографии.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Наш уникальный подход к анализу этих данных позволяет с точностью от 85% увидеть то, что скрыто.
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
                description: "Специалист анализирует психофизиологические параметры и строит профиль"
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
