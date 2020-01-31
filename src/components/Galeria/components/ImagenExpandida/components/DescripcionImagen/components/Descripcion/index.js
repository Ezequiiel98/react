import React from 'react';
import Titulo from '../../../../../../../Titulo';
import './styles.css';

function Descripcion(props){
    let {titulo,descripcion} = props.descripciones;
    return(
       <div className="contenedor-descripcion">
            <Titulo titulo={titulo}/>
            <p className="descripcion">{descripcion}</p>
       </div>
    )
}

export default Descripcion;