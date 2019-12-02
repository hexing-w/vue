import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home/home'
import UserList from '@/components/user-list/user-list'
import test from '@/components/testuser/testuser'

Vue.use(Router)
// 其它代码...
const router = new Router({
  routes:[
  {
    path: '/',
    name : "Home",
    component : Home,
      // 当渲染 children 组件的时候会先把 Home 组件渲染出来
      // Home 组件找到根组件中的 router-view 出口替换渲染
      // Home 组件的 children 子路由会渲染到 Home 组件内部的 router-view 出口
      // 参考文档：https://router.vuejs.org/zh-cn/essentials/nested-routes.html
      children:[
      {
        path : "/users",
        component : UserList
      }

      ]
  },
  {
    path: '/login',
    name : "Login",
    component : Login 
  }, 
   {
    path: '/test',
    name : "test",
    component : test 
  }]
  // ...
})
// router.beforeEach((to, from, next) => {
//   const {path} = to
//   if (path !== '/login') { // 如果请求的不是 /login 则校验登陆状态
//     const token = window.localStorage.getItem('token')
//     if (!token) { // 如果没有 token 则让其跳转到 /login
//       next('/login')
//     } else { // 有 token，让其通过
//       next()
//     }
//   } else {
//     // 如果用户请求的就是 /login 则直接调用 next() 放行
//     next()
//   }
// })
export default router