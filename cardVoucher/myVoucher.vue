<template>
	<view class="myVoucher">
		<view class="voucher_shop">
			<view class="shop_top">
				<icon class="iconfont icondianpu"></icon>
				<view class=".shop_name">阳光保险</view>
			</view>
			<view class="shop_voucher">
				<view class="voucher_left">
					<view class="left_name">88元畅享全车喷漆</view>
					<view class="left_num">剩余次数：8</view>
					<view class="left_date">2020.07.07-2020.07.21</view>
				</view>
				<view class="voucher_right">立即使用</view>
			</view>
			<view class="shop_voucher">
				<view class="voucher_left">
					<view class="left_name">88元畅享全车喷漆</view>
					<view class="left_num">剩余次数：8</view>
					<view class="left_date">2020.07.07-2020.07.21</view>
				</view>
				<view class="voucher_right">立即使用</view>
			</view>
		</view>
		<view class="more">
			没有更多可用券&nbsp;|<view class="disVoucher">查看已失效的券></view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.myVoucher{
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
			padding:0rpx 50rpx;
			width: 590rpx;
			height: 187rpx;
			margin: 10rpx auto;
			background-image: url(../static/img/coupon.png);
			color: #9E9E9E;
			font-size: 20rpx;
			.voucher_left{
				.left_name{
					color: $theme-color;
					margin-bottom: 28rpx;
					font-size: 28rpx;
				}
			}
			.voucher_right{
				font-size: 28rpx;
				background-color: #EEAB68;
				padding: 10rpx 20rpx;
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
