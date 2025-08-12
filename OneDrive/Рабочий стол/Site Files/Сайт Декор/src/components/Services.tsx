import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wider">
            УСЛУГИ
          </h2>
          <div className="text-6xl font-thin text-white/20">//</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://i.ibb.co/6JW0h48k/image.jpg"
              alt="Interior Design Service"
              className="w-full h-[500px] object-cover"
            />
            <button className="absolute bottom-6 left-6 text-white border border-white/50 px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              ЗАКАЗАТЬ ПРОСЧЕТ
            </button>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light mb-4 uppercase tracking-wider">
                КОНСУЛЬТАЦИЯ <span className="text-white/50">ДИЗАЙНЕРА</span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Подробный разбор вашей задачи с выездом на объект. 
                Вы получите ответы на все свои вопросы, узнаете детали 
                интерьеров для вашего квартиры за 1 час.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-light mb-2 uppercase tracking-wide">ВЫ ПОЛУЧИТЕ</h4>
                <div className="text-6xl font-thin text-white/20 mb-2">//</div>
                <p className="text-sm text-white/60">
                  Ответы консультации наших 
                  экспертов по всем 
                  этапам с чего начать 
                  и чем закончить
                </p>
              </div>
              <div>
                <div className="text-6xl font-thin text-white/20 mb-2">//</div>
                <p className="text-sm text-white/60">
                  Список подрядчиков, 
                  проверенных партнеров 
                  по материалам 
                  и дизайнерским работам
                </p>
              </div>
              <div>
                <div className="text-6xl font-thin text-white/20 mb-2">//</div>
                <p className="text-sm text-white/60">
                  Примерная на бумаге 
                  стоимость работ, 
                  которая ОКУПАЕТ 
                  стоимость встречи
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h4 className="text-lg font-light mb-4 uppercase tracking-wide">
                ДЛИТЕЛЬНОСТЬ И СТОИМОСТЬ КОНСУЛЬТАЦИИ:
              </h4>
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                  <span className="text-2xl font-light">1 ЧАС</span>
                  <span className="text-white/50 ml-2">/ 6 000 ₴</span>
                </div>
                <div>
                  <span className="text-2xl font-light">1.5 ЧАСА</span>
                  <span className="text-white/50 ml-2">/ 7 200 ₴</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;