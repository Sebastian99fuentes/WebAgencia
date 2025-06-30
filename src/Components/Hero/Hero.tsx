const Hero = () => (
  <section className="h-screen bg-blue-50 flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-4xl font-bold text-blue-700 mb-4">
      TU EXPERIENCIA INTERNACIONAL COMIENZA AQUÍ
    </h1>
    <p className="text-lg text-gray-700 max-w-2xl">
      En <strong>[Nombre de tu agencia]</strong> creemos que viajar, trabajar y aprender en el extranjero transforma vidas. 
      Nuestro compromiso es acompañarte desde el primer paso hasta el regreso, ofreciéndote programas seguros, personalizados y accesibles para que vivas tu próxima gran aventura.
    </p>
    <p className="mt-6 text-md text-gray-600 max-w-xl">
      Conectamos culturas, creamos oportunidades y fomentamos experiencias inolvidables. Descubre lo que el mundo tiene para ti.
    </p>
    <a href="#programas" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
      Conoce nuestros programas
    </a>
  </section>
);

export default Hero;