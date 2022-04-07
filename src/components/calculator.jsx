import React, { Component } from 'react'
import './calculator.css'

export default class Calculator extends Component {
  render() {
    const {addNumber,SC,AC,equal}=this.props
    return (
     
      <div>
          <div>
            <button onClick={SC} className='b' value="SC">SC</button>
            <button onClick={AC} className='b' value="AC">AC</button>
            <button onClick={addNumber} className='b' value="/">/</button>
            <button onClick={addNumber} className='b' value="*">*</button>
            <button onClick={addNumber} className='b' value="7">7</button> 
            <button onClick={addNumber} className='b' value="7">8</button>
            <button onClick={addNumber} className='b' value="9">9</button>
            <button onClick={addNumber} className='b' value="+">+</button>
            <button onClick={addNumber} className='b' value="4">4</button>
            <button onClick={addNumber} className='b' value="5">5</button>
            <button onClick={addNumber} className='b' value="6">6</button>
            <button onClick={addNumber} className='b' value="-">-</button>
            <button onClick={addNumber} className='b' value="1">1</button>
            <button onClick={addNumber} className='b' value="2">2</button>
            <button onClick={addNumber} className='b' value="3">3</button>
            <button onClick={equal} className='b' value="=">=</button>
            <button onClick={addNumber} className='b' value="0">0</button>
            <button onClick={addNumber} className='b' value=".">.</button>
            <button onClick={addNumber} className='b' value="00">00</button>
        </div>
      </div>
    )
  }
}