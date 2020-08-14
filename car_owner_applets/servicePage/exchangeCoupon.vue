<template>
	<view>
		<view class="top paddingBotttom">
			<view class="exchange-title">￥<text class="text-big">20元抵扣券</text></view>
			<view class="exchange-num"><view class="left">1200积分</view></view>
		</view>
        <view  class="top middle">
			<view class="middle-list flex-c-between" @click="onUse">
				<view class="flex-c-center">奥迪A4L 2020款35 TFSI 时尚动感型<text class="no-used">不适用</text></view>
				<text class="iconfont iconyoujiantou right-icon"></text>
			</view>
			<view class="middle-list flex-c-between" style="border-bottom:none" @click="toUsed">
				<view class="flex-c-center">可用门店</view>
				<text class="iconfont iconyoujiantou right-icon"></text>
			</view>
		</view>
		<view>
			<view class="exchange-desc">优惠券描述</view>
			<view class="exchange-content">
				<view>1、领取时间：2020.07.12-2020.08.12</view>
				<view>2、使用时间：领取之日起一个月内</view>
				<view>3、每个人限领1张</view>
				<view>4、具体描述：此处为优惠券的描述</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toUsed(){
				uni.navigateTo({
					url:'./onuseShop'
				})
			},
			onUse(){
				uni.navigateTo({
					url:'./onuseCar'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.exchange-desc{
		text-align: center;
		color:#fff;
		font-size:28rpx;
		padding-top:40rpx;
	}
	.exchange-content{
		color:#fff;
		padding:50rpx 40rpx 0 40rpx;
		line-height: 40rpx;
		font-size:24rpx;
	}
	.paddingBotttom{
		padding-bottom:30rpx;
	}
	.middle{
		margin-top:20rpx;
		padding:0 30rpx;
		.middle-list {
			height: 80rpx;
			line-height: 80rpx;
			border-bottom:2rpx solid #000;
			color:#fff;
			font-size:24rpx;
			.right-icon{
				color:$sub-theme-color
			}
			.no-used{
				width: 100rpx;
				height: 44rpx;
				border:2rpx solid $theme-color;
				color:$theme-color;
				font-size:24rpx;
				line-height: 44rpx;
				text-align: center;
				border-radius: 15rpx;
				display: block;
				margin-left:20rpx;
			}
			
			}
	}
	.top{
		background: rgba(255,255,255,.05);
		.exchange-title{
			color:#fff;
			font-size:22rpx;
			padding:30rpx;
			.text-big{
				font-size:32rpx;
			}
			
		}
		.exchange-num{
			padding-left:30rpx;
			
			.left{
				height: 80rpx;
				line-height: 80rpx;
				padding-left:40rpx;
				background: #000;
				color:$sub-theme-color;
				border-top-left-radius: 40rpx;
				border-bottom-left-radius: 40rpx;
			}
			
		}
		
	}
</style>
