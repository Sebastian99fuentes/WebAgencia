

const Contacto = () => {
  return (
    <section id="contacto" className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Mapa o Imagen */}
        <div className="w-full h-80 md:h-auto rounded overflow-hidden shadow-lg">
          {/* Opción 1: imagen estática */}
          {/* <img src="/images/mapa.jpg" alt="Mapa ubicación" className="w-full h-full object-cover" /> */}
          
          {/* Opción 2: iframe Google Maps */}
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
            <p>RG89+W6H, n 34 328, Quito 170135</p>
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
            <h3 className="font-semibold text-lg">Redes Sociales</h3>
            <div className="flex space-x-4 text-blue-600">
              <a href="https://facebook.com/tuempresa" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.87v-6.98h-2.6v-2.89h2.6v-2.2c0-2.57 1.54-4 3.9-4 1.13 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62v1.86h2.86l-.46 2.89h-2.4v6.98A10 10 0 0022 12z"/>
                </svg>
              </a>
              <a href="https://instagram.com/tuempresa" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm4.25 5.2a4.05 4.05 0 110 8.1 4.05 4.05 0 010-8.1zm5.1-.95a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contacto;
