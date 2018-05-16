module.exports = {
  path: 'index',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../views/Index'))
      }, 'index')
    }
  },
  childRoutes: [
    {
      path: 'list',	//套餐详情
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('../../views/Detail/Packages'))
          }, 'packages')
        }
      }
    }
  ]
};