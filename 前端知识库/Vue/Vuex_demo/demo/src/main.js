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

