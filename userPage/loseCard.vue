<template>
	<view>
		<view class="shop">
			<view class="shopName">阳光保险</view>
			<card-list></card-list>
		</view>
	</view>
</template>

<script>
	import cardList from '@/components/cardList/index.vue'
	export default{
		components: {
			cardList
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shopName{
		color:#fff;
		padding:15rpx 30rpx 30rpx 30rpx;
	}
</style>
