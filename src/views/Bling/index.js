import React, { Component } from 'react';
import CodeDisplay from '../../components/CodeDisplay'
import Footer from '../../components/Footer'
import './index.scss'
import img from '../../static/bb.jpg'
import md from './index.md'


class Bling extends Component {
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
        <CodeDisplay mdstr={md} />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Bling