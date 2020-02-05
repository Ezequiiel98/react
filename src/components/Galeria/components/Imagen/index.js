import React from 'react';
import './styles.css';

function Imagen({
  onClick, rutaImagen, className,
}) {
  return (
    <img alt="imagen-galeria" onClick={onClick} className={className} src={rutaImagen} />
  );
}


export default Imagen;
