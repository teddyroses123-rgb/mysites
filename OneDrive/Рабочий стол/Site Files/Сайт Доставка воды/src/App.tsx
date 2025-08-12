import React, { useState } from 'react';
import { 
  Droplets, 
  Clock, 
  Shield, 
  Truck, 
  Phone, 
  Instagram, 
  MessageCircle,
  CheckCircle,
  Users,
  MapPin,
  Bell,
  Sparkles,
  Zap,
  Volume2,
  Mail
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Дякуємо! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', phone: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 25%, #81d4fa 50%, #e1f5fe 75%, #ffffff 100%)',
      }}>
        {/* Water effect overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0">
              <defs>
                <radialGradient id="ripple1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(33, 150, 243, 0.1)" />
                  <stop offset="100%" stopColor="rgba(33, 150, 243, 0)" />
                </radialGradient>
                <radialGradient id="ripple2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(3, 169, 244, 0.08)" />
                  <stop offset="100%" stopColor="rgba(3, 169, 244, 0)" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="150" r="80" fill="url(#ripple1)" className="animate-pulse" />
              <circle cx="800" cy="300" r="120" fill="url(#ripple2)" className="animate-pulse" style={{animationDelay: '1s'}} />
              <circle cx="1000" cy="100" r="60" fill="url(#ripple1)" className="animate-pulse" style={{animationDelay: '2s'}} />
              <path d="M0,400 Q300,350 600,400 T1200,400 L1200,450 Q900,420 600,450 T0,450 Z" fill="rgba(33, 150, 243, 0.05)" className="animate-pulse" />
              <path d="M0,500 Q400,480 800,500 T1200,500 L1200,530 Q800,510 400,530 T0,530 Z" fill="rgba(3, 169, 244, 0.03)" className="animate-pulse" style={{animationDelay: '1.5s'}} />
            </svg>
          </div>
        </div>
        
        {/* Top contact bar */}
        <div className="bg-white bg-opacity-60 backdrop-blur-sm py-2 md:py-4 px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8 w-full">
              {/* Company Logo and Name */}
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-900">АкваДніпро</h1>
                  <p className="text-sm text-blue-700">Доставка питної води</p>
                </div>
              </div>
              
              {/* Social Media Icons and Phone - Mobile: right side */}
              <div className="absolute top-2 right-4 md:relative md:top-auto md:right-auto flex flex-col items-end md:items-center space-y-1 md:space-y-0 md:flex-row md:space-x-2 ml-auto md:ml-0">
                <div className="flex space-x-1 md:space-x-2">
                  <a
                    href="https://t.me/akvadnipro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-1.5 md:p-2 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/akvadnipro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 p-1.5 md:p-2 rounded-lg transition-colors"
                  >
                    <Instagram className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </a>
                </div>
                
                {/* Phone Number */}
                <a 
                  href="tel:+380671234567" 
                  className="text-blue-800 hover:text-blue-900 font-bold text-sm md:text-base lg:text-lg transition-colors"
                >
                  +380 67 123 45 67
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-2" />
              <a 
                href="mailto:info@akvadnipro.com" 
                className="text-blue-800 hover:text-blue-900 font-medium transition-colors"
              >
                info@akvadnipro.com
              </a>
            </div>
          </div>
        </div>

        {/* Main hero content */}
        <div className="py-4 md:py-16 px-4 relative z-10" style={{
          backgroundImage: 'url(https://i.ibb.co/TfvZdtm/Add-more-droplets-to.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px'
        }}>
          {/* Gradient overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 md:via-white/30 to-white/5 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-6xl font-bold text-blue-900 mb-3 md:mb-6 leading-tight">
                Чиста вода —<br/>
                без зайвих рухів
              </h2>
              <p className="text-base md:text-2xl text-blue-700 mb-4 md:mb-8 font-medium">
                Доставка питної води<br/>
                для дому, офісу та бізнесу
              </p>
              <a 
                href="#order" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-4 px-4 md:px-8 rounded-full text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Замовити воду
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-6">
            Чиста вода для вашого дому та офісу в Дніпрі
          </h3>
          <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed max-w-3xl mx-auto">
            Ми працюємо в Дніпрі вже понад 8 років і доставляємо високоякісну питну воду 
            від перевірених виробників. Наша вода проходить багатоступеневу очистку та 
            регулярно тестується в сертифікованих лабораторіях.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Чому обирають саме нас?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Швидка доставка</h4>
              <p className="text-gray-600">Доставляємо в день замовлення або на наступний день</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Чистота</h4>
              <p className="text-gray-600">Всі сертифікати якості та регулярне тестування</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Зручність</h4>
              <p className="text-gray-600">Замовляйте онлайн або по телефону в зручний час</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Нагадування</h4>
              <p className="text-gray-600">Повідомляємо про доставку та нагадуємо про замовлення</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-orange-100 rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center mb-2">
                <Truck className="w-8 h-8 text-orange-600 mr-2" />
                <span className="text-xl font-bold text-orange-800">Безкоштовна доставка</span>
              </div>
              <p className="text-orange-700">від 2 бутлів по всьому Дніпру</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Наші тарифи
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold mb-4">Стандарт</h4>
              <div className="text-3xl font-bold text-blue-600 mb-4">45 ₴</div>
              <p className="text-gray-600 mb-4">за 1 бутель 19л</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Очищена питна вода
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Доставка в день замовлення
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Популярний
              </div>
              <h4 className="text-xl font-semibold mb-4">Оптимум</h4>
              <div className="text-3xl font-bold text-blue-600 mb-4">135 ₴</div>
              <p className="text-gray-600 mb-4">за 3 бутлі 19л</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Економія 10₴
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Безкоштовна доставка
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Пріоритетна доставка
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold mb-4">Максимум</h4>
              <div className="text-3xl font-bold text-blue-600 mb-4">270 ₴</div>
              <p className="text-gray-600 mb-4">за 6 бутлів 19л</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Максимальна економія
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Безкоштовна доставка
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ідеально для офісу
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Зона доставки
          </h3>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="text-2xl font-semibold text-gray-800">
                Працюємо по всьому Дніпру
              </h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
              <div className="space-y-2">
                <p>• Центр</p>
                <p>• Перемога</p>
                <p>• Тополь</p>
                <p>• Сонячний</p>
              </div>
              <div className="space-y-2">
                <p>• Чечелівський</p>
                <p>• Новокодацький</p>
                <p>• Амур-Нижньодніпровський</p>
                <p>• Індустріальний</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 px-4 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Замовити доставку
          </h3>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Ім'я"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Хочу воду
            </button>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Ми не передаємо дані третім особам.<br/>
              Тільки для зв'язку по доставці.
            </p>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Контакти
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                Зона доставки
              </h4>
              <p className="text-gray-600 mb-4">
                Ми доставляємо по всьому Дніпру та прилеглим районам:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Центр</li>
                <li>• Перемога</li>
                <li>• Тополь</li>
                <li>• Сонячний</li>
                <li>• Чечелівський</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-blue-600" />
                Зв'яжіться з нами
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Телефон для замовлень:</p>
                  <a 
                    href="tel:+380562789456" 
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +38 (056) 278-94-56
                  </a>
                </div>
                
                <div className="pt-4">
                  <p className="text-gray-600 mb-4">Ми в соцмережах:</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/akvadnepr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://t.me/akvadnepr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                    <a
                      href="viber://chat?number=+380562789456"
                      className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors"
                    >
                      <Phone className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">АкваДніпро</span>
          </div>
          <p className="text-gray-400">
            © 2025 АкваДніпро. Якісна питна вода з доставкою по Дніпру.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;