import { useState, useEffect } from 'react';
import { X, Shield, Users, Clock, BookMarked, Home, BookOpen, MessageSquare, FileText, HelpCircle, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'libros', label: 'Libros', icon: BookOpen },
    { id: 'testimonios', label: 'Testimonios', icon: MessageSquare },
    { id: 'solicitar', label: 'Solicitar', icon: FileText },
    { id: 'preguntas', label: 'Preguntas', icon: HelpCircle },
    { id: 'contacto', label: 'Contacto', icon: Mail }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-celestial-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-celestial-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra de credibilidad superior */}
        <div className="hidden md:flex justify-center items-center py-2 text-xs font-source text-esperanza-600 border-b border-celestial-50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3 text-green-500" />
              <span>1.500 libros entregados</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-celestial-500" />
              <span>Más de 2 años divulgando esperanza</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-3 w-3 text-dorado-500" />
              <span>100% gratuito y seguro</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookMarked className="h-8 w-8 text-celestial-500" />
            <span className="text-xl font-poppins font-bold text-gradient-celestial">
              Libros Amparo y Fortaleza
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-source text-esperanza-600 hover:text-celestial-500 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-celestial-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button , (boton de las 3 rayas*/}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-esperanza-600 hover:text-celestial-500 hover:bg-celestial-50 transition-all duration-200 mobile-touch-target"
          >
            <div className="relative w-6 h-2">
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Menú Lateral */}
        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Overlay semi-transparente con blur */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Panel lateral del menú */}
          <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header del menú */}
            <div className="flex items-center justify-between p-6 border-b border-celestial-100">
              <h2 className="text-2xl font-poppins font-bold text-esperanza-800">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-xl text-esperanza-600 hover:text-celestial-500 hover:bg-celestial-50 transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navegación principal */}
            <nav className="py-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left font-source text-esperanza-700 hover:text-celestial-500 hover:bg-celestial-50 transition-all duration-200 py-4 px-6 flex items-center space-x-4 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <IconComponent className="h-5 w-5 text-esperanza-500 group-hover:text-celestial-500 transition-colors duration-200" />
                    <span className="font-semibold text-lg">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Footer del menú */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-celestial-100 bg-celestial-50/50">
              <div className="space-y-3">
                <button className="w-full text-left text-esperanza-600 hover:text-celestial-500 transition-colors duration-200 py-2 text-sm">
                  Términos de Servicio
                </button>
                <button className="w-full text-left text-esperanza-600 hover:text-celestial-500 transition-colors duration-200 py-2 text-sm">
                  Política de Privacidad
                </button>
                <button className="w-full text-left text-esperanza-600 hover:text-celestial-500 transition-colors duration-200 py-2 text-sm font-semibold">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;