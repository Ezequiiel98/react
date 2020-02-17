import React from 'react';
import Comment from './components/Comment';

function Comments({comentarios, numComentario}){

  /* tengo un objeto que es comentarios este adentro tiene otros objetos que son los comentarios asi mira
             comentarios{
                          0: {
                             comentario: {
                                        nombre: 'pepe',
                                        comentario: 'nose'
                                        }
                            }
                        }
            entonces con el object.keys(this.props.comentarios) agarro las keys de comentario o sea el 0 ese y con eso puedo mandar como prop cada comentario para poder tener varios comentarios y la prop que mando de key es lo que necesita react para saber que es un componente diferente vendria a ser como un id */
   const comentario = Object.keys(comentarios).map(key => (
        <Comment
            comentario={comentarios[key]}
            key={key}
        /> 
   ));

   return (
    <div className="comentarios"> 
        <h1 className="titulo-comentarios">Comentarios {numComentario}</h1>            
        {comentario}
    </div>
  );
}

export default Comments;
