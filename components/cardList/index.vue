<template>
		<view  class="card flex-c-between">
			<view class="card-left">
				<view class="flex-c-center about-card">
					<image src="/static/img/baoxian.png" class="card-logo"></image>
					<view class="card-title flex-c-between">
						<view>阳光保险</view>
						<view>12次洗车卡</view>
					</view>
				</view>
				<view class="card-num">NO.456456456</view>
			</view>
			<view class="card-right">
				<view class="coupon-top">2020.07.15到期</view>
				<view class="coupon-shop coupon-margin">
					适用商家
				</view>
				<view class="coupon-shop">
					立即使用
				</view>
			</view>
		</view>
</template>

<script>
</script>

<style scoped lang="scss">
.card{
		width: 94%;
		padding:20rpx 0;
		background: #333333;
		margin:0 auto;
		.about-card{
			
			.card-logo{
				width: 66rpx;
				height: 66rpx;
			}
			.card-title{
				font-size:28rpx;
				color:rgba(255,255,255,.6);
				margin-left:20rpx;
				flex-direction: column;
			}
		}
		.card-left{
			margin-left:30rpx;
		}
		.card-num{
			color:#A2A2A2;
			font-size:24rpx;
			margin-top:20rpx
		}
		.card-right{
			margin-right:30rpx;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			.coupon-shop{
				width: 154rpx;
				height: 60rpx;
				line-height: 58rpx;
				border-radius: 34rpx;
				color:$theme-color;
				font-size:24rpx;
				border:2rpx solid $theme-color;
				text-align: center;
			}
			.coupon-margin{
						 margin-bottom:15rpx;
			}
			.coupon-top{
				margin-bottom:20rpx;
				color:#A2A2A2;
				font-size: 24rpx;
			}
		}
	}
</style>
