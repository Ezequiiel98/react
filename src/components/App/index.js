import React from 'react';
import Form from '../Form';

import './index.css';

class App extends React.Component{
  render(){
    return(    
         <div className="contenedor">
           
           <Form  handleChange={this.handleChange}  handleClick={this.handleClick}/>
         </div>
      )
  }
}


export default App;
