const Footer = () => (
  <footer className="bg-white  p-4 text-center">
    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} GoNexo.S.A. Todos los derechos reservados.</p>
            <div className="flex space-x-4 text-blue-600 justify-center">
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

  </footer>
);

export default Footer;