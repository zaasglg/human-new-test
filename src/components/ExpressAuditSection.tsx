import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Clock,
  Users,
  FileText,
  Gift,
  ArrowRight,
  CheckCircle2,
  Mail,
  Building2,
  User,
  Phone,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExpressAuditSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description:
          "В течение 15 минут на вашу почту придет ссылка для прохождения экспресс-аудита.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", company: "", email: "", phone: "" });
    }, 1500);
  };

  const steps = [
    {
      icon: User,
      title: "Регистрация",
      description: "Заполните простую форму за 30 секунд",
    },
    {
      icon: Users,
      title: "Опрос команды",
      description: "Отправьте ссылку 1-3 сотрудникам",
    },
    {
      icon: BarChart3,
      title: "ИИ-анализ",
      description: "Система автоматически обработает данные",
    },
    {
      icon: FileText,
      title: "Получение отчета",
      description: "PDF-отчет придет на вашу почту",
    },
  ];

  const benefits = [
    "Выявление скрытых рисков в команде",
    "Оценка уровня стресса и выгорания",
    "Анализ командной совместимости",
    "Рекомендации по оптимизации",
    "Прогнозирование проблемных зон",
  ];

  return (
    <section
      id="express-audit"
      className="py-20 bg-gradient-to-b from-tech-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-gradient-tech text-white px-4 py-2 text-lg">
              <Gift className="w-5 h-5 mr-2" />
              Бесплатно
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neural-800 mb-6">
            <span className="gradient-text">Экспресс-Аудит</span> рисков
            человеческого фактора
          </h2>
          <p className="text-xl text-neural-600 leading-relaxed">
            Получите персонализированный анализ потенциальных проблем в вашей
            команде за 15 минут. Абсолютно бесплатно и без обязательств.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            {/* Process Steps */}
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-neural-800">
                  <Clock className="w-6 h-6 text-tech-600 mr-3" />
                  Как это работает
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neural-800 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-neural-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-neural-800">
                  <BarChart3 className="w-6 h-6 text-tech-600 mr-3" />
                  Что вы получите
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-tech-600 flex-shrink-0" />
                      <span className="text-neural-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust indicators */}
            <div className="bg-tech-50 rounded-lg p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-tech-600">15 мин</div>
                  <div className="text-sm text-neural-600">время анализа</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tech-600">100%</div>
                  <div className="text-sm text-neural-600">бесплатно</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tech-600">0</div>
                  <div className="text-sm text-neural-600">обязательств</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="sticky top-24">
            <Card className="tech-card border-tech-200 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-neural-800 mb-2">
                  Начать экспресс-аудит
                </CardTitle>
                <p className="text-neural-600">
                  Заполните форму и получите ссылку для прохождения аудита
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-neural-700">
                        Ваше имя *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Абылай Хаб"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-neural-700">
                        Компания *
                      </Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="ООО Инновации"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-neural-700">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="ivan@company.ru"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-neural-700">
                        Телефон
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-tech hover:shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Отправка..."
                    ) : (
                      <>
                        Получить экспресс-аудит
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-neural-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressAuditSection;
