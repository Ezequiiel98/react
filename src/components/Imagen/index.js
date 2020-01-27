import React from 'react';
import styles from './styless.css';

function Imagen(props){  
    let {handleClick, numeroImagen} = props;

    return( 
      <img  onClick={handleClick} id={numeroImagen} className='imagen' src={numeroImagen}/>    
    )
}


export default Imagen;