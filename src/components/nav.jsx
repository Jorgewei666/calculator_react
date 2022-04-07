import React, { Component } from 'react'
import './nav.css'
export default class Nav extends Component {
  render() {
    const {count} = this.props
    return (
      <div>
         <div>
            <input type="text" id="screen" value={count} readOnly/>
            
        </div>
      </div>
    )
  }
}
