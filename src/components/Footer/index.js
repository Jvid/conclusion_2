import React, { Component } from 'react';
import './index.scss'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="w">
          <ul className="footer">
            <li className="footer-item">友情链接</li>
            <li className="footer-item"><a href="https://www.baidu.com/">百度</a></li>
            <li className="footer-item"><a href="https://www.google.com.hk/">Google</a></li>
            <li className="footer-item"><a href="https://www.zhihu.com/">知乎</a></li>
            <li className="footer-item"><a href="http://blog.csdn.net/jvid_sky">jvid_sky</a></li>
          </ul>
          <ul className="footer">
            <li className="footer-item"></li>
            <li className="footer-item"><a href="http://www.bootcdn.cn/">BootCDN</a></li>
            <li className="footer-item"><a href="https://segmentfault.com/">Segmentfault</a></li>
            <li className="footer-item"><a href="https://github.com/">Github</a></li>
          </ul>
        </div> 
      </div>
    )
  }
}

export default Footer