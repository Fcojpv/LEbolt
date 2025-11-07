import React from 'react';
import { useState } from 'react';
import { Star, Clock, Users, Lightbulb, PenLine as PenLineIcon, Download, ExternalLink, BookType } from 'lucide-react';
import LazyImage from './LazyImage';
import ImageCarouselModal from './ImageCarouselModal';

// También necesitas agregar la declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        [key: string]: any;
      }
    ) => void;
  }
}

const AboutBooks = () => {
  // Estado para controlar el modal de imágenes
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);
  const [modalBookTitle, setModalBookTitle] = useState('');

  // EDITABLE: Información de los libros
  const books = [
    {
      // EDITABLE: Título del primer libro
      title: "El Conflicto de los Siglos",
      // EDITABLE: Descripción del primer libro
      description: "Una obra maestra que revela la gran controversia entre el bien y el mal a través de la historia. Descubre las profecías bíblicas y su cumplimiento, encontrando esperanza para el futuro.",
      // EDITABLE: Características del primer libro
      features: [
        "La preocupación constante de Dios por sus hijos",
        "Esperanza para tiempos difíciles",
        "Historia profética revelada",
      ],
      icon: <BookType className="h-8 w-8 text-celestial-500" />,
      gradient: "from-dorado-50 to-dorado-100",
      // EDITABLE: Imágenes del libro - Array de URLs para el carrusel
      images: [
        "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Portadas/Portada%20El%20Conflicto%20de%20los%20Siglos.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", // Portada principal
        "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Lectura%20de%20Libro/Hombre%20Leyendio%20transporte%20publico.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", // Imagen 1
        "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Lectura%20de%20Libro/Leyendo%20Conflicto%203.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", // Imagen 2
        "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Lectura%20de%20Libro/Leyendo%20Conflicto%202.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"  // Imagen 3
      ],
      // EDITABLE: URL de descarga para El Conflicto de los Siglos
      downloadUrl: "https://drive.google.com/file/d/1o92V1RqQZfh7LQWHH_5f47XG9aOjrXPS/view?usp=sharing"
    },
    {
      // EDITABLE: Título del segundo libro
      title: "El Camino a Cristo",
      // EDITABLE: Descripción del segundo libro
      description: "Un mensaje inspirador que te conecta con el Salvador. A través de sus palabras, hallarás esperanza, transformación y la paz que el corazón busca.",
      // EDITABLE: Características del segundo libro
      features: [
        "Pasos hacia a Cristo",
        "Paz interior que solo Dios puede dar",
        "Relación personal con Dios",
      ],
      icon: <BookType className="h-8 w-8 text-celestial-500" />,
      gradient: "from-celestial-50 to-celestial-100",
      // EDITABLE: Imágenes del libro - Array de URLs para el carrusel
      images: [
        "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Portadas/Portada%20Camino%20a%20Cristo.png?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", // Portada principal
        "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Lectura%20de%20Libro/Leyendo%20huerta%20original.jpg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", // Imagen 1
        "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"  // Imagen 2
      ],
      // EDITABLE: URL de descarga para El Camino a Cristo
      downloadUrl: "https://drive.google.com/file/d/10kCPzrz7BEtjLBzia4DBi5B1D5MoC8y0/view?usp=sharing"
    }
  ];

  // Función para abrir el modal de imágenes
  const openImageModal = (images: string[], initialIndex: number, bookTitle: string) => {
    setModalImages(images);
    setModalInitialIndex(initialIndex);
    setModalBookTitle(bookTitle);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeImageModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setModalInitialIndex(0);
    setModalBookTitle('');
  };

  // Función para manejar la descarga del libro
  const handleDownload = (downloadUrl: string, bookTitle: string) => {
   
    // Tracking de evento en Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'engagement',
      event_label: bookTitle,
      file_name: bookTitle,
      file_extension: 'pdf',
      link_url: downloadUrl,
      value: 1
    });
  }
    // Abrir en nueva pestaña para que el usuario pueda descargar
    window.open(downloadUrl, '_blank');
    
    // Opcional: Tracking de descarga (puedes agregar analytics aquí)
    console.log(`Descarga iniciada: ${bookTitle}`);
  };
  return (
    <>
      <section id="libros" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* EDITABLE: Título de la sección */}
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-esperanza-800 mb-4">
              Libros que Transforman Vidas
            </h2>
            {/* EDITABLE: Descripción de la sección */}
            <p className="text-xl font-source text-esperanza-600 max-w-3xl mx-auto">
              Historias de redención, profecía y amor divino al alcance de todos. 
              Recibe el mensaje que tu corazón necesita hoy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {books.map((book, index) => (
              <div
                key={index}
                className={`card-celestial p-8 rounded-2xl hover:scale-105 relative`}
              >
                {/* FONDO DE IMAGEN CON ÁNGULO PARA EL CONFLICTO DE LOS SIGLOS */}
                {/* EDITABLE: Solo se aplica al primer libro (El Conflicto de los Siglos) */}
                {index === 0 && (
                  <div 
                    className="absolute inset-0 rounded-2xl z-0"
                    style={{
                      /* EDITABLE: Combinación de degradado lineal con ángulo + imagen de fondo */
                      backgroundImage: `
                        linear-gradient(
                          135deg, 
                          rgba(255, 255, 255, 0.7), 
                          rgba(248, 250, 252, 0.8)
                        ), 
                        url('https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Portadas/Fondo%20conclicto%20.png')
                      `,
                      /* EDITABLE: Comportamiento de la imagen de fondo */
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      /* EDITABLE: Difuminado de toda la capa (imagen + degradado) */
                      filter: 'blur(4px)',
                      /* EDITABLE: Opacidad general de toda la capa de fondo */
                      opacity: 0.6,
                    }}
                  ></div>
                )}
                
                {/* FONDO DE DEGRADADO PARA OTROS LIBROS (mantiene el diseño original) */}
                {/* FONDO DE IMAGEN CON ÁNGULO PARA EL CAMINO A CRISTO */}
                {/* EDITABLE: Solo se aplica al segundo libro (El Camino a Cristo) */}
                {index === 1 && (
                  <div 
                    className="absolute inset-0 rounded-2xl z-0"
                    style={{
                      /* EDITABLE: Combinación de degradado lineal con ángulo + imagen de fondo */
                      backgroundImage: `
                        linear-gradient(
                          135deg, 
                          rgba(255, 255, 255, 0.7), 
                          rgba(248, 250, 252, 0.8)
                        ), 
                        url('https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Portadas/Fondo%20Camino.png')
                      `,
                      /* EDITABLE: Comportamiento de la imagen de fondo */
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      /* EDITABLE: Difuminado de toda la capa (imagen + degradado) */
                      filter: 'blur(4px)',
                      /* EDITABLE: Opacidad general de toda la capa de fondo */
                      opacity: 0.6,
                    }}
                  ></div>
                )}
                
                {/* FONDO DE DEGRADADO PARA OTROS LIBROS (si hubiera más) */}
                {index > 1 && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${book.gradient} rounded-2xl z-0`}></div>
                )}
                
                {/* Imagen del libro con lazy loading y funcionalidad de modal */}
                {book.images && book.images.length > 0 && (
                  <div className="mb-6 flex justify-center">
                    <div
                      className="w-48 h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative"
                      onClick={() => openImageModal(book.images, 0, book.title)}
                    >
                      <LazyImage
                        src={book.images[0]}
                        alt={`Portada del libro ${book.title}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Overlay con indicador de clic */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <span className="text-xs font-source font-semibold text-esperanza-800">Ver detalles</span>
                        </div>
                      </div>
                      {/* Indicador de múltiples imágenes */}
                      {book.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-source">
                          +{book.images.length - 1}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-6 relative z-10">
                  {book.icon}
                  <h3 className="text-2xl font-poppins font-bold text-esperanza-800 ml-3">{book.title}</h3>
                </div>
                
                <p className="font-source text-esperanza-700 mb-6 leading-relaxed relative z-10">
                  {book.description}
                </p>
                
                <div className="space-y-3 relative z-10">
                  {book.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="font-source text-esperanza-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Botones de acción */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 relative z-10">
                  {/* Botón de descarga digital */}
                  <button
                    onClick={() => handleDownload(book.downloadUrl, book.title)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-poppins font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>Descargar PDF</span>
                  </button>

                  {/* Botón para solicitar físico */}
                  <button
                    onClick={() => {
                      const element = document.getElementById('solicitar');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-gradient-to-r from-celestial-500 to-celestial-600 hover:from-celestial-600 hover:to-celestial-700 text-white font-poppins font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Solicitar Físico</span>
                  </button>
                </div>

                 {/* Información adicional sobre las opciones */}
                 <div className="mt-3 text-center relative z-10">
                  <p className="text-xs font-source text-esperanza-500">
                    <span className="block sm:inline">
                      📱 <span className="font-semibold">Digital:</span> Descarga inmediata
                    </span>
                    <span className="hidden sm:inline"> • </span>
                    <span className="block sm:inline">
                      📦 <span className="font-semibold">Físico:</span> Envío gratuito a tu casa
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Modal de carrusel de imágenes */}
      {isModalOpen && (
        <ImageCarouselModal
          images={modalImages}
          initialIndex={modalInitialIndex}
          onClose={closeImageModal}
          bookTitle={modalBookTitle}
        />
      )}
    </>
  );
};

export default AboutBooks;