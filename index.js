import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import SideBar from './src/components/SideBar'
import GoTop from './src/components/GoTop'
import ContnetRouter from './src/routes'
import './index.scss'

const routes = [
  ...ContnetRouter
]

render(
  <Router>
    <div className="wrap">
      <div className="header-wrap">
        <span className="logo"></span>
        <span className='project-name'>conclution2.0</span>
      </div>
      <div className="sideBar-wrap">
        <SideBar />
      </div>
      <div className="display-wrap">
        {renderRoutes(routes)}
      </div>
      <GoTop />
    </div>
  </Router>
  ,document.getElementById('root')
)