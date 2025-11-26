import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import LazyImage from './LazyImage';

interface ImageCarouselModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  bookTitle: string;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  images,
  initialIndex,
  onClose,
  bookTitle
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Funciones de navegación
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsZoomed(false);
  };

  // Funciones de touch/swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      goToNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      goToPrevious();
    }
  };

  // Cerrar modal al hacer clic en el overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  // Toggle zoom
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Header del modal */}
        <div className="flex justify-between items-center mb-4 text-white">
          <div>
            <h3 className="text-xl font-poppins font-bold">{bookTitle}</h3>
            <p className="text-sm font-source text-gray-300">
              Imagen {currentIndex + 1} de {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 mobile-touch-target"
            aria-label="Cerrar modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Contenedor principal de la imagen */}
        <div
          ref={imageContainerRef}
          className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Imagen principal */}
          <div className="relative">
            <div 
              className={`transition-transform duration-300 cursor-pointer ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              onClick={toggleZoom}
            >
              <LazyImage
                src={images[currentIndex]}
                alt={`${bookTitle} - Imagen ${currentIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Indicador de zoom */}
            <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full">
              <ZoomIn className="h-4 w-4" />
            </div>

            {/* Botones de navegación - Solo si hay más de una imagen */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed mobile-touch-target"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentIndex === images.length - 1}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed mobile-touch-target"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Indicadores de puntos - Solo si hay más de una imagen */}
          {images.length > 1 && (
            <div className="flex justify-center space-x-1 p-4 bg-gray-50">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-200 ${
                    index === currentIndex
                      ? 'w-2 h-2 bg-celestial-500 rounded-full'
                      : 'w-1.5 h-1.5 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Instrucciones de uso */}
        <div className="mt-4 text-center text-white/70">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm font-source">
            {images.length > 1 && (
              <>
                <span className="flex items-center space-x-1">
                  <span>👈👉</span>
                  <span>Desliza para navegar</span>
                </span>
              </>
            )}
            <span className="flex items-center space-x-1">
              <span>⎋</span>
              <span>ESC para cerrar</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;