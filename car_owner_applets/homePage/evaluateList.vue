<template>
	<view>
		<view class="service">
			<view class="service-title flex-c-between">
				<view>
					用户评价<text class="service-title-num">(30)</text>
				</view>
				<!-- <text class="iconfont iconyoujiantou"></text> -->
			</view>
			<evaluate-list></evaluate-list>
			<evaluate-list></evaluate-list>
		</view>
	</view>
</template>

<script>
		import evaluateList from '@/components/evaluate-list/index.vue'
	export default{
		components: {
			evaluateList
		},
	}
</script>

<style lang="scss" scoped>
	.service{
		background:#fff;
		margin-top:30rpx;
		padding-top:10rpx;
		.service-title{
			padding:0 30rpx;
			color:#333;
			font-size:38rpx;
			line-height: 60rpx;
		}
		.service-title-num{
			font-size:24rpx;
			color:#999
		}
	}
</style>
