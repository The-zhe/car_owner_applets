<template>
	<view class="successUse">
		<view class="success_image">
			<image src="../static/img/success.png" mode=""></image>
		</view>
		<view class="text">核销成功！本券剩余次数7次。</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.successUse{
	display: flex;
	flex-direction: column;
	.success_image{
		width: 198rpx;
		height: 198rpx;
		margin: 30rpx auto;
		margin-top: 100rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		margin: 30rpx auto;
		color: $theme-color;
		font-size: 32rpx;
	}
}
</style>
