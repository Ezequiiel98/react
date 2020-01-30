import React from 'react';
import Titulo from './../Titulo';
import imagen_0 from '../img/imagen-0.jpg';
import imagen_1 from '../img/imagen-1.jpg';
import imagen_2 from '../img/imagen-2.jpg';
import imagen_3 from '../img/imagen-3.jpg';
import imagen_4 from '../img/imagen-4.jpg';
import imagen_5 from '../img/imagen-5.jpg';
import CuadrillaImagenes from './components/CuadrillaImagenes';
import ImagenExpandida from './components/ImagenExpandida';



class Galeria extends React.Component{
    state = {
        imagenExpandida: false,
        imagenSeleccionada: 0
    };

    handleClick = (event) => this.setState({
                                            imagenExpandida: true,
                                            imagenSeleccionada: event.target.src
                                        });
    
                        
    handleClickExpandida = (imagenExpandida, imagenSeleccionada) => this.setState({
        imagenExpandida: imagenExpandida,
        imagenSeleccionada: imagenSeleccionada
    });         
                             
    render(){
        let rutasImagenes = [imagen_0,imagen_1,imagen_2,imagen_3,imagen_4,imagen_5]
        return(
            <div>
                <Titulo titulo='Titulo Galeria' />

                <CuadrillaImagenes handleClick={this.handleClick} rutasImagenes={rutasImagenes} />

                {this.state.imagenExpandida === true && <ImagenExpandida imagenSeleccionada={this.state.imagenSeleccionada} imagenExpandida={this.state.imagenExpandida} handleClickExpandida={this.handleClickExpandida} rutasImagenes={rutasImagenes} />}
            </div>
        );
    };
};



export default Galeria;