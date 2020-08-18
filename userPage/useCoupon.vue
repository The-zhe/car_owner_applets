<template>
	<view>
		<view class="shop">
			<view class="shopName">鄞州百慕大汽修厂</view>
			<my-coupon></my-coupon>
		</view>
		<view class="footer flex-center">
			<view>没有更多的券</view>
			<view class="footer-line"></view>
			<view class="color">查看已失效的券</view>
			<view class="iconfont iconyoujiantou color"></view>
		</view>
	</view>
</template>

<script>
	import myCoupon from '@/components/myCoupon/index.vue'
	export default{
		components: {
			myCoupon
		},
	}
</script>

<style scoped lang="scss">
	.footer{
		font-size: 22rpx;
		margin-top:30rpx;
		color:#A8A8A8;
		.footer-line{
			width: 2rpx;
			height: 25rpx;
			background: #707070;
			margin: 0 10rpx;
		}
		.color{
			color:$theme-color
		}
		
	}
	.shopName{
		color:rgba($color: #ffffff, $alpha: 0.6);
		padding:15rpx 30rpx 0 30rpx;
	}
</style>
