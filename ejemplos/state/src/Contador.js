import './Contador.css';
import React from "react";
                        // Es una clase abstracta
class Contador extends React.Component{
  
  constructor(props){
    super(props);
    this.state={"numero": 1};
  }
  
  incrementarCuenta(){
    //this.state.numero++; // La instancia de Objeto a la que apunta la variable state cambia?
                          // El state lo tratamos COMO si fuera INMUTABLE
    this.setState({"numero": this.state.numero+1}); 
      // He forzado un cambio en el objeto al que apunta this.state
  }
  
  // {"numero": 1}  < JSON: JavaScript Object Notation
  // Qué entendemos por un objeto JS? 
  // Esta función se ejecuta cuando se va a hacer el mount.
  // Y en algun otro momento? SI, cuando cambiamos el this.state  <<< IMPORTANTISIMO !!!!
  render() {
    //console.log(this.state);
    return (
      <p>Voy por el: {this.state.numero}</p>
    );
  }
  
  // Esta función se invoca cuando un nuevo elemento 
  // React se crea y se muestra en el HTML por primera vez
  componentDidMount(){        // React.Component
    this.identificadorHilo=setInterval(this.incrementarCuenta.bind(this), 1000);
                           //setTimeout(funcion, delay)
  }
  // Esta función se invoca cuando un elemento React
  // se va a eliminar de mi HTML... se destruye
  componentWillUnmount(){     // React.Component
    clearInterval(this.identificadorHilo);
  }
  
}

export default Contador;
