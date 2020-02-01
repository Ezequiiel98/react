import React from 'react';
import './styles.css';

function Imagen(props){  

  let {handleClick, rutaImagen, className, id} = props;

    return( 
      <img alt="imagen-galeria" onClick={handleClick} className={className} src={rutaImagen} id={id} />    
    )
}


export default Imagen;