
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programas from './Components/Programas/Programas';
import Requisitos from './Components/Requisitos/Requisitos';
import Testimonios from './Components/Testimonios/Testimonios';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="inicio"><Hero /></section>
        <section id="programas"><Programas /></section>
        <section id="requisitos"><Requisitos /></section>
        <section id="testimonios"><Testimonios /></section>
        <section id="contacto"><Contacto /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;