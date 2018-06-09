import React, { Component } from 'react';
import './index.scss'

class GoTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGoTop: false
    }
    this.goTop = this.goTop.bind(this)
  }
  goTop() {
    (function smoothscroll(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
           window.requestAnimationFrame(smoothscroll);
           window.scrollTo (0,currentScroll - (currentScroll/5));
      }
    })()
  }
  componentDidMount() {
    let _self = this
    document.body.onscroll = function() {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      _self.setState({
        showGoTop: (sTop > 300)
      })
    }
  }
  render() {
    return (
      <div className={`goTop ${this.state.showGoTop ? 'active' : ''}`} onClick={this.goTop}>
        <p><i className="iconfont icon-up-tri"></i> 回到顶部</p>
      </div>
    )
  }
}

export default GoTop