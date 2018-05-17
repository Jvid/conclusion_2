import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
    <ul>
      <li><Link to='/'>首页</Link></li>
      <li><Link to='/home/code'>首页code</Link></li>
      <li><Link to='/list'>列表</Link></li>
    </ul>
    )
  }
}

export default SideBar