import React from 'react';
import Boton from '../Boton';
import flecha from '../../../ImagenExpandida/flecha.svg'
import styles from './styles.css'

class DescripcionImagen extends React.Component {
        state = {
            descripcionImagen: false
        };
        
        handleClick = (event) => {

            this.setState({
                descripcionImagen: !this.state.descripcionImagen
            });

            if (this.state.descripcionImagen === false) {
                event.target.classList.add('btn-rotar');

            } else {
                event.target.classList.remove('btn-rotar');
            }
        }

   render(){
        return(
            <div className="contenedor-descripcion">
                <Boton  handleClick={this.handleClick} id="btn-descripcion" icono={flecha} />

                 {this.state.descripcionImagen === true &&  <p className="descripcion">juan pedro lasd asd asd  o ijon oin oasd asd  asd  juan pedro lasd asd asd  o ijon oin oasd asd  asd juan pedro lasd asd asd  o ijon oin oasd asd  asd juan pedro lasd asd asd  o ijon oin oasd asd  asd </p> }

            </div>
        )
   }

}

export default DescripcionImagen;