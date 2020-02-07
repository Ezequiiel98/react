import React from 'react'
import  styles from './styles.module.scss';

class  Formulario extends React.Component{
    state = {
        nombre: '',
        apellido: '',
        telefono: ''
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.enviarDatos(this.state);
    };

    render(){
        return(
            <form className={styles.formulario} onSubmit={this.handleSubmit}> 
              <div className={styles.contenedorInput}>
                <label htmlFor="nombre">Nombre</label>
                <input className={styles.input} type="text" id="nombre" value={this.state.nombre}
                       onChange={(event) => this.setState({nombre: event.target.value})} />
              </div>
              <div className={styles.contenedorInput}>
                <label htmlFor="apellido" >Apellido</label>
                <input className={styles.input} id="apellido" type="text"  value={this.state.apellido}
                    onChange={(event) => this.setState({apellido: event.target.value})}/>
              </div>

              <div className={styles.contenedorInput}>
                <label htmlFor="telefono">Telefono</label>
                <input className={styles.input} type="tel"  id="telefono" value={this.state.telefono}
                    onChange={(event) => this.setState({telefono: event.target.value})} />
              </div>
              <input className={styles.btnSubmit} type="submit" value="Enviar" />
            </form>
            
            
        );
    }
}

export default Formulario;
