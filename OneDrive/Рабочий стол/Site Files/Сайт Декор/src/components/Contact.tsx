import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wider mb-12">
              КОНТАКТЫ
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-white/50" />
                <a 
                  href="tel:+380954922747"
                  className="text-xl font-light hover:text-white/70 transition-colors"
                >
                  +38 (095) 492-27-47
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-white/50" />
                <a 
                  href="mailto:info@decorprice.kharkiv"
                  className="text-xl font-light hover:text-white/70 transition-colors"
                >
                  info@decorprice.kharkiv
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-white/50 mt-1" />
                <div className="text-xl font-light">
                  г. Харьков, ул. Примерная, 123
                </div>
              </div>
            </div>

            <div className="space-y-4 text-white/70">
              <h3 className="text-lg font-light uppercase tracking-wider text-white">
                ВРЕМЯ РАБОТЫ
              </h3>
              <div>Пн-Пт: 9:00-18:00</div>
              <div>Сб: 10:00-16:00</div>
              <div>Вс: выходной</div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light uppercase tracking-wider mb-8">
             ЗАКАЗАТЬ ПРОСЧЕТ
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors text-lg font-light"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="СООБЩЕНИЕ"
                  className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors resize-none text-lg font-light"
                />
              </div>

              <button
                type="submit"
                className="mt-8 text-white border border-white/50 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                ЗАКАЗАТЬ ПРОСЧЕТ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;