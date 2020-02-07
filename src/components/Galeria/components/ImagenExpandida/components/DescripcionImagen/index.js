import React from 'react';
import Boton from '../Boton';
import Descripcion from './components/Descripcion';
import './styles.css'

class DescripcionImagen extends React.Component {
  state = {
    descripcionVisible: false
  };

  handleClick = ({ target }) => this.setState(
    { descripcionVisible: !this.state.descripcionVisible },
    () => this.state.descripcionVisible ? target.classList.add('btn-rotar') : target.classList.remove('btn-rotar')
  );

  render() {
    const {icono, descripcion} = this.props;
    return (
      <div className="descripcion-imagen">
        <Boton  onClick={this.handleClick} className="btn-descripcion" icono={icono} />
        {this.state.descripcionVisible && <Descripcion descripcion={descripcion} />}
      </div>
    );
  };
};

export default DescripcionImagen;
