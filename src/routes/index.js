import Home from '../views/Index'
import IndexCode from '../views/ShowCode'
import List from '../views/List'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home/code',
    component: IndexCode
  },
  {
    path: '/list',
    component: List
  }
]
export default routes