import React from 'react';

import Boton from '../Boton';

import Descripcion from './components/Descripcion';
import styles from './styles.module.scss';

class DescripcionImagen extends React.Component {
  state = {
    descripcionVisible: false
  };

  handleClick = ({ target }) =>
    this.setState({ descripcionVisible: !this.state.descripcionVisible }, () =>
      this.state.descripcionVisible
        ? target.classList.add(styles.btnRotar)
        : target.classList.remove(styles.btnRotar)
    );

  render() {
    const { icono, descripcion } = this.props;
    return (
      <div className={styles.descripcionImagen}>
        <Boton onClick={this.handleClick} className={styles.btnDescripcion} icono={icono} />
        {this.state.descripcionVisible && <Descripcion descripcion={descripcion} />}
      </div>
    );
  }
}

export default DescripcionImagen;
