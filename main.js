import Vue from 'vue'
import App from './App'
import store from './store'
import * as filters from './lib/utils/filters.js'

Object.keys(filters).forEach(key => {
	Vue.filter(key,filters[key])
})

Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.prototype.isBarHeight999 = function() {
	return new Promise((resolve, reject) => {
		var that = this
		var isTemp = {}
		uni.getSystemInfo({
			success(res) {
				let totalTopHeight = 68
				if (res.model.indexOf('iPhone X') !== -1) {
					totalTopHeight = 88
				} else if (res.model.indexOf('iphone') !== -1) {
					totalTopHeight = 64
				}
				isTemp['statusBarHeight'] = res.statusBarHeight
				isTemp['titleBarHeight'] = totalTopHeight - res.statusBarHeight
			//	isTemp['allHeight'] = totalTopHeight
				resolve(isTemp)
			},
			fail(e) {
				reject(e)
			}
		})
	})
}


Vue.prototype.checkLogin = function(){
	const token = uni.getStorageSync('token')
	if(token === ''){ // 本地没有token表示未登录
		console.log('未登录返回到登录页')
		uni.showToast({
			icon:'loading',
			title:'未授权即将返回到登录页',
			duration:2000,
			mask:true
		})
		setTimeout(() => {
			uni.reLaunch({url:'/pages/login/index'})
		},2000)
		
		return false
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
