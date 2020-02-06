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

  handleClick = ({ target }) => this.setState(
    { descripcionImagen: !this.state.descripcionImagen },
    () => this.state.descripcionImagen ? target.classList.add('btn-rotar') : target.classList.remove('btn-rotar')
  );

  render() {
    const indexSeleccionado = this.props.indexSeleccionado;
    return (
      <div className="descripcion-imagen">
        <Boton  onClick={this.handleClick} className="btn-descripcion" icono={this.props.icono} />
        {this.state.descripcionImagen && <Descripcion descripciones={this.descripciones[indexSeleccionado]} />}
      </div>
    );
  };
};

export default DescripcionImagen;
