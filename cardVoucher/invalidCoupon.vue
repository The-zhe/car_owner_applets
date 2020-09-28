<template>
	<view class="invalidCoupon">
		<view class="voucher_shop">
			<view class="shop_top">
				<icon class="iconfont icondianpu"></icon>
				<view class=".shop_name">阳光保险</view>
			</view>
			<view class="shop_voucher">
				<view class="voucher_left">
					<view class="left_name">88元畅享全车喷漆</view>
					<view class="left_num">剩余次数：0</view>
					<view class="left_date">2020.07.07-2020.07.21</view>
				</view>
			</view>
			<view class="shop_voucher">
				<view class="voucher_left">
					<view class="left_name">88元畅享全车喷漆</view>
					<view class="left_num">剩余次数：0</view>
					<view class="left_date">2020.07.07-2020.07.21</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.invalidCoupon{
	display: flex;
	flex-direction: column;
	padding:10rpx 30rpx;
	.voucher_shop{
		display: flex;
		flex-direction: column;
		.shop_top{
			display: flex;
			flex-direction: row;
			align-items: center;
			opacity: 0.8;
			margin-bottom: 10rpx;
			icon {
				font-size: 48rpx;
				color: #FFFFFF;
			}
			.shop_name{
				color: #FFFFFF;
			}
		}
		.shop_voucher{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding:0rpx 35rpx;
			width: 590rpx;
			height: 187rpx;
			margin: 10rpx auto;
			background-image: url(../static/img/used.png);
			background-size: 100% 100%;
			color: #9E9E9E;
			font-size: 20rpx;
			.voucher_left{
				.left_name{
					color: #9E9D9E;
					margin-bottom: 28rpx;
					font-size: 28rpx;
				}
			}
			.voucher_right{
				font-size: 28rpx;
				padding: 10rpx 15rpx;
				border-radius: 30rpx;
				color: #000000;
			}
		}
	}
	.more{
		margin: 10rpx auto;
		color: #9E9E9E;
		font-size: 20rpx;
		.disVoucher{
			display: initial;
			color: $theme-color;
			margin-left: 10rpx;
		}
	}
}
</style>
