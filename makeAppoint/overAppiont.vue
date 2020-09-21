<template>
	<view class="appionted">
		<view class="appionted_card">
			<view class="card_title">
				<view class="title">暑期倾情让利大优惠</view>
				<view class="type">预约失败</view>
			</view>
			<view class="card_msg">车牌 <view class="over">&nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view></view>
			<view class="card_msg">时间  <view class="over">&nbsp;&nbsp;&nbsp;&nbsp;2020-08-24 &nbsp;&nbsp; 上午</view></view>
			<view class="card_msg">门店  <view class="over">&nbsp;&nbsp;&nbsp;&nbsp;百慕大修理厂</view></view>
		</view>
		<view class="appionted_card">
			<view class="card_title">
				<view class="title">暑期倾情让利大优惠</view>
				<view class="type">预约失败</view>
			</view>
			<view class="card_msg">车牌 <view class="over">&nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view></view>
			<view class="card_msg">时间  <view class="over">&nbsp;&nbsp;&nbsp;&nbsp;2020-08-24 &nbsp;&nbsp; 上午</view></view>
			<view class="card_msg">门店  <view class="over">&nbsp;&nbsp;&nbsp;&nbsp;百慕大修理厂</view></view>
		</view>
		<view class="appionted_card">
			<view class="card_title">
				<view class="title">暑期倾情让利大优惠</view>
				<view class="type">预约失败</view>
			</view>
			<view class="card_msg">车牌 <view class="over">&nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view></view>
			<view class="card_msg">时间  <view class="over">&nbsp;&nbsp;&nbsp;&nbsp;2020-08-24 &nbsp;&nbsp; 上午</view></view>
			<view class="card_msg">门店  <view class="over">&nbsp;&nbsp;&nbsp;&nbsp;百慕大修理厂</view></view>
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
		display: flex;
		flex-direction: row;
		font-size: 24rpx;
		color: #ffffff;
		opacity: 0.6;
		padding: 10rpx 0rpx;
		.over{
			text-decoration:line-through;
			margin-left: 30rpx;
		}
	}
	.line {
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #242328;
	}
}
</style>
