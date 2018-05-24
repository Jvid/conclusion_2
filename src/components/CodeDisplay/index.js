import React, { Component } from 'react';
import Highlight from 'react-highlight'
import $$ from '../../common/Tools'
import './index.scss'

class CodeDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCode: false
    }
    this.extendCode = this.extendCode.bind(this)
  }
  extendCode() {
    this.setState({
      showCode: !this.state.showCode
    })
  }
  render() {
    let md = this.props.mdstr;
    return (
      <div className={`code-wrap ${this.state.showCode ? 'active' : ''}`}>
        <p className='code-title'><span onClick={this.extendCode}>查看代码  <span className='turn-tri'><i className="iconfont icon-right-tri"></i></span></span></p>
        <Highlight>
            <div className="code-show">
              <div className="code" dangerouslySetInnerHTML={{ __html: $$.markedFn(md) }}></div>
            </div>
        </Highlight>
      </div>
    )
  }
}

export default CodeDisplay