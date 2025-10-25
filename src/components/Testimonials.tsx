import React, { useState, useRef, useEffect } from 'react';
import { Quote, Star, CheckCircle, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const testimonials = [
    {
      name: "Francisco Peña",
      location: "Fresia Chile",
      book: "El Conflicto de los Siglos",
      text: "La lectura de este libro ha superado mis expectativas; me asombra leer cómo la vida de Cristo transformó a quienes serian reformadores de la historia.",
      rating: 5,
      avatar: "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Testimonios/Francisco.JPG?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Señor R. Anonimo",
      location: "Regions de , Chile",
      book: "El Conflicto de los Siglos",
      text: "Este libro 'Conflicto de los Siglos' es el más leído después de la 'Biblia', me ha enseñado a conocer de parte de nuestro Dios, los caminos del bien y el mal, de la verdad y el error a través de los tiempos.",
      rating: 5,
      avatar: "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Testimonios/Sr%20R%20Anonimo.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Claudia Anonimo",
      location: "Región de los Lagos, Chile",
      book: "El Camino a Cristo",
      text: "Es maravilloso como este libro abarca temas que aparentemente son complejos pero que en realidad son simples de abordar y asimilar, en especial sobre el amor de Dios, hacia nosotros.",
      rating: 5,
      avatar: "https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Testimonios/Claudia%20anonimo.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    //{
    //  name: "Pedro Silva",
    //  location: "La Serena, Chile",
    //  book: "El Conflicto de los Siglos",
    //  text: "Nunca había leído algo tan profundo y revelador. Me ayudó a entender la Biblia de una manera completamente nueva. Altamente recomendado.",
    //  rating: 5,
    //  avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    //  verified: true
    //},
    //{
    //  name: "Lucía Morales",
    //  location: "Temuco, Chile",
    //  book: "El Camino a Cristo",
    //  text: "Estaba perdida espiritualmente y este libro me guió paso a paso hacia una fe genuina. Ahora tengo paz interior y alegría verdadera.",
    //  rating: 5,
    //  avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    //  verified: true
    //},
    //{
    //  name: "Roberto Herrera",
    //  location: "Antofagasta, Chile",
    //  book: "El Conflicto de los Siglos",
    //  text: "Este libro me abrió los ojos a la realidad espiritual. Entendí la historia desde una perspectiva completamente nueva y encontré esperanza eterna.",
    //  rating: 5,
    //  avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    //  verified: true
    //}
  ];

  const minSwipeDistance = 50;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-esperanza-800 mb-6">
            Vidas Transformadas
          </h2>
          <p className="text-xl font-source text-esperanza-600 max-w-4xl mx-auto">
            Lee los testimonios de personas que, como tú, buscaban esperanza y la encontraron 
            en estas páginas llenas de luz y verdad.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-celestial p-8 rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-celestial-300 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-dorado-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="font-source text-esperanza-700 mb-8 leading-relaxed italic text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-celestial-100 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-celestial-200"
                    />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-poppins font-bold text-esperanza-800">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                        )}
                      </div>
                      <p className="text-sm font-source text-esperanza-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-source font-semibold text-celestial-600">{testimonial.book}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-16">
          <div
            ref={carouselRef}
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="card-celestial p-6 rounded-2xl h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-dorado-400 fill-current" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-celestial-300" />
                    </div>
                    
                    <p className="font-source text-esperanza-700 leading-relaxed italic mb-6 text-lg">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-celestial-100 pt-4">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-celestial-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="font-poppins font-bold text-esperanza-800">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                            )}
                          </div>
                          <p className="text-sm font-source text-esperanza-500">{testimonial.location}</p>
                          <p className="text-sm font-source font-semibold text-celestial-600 mt-1">{testimonial.book}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg mobile-touch-target transition-all duration-200 hover:bg-white hover:scale-110"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-esperanza-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg mobile-touch-target transition-all duration-200 hover:bg-white hover:scale-110"
              disabled={currentIndex === testimonials.length - 1}
            >
              <ChevronRight className="h-5 w-5 text-esperanza-700" />
            </button>

            {/* Auto-play indicator */}
            {isAutoPlaying && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-source font-semibold">
                Auto
              </div>
            )}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-200 mobile-touch-target ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-celestial-500 rounded-full'
                    : 'w-3 h-3 bg-celestial-200 rounded-full hover:bg-celestial-300'
                }`}
              />
            ))}
          </div>

          {/* Swipe instructions */}
          <div className="text-center mt-4">
            <p className="text-sm font-source text-esperanza-500 flex items-center justify-center space-x-2">
              <span>👈</span>
              <span>Desliza para ver más testimonios</span>
              <span>👉</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
