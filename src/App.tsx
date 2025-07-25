import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutBooks from './components/AboutBooks';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import RequestForm from './components/RequestForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importar optimizaciones móviles
import { FloatingActionButton, ConnectionIndicator } from './components/MobileOptimizations';
import { ConnectionSpeedDetector } from './components/PerformanceOptimizations';
import IntelligentPreloader from './components/IntelligentPreloader';

function App() {
  return (
    <div className="min-h-screen bg-gradient-celestial font-source">
      {/* Componentes de optimización móvil y rendimiento */}
      <ConnectionSpeedDetector />
      <ConnectionIndicator />
      <IntelligentPreloader />
      
      <Header />
      <Hero />
      <AboutBooks />
      <Process />
      <Testimonials />
      
      <RequestForm />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Solo botón flotante para móvil */}
      <FloatingActionButton />
    </div>
  );
}

export default App;