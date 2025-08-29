
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Star,
  ArrowRight,
  Heart,
  Compass
} from 'lucide-react';

const ServicesSection = () => {
  const businessPackages = [
    {
      name: "Базовый",
      price: "от 150 000 ₽",
      description: "Для малых команд до 20 человек",
      features: [
        "ГРВ-диагностика всей команды",
        "Базовый анализ рисков",
        "Отчет с рекомендациями",
        "1 консультация с экспертом",
        "Поддержка 30 дней"
      ],
      popular: false
    },
    {
      name: "Стандарт",
      price: "от 350 000 ₽",
      description: "Для средних компаний до 100 человек",
      features: [
        "Комплексная ГРВ-диагностика",
        "Углубленный анализ команд",
        "Индивидуальные профили",
        "План развития команды",
        "3 консультации с экспертом",
        "Повторное тестирование через 3 месяца",
        "Поддержка 90 дней"
      ],
      popular: true
    },
    {
      name: "Стратегический",
      price: "от 750 000 ₽",
      description: "Для крупных организаций 100+ человек",
      features: [
        "Полная ГРВ-экосистема",
        "Многоуровневый анализ",
        "Прогнозирование рисков",
        "Система мониторинга",
        "Безлимитные консультации",
        "Ежемесячные отчеты",
        "Интеграция с HR-системами",
        "Поддержка 12 месяцев"
      ],
      popular: false
    }
  ];

  const futureServices = [
    {
      icon: Compass,
      title: "Профориентация",
      description: "Научно обоснованный выбор карьерного пути на основе биоэнергетического профиля",
      status: "Скоро"
    },
    {
      icon: Heart,
      title: "Совместимость пар",
      description: "Анализ психофизиологической совместимости для создания гармоничных отношений",
      status: "В разработке"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neural-800 mb-6">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-xl text-neural-600">
            Выберите оптимальный пакет для анализа человеческого фактора в вашей организации
          </p>
        </div>

        {/* Business Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Building2 className="w-6 h-6 text-tech-600 mr-3" />
            <h3 className="text-2xl font-bold text-neural-800">Для бизнеса</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessPackages.map((pkg, index) => (
              <Card key={index} className={`relative tech-card ${pkg.popular ? 'ring-2 ring-tech-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-tech text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-neural-800 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-neural-600">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-tech-600 flex-shrink-0" />
                        <span className="text-neural-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-gradient-tech hover:shadow-lg' 
                        : 'variant-outline border-tech-600 text-tech-600 hover:bg-tech-50'
                    }`}
                    onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Выбрать пакет
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Services */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Users className="w-6 h-6 text-tech-600 mr-3" />
            <h3 className="text-2xl font-bold text-neural-800">Для частных лиц</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {futureServices.map((service, index) => (
              <Card key={index} className="tech-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-neural rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CardTitle className="text-xl text-neural-800">
                      {service.title}
                    </CardTitle>
                    <Badge variant="secondary">{service.status}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-neural-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-neural-300 text-neural-600 hover:bg-neural-50"
                    disabled
                  >
                    Уведомить о запуске
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
