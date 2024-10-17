import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faUser } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import LogoAnimation from '../components/LogoAnimation'; 

const Home = () => {
  const titleRef = useRef(null); 
  const subtitleRef = useRef(null); 
  const button1Ref = useRef(null); 
  const button2Ref = useRef(null); 
  const thankYouRef = useRef(null); 

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3, delay: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      button1Ref.current,
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1, delay: 2, ease: "elastic.out(1, 0.75)" } 
    );

    gsap.fromTo(
      button2Ref.current,
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1, delay: 2.3, ease: "elastic.out(1, 0.75)" } 
    );

    
    gsap.fromTo(
      thankYouRef.current,
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 2, delay: 2.5, ease: "power3.out" } 
    );
  }, []);

  const handleMouseEnter = (buttonRef) => {
    gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3, ease: "power1.out" }); 
  };

  const handleMouseLeave = (buttonRef) => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power1.out" }); 
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> 
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center p-6 bg-gray-900 bg-opacity-50 rounded-lg">
        <LogoAnimation />

        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight text-shadow-default"
        >
          Sergio Rodriguez
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white mb-6 text-shadow-default"
        >
          Explora mis últimos trabajos, descubre mi estilo y conoce más sobre mi trayectoria como dibujante.
        </p>

        <p
          ref={thankYouRef}
          className="text-lg md:text-2xl text-light-blue font-semibold mt-4 text-shadow-default" 
        >
          ¡Gracias por visitarme!
        </p>
{/*
        <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
          

        <Link
  to="/jobs"
  ref={button1Ref}
  className="bg-gradient-to-r from-light-blue to-dark-blue text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-light-blue hover:to-dark-gray hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
  onMouseEnter={() => handleMouseEnter(button1Ref)}
  onMouseLeave={() => handleMouseLeave(button1Ref)}
>
  <FontAwesomeIcon icon={faImages} className="mr-2" />
  Galería
</Link>

<Link
  to="/profile"
  ref={button2Ref}
  className="bg-gradient-to-r from-light-blue to-dark-blue text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-light-blue hover:to-dark-gray hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
  onMouseEnter={() => handleMouseEnter(button2Ref)}
  onMouseLeave={() => handleMouseLeave(button2Ref)}
>
  <FontAwesomeIcon icon={faUser} className="mr-2" />
  Perfil
</Link>

        </div>
        */}
      </div>
    </div>
  );
};

export default Home;

