import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://i.ibb.co/KxmTgpDM/image.jpg"
              alt="About Us"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wider">
              О КОМПАНИИ
            </h2>
            
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                DECOR PRICE KHARKIV — это команда профессиональных дизайнеров 
                и мастеров с многолетним опытом в области декоративной отделки 
                помещений и создания уникальных интерьерных решений.
              </p>
              <p>
                Мы специализируемся на нанесении различных видов декоративной 
                штукатурки, создании авторских дизайн-проектов и комплексной 
                отделке жилых и коммерческих объектов.
              </p>
              <p>
                Наша философия — создание пространств, которые отражают 
                индивидуальность каждого клиента, сочетая в себе функциональность, 
                эстетику и высочайшее качество исполнения.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-light mb-2">500+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">
                  РЕАЛИЗОВАННЫХ ПРОЕКТОВ
                </div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">8+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">
                  ЛЕТ НА РЫНКЕ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;