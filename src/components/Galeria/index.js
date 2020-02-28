import React from 'react';

import rutasImagenes from '../../constants/imagenes';
import descripciones from '../../constants/descripciones';

import Titulo from './components/Titulo';
import CuadrillaImagenes from './components/CuadrillaImagenes';
import ImagenExpandida from './components/ImagenExpandida';

class Galeria extends React.Component {
  state = {
    imagenExpandida: false,
    imagenSeleccionada: 0,
    indexSeleccionado: 0
  };

  onClose = () => this.setState({ imagenExpandida: false });

  changeState = (imagenExpandida, imagenSeleccionada, indexSeleccionado) =>
    this.setState({ imagenExpandida, imagenSeleccionada, indexSeleccionado });

  render() {
    return (
      <>
        <Titulo titulo="Titulo Galeria" />
        <CuadrillaImagenes changeState={this.changeState} rutasImagenes={rutasImagenes} />
        {this.state.imagenExpandida && (
          <ImagenExpandida
            imagenSeleccionada={this.state.imagenSeleccionada}
            changeState={this.changeState}
            onClose={this.onClose}
            rutasImagenes={rutasImagenes}
            indexSeleccionado={this.state.indexSeleccionado}
            descripciones={descripciones}
          />
        )}
      </>
    );
  }
}

export default Galeria;
