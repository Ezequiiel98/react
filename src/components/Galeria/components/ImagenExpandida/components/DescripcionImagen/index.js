import React from 'react';
import Boton from '../Boton';
import styles from './styles.css'

function DescripcionImagen(){
    return(
        <div className="contenedor-descripcion">
           <Boton className=' boton boton-descripcion' icono='<' />
            <p>Loremsita Loremsita Loremsita Loremsita Loremsita  Loremsita Loremsita Loremsita </p>
        </div>
    )
}

export default DescripcionImagen;