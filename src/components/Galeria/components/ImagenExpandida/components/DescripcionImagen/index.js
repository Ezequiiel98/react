import React from 'react';
import Boton from '../Boton';
import Descripcion from './components/Descripcion';
import descripciones from './descripciones'
import flecha from '../../../ImagenExpandida/flecha.svg'
import styles from './styles.css'

class DescripcionImagen extends React.Component {
        state = {
            descripcionImagen: false
        };
        descripciones = descripciones;
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
       let id = this.props.id;
   

        return(
            <div className="contenedor-descripcion">
                <Boton  handleClick={this.handleClick} id="btn-descripcion" icono={flecha} />

                 {this.state.descripcionImagen === true && <Descripcion titulo={ this.descripciones[id].titulo} descripcion={ this.descripciones[id].descripcion} />}

            </div>
        )
   }

}

export default DescripcionImagen;