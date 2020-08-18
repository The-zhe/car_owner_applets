<template>
	<view>
		<view class="my-points">我的积分</view>
		<view class="points-num">200</view>
		<view class="all-btn flex-c-between">
			<navigator class="points-btn no-bg" url="/userPage/pointsList" hover-class="none">积分明细</navigator>
			<navigator class="points-btn has-bg" url="" >兑换记录</navigator>
		</view>
		
		<view class="duihuan flex-c-between">
			<text>兑换券</text>
			<text class="iconfont iconyoujiantou right-icon"></text>
		</view>
		<view class="padding">
			<coupon-list></coupon-list>
		</view>
		
	</view>
</template>

<script>
	import couponList from '@/components/couponList/index.vue'
	export default{
		components: {
			couponList
		},
	}
</script>

<style scoped lang="scss">
	.duihuan{
		color:$theme-color;
		padding:20rpx 30rpx;
		font-size:28rpx;
	}
	.padding{
		padding:0 30rpx;
	}
	.my-points{
		text-align: center;
		color:$theme-color;
		font-size:36rpx;
		padding:30rpx 0 20rpx 0;	
	}
	.points-num{
		text-align: center;
		color:$theme-color;
		font-size:36rpx;
		padding:0 0 15rpx 0;
	}
	.all-btn{
		width: 48%;
		margin:0 auto;
		.points-btn{
			width: 160rpx;
			height: 56rpx;
			line-height: 56rpx;
			text-align: center;
			border-radius: 28rpx;
			border:2rpx solid $theme-color;
		}
		.no-bg{
			color:$theme-color;
			font-size:28rpx;
		}
		.has-bg{
			color:#fff;
			background: $theme-color;
		}
	}
</style>
