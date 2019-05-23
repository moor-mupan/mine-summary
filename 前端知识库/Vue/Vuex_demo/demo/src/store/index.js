// store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
	comments: [
    {
      userName: 'jack',
      comment: 'Vue so easy'
    },
    {
      userName: '小明',
      comment: 'Vue 非常棒！'
    },
  ]
}
const getters = {
  initComments (state) {
    return state.comments
  }
}
const mutations = {
  del (state, index) {
    state.comments.splice(index, 1)
  },
  add (state, data) {
    state.comments.push(data)
  }
}
const actions  = {
  // delAction (context, index) {
  //   context.commit('del', index)
  // },
  addAction (context, data) {
    //actions可以实现异步操作
    setTimeout(() => {
      context.commit('add', data)
    }, 1000)
  }
}

const store = new Vuex.Store({
	state,
  getters,
  mutations,
  actions
})

export default store
