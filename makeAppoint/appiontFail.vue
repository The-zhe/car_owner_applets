<template>
	<view class="appiontFail">
		<view class="appiont_top">
			<view class="appiont_left">
				<view class="left_shop">
					<icon class="iconfont icondianpu"></icon>
					<view class="text">百慕大汽修厂</view>
				</view>
				<view class="left_temp">暑期倾清让利套餐</view>
			</view>
			<view class="appiont_right">
				<icon class="iconfont icondingwei3"></icon>
				<view class="distance">2.0km</view>
			</view>
		</view>
		<view class="appiont_state">
			<view class="state_type">预约失败</view>
			<view class="state_msg">商家已拒绝，详情可致电商家。</view>
		</view>
		<view class="appiont_title">预约信息</view>
		<view class="appiont_msg">
			<view class="msg_car">车牌 &nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view>
			<view class="msg_car">时间 &nbsp;&nbsp;&nbsp;&nbsp; 2020-08-24 &nbsp;&nbsp;&nbsp; 上午</view>
			<view class="msg_car">门店 &nbsp;&nbsp;&nbsp;&nbsp; 百慕大修理厂(印象城店)</view>
			<view class="msg_car">地址 &nbsp;&nbsp;&nbsp;&nbsp; 鄞州区钱湖北路100号</view>
			<button class="btn" type="default">重新预约</button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.appiontFail{
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #000000;
	.appiont_top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #242328;
		padding: 30rpx 30rpx 50rpx 30rpx;
		margin-bottom: 30rpx;
		.appiont_left{
			display: flex;
			flex-direction: column;
			font-size: 24rpx;
			color: #ffffff;
			// align-items: center;
			// justify-content: center;
			.left_shop{
				display: flex;
				flex-direction: row;
				align-items: center;
				opacity: 0.8;
				margin-bottom: 10rpx;
				icon {
					font-size: 48rpx;
				}
			}
			.left_temp{
				color: #FFFFFF;
				font-size: 42rpx;
			}
		}
		.appiont_right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			icon{
				color: $theme-color;
				font-size: 42rpx;
			}
			.distance{
				color: #FFFFFF;
				opacity: 0.8;
			}
		}
	}
	.appiont_state{
		display: flex;
		flex-direction: column;
		padding: 30rpx 30rpx 30rpx 30rpx;
		background-color: #EEAB68;
		margin-bottom: 30rpx;
		.state_type{
			font-size: 36rpx;
			color: #000000;
			margin-bottom: 20rpx;
			font-weight: 600;
		}
		.state_msg{
			font-size: 28rpx;
			color: #000000;
			opacity: 0.8;
			font-weight: 600;
		}
	}
	.appiont_title{
		background-color: #242328;
		padding: 20rpx 30rpx 20rpx 30rpx;
		color: #EEAB68;
		font-size: 28rpx;
		margin-bottom: 5rpx;
	}
	.appiont_msg{
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #242328;
		padding: 20rpx 30rpx 20rpx 30rpx;
		font-size: 28rpx;
		.msg_car{
			margin: 10rpx 0rpx;
			color: #FFFFFF;
			opacity: 0.6;
		}
		.btn{
			position: absolute;
			width: 652rpx;
			left: 0;
			right: 0;
			margin: auto; 
			bottom: 150rpx;
			box-sizing: border-box;
			color: #EEAB68;
			border: 2rpx solid #EEAB68;
			background-color: #242328;
		}
	}
}
</style>
