import React from 'react';


function MensajeError({ mensajeError }){
  
  return(
    <div className="mensaje-error">
      <p>{mensajeError}</p>
    </div>
  )
}

export default MensajeError;