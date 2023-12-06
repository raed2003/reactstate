import { Component } from 'react';
import './App.css';
import Classcounter from './Components/Classcounter';
import Counter from './Components/Counter';

class App extends Component {
  constructor () {super();
    this.state = {
      show: false,
    }
  }
 render(){
  return (
    <div className="App">
      <h2 style={{color:"red",background:"lightgrey"}}>workshop react state</h2>
      <button onClick={()=> this.setState({show:!this.state.show})}>show counter</button>
       {this.state.show==true?<Classcounter/>:null} 
    </div>
  );
 }
}

export default App;
