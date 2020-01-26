import React from 'react';
import './App.css';

function Comentarios(props){
                
  /* tengo un objeto que es gastos este adentro tiene otros objetos que son los gastos asi mira
             comentarios{
                          0: {
                             comentario: {
                                        nombre: 'pepe',
                                        comentario: 'nose'
                                        }
                            }
                        }
            entonces con el object.keys(this.props.comentarios) agarro las keys de comentario o sea el 0 ese y con eso puedo mandar como prop cada comentario para poder tener varios comentarios y la prop que mando de key es lo que necesita react para saber que es un componente diferente vendria a ser como un id */
   const comentario = Object.keys(props.comentarios).map(key => (
        <Comentario 
           
            comentario={props.comentarios[key]}
            key={key}
        /> 
   ));

   return (
    <div className="comentarios"> 
        <h1 className="titulo-comentarios">Comentarios {props.numComentario}</h1>            
        
        {comentario}
          
   
    </div>
  );
}

 function Comentario (props){
  // destructuring 
    const {nombre, comentario} = props.comentario;
    
    return(
      <div className="contenedor-comentario">
          <h2 className="nombre" >{nombre}</h2>
          <p className="comentario">{comentario}</p>
      </div>
    );
  
} 

function Formulario(props){
  
  return(
    <form className="formulario" >
        <div className="contenedor-input">
          <label  htmlFor="input-nombre">Nombre</label>
          <input placeholder="Nombre..." type="text" name="nombre" id="input-nombre" onChange={props.handleChange}  />
        </div>
        <div className="contenedor-input">
          <label htmlFor="input-comentario">Comentario</label>
          <textarea placeholder="Comentario..." id="input-comentario" onChange={props.handleChange} ></textarea>
        </div>
      <button  type="submit" id="btn-enviar"  onClick={props.handleClick}>ENVIAR</button>
  </form>
  )
}

class App extends React.Component{

  state = {
    comentarios: {},
    key: 0
  };

  handleChange = (event) =>{

    let elemento = event.target;
    let caracteres = event.target.value.length;
    let btnEnviar = document.querySelector('#btn-enviar');

    if(caracteres > 3 ){
      
      elemento.classList.remove('input-error');
      btnEnviar.disabled = false;

    }else{
      
      elemento.classList.add('input-error');
      btnEnviar.disabled = true;
    };
  
  };

  handleClick = (event) => {
    event.preventDefault();
    let inputNombre = document.querySelector('#input-nombre');
    let inputComentario = document.querySelector('#input-comentario');
    let btnEnviar = document.querySelector('#btn-enviar');
    let caracteresNombre = inputNombre.value.length;
    let caracteresComentario = inputComentario.value.length;      
    
    if(caracteresNombre > 3 && caracteresComentario > 3){

      // si esta todo bien activo el boton y borro el color rojo
      inputNombre.classList.remove('input-error');
      inputComentario.classList.remove('input-error');
      btnEnviar.disabled = false;
      
      // copio el objeto de comentarios del state para despues volver a subirlos con los cambios nuevos, si no lo copio es como que se sobreescribe  y no me guarda todo
      const comentarios = {...this.state.comentarios};


      let comentario = {
        nombre: inputNombre.value,
        comentario: inputComentario.value
      };
        
      // a comentarios le agrego una 'dimension' mas con una key y dentro de eso tengo el objeto de comentario
      comentarios[this.state.key] = comentario;
       
      //agrego al state el arreglo comentarios y le sumo 1 a la key para que no se repitan
      this.setState({
        comentarios: comentarios,
        key: this.state.key + 1
      });

      // vacio inputs 
      inputNombre.value = '';
      inputComentario.value = '';

    }else{
      

      inputNombre.classList.add('input-error');
      inputComentario.classList.add('input-error');
      btnEnviar.disabled = true;
      
    };

  };

  render(){

    return(    
         <div className="contenedor">
            <Comentarios comentarios={this.state.comentarios} numComentario={this.state.key}/> 
           <Formulario  handleChange={this.handleChange}  handleClick={this.handleClick}/>
          </div>
      )
  }
}


export default App;
