// #ifndef H5
// 更新版本提示
if (uni.canIUse('getUpdateManager')) {
	const updateManager = uni.getUpdateManager()
	updateManager.onCheckForUpdate(function(res) {
		// 请求完新版本信息的回调
		if (res.hasUpdate) {
			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
		}
	})
}
// #endif