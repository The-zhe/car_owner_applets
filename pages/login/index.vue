<template>
	<view class="logo">
		<view class="logoImg">
			<image src="../../static/img/logo.png"></image>
		</view>
		<view class="text">亲车吧</view>
		<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="GetUserInfo" style="width:88%;margin:80rpx auto;background: #46BB36;color:#fff;">微信登录</button>
	</view>
</template>

<script>
import { MemberLoginAjax } from '@/apis/api';
export default {
	methods: {
		async GetUserInfo(res) {
			const that = this;
			var getData = res.target; //用户信息都在这里
			console.log(getData);
			if (res.detail.userInfo == null) {
				//this.GLOBAL.Tool.Toast('拒绝后我们将无法为你提供服务');
				return;
			}
			let data = {
				encryptedData: res.detail.encryptedData,
				iv: res.detail.iv
			};
			var res1 = await uni.login({
				provider: 'weixin'
			});
			if (res1.length == 1) return;
			data.code = res1[1].code;
			let xx = await MemberLoginAjax(data);
			uni.setStorageSync('token', xx.data.Authorization.access_token);
			uni.setStorageSync('userId', xx.data.userInfo.userId);
			uni.showToast({
				title: '授权成功',
				icon: 'success',
				duration: 500
			});
			setTimeout(() => {
				uni.switchTab({
					url: '/pages/index/index'
				});
			}, 500);
		}
	}
};
</script>

<style scoped lang="scss">
.logo{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.logoImg{
		margin-top: 100rpx;
		width: 176rpx;
		height: 176rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		margin-top: 30rpx;
		font-size: 32rpx;
		color: #CC9966;
	}
}
</style>
