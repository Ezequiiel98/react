import React from 'react';
import Imagen from './../../../Imagen';
import Boton from './components/Boton';
import DescripcionImagen from './components/DescripcionImagen';
import flecha from "./flecha.svg"
import cruz from "./cruz.svg"
import style from './styles.css';


function ImagenExpandida(props){
    return(
        <div className="contenedor-expandida">
            <Imagen className='imagen-expandida' rutaImagen={props.imagenSeleccionada} />
             <Boton icono={flecha}  id="btn-anterior" />
             <Boton icono={flecha} id="btn-siguiente" />
             <Boton icono={cruz}  id="btn-cerrar"/>
            <DescripcionImagen />
        </div>
    )
}


export default ImagenExpandida;