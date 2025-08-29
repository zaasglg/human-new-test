
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center neural-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Управляйте{' '}
                <span className="gradient-text">человеческим фактором</span>{' '}
                проактивно
              </h1>
              <p className="text-xl text-neural-600 leading-relaxed">
                Инновационная технология ГРВ-диагностики для выявления скрытых рисков 
                в командах и повышения эффективности бизнеса на основе научного анализа 
                психофизиологического состояния сотрудников.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                <Shield className="w-8 h-8 text-tech-600" />
                <div>
                  <div className="font-semibold text-neural-800">Снижение рисков</div>
                  <div className="text-sm text-neural-600">до 70%</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                <TrendingUp className="w-8 h-8 text-tech-600" />
                <div>
                  <div className="font-semibold text-neural-800">Рост эффективности</div>
                  <div className="text-sm text-neural-600">до 45%</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                <Users className="w-8 h-8 text-tech-600" />
                <div>
                  <div className="font-semibold text-neural-800">Вовлеченность</div>
                  <div className="text-sm text-neural-600">+60%</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-tech hover:shadow-lg transition-all duration-300 text-lg px-8 py-4"
                onClick={() => document.getElementById('express-audit')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить бесплатный аудит
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-tech-600 text-tech-600 hover:bg-tech-50 text-lg px-8 py-4"
                onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать о методе
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neural-800 mb-2">
                    Экспресс-Аудит Рисков
                  </h3>
                  <p className="text-neural-600">
                    Получите персонализированный анализ за 15 минут
                  </p>
                </div>
                
                {/* Mock audit interface */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-tech-50 rounded-lg">
                    <span className="text-neural-700">Стрессоустойчивость команды</span>
                    <div className="w-16 h-2 bg-neural-200 rounded-full">
                      <div className="w-10 h-2 bg-tech-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-tech-50 rounded-lg">
                    <span className="text-neural-700">Риск выгорания</span>
                    <div className="w-16 h-2 bg-neural-200 rounded-full">
                      <div className="w-6 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-tech-50 rounded-lg">
                    <span className="text-neural-700">Командная совместимость</span>
                    <div className="w-16 h-2 bg-neural-200 rounded-full">
                      <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-tech hover:shadow-lg transition-all duration-300"
                  onClick={() => document.getElementById('express-audit')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Начать анализ бесплатно
                </Button>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-tech-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-neural-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
