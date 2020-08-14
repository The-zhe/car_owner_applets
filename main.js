import Vue from 'vue'
import App from './App'
import store from './store'

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

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
