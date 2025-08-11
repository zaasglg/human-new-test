
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Clock,
  ArrowRight,
  FileText,
  Construction
} from 'lucide-react';

const CasesSection = () => {
  // Заглушки для будущих кейсов
  const comingSoonCases = [
    {
      industry: "IT-компания",
      teamSize: "150+ сотрудников",
      challenge: "Высокая текучка и выгорание разработчиков",
      result: "Снижение текучки на 65% за 6 месяцев"
    },
    {
      industry: "Производство",
      teamSize: "300+ сотрудников", 
      challenge: "Частые конфликты и низкая продуктивность",
      result: "Рост эффективности на 40%, снижение конфликтов на 70%"
    },
    {
      industry: "Финансы",
      teamSize: "80+ сотрудников",
      challenge: "Стресс и ошибки в критических процессах", 
      result: "Сокращение ошибок на 55%, рост удовлетворенности работой"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-white to-neural-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neural-800 mb-6">
            Успешные <span className="gradient-text">кейсы</span>
          </h2>
          <p className="text-xl text-neural-600">
            Реальные результаты внедрения ГРВ-технологий в различных отраслях
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mb-12">
          <Card className="tech-card max-w-2xl mx-auto border-tech-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center">
                  <Construction className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neural-800 mb-4">
                Раздел находится в разработке
              </h3>
              <p className="text-neural-600 mb-6">
                Мы готовим детальные кейсы с измеримыми результатами внедрения 
                наших решений. Скоро здесь появятся обезличенные истории успеха 
                с конкретными цифрами ROI.
              </p>
              <Button 
                className="bg-gradient-tech hover:shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('express-audit')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Стать первым кейсом
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preview Cases */}
        <div className="space-y-8">
          <div className="text-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Предварительные результаты
            </Badge>
            <h3 className="text-2xl font-semibold text-neural-800 mt-4 mb-8">
              Что ожидать от наших решений
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {comingSoonCases.map((caseItem, index) => (
              <Card key={index} className="tech-card opacity-75 hover:opacity-100 transition-opacity duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {caseItem.industry}
                    </Badge>
                    <div className="flex items-center text-xs text-neural-500">
                      <Users className="w-3 h-3 mr-1" />
                      {caseItem.teamSize}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-neural-800">
                    Кейс #{index + 1}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-neural-800 mb-2">Вызов:</h5>
                    <p className="text-sm text-neural-600">{caseItem.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-neural-800 mb-2">Результат:</h5>
                    <p className="text-sm text-tech-700 font-medium">{caseItem.result}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-neural-200">
                    <div className="flex items-center text-xs text-neural-500">
                      <Clock className="w-3 h-3 mr-1" />
                      6-12 месяцев
                    </div>
                    <div className="flex items-center text-xs text-neural-500">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      ROI 300%+
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="tech-card max-w-3xl mx-auto bg-gradient-to-r from-tech-50 to-neural-50">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-tech-600" />
              </div>
              <h3 className="text-xl font-semibold text-neural-800 mb-4">
                Хотите стать частью истории успеха?
              </h3>
              <p className="text-neural-600 mb-6 max-w-2xl mx-auto">
                Станьте одним из первых, кто внедрит инновационную ГРВ-технологию 
                в своей компании. Получите особые условия и персональное сопровождение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-tech hover:shadow-lg transition-all duration-300"
                  onClick={() => document.getElementById('express-audit')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Начать с экспресс-аудита
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-tech-600 text-tech-600 hover:bg-tech-50"
                  onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обсудить условия
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
