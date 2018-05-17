import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router';

const rootRoute = {
  childRoutes: [
    { path: '/', component: require('./src/views/Index') },
    require('./src/routes/Index')
  ]
};
render(
  (<Router
    history={hashHistory}
    routes={rootRoute}
  />)
  ,document.getElementById('root')
)