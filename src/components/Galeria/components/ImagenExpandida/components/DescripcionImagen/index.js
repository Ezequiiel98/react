import React from 'react';
import Boton from '../Boton';
import Descripcion from './components/Descripcion';
import descripciones from '../../../../../../constants/descripciones'
import './styles.css'

class DescripcionImagen extends React.Component {
  state = {
      descripcionImagen: false
  };

  descripciones = descripciones;

  handleClick = event => this.setState(
    { descripcionImagen: !this.state.descripcionImagen },
    () => this.state.descripcionImagen ? event.target.classList.remove('btn-rotar') : event.target.classList.add('btn-rotar')
  );
  
  render() {
    const indexSeleccionado = this.props.indexSeleccionado;
    return (
      <div className="descripcion-imagen">
        <Boton  handleClick={this.handleClick} className="btn-descripcion" icono={this.props.icono} />
        {this.state.descripcionImagen && <Descripcion descripciones={this.descripciones[indexSeleccionado]} />}
      </div>
    );
  };
};

export default DescripcionImagen;
