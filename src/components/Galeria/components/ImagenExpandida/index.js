import React from 'react';
import Imagen from '../Imagen';
import Boton from './components/Boton';
import DescripcionImagen from './components/DescripcionImagen';
import IndicadorImagen from './components/IndicadorImagen';
import flecha from "../../../../assets/iconos/flecha.svg"
import cruz from "../../../../assets/iconos/cruz.svg"
import './styles.css';

class ImagenExpandida extends React.Component{
    
    cerrar = () => {    
        
        this.props.changeState(false);
    }
    

    siguiente = () => {
        let id = this.props.id;
        let largoImagenes = this.props.rutasImagenes.length;
         /* 
            id empieza  en 0  y   largoImagenes = 5. Entonces:
                
                 id +  1        % largoImagenes
                  0 + 1 = 1   1 % 5 = 1 
                  1 + 1 = 2   2 % 5 = 2 
                  2 + 1 = 3   3 % 5 = 3
                  3 + 1 = 4   4 % 5 = 4  
                  4 + 1 = 5   5 % 5 = 0 (y aca logras que de la vuelta a todos los elementos del array) 

              
        */
        let imagenSeleccionada = this.props.rutasImagenes[(id + 1) % largoImagenes];
        this.props.changeState(true, imagenSeleccionada, (id + 1) % largoImagenes);
    }

    anterior = () => {
        let id = this.props.id;
        let largoImagenes = this.props.rutasImagenes.length;
        /* 
            id empieza  en 4 (el ultimo id) y   largoImagenes = 5. Entonces:
                
                 id + largoImagen - 1         % largoImagenes
                  4 + 4 = 8                8 % 5  =  3 (5 divido 8 te queda 3 de resto) 
                  3 + 4 =  7               7 % 5 = 2 
                  2 + 4 = 6                6 % 5 = 1
                  1 + 4 = 5                5 % 5 = 0 
                  0 + 4 = 4                4 % 5 = 4
              
        */
        let imagenSeleccionada = this.props.rutasImagenes[(id + largoImagenes - 1) % largoImagenes];
        this.props.changeState(true, imagenSeleccionada, (id  + largoImagenes - 1) % largoImagenes );                    
    }    
    render(){
        return(
            <div className="contenedor-expandida">
                <Imagen className='imagen-expandida' rutaImagen={this.props.imagenSeleccionada} />
                 <Boton icono={flecha} handleClick={this.anterior}   id="btn-anterior" />
                 <Boton icono={flecha} handleClick={this.siguiente}  id="btn-siguiente" />
                 <Boton icono={cruz}   handleClick={this.cerrar} id="btn-cerrar"/>
                <DescripcionImagen icono={flecha} id={this.props.id} />
                <IndicadorImagen id={this.props.id} rutasImagenes={this.props.rutasImagenes} />
            </div>
        )
    }
}


export default ImagenExpandida;