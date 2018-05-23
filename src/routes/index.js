import Home from '../views/Index'
import Bling from '../views/Bling'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/bling',
    exact: true,
    component: Bling
  }
]
export default routes