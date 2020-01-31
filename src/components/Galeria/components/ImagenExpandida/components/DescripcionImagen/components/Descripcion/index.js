import React from 'react'
import Titulo from '../../../../../../../Titulo'

function Descripcion(props){
    return(
       <div>
            <Titulo titulo={props.titulo}/>
            <p>{props.descripcion}</p>
       </div>
    )
}

export default Descripcion