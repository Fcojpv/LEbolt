import React from 'react';
import { Book, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-esperanza-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Book className="h-8 w-8 text-celestial-400" />
              {/* EDITABLE: Nombre de la marca en el footer */}
              <span className="text-xl font-poppins font-bold">Libros de Luz y Esperanza</span>
            </div>
            {/* EDITABLE: Descripción de la organización */}
            <p className="font-source text-gray-300 leading-relaxed mb-4">
              Compartiendo esperanza y transformación a través de libros que han 
              iluminado millones de vidas. Completamente 
              gratuito.
            </p>
            <div className="flex items-center text-gray-300">
              <Heart className="h-4 w-4 text-red-400 mr-2" />
              {/* EDITABLE: Mensaje de ubicación */}
              <span className="text-sm font-source">Hecho y enviado con amor.</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            {/* EDITABLE: Título de enlaces rápidos */}
            <h3 className="text-lg font-poppins font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {/* EDITABLE: Enlaces del footer (deben coincidir con la navegación) */}
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-source text-gray-300 hover:text-celestial-400 transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('libros')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-source text-gray-300 hover:text-celestial-400 transition-colors duration-200"
                >
                  Los Libros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-source text-gray-300 hover:text-celestial-400 transition-colors duration-200"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('solicitar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-source text-gray-300 hover:text-celestial-400 transition-colors duration-200"
                >
                  Solicitar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('preguntas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-source text-gray-300 hover:text-celestial-400 transition-colors duration-200"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            {/* EDITABLE: Título de contacto con iconos en la misma línea */}
            <div className="flex flex-row items-center space-x-4 mb-4">
              <h3 className="text-sm font-poppins font-semibold">Contacto</h3>
              {/* Iconos solo visibles en mobile */}
              <div className="flex flex-row items-center space-x-3 sm:hidden">
                {/* Email */}
                <a 
                  href="mailto:peregrinomensajero@gmail.com" 
                  className="flex items-center group hover:text-celestial-400 transition-colors duration-200"
                  title="Enviar email"
                >
                  <i className="fas fa-envelope h-5 w-5 text-celestial-400"></i>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    const phoneNumber = "56984413846";
                    const message = encodeURIComponent("¡Hola! Vi su página web y me interesa recibir información sobre los libros.");
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                    window.open(whatsappURL, '_blank');
                  }}
                  className="flex items-center group hover:text-celestial-300 transition-colors duration-200"
                  title="Contactar por WhatsApp"
                >
                  <i className="fab fa-whatsapp h-5 w-5 text-celestial-400"></i>
                </a>
                
                {/* Teléfono */}
                <a 
                  href="tel:+56984413846"
                  className="flex items-center group hover:text-celestial-300 transition-colors duration-200"
                  title="Llamar por teléfono"
                >
                  <i className="fas fa-phone h-5 w-5 text-celestial-400"></i>
                </a>
              </div>
            </div>
            
            {/* Información de contacto detallada (solo visible en desktop) */}
            <div className="hidden sm:block space-y-3">
              {/* Email */}
              <a 
                href="mailto:peregrinomensajero@gmail.com" 
                className="flex items-center group hover:text-celestial-400 transition-colors duration-200"
                title="Enviar email"
              >
                <i className="fas fa-envelope h-5 w-5 text-celestial-400 mr-3"></i>
                <span className="font-source text-gray-300 text-sm group-hover:text-celestial-300">peregrinomensajero@gmail.com</span>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  const phoneNumber = "56984413846";
                  const message = encodeURIComponent("¡Hola! Vi su página web y me interesa recibir información sobre los libros.");
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="flex items-center group hover:text-celestial-300 transition-colors duration-200"
                title="Contactar por WhatsApp"
              >
                <i className="fab fa-whatsapp h-5 w-5 text-celestial-400 mr-3"></i>
                <span className="font-source text-gray-300 text-sm group-hover:text-celestial-300">WhatsApp</span>
              </a>
              
              {/* Teléfono */}
              <a 
                href="tel:+56984413846"
                className="flex items-center group hover:text-celestial-300 transition-colors duration-200"
                title="Llamar por teléfono"
              >
                <i className="fas fa-phone h-5 w-5 text-celestial-400 mr-3"></i>
                <span className="font-source text-gray-300 text-sm group-hover:text-celestial-300">+56 9 8441 3846</span>
              </a>
            </div>
            
            {/* Redes Sociales */}
            <div className="mt-6">
              <div className="flex flex-row items-center space-x-4">
                <h4 className="text-sm font-poppins font-semibold text-gray-300">Síguenos</h4>
                <div className="flex items-center space-x-3">
                  {/* YouTube */}
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      // TODO: Reemplazar con tu canal de YouTube
                      // window.open('https://youtube.com/@tu-canal', '_blank');
                      console.log('TODO: Agregar enlace de YouTube');
                    }}
                    className="group hover:text-celestial-300 transition-colors duration-200"
                    title="YouTube"
                  >
                    <i className="fab fa-youtube h-5 w-5 text-celestial-400"></i>
                  </a>
                  
                  {/* Facebook */}
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      // TODO: Reemplazar con tu página de Facebook
                      // window.open('https://facebook.com/tu-pagina', '_blank');
                      console.log('TODO: Agregar enlace de Facebook');
                    }}
                    className="group hover:text-celestial-300 transition-colors duration-200"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f h-5 w-5 text-celestial-400"></i>
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      // TODO: Reemplazar con tu perfil de Instagram
                      // window.open('https://instagram.com/tu-perfil', '_blank');
                      console.log('TODO: Agregar enlace de Instagram');
                    }}
                    className="group hover:text-celestial-300 transition-colors duration-200"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram h-5 w-5 text-celestial-400"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-esperanza-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-source text-gray-400 text-sm mb-4 md:mb-0">
              {/* EDITABLE: Texto de copyright */}
              © {currentYear} Libros de Amparo y Fortaleza. Todos los derechos liberados. 
              <span className="text-celestial-400">  Chile 🇨🇱</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
