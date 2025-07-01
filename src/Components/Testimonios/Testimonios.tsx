
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

  
const testimonios = [
  {
    nombre: 'Laura M.',
    texto: 'Work & Travel cambió mi vida. Hice amigos de todo el mundo y mejoré mi inglés más de lo que imaginaba.',
    imagen: '/image1.png',
  },
  {
    nombre: 'Carlos G.',
    texto: 'Gracias al programa Professional Exchange, obtuve una pasantía en EE.UU. ¡Fue el impulso que necesitaba!',
     imagen: '/image.png',
  },
  {
    nombre: 'Daniela R.',
    texto: 'Tomar un curso de idiomas en Canadá fue una de las mejores decisiones que he tomado.',
     imagen: '/image1.png',
  },
];

const Testimonios = () => (
  
     <section id="testimonios" className="py-20 bg-gray-100 flex flex-col justify-center items-center text-center px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-700">Testimonios</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <CCarousel controls indicators transition="crossfade">
          {testimonios.map((t, index) => (
            <CCarouselItem key={index}>
              <CImage className="d-block w-100 rounded" src={t.imagen} alt={`Testimonio ${index + 1}`} />
              <CCarouselCaption className="d-none d-md-block bg-white bg-opacity-75 rounded p-3 mt-2">
                <h5 className="text-blue-700 font-semibold">{t.nombre}</h5>
                <p className="text-gray-700 italic">{t.texto}</p>
              </CCarouselCaption>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
    </section>
);

export default Testimonios;
