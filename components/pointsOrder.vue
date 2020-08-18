<template>
	<view class="order">
		<view class="order-list">
			<view class="flex-c-between order-price">
				<text>￥20元抵扣券</text>
				<text class="order-statue">已完成</text>
			</view>
			<view class="flex-c-between order-shop">
				<text>可用门店：全网通</text>
				<text class="order-statue">1200积分</text>
			</view>
			<view class="flex-c-between order-time add-border">
				<text>20202.07.01-2020.07.15</text>
				<text class="order-num">X1</text>
			</view>
			<view class="flex-c-between order-allprice">
				<text>总价</text>
				<text class="order-statue">1200积分</text>
			</view>
			<view class="flex-c-between order-allprice">
				<text>实付</text>
				<text class="order-statue">1200积分</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.order{
		padding:0 20rpx;
		.order-list{
			margin-top:20rpx;
			padding:20rpx 30rpx 18rpx 30rpx;
			background: rgba(255,255,255,0.1);
			border-radius: 25rpx;
		}
		.order-price{
			color:#fff;
			font-size:28rpx;
		}
		.order-statue{
			color:$theme-color;
			font-size:24rpx;
		}
		.order-shop{
			color:#fff;
			font-size:24rpx;
			padding:15rpx 0;
		}
		.order-time{
			color:#fff;
			font-size:24rpx;
			padding:8rpx 0 15rpx 0;
		}
		.add-border{
			border-bottom:2rpx solid #242328;
			margin-bottom:8rpx;
		}
		.order-num{
			font-size:28rpx;
			color:$white-color
		}
		.order-allprice{
			color:#fff;
			padding:8rpx 0;
		}
	}
</style>
