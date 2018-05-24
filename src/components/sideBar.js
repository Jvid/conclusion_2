import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import list from '../static/contents'
import './sideBar.scss'
class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curHash: location.hash.substr(1)
    }
    this.changeHash = this.changeHash.bind(this)
  }
  changeHash(){
    this.setState({ curHash: location.hash.substr(1)})
  }
  render() {
    let curHash = this.state.curHash
    return (
    <ul className="side-list">
      {
        list.map((v,n) => (
          <li className={`side-item ${curHash == v.action ? 'active-item' : ''}`} key={n.toString()} onClick={this.changeHash}><Link to={v.action}>{v.name}</Link></li>
        ))
      }
    </ul>
    )
  }
}

export default SideBar