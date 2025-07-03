const Programas = () => (
    <section id="programas" className="py-10 flex flex-col justify-center items-center text-center px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2
       style={{ color: 'oklch(52.7% 0.154 150.069)' }}  
      className="text-3xl font-bold text-blue-700 mb-10">Programas</h2>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        
        <div className="p-6 border rounded shadow hover:shadow-lg transition bg-white">
          <h3
           style={{ color: 'oklch(52.7% 0.154 150.069)' }} 
          className="text-xl font-semibold text-blue-600">Work & Travel</h3>
          <div className="space-y-6">
  <p className="text-gray-700 text-lg">
    Vive una experiencia única en EE.UU. mientras trabajas, viajas y mejoras tu inglés...
  </p>
</div>
          <p className="text-gray-700 text-lg">
            Vive y trabaja en EE.UU. durante tus vacaciones universitarias.
          </p>
          <p className="text-gray-700 text-lg">
            Mejora tu inglés, haz amigos de todo el mundo y sumérgete en una cultura diferente.
          </p>
        </div>

        <div className="p-6 border rounded shadow hover:shadow-lg transition bg-white">
          <h3
           style={{ color: 'oklch(52.7% 0.154 150.069)' }} 
          className="text-xl font-semibold text-blue-600">Professional Exchange</h3>
          <p className="text-gray-700 text-lg">
            Gana experiencia internacional en tu carrera profesional.
          </p>
          <p className="text-gray-700 text-lg">
            Si eres recién graduado, este es tu salto al mundo laboral global.
          </p>
        </div>

        <div className="p-6 border rounded shadow hover:shadow-lg transition bg-white">
          <h3
           style={{ color: 'oklch(52.7% 0.154 150.069)' }} 
          className="text-xl font-semibold text-blue-600">Cursos de Idiomas</h3>
          <p className="text-gray-700 text-lg">
            Aprende o perfecciona un idioma en el país donde se habla.
          </p>
          <p className="text-gray-700 text-lg">
            Combina clases dinámicas con experiencias reales en el extranjero.
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default Programas;