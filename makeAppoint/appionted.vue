<template>
	<view class="appionted">
		<view class="appionted_card">
			<view class="card_title">
				<view class="title">暑期倾情让利大优惠</view>
				<view class="type">预约成功</view>
			</view>
			<view class="card_msg">车牌 &nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view>
			<view class="card_msg">时间 &nbsp;&nbsp;&nbsp;&nbsp; 2020-08-24 &nbsp;&nbsp; 上午</view>
			<view class="card_msg line">门店 &nbsp;&nbsp;&nbsp;&nbsp; 百慕大修理厂</view>
			<view class="submit"><view class="btn">取消预约</view></view>
		</view>
		<view class="appionted_card">
			<view class="card_title">
				<view class="title">暑期倾情让利大优惠</view>
				<view class="type">预约成功</view>
			</view>
			<view class="card_msg">车牌 &nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view>
			<view class="card_msg">时间 &nbsp;&nbsp;&nbsp;&nbsp; 2020-08-24 &nbsp;&nbsp; 上午</view>
			<view class="card_msg line">门店 &nbsp;&nbsp;&nbsp;&nbsp; 百慕大修理厂</view>
			<view class="submit"><view class="btn">取消预约</view></view>
		</view>
		<view class="appionted_card">
			<view class="card_title">
				<view class="title">暑期倾情让利大优惠暑期倾情让利大优惠暑期倾情让利大优惠</view>
				<view class="type">预约成功</view>
			</view>
			<view class="card_msg">车牌 &nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view>
			<view class="card_msg">时间 &nbsp;&nbsp;&nbsp;&nbsp; 2020-08-24 &nbsp;&nbsp; 上午</view>
			<view class="card_msg line">门店 &nbsp;&nbsp;&nbsp;&nbsp; 百慕大修理厂</view>
			<view class="submit"><view class="btn">取消预约</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.appionted_card {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	background-color: #353439;
	border-radius: 10rpx;
	margin-bottom: 30rpx;
	.card_title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30rpx;
		.title {
			width: 540rpx;
			font-size: 38rpx;
			color: #ffffff;
		}
		.type {
			font-size: 24rpx;
			color: #ff6f00;
		}
	}
	.card_msg {
		font-size: 24rpx;
		color: #ffffff;
		opacity: 0.6;
		padding: 10rpx 0rpx;
	}
	.line {
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #242328;
	}
	.submit {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		.btn {
			width: 178rpx;
			margin-top: 10rpx;
			color: #b5b4b6;
			border: 2rpx solid #b5b4b6;
			background-color: #353439;
			text-align: center;
			padding: 10rpx 0rpx;
			border-radius: 100rpx;
		}
	}
}
</style>
