import React, { Component } from 'react';
import './home.scss'
import first from '../../static/170.png'

class Home extends Component {
  render(){
    console.log('this is a test');
    return (
      <div className='test'>
        <p>Hello world</p>
        <img src={first} />
      </div>
    )
  }
}

export default Home