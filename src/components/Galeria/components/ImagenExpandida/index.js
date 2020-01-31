import React from 'react';
import Imagen from './../../../Imagen';
import Boton from './components/Boton';
import DescripcionImagen from './components/DescripcionImagen';
import flecha from "./flecha.svg"
import cruz from "./cruz.svg"
import style from './styles.css';

class ImagenExpandida extends React.Component{
    
    cerrar = () => {    
        
        this.props.handleClick(false);
    }
    
    siguiente = () => {
        let id = parseInt(this.props.id);
        let imagenSeleccionada = this.props.rutasImagenes[id + 1];
        if (id === this.props.rutasImagenes.length - 1) {
            id = 0 ;
            
            imagenSeleccionada = this.props.rutasImagenes[0];

            this.props.handleClick(true, imagenSeleccionada, id);
        } else {
            id++;
            this.props.handleClick(true, imagenSeleccionada, id);
        }
    }

    anterior = () => {

        let id = parseInt(this.props.id);
        let imagenSeleccionada = this.props.rutasImagenes[id - 1];

        if (id === 0) {
            id =  this.props.rutasImagenes.length - 1;  
            imagenSeleccionada = this.props.rutasImagenes[id];
            this.props.handleClick(true, imagenSeleccionada, id);
        } else {
            id--;
            this.props.handleClick(true, imagenSeleccionada, id);
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