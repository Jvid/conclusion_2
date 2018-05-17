
import Index from '../views/Index'
import List from '../views/List'
const routes = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/list',
    component: List
  }
]

export default routes