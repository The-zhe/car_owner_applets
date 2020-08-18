<template>
	<view>
		<view class="nickName">我的昵称</view>
		<view class="shuru">
			<input placeholder="请输入您的昵称" />
		</view>
		<view class="word-num">1/4</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.nickName{
		padding:20rpx 30rpx;
		color:$white-color;
		font-size:28rpx;
	}
	
	.shuru{
		width: 94%;
		margin:0 auto;
		border-bottom:2rpx solid $theme-color;
	}
	.word-num{
		font-size:24rpx;
		color:$white-color;
	}
</style>
