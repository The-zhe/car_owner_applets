<template>
	<view>
		<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="GetUserInfo" style="width:88%;margin:0 auto;background: #EEAB68;color:#fff;">授权登录
		</button>
	</view>
</template>

<script>
	export default {
		methods: {
			async GetUserInfo(res) {
				const that = this;
				var getData = res.target; //用户信息都在这里
				if (res.detail.userInfo == null) {
					this.GLOBAL.Tool.Toast('拒绝后我们将无法为你提供服务');
					return;
				}
				let data = {
					encryptedData: res.detail.encryptedData,
					iv: res.detail.iv,
					RecommenderID: 1
				}
				var res1 = await uni.login({
					provider: 'weixin'
				})
			}
		}
	}
</script>

<style>
</style>
