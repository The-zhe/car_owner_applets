<template>
	<view>
		<view class="serve">
			<view class="serve-list flex">
				<view class="serve-goodsImg"></view>
				<view class="serve-right">
					<view class="serve-rightName">
						<view class="one-hidden">
						<text class="serve-label">[美容洗车]</text>
						<text>PA流挂精洗（奔驰 宝PA流挂精洗（奔驰 </text></view>
					</view>
					<view class="serve-price">
						<text>￥</text>
						<text class="big-font">9.9</text>
						<text>起</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.serve{
		background: #fff;
		.serve-list{
			padding:20rpx 30rpx;
			
		}
		.serve-goodsImg{
			width: 140rpx;
			height: 130rpx;
			background: $theme-color;
		}
		.serve-right{
			width: calc(100% - 170rpx);
			margin-left:20rpx;
		}
		.serve-rightName{
			font-size:28rpx;
			color:#333;
			margin-bottom:10rpx;
		}
		.serve-label{
			color:$theme-color
		}
		.serve-price{
			font-size:20rpx;
			color:$theme-color
		}
		.big-font{
			font-size:36rpx;
		}
		
	}
</style>
