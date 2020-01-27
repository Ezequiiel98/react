import React from 'react';
import Imagen from './../../../Imagen';
import styles from './styles.css';



function CuadrillaImagenes(props){

    let {numeroImagenes, handleClick} = props;
    console.log(handleClick)

    return(
        <div className="cuadrilla-imagenes">
            {numeroImagenes.map( (numeroImagen)=>
                <Imagen handleClick={handleClick} key={numeroImagen} numeroImagen={numeroImagen} />
            )}
        </div>
    )
}


export default CuadrillaImagenes;