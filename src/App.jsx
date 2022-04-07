import React, { Component } from 'react'
import Calculator from './components/calculator'
import Nav from './components/nav'
import './App.css'
export default class App extends Component {
  state = {count:''}
  addNumber = (value) => {
    console.log(value.target.innerHTML)
    const {count}=this.state
    this.setState({count:count+value.target.innerHTML})
  }
  AC = () => {
   
    const {count}=this.state
    this.setState({count:''})
  }
  equal = () => {
   
    this.setState({count:eval(this.state.count)})
  }
  SC = () => {

    const {count}=this.state
    this.setState({count:count.substring(0, count.length - 1)})
  }
  render() {
    const {count}=this.state
    return (
      <div className='container'>
        <Nav count={count}/>
        <Calculator addNumber={this.addNumber} AC={this.AC} SC={this.SC} equal={this.equal}/>
      </div>
    )
  }
}
