import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <Services />
      <Portfolio />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;