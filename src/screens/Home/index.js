import React from 'react';
import Formulario from '../../components/Formulario/';
class Home extends React.Component{
    
    state={
        datosEnviados: ''
    };
    
    enviarDatos = (datos) => this.setState({datosEnviados: datos});

    render(){
        return(
            <Formulario enviarDatos={this.enviarDatos} />
        );
    };

}

export default Home;
