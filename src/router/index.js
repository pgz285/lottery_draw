/*
 * @Author: pgz285 1272160626@qq.com
 * @Date: 2022-09-09 11:22:03
 * @LastEditors: pgz285 1272160626@qq.com
 * @LastEditTime: 2022-09-09 11:23:54
 * @FilePath: /lottery_draw/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
