import Home from '../views/Index'
import IndexCode from '../views/ShowCode'
import List from '../views/List'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/home/code',
    exact: true,
    component: IndexCode
  },
  {
    path: '/list',
    exact: true,
    component: List
  }
]
export default routes