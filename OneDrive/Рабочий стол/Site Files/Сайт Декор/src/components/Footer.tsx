import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-light uppercase tracking-wider mb-6">
              DECOR PRICE KHARKIV
            </h3>
            <p className="text-white/60 leading-relaxed">
              Студия интерьерных решений. Профессиональная декоративная 
              отделка помещений и дизайн интерьеров.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-light uppercase tracking-wider mb-6">
              НАВИГАЦИЯ
            </h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                О НАС
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                УСЛУГИ
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                ПРОЕКТЫ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest"
              >
                КОНТАКТЫ
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-light uppercase tracking-wider mb-6">
              КОНТАКТЫ
            </h4>
            <div className="space-y-3 text-white/60">
              <a 
                href="tel:+380954922747"
                className="block hover:text-white transition-colors"
              >
                +38 (095) 492-27-47
              </a>
              <a 
                href="mailto:info@decorprice.kharkiv"
                className="block hover:text-white transition-colors"
              >
                info@decorprice.kharkiv
              </a>
              <div>г. Харьков, ул. Примерная, 123</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          © 2024 DECOR PRICE KHARKIV. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </div>
      </div>
    </footer>
  );
};

export default Footer;