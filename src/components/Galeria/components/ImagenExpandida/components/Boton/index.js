import React from 'react';
import styles from './styles.css'

function Boton(props){
    return(
        <div className="contenedor-boton">
            <button onClick={props.handleClick} className={props.className} ><img src={props.icono}></img></button>
        </div>
    ) 
}

export default Boton;