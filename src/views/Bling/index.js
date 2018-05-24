import React, { Component } from 'react';
import './index.scss'
import img from '../../static/bb.jpg'

class List extends Component {
  render(){
    return (
      <div className='bling'>
        <h1 className="bling-title">一道光闪过</h1>
        <div className="dis">
          <p>描述:</p>
          <p>鼠标放上去会有一道光闪过</p>
        </div>
        <div className="result">
          <div className="img">
            <img src={img} alt="image" />
				  </div>
        </div>
      </div>
    )
  }
}

export default List