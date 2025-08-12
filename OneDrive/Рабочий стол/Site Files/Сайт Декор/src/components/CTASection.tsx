import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const CTASection = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Callback form submitted:', formData);
    alert('Спасибо! Мы перезвоним вам в ближайшее время.');
    setFormData({ name: '', phone: '' });
    setShowCallbackForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="text-white border border-white/50 px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Заказать просчет
            </button>
            <button
              onClick={() => setShowCallbackForm(true)}
              className="text-black bg-white border border-white px-8 py-4 text-lg uppercase tracking-widest hover:bg-transparent hover:text-white transition-all inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Обратный звонок
            </button>
          </div>
        </div>
      </section>

      {/* Callback Form Modal */}
      {showCallbackForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-zinc-900 text-white p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowCallbackForm(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-light uppercase tracking-wider mb-8">
              Обратный звонок
            </h3>
            
            <form onSubmit={handleCallbackSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ИМЯ *"
                  className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors text-lg font-light"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="ТЕЛЕФОН *"
                  className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors text-lg font-light"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-8 text-white border border-white/50 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Заказать звонок
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CTASection;