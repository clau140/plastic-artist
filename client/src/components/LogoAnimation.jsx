import React, { useEffect } from 'react';
import Vivus from 'vivus';
import { ReactComponent as SrSVG } from '../assets/sr.svg'; // Importamos el archivo sr.svg

const LogoAnimation = () => {
  useEffect(() => {
    // Inicializamos Vivus para animar el SVG
    new Vivus('sr-svg', {
      type: 'delayed',  // Tipo de animación
      duration: 200,    // Duración en cuadros
      animTimingFunction: Vivus.EASE,  // Función de temporización
    });
  }, []);

  return (
    <div>
      {/* Renderizamos el SVG y le damos un ID para que Vivus pueda seleccionarlo */}
      <SrSVG id="sr-svg" />
    </div>
  );
};

export default LogoAnimation;
