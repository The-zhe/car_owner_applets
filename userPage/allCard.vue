<template>
	<view>
		<view class="shop">
			<view class="shopName">阳光保险</view>
			<card-list></card-list>
		</view>
		<view class="footer flex-center">
			<view>没有更多卡包</view>
			<view class="footer-line"></view>
			<navigator class="color flex-c-center" url="loseCard">查看已失效的卡包<view class="iconfont iconyoujiantou"></view></navigator>
			
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
		color:#fff;
		padding:15rpx 30rpx 30rpx 30rpx;
	}
</style>
