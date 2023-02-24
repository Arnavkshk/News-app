import React, { Component } from 'react'
import loading from "./spinning.gif"

export class Spinn extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinn
