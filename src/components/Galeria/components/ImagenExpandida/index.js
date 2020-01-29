import React from 'react';
import Imagen from './../../../Imagen';
import Boton from './components/Boton';
import DescripcionImagen from './components/DescripcionImagen';
import flecha from "../../../img/flecha.svg"
import style from './styles.css';


function ImagenExpandida(props){
    return(
        <div className="contenedor-expandida">
            <Imagen className='imagen-expandida' rutaImagen={props.imagenSeleccionada} />
             <Boton className="Boton1 " icono={flecha} id="sig" />
             <img src="flecha"></img>
             <Boton className="Boton2 boton" icono=">"  id="ant" />
             <Boton className="Boton3 boton" icono="X"  id="cerrar"/>
            <DescripcionImagen />
        </div>
    )
}


export default ImagenExpandida;