import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const makeCall = () => {
    window.open('tel:+380954922747', '_self');
  };

  const openTelegram = () => {
    window.open('https://t.me/+380954922747', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/decor_price_kharkov', '_blank');
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-light text-white tracking-wider">
            DECOR PRICE KHARKIV
          </div>
          
          {/* Contact Icons */}
          <div className="hidden lg:flex items-center gap-4 mr-8">
            <button
              onClick={makeCall}
              className="text-white/60 hover:text-white transition-colors p-2"
              title="Позвонить: +380 95 492 27 47"
            >
              <Phone size={20} />
            </button>
            <button
              onClick={openTelegram}
              className="text-white/60 hover:text-white transition-colors p-2"
              title="Telegram"
            >
              <MessageCircle size={20} />
            </button>
            <button
              onClick={openInstagram}
              className="text-white/60 hover:text-white transition-colors p-2"
              title="Instagram: @decor_price_kharkov"
            >
              <Instagram size={20} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              О НАС
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              УСЛУГИ
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              ПРОЕКТЫ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              КОНТАКТЫ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white border border-white/30 px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
             ЗАКАЗАТЬ ПРОСЧЕТ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-8 pb-6 border-t border-white/20">
            <div className="flex flex-col space-y-6 pt-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest text-left"
              >
                О НАС
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest text-left"
              >
                УСЛУГИ
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest text-left"
              >
                ПРОЕКТЫ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest text-left"
              >
                КОНТАКТЫ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white border border-white/30 px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all text-left w-fit"
              >
                ЗАКАЗАТЬ ПРОСЧЕТ
              </button>
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <button
                  onClick={makeCall}
                  className="text-white/60 hover:text-white transition-colors p-2"
                  title="Позвонить: +380 95 492 27 47"
                >
                  <Phone size={20} />
                </button>
                <button
                  onClick={openTelegram}
                  className="text-white/60 hover:text-white transition-colors p-2"
                  title="Telegram"
                >
                  <MessageCircle size={20} />
                </button>
                <button
                  onClick={openInstagram}
                  className="text-white/60 hover:text-white transition-colors p-2"
                  title="Instagram: @decor_price_kharkov"
                >
                  <Instagram size={20} />
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;