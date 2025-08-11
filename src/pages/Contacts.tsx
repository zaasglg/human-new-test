import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (701) 717-06-33",
      description: "Пн-Пт с 9:00 до 18:00",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@humanfactor-hub.kz",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Алматы, ул. Абая 150/230",
      description: 'Офис 301, БЦ "Технопарк"',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Если у вас есть вопросы о наших услугах, вы хотите обсудить
              индивидуальные кейсы или заказать диагностику, свяжитесь с нами
              любым удобным способом.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white rounded-lg border border-gray-200 p-8 text-center hover:border-black hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mx-auto mb-6 w-16 h-16 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-black mb-2">
                  {info.value}
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {info.description}
                </p>
                
                {/* Анимированная линия снизу */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>

          {/* Contact Form and Company Info */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Company Info - Left Side */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-black mb-4">
                    Q-Mind Insights Hub
                  </h2>
                  <p className="text-gray-600">
                    Инновационная платформа для научного анализа человеческого
                    фактора
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Вид деятельности:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Исследования и экспериментальные разработки в области
                      общественных и гуманитарных наук
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Специализация:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ГРВ-диагностика, психофизиологический анализ, управление
                      человеческими ресурсами
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Наш подход:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Мы используем научно обоснованные методы для объективной оценки 
                      психологических и профессиональных рисков в организациях
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-300 mt-8">
                  <p className="text-xs text-gray-500">
                    <a
                      href="#"
                      className="hover:text-black transition-colors"
                    >
                      Политика Конфиденциальности
                    </a>
                    {" • "}
                    <a
                      href="#"
                      className="hover:text-black transition-colors"
                    >
                      Пользовательское Соглашение
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact Form - Right Side */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-black mb-4">
                    Форма обратной связи
                  </h2>
                  <p className="text-gray-600">
                    Напишите нам, и мы обязательно ответим
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-black font-medium">
                      Ваше Имя *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Абылай Хаб"
                      className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-black font-medium">
                      Ваш Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ivan@company.ru"
                      className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-black font-medium">
                      Тема сообщения *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Консультация по услугам"
                      className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-black font-medium">
                      Текст сообщения *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите подробнее о ваших задачах и вопросах..."
                      rows={6}
                      className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 text-lg font-semibold text-white bg-black border border-black hover:bg-white hover:text-black transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Отправка..."
                    ) : (
                      <>
                        Отправить сообщение
                        <Send className="w-5 h-5 ml-2 inline" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Contacts;
