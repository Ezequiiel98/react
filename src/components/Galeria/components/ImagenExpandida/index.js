import React from 'react';
import style from './styless.css';

function ImagenExpandida(props){
    return(
        <img  className="imagenExp" src={props.imagenSeleccionada}></img>
    )
}


export default ImagenExpandida;