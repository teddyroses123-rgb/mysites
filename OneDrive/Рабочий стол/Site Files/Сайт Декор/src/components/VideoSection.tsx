import React from 'react';
import { ExternalLink } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 'DTI80RlHxAQ',
      title: 'Декоративная штукатурка - процесс нанесения',
      thumbnail: `https://img.youtube.com/vi/DTI80RlHxAQ/maxresdefault.jpg`
    },
    {
      id: 'IokMtQw_BnU',
      title: 'Техника нанесения венецианской штукатурки',
      thumbnail: `https://img.youtube.com/vi/IokMtQw_BnU/maxresdefault.jpg`
    },
    {
      id: 'BN18byrKKPg',
      title: 'Создание фактурных поверхностей',
      thumbnail: `https://img.youtube.com/vi/BN18byrKKPg/maxresdefault.jpg`
    }
  ];

  const openVideo = (videoId: string) => {
    window.open(`https://youtu.be/${videoId}`, '_blank');
  };

  const openChannel = () => {
    window.open('https://www.youtube.com/@decorprice', '_blank');
  };

  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wider">
            НАШИ РАБОТЫ
          </h2>
          <div className="text-6xl font-thin text-white/20">//</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => openVideo(video.id)}
            >
              <div className="aspect-video">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-light text-white/80 group-hover:text-white transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={openChannel}
            className="text-white border border-white/30 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
          >
            Перейти на канал
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;