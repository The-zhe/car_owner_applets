<template>
	<view>
		<view class="service">
			<evaluate-list :hasReply='true'></evaluate-list>
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
		padding-top:10rpx;

	}
</style>
