import React from 'react';
import Boton from '../Boton';
import flecha from '../../../ImagenExpandida/flecha.svg'
import styles from './styles.css'

function DescripcionImagen(){
    return(
        <div className="contenedor-descripcion">
          <Boton  id="btn-descripcion" icono={flecha} />
           
            <p>Loremsita Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita Loremsita Loremsita    Loremsita Loremsita</p>  
        </div>
    )
}

export default DescripcionImagen;