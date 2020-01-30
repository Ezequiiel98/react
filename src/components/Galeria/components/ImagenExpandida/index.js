import React from 'react';
import Imagen from './../../../Imagen';
import Boton from './components/Boton';
import DescripcionImagen from './components/DescripcionImagen';
import flecha from "./flecha.svg"
import cruz from "./cruz.svg"
import style from './styles.css';
let i = 0;
class ImagenExpandida extends React.Component{
    
    cerrar = (event) => {    
        
        this.props.handleClickExpandida(false)
    }

    siguiente = () => {
  
        console.log(i)
        let imagenSeleccionada = this.props.rutasImagenes[i];
        if (i === this.props.rutasImagenes.length - 1) {
            this.props.handleClickExpandida(true, imagenSeleccionada)
            i = 0;
        } else {
            this.props.handleClickExpandida(true, imagenSeleccionada)
            i++
        }
    }

    anterior = () => {
        console.log(i)
        let imagenSeleccionada = this.props.rutasImagenes[i];
        if (i === 0) {
            this.props.handleClickExpandida(true, imagenSeleccionada)
            i =  this.props.rutasImagenes.length - 1;
        } else {
            this.props.handleClickExpandida(true, imagenSeleccionada)
            i--
        }
    }
    
    render(){
        return(
            <div className="contenedor-expandida">
                <Imagen className='imagen-expandida' rutaImagen={this.props.imagenSeleccionada} />
                 <Boton icono={flecha} handleClick={this.anterior}   id="btn-anterior" />
                 <Boton icono={flecha} handleClick={this.siguiente}  id="btn-siguiente" />
                 <Boton icono={cruz}   handleClick={this.cerrar} id="btn-cerrar"/>
                <DescripcionImagen />
            </div>
        )
    }
}


export default ImagenExpandida;