import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'ГАЗОВИКОВ 40',
      image: 'https://i.ibb.co/VcJqpC40/image.jpg'
    },
    {
      id: 2,
      title: 'ЖК NOVIN',
      image: 'https://i.ibb.co/RFJyGGK/image.jpg'
    },
    {
      id: 3,
      title: 'CLUB HOUSE',
      image: 'https://i.ibb.co/KxmTgpDM/image.jpg'
    },
    {
      id: 4,
      title: 'ДОМ У ОЗЕРА',
      image: 'https://i.ibb.co/4gdc224v/Chat-GPT-Image-8-2025-13-13-17.png'
    },
    {
      id: 5,
      title: 'ГАЗОВИКОВ 44',
      image: 'https://i.ibb.co/8DGn9G5h/feidalukraine-Antik-Kalk-Dekor-maxi.jpg'
    },
    {
      id: 6,
      title: 'ГАЗОВИКОВ 44',
      image: 'https://i.ibb.co/6JW0h48k/image.jpg'
    },
    {
      id: 7,
      title: 'ГАЗОВИКОВ 40',
      image: 'https://i.ibb.co/VcJqpC40/image.jpg'
    },
    {
      id: 8,
      title: 'АНДЕРСЕН ПАРК',
      image: 'https://i.ibb.co/RFJyGGK/image.jpg'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wider mb-4">
              НАШИ ПРОЕКТЫ
            </h2>
            <div className="text-sm text-white/50 uppercase tracking-widest">
              КВАРТИРЫ /
            </div>
          </div>
          <div className="text-6xl font-thin text-white/20">//</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`relative group overflow-hidden ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square ${
                index === 0 || index === 3 ? 'md:aspect-[1/2]' : ''
              }`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-light uppercase tracking-wider text-white">
                      {project.title}
                    </h3>
                    <button className="mt-4 text-white/80 text-sm uppercase tracking-widest hover:text-white transition-colors">
                      ПОДРОБНЕЕ →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;