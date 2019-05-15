### 1. 什么是Vuex？
 Vuex是一种状态管理模式，将所有组件的状态进行集中式的管理，并以相应的规则保证状态以一种可预测的方式发生变化。

### 2.Vue的单向数据流？
单向数据流即数据只能从一个方向改变，父组件 => 子组件，例：父组件传递给子组件1和子组件2一个name属性，当子组件1（组件2）改变name时，父组件和子组件2（组件1）的name不会发生变化。但是当改变父组件的name时子组件的name会随之改变。

### 3.Vuex的应用场景？
大型的单页应用，多个组件共享同一状态时。简单应用使用Vuex会使项目冗余(简单的使用store模式即可)。

### 4.简单的store模式？
	const store = {
	  debug: true,
	  state: {
	    message: 'Hello!'
	  },
	  setMessageAction (newValue) {
	    if (this.debug) console.log('setMessageAction triggered with', newValue)
	    this.state.message = newValue
	  },
	  clearMessageAction () {
	    if (this.debug) console.log('clearMessageAction triggered')
	    this.state.message = ''
	  }
	}

### 5.Vuex的核心概念?
###### 1.state
Vuex使用单一状态树即state，state对象包含了全部应用的层级状态。作为单一数据源存在。
###### 2.Getter
Vuex允许在store中定义一个getters，像计算属性一样，getters的返回值会根据它的依赖缓存起来，只有当依赖值发生变化时才会重新计算。在组件中通过store.getters获取相应的状态值。

在组件中引用getters中的属性时，有时可能需引入多个，可以使用Vuex中的mapGetter辅助函数

Getter参数：1.state作为第一个参数 &nbsp;&nbsp;&nbsp;&nbsp; 2.接收其他的getter作为第二个参数
		
	getters: {
		test: (参数1， 参数2) => {
			return ...
		}	
	}
###### 3.Mutation
更改Vuex的store中的状态的唯一方法是提交mutation（不支持异步操作）//组件中触发_例: this.$store.commit(del， [data])
	
	mutations: {
	  del (state, index) {
	    state.comments.splice(index, 1)
	  },
	
	  add (state, data) {
	    state.comments.push(data)
	  }
	}

###### 4.Action
在组件中使用this.$store.dispatch('xxx')分发action，或者使用mapActions辅助函数将组件的methods映射为store.dispathch调用（需要在根节点先注入store，支持异步操作）//组件中触发_例： this.$store.dispatch(addAction, [data])
	
	actions：{
	  //delAction (context, index) {
	  //  context.commit('del', index)
	  //},

	  addAction (context, data) {
	    //actions可以实现异步操作-- 模拟异步
	    setTimeout(() => {
	      context.commit('add', data)
	    }, 2000)
	  }
	

###### 5.Module
由于使用单一状态树，应用的所有状态都集中到同一个对象上。当应用很复杂时，store会变得很臃肿。因此Vuex允许我们将store分割为模块（可嵌套）。
### *6.如何使用Vuex?
######1.简单使用
1.创建一个store文件夹，文件夹下创建index.js文件

	// store/index.js
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex);
	
	//创健一个state对象
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

	//创建getters对象 存储初始化数据（相当于Vue的computed(计算属性) ），可不使用getters而直接在组件中通过store.state获取状态值
	const getters = {
	  initComments (state) {
	    return state.comments
	  }
	}
	
	//修改状态（仅支持同步，实现异步需要使用actions）-- 如下del为同步，add为异步，可传入两个参数，1为state，2为要改变的值
	const mutations = {
	  del (state, index) {
	    state.comments.splice(index, 1)
	  },
	
	  add (state, data) {
	    state.comments.push(data)
	  }
	}

	//通过commit方法提交任务，可传入两参数，1位context，2为要改变的值
	const actions  = {
	  //delAction (context, index) {
	  //  context.commit('del', index)
	  //},

	  addAction (context, data) {
	    //actions可以实现异步操作-- 模拟异步
	    setTimeout(() => {
	      context.commit('add', data)
	    }, 2000)
	  }
	}

	//使用Vuex的store方法生成 store对象 
	const store = new Vuex.Store({
		state,
	  	getters,
 		mutations,
	  	actions
	})
	
	export default store

2.main.js入口文件引入 store/index.js

	// 外部js/UI库
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'
	
	// 自定义文件
	import store from './store/index.js'
	import './assets/css/reset.css'
	
	// 组件
	import App from './App.vue'
	Vue.use(ElementUI)
	
	new Vue({
		el: '#app',
		store,
		template: '<App />',
		components: {App}
	})

3.在组件中使用
	
	// Add.vue
		// 通过dispatch 分发actions任务，修改状态值
		this.$store.dispatch('addAction', data)

	// List.vue
		//使用计算属性 -- 获取状态值
		computed: { 
	      comments () {
	        return this.$store.getters.initComments

		// 如果未使用 getters则可通过state得到状态
		// return this.$store.state.comments
	      }
	    }
	
		// 通过commit提交载荷	，修改状态值
		this.$store.commit('del', index)

######2.store模块化
后续更新...