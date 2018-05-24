import React, { Component } from 'react';
import Highlight from 'react-highlight'
import $$ from '../../common/Tools'
import './index.scss'


class CodeDisplay extends Component {
  render() {
    let md = this.props.mdstr;
    return (
      <Highlight>
        <div className="code-wrap">
          <p className="code-title t-bg">查看代码  <i className="iconfont icon-right-tri"></i></p>
          <div className="code-show">
            <div className="code" dangerouslySetInnerHTML={{ __html: $$.markedFn(md) }}></div>
          </div>
        </div>
      </Highlight>
    )
  }
}

export default CodeDisplay