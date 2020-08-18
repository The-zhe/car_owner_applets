<template>
	<view>
		<view class="flex-c-between title">
			<text class="font-size-28">优惠券</text>
			<navigator class="flex-c-center" url="/userPage/useCoupon">
				<text>查看全部</text><text class="hasColor">(8张可用)</text>
			</navigator>
		</view>
		<my-coupon></my-coupon>
		<my-coupon></my-coupon>
		<view class="flex-c-between title">
			<text class="font-size-28">卡包</text>
			<navigator class="flex-c-center" url="/userPage/allCard">
				<text>查看全部</text><text class="hasColor">(8张可用)</text>
			</navigator>
		</view>
        <card-list></card-list>
	</view>
</template>

<script>
	import myCoupon from '@/components/myCoupon/index.vue'
	import cardList from '@/components/cardList/index.vue'
	export default{
		components: {
			myCoupon,
			cardList
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">

	.title{
		color:rgba(255,255,255,.6);
		font-size:24rpx;
		line-height: 50rpx;
		padding:20rpx 30rpx;
		.hasColor{
			color:$theme-color;
			margin-left:10rpx;
		}
		
	}
</style>
