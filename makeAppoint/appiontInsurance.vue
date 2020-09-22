<template>
	<view class="appiontInsurance">
		<view class="insurance">
			<view class="insurance_msg">
				<icon class="iconfont icondianpu"></icon>
				<view class="insurance_shop">阳光保险</view>
			</view>
			<view class="msg_name">阳光保险增值服务名称</view>
		</view>
		<view class="insurance_temp">可选套餐</view>
		<view class="insurance_list">
			<view class="list_card">
				<view class="card_msg">
					<view class="temp_name">套餐A</view>
					<view class="temp_msg">指定门店 &nbsp;&nbsp;&nbsp; 剩余次数：8</view>
				</view>
				<view class="card_choose">
					<image :src="isChoose"></image>
				</view>
			</view>
			<view class="list_card">
				<view class="card_msg">
					<view class="temp_name">套餐B</view>
					<view class="temp_msg">全网通用&nbsp;&nbsp;&nbsp; 剩余次数：1</view>
				</view>
				<view class="card_choose">
					<image :src="isChoose"></image>
				</view>
			</view>
			<view class="list_card">
				<view class="card_msg">
					<view class="temp_name">套餐C</view>
					<view class="temp_msg">ָ全网通用 &nbsp;&nbsp;&nbsp; 剩余次数：1</view>
				</view>
				<view class="card_choose">
					<image :src="isChoose"></image>
				</view>
			</view>
		</view>
		<button class="insurance_btn">下一步</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				unChoose:require('../static/img/unget.png'),
				isChoose:require('../static/img/unget.png'),
				choosed:require('../static/img/get.png'),
			}
		},
		methods:{
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scope>
.appiontInsurance{
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	.insurance{
		display: flex;
		flex-direction: column;
		padding: 16rpx 30rpx;
		padding-bottom: 50rpx;
		background-color: #353439;
		margin-bottom: 30rpx;
		.insurance_msg{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 10rpx;
			icon {
				font-size: 48rpx;
				color: #ffffff;
				opacity: 0.8;
			}
			.insurance_shop {
				font-size: 24rpx;
				color: #ffffff;
				opacity: 0.8;
			}
		}
		.msg_name {
				color: #ffffff;
				font-size: 36rpx;
			}
	}
	.insurance_temp{
		background-color: #353439;
		margin-bottom: 30rpx;
		font-size: 30rpx;
		color: #EEAB68;
		padding: 16rpx 30rpx;
		margin-bottom: 6rpx;
	}
	.insurance_list{
		display: flex;
		flex-direction: column;
		background-color: #353439;
		padding: 16rpx 30rpx;
		.list_card{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2rpx solid #242328;
			padding: 20rpx 0rpx;
			.card_msg{
				display: flex;
				flex-direction: column;
				.temp_name{
					font-size: 36rpx;
					color: #FFFFFF;
					margin: 5rpx 0rpx;
				}
				.temp_msg{
					font-size: 26rpx;
					color: #9A9A9A;
					margin: 5rpx 0rpx;
				}
			}
			.card_choose{
				width: 44rpx;
				height: 44rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.insurance_btn{
		position: absolute;
		width: 652rpx;	
		left: 0;
		right: 0;
		margin: auto; 
		bottom: 50rpx;
		background: #FF6F00;
		border-radius: 44rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		opacity: 0.8;
	}
}
</style>
