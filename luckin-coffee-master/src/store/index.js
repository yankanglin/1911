/*
 * @Author: Li.chen
 * @Date: 2019-01-09 16:35:10
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 16:09:15
 * @Description: File Description .
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否展示欢迎页
    isWelcome: false,
    glLoading: false
  },
  // 数据操作
  mutations: {
    // 切换欢迎页
    changeWelcomeFlag(state) {
      state.isWelcome = true;
    },
    changeLoadingFlag(state) {
      state.glLoading = !state.glLoading;
    }
  },
  // 数据操作 / 计算
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // }
  },
  // 异步操作
  actions: {
    commitWelcomeFlag (context) {
      window.setTimeout(()=>{
        context.commit('changeWelcomeFlag')
      },100)
    },
    commitLoadingFlag (context) {
      window.setTimeout(()=>{
        context.commit('changeLoadingFlag')
      },1000)
    }
  }
})

