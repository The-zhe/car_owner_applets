<template>
	<view>
		<view class="nickName">我的昵称</view>
		<view class="shuru">
			<input placeholder="请输入您的昵称" class="shuru-input" @input='inputEvent' :maxlength="20"/>
		</view>
		<view class="word-num">{{wordNum}}/20</view>
		<view class="fixed-btn">
			<view class="submit-btn">保存</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				wordNum:0
			}
		},
		methods:{
			inputEvent(e){
				this.wordNum=e.detail.value.length
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nickName{
		padding:20rpx 30rpx;
		color:#fff;
		font-size:28rpx;
	}
	
	.shuru{
		width: 94%;
		margin:0 auto;
		padding-bottom:15rpx;
		border-bottom:2rpx solid $theme-color;
	}
	.word-num{
		font-size:24rpx;
		color:#fff;
		padding:20rpx 30rpx;
	}
	.shuru-input{
		font-size:28rpx;
		color:#fff;
	}
</style>
