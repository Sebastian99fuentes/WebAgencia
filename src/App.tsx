
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import ImgBar from './Components/ImageComponenteBar/ImgBar';
import Navbar from './Components/Navbar/Navbar';
import Programas from './Components/Programas/Programas';
import Requisitos from './Components/Requisitos/Requisitos';
import Testimonios from './Components/Testimonios/Testimonios';





function App() {
  return (
    <>
   
 <Navbar />
 
      <main className="pt-10 space-y-10">
        <section id="inicio"><Hero /></section>
        <section id="programas"><Programas /></section>
        <ImgBar
         head="Anfitriones Work and Travel"
         content="A lo largo de cada temporada, nuestros anfitriones han recibido con entusiasmo a jóvenes de todo el mundo, brindándoles una experiencia inolvidable en sus destinos de trabajo. En esta sección podrás ver algunas de las personas que hicieron posible cada aventura, guiando, apoyando y compartiendo su cultura con quienes participaron en el programa Work and Travel. ¡Ellos son parte esencial del intercambio!"
         images={[
         { src: '/images/Programas/wtv.webp', alt: 'Work and Travel' },
         { src: '/images/Programas/wtv1.webp', alt: 'Au Pair' },
         { src: '/images/Programas/wtv3.webp', alt: 'Camp USA' },
         ]}
          />
                  <ImgBar
         head="Anfitriones Professional Exchange"
         content="En el programa Professional Exchange, nuestros anfitriones desempeñan un papel clave al ofrecer un entorno laboral enriquecedor y profesional a estudiantes y jóvenes talentosos de todo el mundo. A través de su guía y apoyo, los participantes desarrollan habilidades prácticas, mejoran su dominio del idioma y se sumergen en una cultura laboral internacional. Aquí te presentamos a algunos de los anfitriones que han hecho posible estas experiencias únicas."
         images={[
         { src: '/images/Programas/Pro.webp', alt: 'Work and Travel' },
         { src: '/images/Programas/Pro3.webp', alt: 'Au Pair' },
         { src: '/images/Programas/Pro5.webp', alt: 'Camp USA' },
         ]}
          />
                  <ImgBar
         head="Anfitriones Curso de Idiomas"
         content="Los anfitriones del Curso de Idiomas brindan una experiencia educativa y cultural completa. Acompañan a los estudiantes en su proceso de inmersión lingüística, ofreciéndoles un ambiente acogedor y lleno de oportunidades para practicar el idioma en situaciones reales. Gracias a ellos, aprender un nuevo idioma se convierte en una vivencia auténtica, cercana y transformadora."
         images={[
         { src: '/images/Programas/Pro4.webp', alt: 'Work and Travel' },
         { src: '/images/Programas/Pro2.webp', alt: 'Au Pair' },
         { src: '/images/Programas/Test6.webp', alt: 'Camp USA' },
         ]}
          />
        <section id="requisitos"><Requisitos /></section>
        <section id="testimonios"><Testimonios /></section>
        <section id="contacto"><Contacto /></section>
          <Footer />
      </main>
    

     
    </>
  );
}

export default App;