import React from 'react';
import Imagen from './../../../Imagen';
import styles from './styles.css';


function CuadrillaImagenes(props){

    let {rutasImagenes, onClick} = props;
    
    let handleClick = (event) =>{
        let imagenExpandida = true;
         let imagenSeleccionada = event.target.src;
         let id = event.target.id;
         console.log(imagenSeleccionada,imagenExpandida, id)
         onClick(imagenExpandida, imagenSeleccionada,id);
    };

    return(
        <div className="cuadrilla-imagenes">
            {rutasImagenes.map( (rutaImagen, index)=>
                <Imagen handleClick={handleClick} key={index} id={index} className='imagen-cuadrilla' rutaImagen={rutaImagen} />
            )}
        </div>
    )
}


export default CuadrillaImagenes;