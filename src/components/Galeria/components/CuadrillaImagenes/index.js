import React from 'react';
import Imagen from '../Imagen';
import   './styles.css';


function CuadrillaImagenes({rutasImagenes, changeState}){
    
    let handleClick = (event) =>{
        let imagenExpandida = true;
         let imagenSeleccionada = event.target.src;
         let id = parseInt(event.target.id);

         changeState(imagenExpandida, imagenSeleccionada,id);
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