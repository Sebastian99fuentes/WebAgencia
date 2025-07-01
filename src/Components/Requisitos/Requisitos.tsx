const Requisitos = () => (
      <section id="Requisitos" className="py-10 flex flex-col justify-center items-center text-center px-4">
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
               <h2 className="text-3xl font-bold text-blue-700 mb-10">Requisitos y Costos</h2>
          </div>
 <div className="max-w-6xl mx-auto text-center">
      
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

export default Requisitos;

