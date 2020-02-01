import React from 'react';
import Titulo from './components/Titulo';
import rutasImagenes from '../../constants/imagenes'
import CuadrillaImagenes from './components/CuadrillaImagenes';
import ImagenExpandida from './components/ImagenExpandida';



class Galeria extends React.Component{
    state = {
        imagenExpandida: false,
        imagenSeleccionada: 0,
        id: 0

    };

                        
    changeState = (imagenExpandida, imagenSeleccionada, id) => this.setState({
        imagenExpandida: imagenExpandida,
        imagenSeleccionada: imagenSeleccionada,
        id: id
    });         
                             
    render(){
        
        return(
            <div>
                <Titulo titulo='Titulo Galeria' />

                <CuadrillaImagenes changeState={this.changeState} rutasImagenes={rutasImagenes} />

                 
                 {
                     this.state.imagenExpandida === true && 
                        <ImagenExpandida 
                                         imagenSeleccionada={this.state.imagenSeleccionada}
                                         changeState={this.changeState} 
                                         rutasImagenes={rutasImagenes} 
                                         id={this.state.id}
                                         />
                                            }
            </div>
        );
    };
};



export default Galeria;