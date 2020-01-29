import React from 'react';
import Imagen from './../../../Imagen';
import styles from './styles.css';


function CuadrillaImagenes(props){

    let {rutasImagenes, handleClick} = props;

    return(
        <div className="cuadrilla-imagenes">
            {rutasImagenes.map( (rutaImagen)=>
                <Imagen handleClick={handleClick} key={rutaImagen} className='imagen-cuadrilla' rutaImagen={rutaImagen} />
            )}
        </div>
    )
}


export default CuadrillaImagenes;