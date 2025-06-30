import { Link } from 'react-router-dom';
import logo from "./image.png";
import "./Navbar.css";

import { useState } from 'react';


const Navbar = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Función para manejar la apertura y cierre del menú
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="font-bold text-xl">Work & Travel</h1>
        <ul className="flex space-x-6">
          <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
          <li><a href="#programas" className="hover:text-blue-500">Programas</a></li>
          <li><a href="#requisitos" className="hover:text-blue-500">Requisitos</a></li>
          <li><a href="#testimonios" className="hover:text-blue-500">Testimonios</a></li>
          <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
        </ul>
      </div>
    </nav>
    // <nav className="relative container mx-auto p-6">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center space-x-20">
    //       <Link to="/">
    //         <img src={logo} alt="" className="logo-img" />
    //       </Link>
          
    //       {/* Menu en desktop */}
    //       <div className="hidden font-bold lg:flex">
    //         <Link to="/search" className="text-black hover:text-darkBlue">
    //         Nosotros
    //         </Link>
    //       </div>
    //       <div className="hidden font-bold lg:flex">
    //         <Link to="/Areas" className="text-black hover:text-darkBlue">
    //         Testimonios
    //         </Link>
    //       </div>
    //       <div className="hidden font-bold lg:flex">
    //         <Link to="/Implementos" className="text-black hover:text-darkBlue">
    //         Nosotros
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Botón de hamburguesa para pantallas pequeñas */}
    //     <div className="lg:hidden">
    //       <button onClick={toggleMenu} className="text-black focus:outline-none">
    //         <span className="material-icons">menu</span>
    //       </button>
    //     </div>

    //     {/* Menú en pantallas pequeñas */}
    //     <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg`}>
    //       <div className="flex flex-col items-center">
    //         <Link to="/search" className="py-2 px-4 text-black hover:text-darkBlue">Nosotros</Link>
    //         <Link to="/Areas" className="py-2 px-4 text-black hover:text-darkBlue"> Reservar Espacios Físicos</Link>
    //         <Link to="/Implementos" className="py-2 px-4 text-black hover:text-darkBlue"> Reservar  Implementos Deportivos</Link>
    //         <Link to="/Register" className="block py-2 text-black hover:text-darkBlue">Regístrate</Link>
    //         <Link to="/Login" className="block py-2 text-black hover:text-darkBlue">Iniciar Sesión</Link>
 
    //       </div>
    //     </div>


    //   </div>
    // </nav>
  );
};

export default Navbar;