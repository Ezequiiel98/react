import React from 'react';
import styles from './styles.css'

function Boton(props){
    return(

            <button onClick={props.handleClick} className='btn' id={props.id}><img src={props.icono} alt="icono"></img></button>
      
    ) 
}

export default Boton;