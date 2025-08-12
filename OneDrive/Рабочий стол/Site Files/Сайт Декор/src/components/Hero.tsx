import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/8DGn9G5h/feidalukraine-Antik-Kalk-Dekor-maxi.jpg"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-[360px] mb-8">
          <div className="text-center mb-8">
            <div className="text-8xl md:text-9xl font-semibold text-white mb-4 leading-none">
              dp
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 leading-tight text-left">
            <span className="block text-center md:text-left">DECOR PRICE</span>
            <span className="block text-center font-thin text-2xl md:text-3xl text-white/90 tracking-[0.3em] mt-2">
              kharkiv
            </span>
          </h1>
       

          <button 
            onClick={scrollToContact}
            className="mt-8 text-white border border-white/50 px-8 py-3 mx-auto text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all block"
          >
            ЗАКАЗАТЬ ПРОСЧЕТ
          </button>
          
          
        </div>

        <div className="mt-auto pb-20">
          <h2 className="text-2xl md:text-4xl font-light text-white mb-12 uppercase tracking-wider">
            СТУДИЯ ИНТЕРЬЕРНЫХ РЕШЕНИЙ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">8+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest">ЛЕТ ОПЫТА</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">500+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest">РЕАЛИЗОВАННЫХ ПРОЕКТОВ</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">10+</div>
              <div className="text-sm text-white/70 uppercase tracking-widest">ГОРОДОВ</div>
              <div className="text-xs text-white/50 mt-1">ХАРЬКОВ И РЕГИОНЫ УКРАИНЫ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;