const Requisitos = () => (
//  <section className="bg-gray-50 py-16 px-4" id="requisitos">
  <section id="requisitos" className="bg-gray-100 flex flex-col justify-center items-center text-center h-[60vh]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Requisitos y Costos</h2>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        
        {/* Work & Travel */}
        <div className="p-6 border rounded shadow hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Work & Travel</h3>
          <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
            <li>Edad: 18-28 años</li>
            <li>Ser estudiante universitario activo</li>
            <li>Inglés conversacional</li>
            <li>Disponibilidad para viajar en verano</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Costo aproximado: <strong>$2,000 - $3,000</strong></p>
        </div>

        {/* Professional Exchange */}
        <div className="p-6 border rounded shadow hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Professional Exchange</h3>
          <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
            <li>Edad: hasta 35 años</li>
            <li>Ser graduado o en último año de universidad</li>
            <li>Inglés intermedio o avanzado</li>
            <li>Área de estudios relacionada con la práctica</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Costo aproximado: <strong>$3,000 - $5,000</strong></p>
        </div>

        {/* Cursos de Idiomas */}
        <div className="p-6 border rounded shadow hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Cursos de Idiomas</h3>
          <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
            <li>Edad: desde 16 años</li>
            <li>No se requiere nivel previo</li>
            <li>Duración flexible: desde 2 semanas</li>
            <li>Pasaporte vigente</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Costo aproximado: <strong>$800 - $2,500</strong></p>
        </div>

      </div>
    </div>
  </section>
);

export default Requisitos;