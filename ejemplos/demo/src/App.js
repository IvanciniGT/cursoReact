import logo from './logo.svg';
import './App.css';
import React from 'react';

//function App() {
class App extends React.Component{
  
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p> Esto es otro parrafo!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
      </div>
    );
  }
}

export default App;
