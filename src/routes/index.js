import Home from '../views/Index'
import Bling from '../views/Bling'
import ShowCode from '../views/ShowCode'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: '首页'
  },
  {
    path: '/bling',
    exact: true,
    component: Bling,
    name: '一道光闪过'
  },
  {
    path: '/showCode',
    exact: true,
    component: ShowCode,
    name: 'test'
  },
  {
    path: '/examination',
    exact: true,
    component: Bling,
    name: '加减题目'
  },
  {
    path: '/loading',
    exact: true,
    component: Bling,
    name: 'loading'
  },
  {
    path: '/hover',
    exact: true,
    component: Bling,
    name: 'hover效果'
  }
]
export default routes