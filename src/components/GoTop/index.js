import React, { Component } from 'react';
import './index.scss'

class GoTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGoTop: false
    }
  }
  componentDidMount() {
    document.addEventListener("onscroll", function (e) {
      var sTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.setState({
        showGoTop: (sTop > 300)
      })
    })
  }
  render() {
    return (
      <div className={`goTop ${this.state.showGoTop ? 'active' : ''}`}>
        <p><i className="iconfont icon-up-tri"></i> 回到顶部</p>
      </div>
    )
  }
}

export default GoTop