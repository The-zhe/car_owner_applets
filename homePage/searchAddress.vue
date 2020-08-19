<template>
	<view>
		<view class="search flex-c-between">
			<view class="search-left flex-c-center">
				<text class="theme-color margin-left">宁波市</text>
				<text class="iconfont iconxiajiantou theme-color"></text>
				<view class="search-line"></view>
				<text class="iconfont iconsousuo sousou"></text>
				<input placeholder="请输入地址"  class="search-input"/>
			</view>
			<view class="right-text">搜索</view>
		</view>
	</view>
</template>

<script>
	var QQMapWX = require('@/lib/qqmap-wx-jssdk.js');
	var qqmapsdk;
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		padding:30rpx 30rpx 20rpx 30rpx;
		.search-left{
			width: 87%;
			background: #353439;
			border-radius: 40rpx;
			height: 68rpx;
			position: relative;
			.margin-left{
				margin:0 18rpx 0 20rpx;
			}
			.sousou{
				color:#767677;
				margin-right:10rpx;
			}
			.search-input{
				color:#fff;
			}
		}
		.theme-color{
			color:$theme-color;
			font-size:24rpx;
		}
		.search-line{
			width: 2rpx;
			height: 34rpx;
			background: #59585B;
			margin:15rpx;
		}
		.right-text{
			color:$theme-color
		}
	}
</style>
