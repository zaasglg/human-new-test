
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">Q</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Q-MIND</span>
                <span className="text-sm text-gray-400">PSYCHOLOGICAL PROFILE

</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Инновационная платформа для научного анализа человеческого фактора
              и управления рисками в команде.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Услуги</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  ГРВ-диагностика
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Корпоративные пакеты
                </a>
              </li>
              <li>
                <a href="/express-audit" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Экспресс-аудит
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                Профориентация
                </a>
              </li><li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                Совместимость пар
                </a>
              </li>
             
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Компания</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  О методе
                </a>
              </li>
              <li>
                <a href="/cases" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Контакты</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  info@q-mind.kz
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  +7 (701) 717-06-33
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  РК, г. Туркестан, ул. Б. Саттарханова, 29/3
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Q-Mind Insights Hub. Все права защищены.
            </div>
            {/* <div className="text-sm text-gray-400">
              ТОО "Q-MIND" | БИН 7777777777
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
