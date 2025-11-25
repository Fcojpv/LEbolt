import { Mail, MapPin, Clock, MessageCircleIcon } from 'lucide-react';
import { useState } from 'react';

const ExpandableText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = text.split('\n\n');
  const isLongText = paragraphs.length > 1;

  if (!isLongText) {
    return <p>{text}</p>;
  }

  const displayedText = isExpanded
    ? text
    : paragraphs.slice(0, 1).join('\n\n');

  return (
    <div className="space-y-4">
      <div className="whitespace-pre-wrap text-esperanza-600">
        {displayedText}
      </div>
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-celestial-600 hover:text-celestial-700 font-medium text-sm underline"
        >
          ...mostrar más
        </button>
      )}
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="text-celestial-600 hover:text-celestial-700 font-medium text-sm underline"
        >
          mostrar menos
        </button>
      )}
    </div>
  );
};

const Contact = () => {
  // Helper para abrir WhatsApp con mensaje predefinido
  const phoneNumber = '56984413846';
  const message = encodeURIComponent('¡Hola! Vi esta pagina sobre los libros y me interesa recibir uno. ¿Podrías enviármelo por favor? 📖');
  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-celestial-50 to-dorado-50">
      <div className="max-w-6xl mx-auto">
        

        <div className="grid md:grid-cols-2 gap-12">
          <div className="card-celestial p-8 rounded-2xl">
            <div className="text-center mb-8">
             {/* EDITABLE: Título de la sección */}
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-esperanza-800 mb-4">
                Contáctanos
              </h2>
              {/* EDITABLE: Descripción de la sección */}
              <p className="text-xl font-source text-esperanza-600">
                Así te enviaremos el libro y acompañarte en tu búsqueda del conocimiento de Dios
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-celestial-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-poppins font-semibold text-esperanza-800">Email</h4>
                  {/* EDITABLE: Dirección de email */}
                  <p className="font-source text-esperanza-600">peregrinomensajero@gmail.com</p>
                  {/* EDITABLE: Tiempo de respuesta por email */}
                  <p className="text-sm font-source text-esperanza-500 mt-1">
                    Responderemos en menos de 24 horas
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-poppins font-semibold text-esperanza-800">Teléfono</h4>
                  {/* EDITABLE: Número de teléfono */}
                  <button 
                    onClick={openWhatsApp}
                    aria-label="Abrir WhatsApp"
                    title="Escribir por WhatsApp"
                    className="font-source text-esperanza-600 underline hover:text-esperanza-800 cursor-pointer"
                  >
                    +56 9 8441 3846
                  </button>
                  {/* EDITABLE: Información adicional del teléfono */}
                  <p className="text-sm font-source text-esperanza-500 mt-1">
                      <span className="inline-block w-2 h-2 bg-whatsapp-500 rounded-full animate-pulse"></span>
                      &nbsp;&nbsp;
                      <button 
                        onClick={openWhatsApp}
                        aria-label="Abrir WhatsApp"
                        title="Escribir por WhatsApp"
                        className="underline hover:text-esperanza-800 cursor-pointer"
                      >
                        WhatsApp disponible
                      </button>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-poppins font-semibold text-esperanza-800">Cobertura</h4>
                  {/* EDITABLE: Área de cobertura */}
                  <p className="font-source text-esperanza-600">Región de los Lagos</p>
                  {/* EDITABLE: Información de envíos */}
                  <p className="text-sm font-source text-esperanza-500 mt-1">
                    Envíos gratuitos a toda la Región
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-dorado-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-poppins font-semibold text-esperanza-800">Horario de Atención</h4>
                  {/* EDITABLE: Horarios de atención */}
                  <p className="font-source text-esperanza-600">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="font-source text-esperanza-600">Domingo: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-celestial p-8 rounded-2xl">
            {/* EDITABLE: Título de la misión */}
            <h3 className="text-2xl font-poppins font-bold text-esperanza-800 mb-6">
              Nuestra Misión
            </h3>

            <div className="md:space-y-4 font-source leading-relaxed">
              {/* EDITABLE: Párrafos de la misión */}
              <div className="hidden md:block space-y-4 text-esperanza-600">
                <p>
                  En un mundo lleno de incertidumbre y dolor, creemos que cada persona
                  puede encontrar esperanza, paz y propósito. Estos libros han sido
                  una fuente de luz para millones de personas.
                </p>

                <p>
                  No buscamos lucro ni promocionamos ninguna denominación específica.
                  Nuestro único deseo es que encuentres las respuestas que tu corazón
                  busca y experimentes la transformación que solo la verdad (Cristro) puede traer a tu corazón.
                </p>

                <p>
                  Cada libro que enviamos es un acto de amor y esperanza. Creemos que
                  en sus páginas encontrarás no solo conocimiento, sino la Esperanza que
                  sobrepasa todo entendimiento.
                </p>
              </div>

              <div className="md:hidden">
                <ExpandableText
                  text={`En un mundo lleno de incertidumbre y dolor, creemos que cada persona puede encontrar esperanza, paz y propósito. Estos libros han sido una fuente de luz para millones de personas.

No buscamos lucro ni promocionamos ninguna denominación específica. Nuestro único deseo es que encuentres las respuestas que tu corazón busca y experimentes la transformación que solo la verdad (Cristro) puede traer a tu corazón.

Cada libro que enviamos es un acto de amor y esperanza. Creemos que en sus páginas encontrarás no solo conocimiento, sino la Esperanza que sobrepasa todo entendimiento.`}
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-dorado rounded-xl border border-dorado-200">
              {/* EDITABLE: Cita inspiracional */}
              <h4 className="font-poppins font-bold text-esperanza-800 mb-2">
                "A ellos Dios les quiso dar a conocer la gloriosa riqueza que ese designio encierra para todas las naciones. Y ese designio secreto es Cristo, que está entre ustedes y que es la esperanza de la gloria que han de tener"
              </h4>
              {/* EDITABLE: Mensaje de la cita */}
              <p className="font-source text-esperanza-600 text-sm">
              Colosenses 1:27 DHH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;