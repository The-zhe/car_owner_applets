<template>
	<view class="user_voucher">
		<view class="deduction">
			<view class="deduct_price">
				<view style="color: #FFFFFF;font-size: 26rpx;line-height: 55rpx;">￥</view>
				20元抵扣券
			</view>
			<view class="deduct_int">1200积分</view>
		</view>
		<view class="voucher_use">
			<view class="use_car">
				<view class="car">
					<view class="car_msg">奥迪A4L 2020款35 TFSI 时尚动感型</view>
					<view class="use">不适用</view>
				</view>
				<icon class="iconfont iconyoujiantou" style="color: #EEAB68;font-size: 24rpx;"></icon>
			</view>
			<view class="use_shop">
				<view class="shop_msg">可用门店</view>
				<icon class="iconfont iconyoujiantou" style="color: #EEAB68;font-size: 24rpx;"></icon>
			</view>
		</view>
		<view class="voucher_describe">
			<view class="describe">优惠券描述</view>
			<view class="space">1、领取时间：2020.07.12-2020.08.12</view>
			<view class="space">2、使用时间：领取之日起一个月内</view>
			<view class="space">3、每个人限领1张</view>
			<view class="space">4、具体描述：此处为优惠券的描述</view>
		</view>
		<view class="voucher_exchange">立即兑换</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.user_voucher {
	display: flex;
	flex-direction: column;
	.deduction {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 10rpx 0rpx 20rpx 30rpx;
		background-color: #353439;
		margin-bottom: 30rpx;
		.deduct_price {
			display: flex;
			flex-direction: row;
			color: #ffffff;
			font-size: 36rpx;
			padding: 20rpx 0rpx 20rpx 0rpx;
		}
		.deduct_int {
			padding: 30rpx;
			width: 100%;
			color: $theme-color;
			font-size: 32rpx;
			background-color: #000000;
			border-radius: 50rpx;
			margin-bottom: 10rpx;
		}
	}
	.voucher_use {
		display: flex;
		flex-direction: column;
		padding: 0rpx 20rpx;
		background-color: #353439;
		.use_car {
			display: flex;
			flex-direction: row;
			padding: 10rpx 0rpx;
			justify-content: space-between;
			border-bottom: 1rpx solid #000000;
			.car {
				display: flex;
				flex-direction: row;
				font-size: 24rpx;
				.car_msg {
					color: #ffffff;
					padding: 10rpx;
				}
				.use {
					border: 1rpx solid #e6b783;
					padding: 10rpx 20rpx;
					color: #e6b783;
					border-radius: 18rpx;
					margin-left: 20rpx;
				}
			}
		}
		.use_shop {
			display: flex;
			flex-direction: row;
			padding: 10rpx 0rpx;
			justify-content: space-between;
			border-top: 1rpx solid #000000;
			.shop_msg {
				color: #ffffff;
				padding: 10rpx;
			}
		}
	}
	.voucher_describe{
		display: flex;
		flex-direction: column;
		color: #EAEAEA;
		font-size: 24rpx;
		padding: 30rpx 50rpx;
		.describe{
			color: #FFFFFF;
			font-size: 34rpx;
			text-align: center;
			margin-bottom: 30rpx;
		}
		.space{
			margin-bottom: 15rpx;
		}
	}
	.voucher_exchange{
		position: absolute;
		left: 3%;
		bottom: 10rpx;
		margin: 0rpx auto ;
		background: #EEAB68;
		color: #FFFFFF;
		font-size: 28rpx;
		text-align: center;
		height: 92rpx;
		width: 710rpx;
		line-height: 92rpx;
		border-radius: 12rpx;
	}
}
</style>
