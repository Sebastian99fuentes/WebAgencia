
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
  <section id="Testimonios" className="py-10 flex flex-col justify-center items-center text-center px-4">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
       <div  className="max-w-6xl mx-auto text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <h2 className="text-3xl font-bold text-blue-700">Testimonios</h2>
          </div>
      <div className="text-center mb-10">
      
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
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
               clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
             }}
           className="relative left-[calc(50%-10rem)] aspect-[1000/600] w-[40rem] -translate-x-1/2 rotate-12 bg-gradient-to-br from-[#00d2ff] to-[#3a47d5] opacity-40 sm:left-[calc(50%-25rem)] sm:w-[70rem]"
/>
        </div>
      </div>
  </section>

    
);

export default Testimonios;

  


 <section id="testimonios" className="">

    </section>