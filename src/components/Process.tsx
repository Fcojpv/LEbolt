import React from 'react';
import { FileText, CheckCircle, Truck, Heart, Shield, Clock } from 'lucide-react';

const Process = () => {
  // EDITABLE: Pasos del proceso
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-celestial-500" />,
      // EDITABLE: Título del paso 1
      title: "Completa el formulario",
      // EDITABLE: Descripción del paso 1
      description: "Llena tus datos y selecciona el libro que deseas recibir. Solo toma 2 minutos.",
      // EDITABLE: Tiempo estimado del paso 1
      time: "2 min",
      color: "celestial"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      // EDITABLE: Título del paso 2
      title: "Verificamos tu solicitud",
      // EDITABLE: Descripción del paso 2
      description: "Revisamos que toda la información esté correcta para el envío.",
      // EDITABLE: Tiempo estimado del paso 2
      time: "24 hrs",
      color: "green"
    },
    {
      icon: <Truck className="h-10 w-10 text-dorado-500" />,
      // EDITABLE: Título del paso 3
      title: "Enviamos tu libro",
      // EDITABLE: Descripción del paso 3
      description: "Tu libro será enviado gratuitamente a la dirección que proporcionaste.",
      // EDITABLE: Tiempo estimado del paso 3
      time: "5-7 días",
      color: "dorado"
    },
    {
      icon: <Heart className="h-10 w-10 text-pink-500" />,
      // EDITABLE: Título del paso 4
      title: "Disfruta y comparte",
      // EDITABLE: Descripción del paso 4
      description: "Lee, aprende y comparte la esperanza que encontraste con otros.",
      // EDITABLE: Tiempo estimado del paso 4
      time: "Para siempre",
      color: "pink"
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fondo parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://pusssafgpuizmhkhzsfb.supabase.co/storage/v1/object/public/Imagenes%20Landing%20Libors/Libros/Bodie/Parallax%20entrega%20libro.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.3)',
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          {/* EDITABLE: Título de la sección */}
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-esperanza-800 mb-6 relative z-20">
            ¿Cómo Funciona?
          </h2>
          {/* EDITABLE: Descripción de la sección */}
          <p className="text-xl font-source text-esperanza-600 max-w-3xl mx-auto relative z-20">
            Simple, transparente y seguro para que recibas tu libro de esperanza.
          </p>
        </div>

        {/* Hoja de ruta gráfica */}
        <div className="relative mb-10 md:mb-20 z-20">
          {/* Línea conectora para desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-celestial-300/50 via-celestial-400/70 via-celestial-300/50 to-celestial-200/40 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Línea conectora para mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-celestial-300/50 to-transparent"></div>
                )}
                
                {/* EDITABLE: Transparencia de tarjetas - Cambia los valores después de bg-white/ y border-celestial/ */}
                <div className="bg-white/70 backdrop-blur-sm border border-celestial-200/30 shadow-lg hover:shadow-xl p-4 md:p-8 rounded-2xl hover:scale-105 transform transition-all duration-300 group-hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    {/* Icono con animación */}
                    <div className={`bg-${step.color}-100 p-4 rounded-full border-2 border-${step.color}-200 mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    
                    {/* Número de paso */}
                    <div className={`bg-${step.color}-100 text-${step.color}-700 text-sm font-poppins font-bold px-4 py-2 rounded-full border border-${step.color}-200 mb-2 md:mb-4`}>
                      Paso {index + 1}
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xl font-poppins font-bold text-esperanza-800 mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="hidden md:block font-source text-esperanza-600 leading-relaxed mb-0 md:mb-4">
                      {step.description}
                    </p>
                    
                    {/* Tiempo estimado */}
                    <div className="flex items-center text-sm text-esperanza-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{step.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Garantías y políticas */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 relative z-20">
          {/* EDITABLE: Transparencia de tarjeta de privacidad - Cambia el valor después de bg-white/ */}
          <div className="bg-white/70 backdrop-blur-sm border border-celestial-200/30 shadow-lg hover:shadow-xl p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-green-500 mr-3" />
              {/* EDITABLE: Título de política de privacidad */}
              <h3 className="text-2xl font-poppins font-bold text-esperanza-800">
                Política de Privacidad
              </h3>
            </div>
            {/* EDITABLE: Descripción de política de privacidad */}
            <p className="font-source text-esperanza-600 leading-relaxed">
              Tus datos personales están completamente seguros. Solo los usamos para el envío del libro y nunca los compartimos con terceros.
            </p>
            {/* EDITABLE: Texto del enlace */}
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-celestial-600 hover:text-celestial-700 font-source font-semibold mt-3 inline-flex items-center"
            >
              Ver más detalles →
            </button>
          </div>

          {/* EDITABLE: Transparencia de tarjeta de misión - Cambia el valor después de bg-white/ */}
          <div className="bg-white/70 backdrop-blur-sm border border-celestial-200/30 shadow-lg hover:shadow-xl p-6 md:p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-pink-500 mr-3" />
              {/* EDITABLE: Título de misión */}
              <h3 className="text-2xl font-poppins font-bold text-esperanza-800 mb-2 md:mb-4">
                ¿Por qué es gratuito?
              </h3>
            </div>
            {/* EDITABLE: Descripción de misión */}
            <p className="font-source text-esperanza-600 leading-relaxed">
              Creemos que la esperanza no tiene precio. Estos libros son un regalo de amor para quienes buscan paz y propósito en tiempos difíciles.
            </p>
            {/* EDITABLE: Texto del enlace */}
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-celestial-600 hover:text-celestial-700 font-source font-semibold mt-2 md:mt-3 inline-flex items-center"
            >
              Conoce nuestra misión →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;