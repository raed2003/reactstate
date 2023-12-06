import React, { Component } from 'react'

class Classcounter extends Component {
    constructor() {
        super()
        this.state={
            counter:0,
            chrono:0
        };
    }
    componentDidMount() {
        setInterval(() => {this.setState({chrono:this.state.chrono+1})
            
        }, 1000);
        console.log("mount")
    }
    componentDidUpdate(){
        console.log("update")
    }
    componentWillUnmount(){
        console.log("unmount")
    }
    increment=()=> {
        this.setState({counter:this.state.counter+1});
    }
    decrement=() =>{
        this.setState({counter:this.state.counter-1});
    }
  render() {
    return (
      <div>
    <button onClick={this.increment} style={{background:"green",marginRight:"20px"}}>+</button>
    <span>{this.state.counter}</span>
    <button onClick={this.decrement} style={{background:"red",marginLeft:"20px"}}>-</button> 
    <span>timer:{this.state.chrono}</span>
      </div>
    )
  }
}
export default  Classcounter 
