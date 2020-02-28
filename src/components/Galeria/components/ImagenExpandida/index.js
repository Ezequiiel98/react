import React from 'react';

import Imagen from '../Imagen';
import flecha from '../../../../assets/iconos/flecha.svg';
import cruz from '../../../../assets/iconos/cruz.svg';

import Boton from './components/Boton';
import DescripcionImagen from './components/DescripcionImagen';
import IndicadorImagen from './components/IndicadorImagen';
import styles from './styles.module.scss';

class ImagenExpandida extends React.Component {
  cerrar = () => this.props.onClose();

  siguiente = () => {
    const { indexSeleccionado } = this.props;
    const largoImagenes = this.props.rutasImagenes.length;
    /*
            indexSeleccionado empieza  en 0  y   largoImagenes = 5. Entonces:

                 indexSeleccionado +  1        % largoImagenes
                  0 + 1 = 1   1 % 5 = 1
                  1 + 1 = 2   2 % 5 = 2
                  2 + 1 = 3   3 % 5 = 3
                  3 + 1 = 4   4 % 5 = 4
                  4 + 1 = 5   5 % 5 = 0 (y aca logras que de la vuelta a todos los elementos del array)


    */
    const imagenSeleccionada = this.props.rutasImagenes[(indexSeleccionado + 1) % largoImagenes];
    this.props.changeState(true, imagenSeleccionada, (indexSeleccionado + 1) % largoImagenes);
  };

  anterior = () => {
    const { indexSeleccionado } = this.props;
    const largoImagenes = this.props.rutasImagenes.length;
    /*
        indexSeleccionado empieza  en 4 (el ultimo indexSeleccionado) y   largoImagenes = 5. Entonces:

             indexSeleccionado + largoImagen - 1         % largoImagenes
              4 + 4 = 8                8 % 5  =  3 (5 divindexSeleccionadoo 8 te queda 3 de resto)
              3 + 4 =  7               7 % 5 = 2
              2 + 4 = 6                6 % 5 = 1
              1 + 4 = 5                5 % 5 = 0
              0 + 4 = 4                4 % 5 = 4

    */
    const imagenSeleccionada = this.props.rutasImagenes[
      (indexSeleccionado + largoImagenes - 1) % largoImagenes
    ];
    this.props.changeState(true, imagenSeleccionada, (indexSeleccionado + largoImagenes - 1) % largoImagenes);
  };

  descripcion = () => this.props.descripciones[this.props.indexSeleccionado];

  render() {
    return (
      <div className={styles.contenedorExpandida}>
        <Imagen className="imagen-expandida" rutaImagen={this.props.imagenSeleccionada} />
        <Boton icono={flecha} onClick={this.anterior} className={styles.btnAnterior} />
        <Boton icono={flecha} onClick={this.siguiente} className={styles.btnSiguiente} />
        <Boton icono={cruz} onClick={this.cerrar} className={styles.btnCerrar} />
        <DescripcionImagen descripcion={this.descripcion()} icono={flecha} />
        <IndicadorImagen
          indexSeleccionado={this.props.indexSeleccionado}
          rutasImagenes={this.props.rutasImagenes}
        />
      </div>
    );
  }
}

export default ImagenExpandida;
