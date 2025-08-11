import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в течение 24 часов.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@humanfactor-insights.ru",
      description: "Ответим в течение 2 часов",
    },
    {
      icon: Phone,
      title: "Телефон",
      details: "+7 (495) 123-45-67",
      description: "Пн-Пт с 9:00 до 18:00",
    },
    {
      icon: MapPin,
      title: "Офис",
      details: "Москва, ул. Инновационная, 15",
      description: "Встречи по предварительной записи",
    },
    {
      icon: Clock,
      title: "Время работы",
      details: "Пн-Пт: 9:00 - 18:00",
      description: "Сб-Вс: по договоренности",
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-neural-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neural-800 mb-6">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-xl text-neural-600">
            Готовы обсудить внедрение технологии ГРВ-диагностики в вашей
            компании? Оставьте заявку или свяжитесь удобным способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-neural-800">
                  <MessageSquare className="w-6 h-6 text-tech-600 mr-3" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neural-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-neural-700 font-medium">
                        {info.details}
                      </p>
                      <p className="text-sm text-neural-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="tech-card bg-gradient-to-br from-tech-50 to-neural-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-neural-800 mb-3">
                  Быстрая консультация
                </h4>
                <p className="text-neural-600 mb-4 text-sm">
                  Нужна экспертная оценка? Закажите бесплатную 15-минутную
                  консультацию по внедрению ГРВ-технологий в вашей компании.
                </p>
                <Button
                  size="sm"
                  className="w-full bg-gradient-tech hover:shadow-lg transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("express-audit")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-2xl text-neural-800 mb-2">
                  Оставьте заявку
                </CardTitle>
                <p className="text-neural-600">
                  Расскажите о вашей задаче, и мы подготовим персонализированное
                  предложение
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-neural-700">
                        Ваше имя *
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Абылай Хаб"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="contact-email"
                        className="text-neural-700"
                      >
                        Email *
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ivan@company.ru"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="contact-phone"
                        className="text-neural-700"
                      >
                        Телефон
                      </Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="contact-company"
                        className="text-neural-700"
                      >
                        Компания *
                      </Label>
                      <Input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="ООО Инновации"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="text-neural-700"
                    >
                      Сообщение *
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о вашей задаче, размере команды и ожиданиях от внедрения ГРВ-технологий..."
                      rows={5}
                      required
                    />
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
                        Отправить заявку
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-neural-500 text-center">
                    Отправляя форму, вы соглашаетесь с обработкой персональных
                    данных и политикой конфиденциальности
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

export default ContactSection;
