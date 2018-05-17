import React, { Component } from 'react';
import './index.scss'
import first from '../../static/170.png'

class Index extends Component {
  render(){
    return (
      <div className='test'>
        <p>this is index</p>
        <img src={first} />
      </div>
    )
  }
}

export default Index