import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faImages, faUser } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import LogoAnimation from '../components/LogoAnimation'; // Logo animado

const Home = () => {
  const titleRef = useRef(null); // Referencia para el título
  const subtitleRef = useRef(null); // Referencia para el subtítulo
  const button1Ref = useRef(null); // Referencia para el primer botón
  const button2Ref = useRef(null); // Referencia para el segundo botón

  // Animación de GSAP al montar el componente
  useEffect(() => {
    // Animar el título
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out" }
    );

    // Animar el subtítulo
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3, delay: 1, ease: "power3.out" }
    );

    // Animar los botones con escala creciente
    gsap.fromTo(
      button1Ref.current,
      { opacity: 0, scale: 0.5 }, // Comienza pequeño y transparente
      { opacity: 1, scale: 1, duration: 1, delay: 2, ease: "elastic.out(1, 0.75)" } // Aparece y se agranda
    );

    gsap.fromTo(
      button2Ref.current,
      { opacity: 0, scale: 0.5 }, // Comienza pequeño y transparente
      { opacity: 1, scale: 1, duration: 1, delay: 2.3, ease: "elastic.out(1, 0.75)" } // Aparece y se agranda
    );
  }, []);

  // Función para manejar la animación de hover
  const handleMouseEnter = (buttonRef) => {
    gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3, ease: "power1.out" }); // Aumentar tamaño al pasar el ratón
  };

  const handleMouseLeave = (buttonRef) => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power1.out" }); // Regresar al tamaño original
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center p-6 bg-gray-900 bg-opacity-50 rounded-lg">
        {/* Animación del logo */}
        <LogoAnimation />

        {/* Título con referencia */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight text-shadow-default"
        >
          Bienvenido a mi Portafolio
        </h1>

        {/* Subtítulo con referencia */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white mb-6 text-shadow-default"
        >
          Explora mis últimos trabajos, descubre mi estilo y conoce más sobre mi trayectoria como dibujante. ¡Gracias por visitarme!
        </p>

        {/* Botones con animación */}
        <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/jobs"
            ref={button1Ref} // Referencia del primer botón
            className="bg-dark-blue text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:text-light-blue hover:bg-dark-gray hover:shadow-xl transition duration-300 ease-in-out flex items-center"
            onMouseEnter={() => handleMouseEnter(button1Ref)} // Manejar evento de entrada del ratón
            onMouseLeave={() => handleMouseLeave(button1Ref)} // Manejar evento de salida del ratón
          >
            <FontAwesomeIcon icon={faImages} className="mr-2" />
            Ver Galería
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>

          <Link
            to="/profile"
            ref={button2Ref} // Referencia del segundo botón
            className="bg-dark-blue text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:text-light-blue hover:bg-dark-gray hover:shadow-xl transition duration-300 ease-in-out flex items-center"
            onMouseEnter={() => handleMouseEnter(button2Ref)} // Manejar evento de entrada del ratón
            onMouseLeave={() => handleMouseLeave(button2Ref)} // Manejar evento de salida del ratón
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Ver Perfil
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
