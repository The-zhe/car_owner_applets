<template>
	<view class="infor">
		<view class="infor-padding">
			<view class="yanzhengma">验证码:<text class="infor-num">2368 9176 3231 3681</text></view>
			<view class="infor-padding">
				<view class="infor-title">阳光保险洗车券</view>
				<view class="infor-content">有效期：2020.07.12-2020.08.12</view>
				<view class="infor-title">使用条件</view>
				<view class="infor-content">1、使用时间：领取之日起一个月内</view>
				<view  class="infor-content">2、每人限领1张</view>
				<view  class="infor-content">3、具体描述：此处为优惠券的描述</view>
			</view>
		</view>
		<view class="infor-btn">查看适用商家</view>
		<view style="height: 20rpx;"></view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.infor{
		width: 94%;
		margin:30rpx auto;
		background: #333;
		border-radius: 20rpx;
		.infor-padding{
			padding:30rpx;
		}
		.infor-btn{
			border:2rpx solid $theme-color;
			width: 94%;
			margin:0 auto;
			color:$theme-color;
			font-size:28rpx;
			line-height: 82rpx;
			height: 82rpx;
			border-radius: 15rpx;
			text-align: center;
		}
		.infor-title{
			color:#fff;
			font-size:28rpx;
			line-height: 70rpx;
		}
		.infor-content{
			color:$white-color;
			line-height: 50rpx;
		}
		.yanzhengma{
			background: #000;
			color:$theme-color;
			font-size:32rpx;
			text-align: center;
			line-height: 88rpx;
			.infor-num{
				margin-left:40rpx;
			}
		}
		
		}
</style>
