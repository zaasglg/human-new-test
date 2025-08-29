
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Microscope, 
  Brain, 
  Activity, 
  Target, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const MethodSection = () => {
  const features = [
    {
      icon: Microscope,
      title: "Научная основа",
      description: "Метод базируется на исследованиях биоэлектрографии и квантовой физики, признанных мировым научным сообществом."
    },
    {
      icon: Brain,
      title: "Психофизиологический анализ",
      description: "Анализируем энергетические характеристики человека, отражающие его психоэмоциональное состояние."
    },
    {
      icon: Activity,
      title: "Реальные данные",
      description: "Объективные измерения без субъективных оценок. Технология исключает человеческий фактор в диагностике."
    },
    {
      icon: Target,
      title: "Прогнозирование",
      description: "Выявляем потенциальные риски и точки роста до их проявления в рабочих процессах."
    }
  ];

  const benefits = [
    "Снижение текучести кадров на 40-60%",
    "Повышение продуктивности команд до 45%",
    "Раннее выявление профессионального выгорания",
    "Оптимизация командного взаимодействия",
    "Научно обоснованные рекомендации",
    "Количественная оценка человеческого фактора"
  ];

  return (
    <section id="method" className="py-20 bg-gradient-to-b from-white to-neural-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neural-800 mb-6">
            Технология <span className="gradient-text">ГРВ-диагностики</span>
          </h2>
          <p className="text-xl text-neural-600 leading-relaxed">
            Революционный подход к анализу человеческого фактора, основанный на измерении 
            биоэлектрических характеристик и их интерпретации с помощью искусственного интеллекта.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="tech-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-neural-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neural-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neural-800 mb-6">
                Доказанные результаты
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-tech-600 flex-shrink-0" />
                    <span className="text-neural-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-tech hover:shadow-lg transition-all duration-300"
              onClick={() => document.getElementById('express-audit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Протестировать на своей команде
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Column - Process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neural-800 mb-6">
              Как это работает
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Биометрическое сканирование",
                  description: "Сотрудники проходят быструю и безболезненную ГРВ-диагностику"
                },
                {
                  step: "02", 
                  title: "ИИ-анализ данных",
                  description: "Наша система анализирует полученные биоэлектрические параметры"
                },
                {
                  step: "03",
                  title: "Персонализированный отчет",
                  description: "Получаете детальный анализ с конкретными рекомендациями"
                },
                {
                  step: "04",
                  title: "Мониторинг изменений",
                  description: "Отслеживаете динамику и эффективность принятых мер"
                }
              ].map((item, index) => (
                <div key={index} className="flex space-x-4 p-6 bg-white rounded-lg border border-neural-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neural-800 mb-2">{item.title}</h4>
                    <p className="text-neural-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
