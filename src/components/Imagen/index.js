import React from 'react';
import styles from './styles.css';

function Imagen(props){  
    let {handleClick, rutaImagen, className} = props;

    return( 
      <img alt="imagen-galeria" onClick={handleClick} className={className} src={rutaImagen}/>    
    )
}


export default Imagen;