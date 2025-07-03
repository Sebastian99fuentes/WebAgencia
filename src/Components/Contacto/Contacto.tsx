

const Contacto = () => {
  return (
    <section id="contacto" className="py-10 flex flex-col justify-center items-center text-center px-4">
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

<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Mapa o Imagen */}
        <div className="w-full h-80 md:h-auto rounded overflow-hidden shadow-lg">

<iframe
  title="Ubicación Edificio Smerald"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.7031550736321!2d-78.4830753!3d-0.182621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a875b6644d1%3A0x59b109aae61e6382!2sEdificio%20Smerald!5e0!3m2!1ses-419!2sec!4v1719809485376!5m2!1ses-419!2sec"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>
        
        {/* Info de contacto */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Contacto</h2>
          
          <div>
            <h3 className="font-semibold text-lg">Dirección</h3>
            <p> Sector: Ciudadela Benalcázar  Dirección: Av. de los Shyris N34-328 y Holanda , Quito 170135</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Correo Electrónico</h3>
            <a href="mailto:info@workandtravel.com" className="text-blue-600 hover:underline">
              info@workandtravel.com
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Teléfonos</h3>
            <p>+593 987 654 321</p>
            <p>+593 123 456 789</p>
          </div>
          
          <div>
          
           
          </div>
        </div>
        
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
  
      </section>

  );
};

export default Contacto;
