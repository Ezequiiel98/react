import React from 'react';
import './App.css';

class Comentario extends  React.Component{
  render(){
    return(
      <div>
         <h1>{this.props.nombre}</h1>
         <p>{this.props.comentario}</p>
      </div>
    )
  }
}

function Formulario(props){
  return(
    <form className="formulario" onSubmit={props.handleSubmit}>
        <div className="contenedor">
          <label  htmlFor="input-nombre">Nombre</label>
          <input type="text" name="nombre" id="input-nombre" autoComplete="off" />
        </div>
        <div className="contenedor">
          <label htmlFor="input-comentario">Comentario</label>
          <textarea id="input-comentario"></textarea>
        </div>
      <button  type="submit" id="btn-enviar" >ENVIAR</button>
  </form>
  )
}

class App extends React.Component{

  state = {
    nombre: '',
    comentario: ''
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    let nombre = document.querySelector('#input-nombre').value;
    let comentario = document.querySelector('#input-comentario').value;

    this.setState({
       nombre: nombre,
      comentario: comentario });

    
  }

  render(){
    return(
    
      
   <div>
      <Comentario nombre={this.state.nombre} comentario={this.state.comentario} />
      <Formulario handleSubmit={this.handleSubmit}/>
    </div>
    )
  }
}

export default App;
