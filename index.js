import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import SideBar from './src/components/sideBar.js'
import ContnetRouter from './src/routes'

const routes = [
  ...ContnetRouter
]

render(
  <Router>
    <div>
      <SideBar />
      <div className="display">
        {renderRoutes(routes)}
      </div>
    </div>
  </Router>
  ,document.getElementById('root')
)