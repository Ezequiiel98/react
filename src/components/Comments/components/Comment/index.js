import React from 'react';

 function Comment ({comentario: {nombre, comentario}}){
    return(
      <div className="contenedor-comentario">
          <h2 className="nombre" >{nombre}</h2>
          <p className="comentario">{comentario}</p>
      </div>
    );
  
} 

export default Comment;