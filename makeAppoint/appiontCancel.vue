<template>
	<view class="appiontCancel">
		<view class="cancel_top">
			<view class="cancel_shop">
				<icon class="iconfont icondianpu"></icon>
				百慕大汽修厂
			</view>
			<view class="cancel_temp">暑期倾情让利大优惠</view>
		</view>
		<view class="cancel_msg">
			<view class="msg_title">车牌</view>
			<view class="msg">浙B32623</view>
		</view>
		<view class="cancel_msg">
			<view class="msg_title">门店</view>
			<view class="msg">品牌连锁的某区域门店</view>
		</view>
		<view class="cancel_msg">
			<view class="msg_title">时间</view>
			<view class="msg">2020-08-24  上午</view>
		</view>
		<view class="cancel">
			<view class="reason_title">取消原因(必选)</view>
			<view class="reason" v-for="(item,index) in reasonList" :key="index" @click="getNeed(item,index)">{{item}}</view>
			<textarea class="textarea" placeholder="请输入取消理由..."></textarea>
			<button type="default" class="submit">确认取消</button>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			reasonList:['车辆选错','没时间/计划有变','距离太远','门店不接待','商家态度差'],
		}
	}
}
</script>

<style lang="scss" scoped>
.appiontCancel {
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #000000;
	.cancel_top {
		display: flex;
		flex-direction: column;
		background-color: #242328;
		padding: 30rpx 30rpx 50rpx 30rpx;
		margin-bottom: 30rpx;
		.cancel_shop {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 24rpx;
			color: #ffffff;
			margin-bottom: 10rpx;
			icon {
				font-size: 48rpx;
			}
		}
		.cancel_temp {
			color: #ffffff;
			font-size: 42rpx;
		}
	}
	.cancel_msg{
		display: flex;
		flex-direction: row;
		padding: 30rpx;
		justify-content: space-between;
		background-color: #242328;
		margin-bottom: 2rpx;
		.msg_title{
			font-size: 30rpx;
			color: #FFFFFF;
			opacity: 0.6;
		}
		.msg{
			font-size: 30rpx;
			color: #FFFFFF;
		}
	}
	.cancel{
		// display: flex;
		// flex-direction: column;
		margin-top: 28rpx;
		height: 100%;
		background-color: #242328;
		padding: 20rpx 30rpx;
		.reason_title{
			color: #EEAB68;
			font-size: 30rpx;
			margin-bottom: 30rpx;
		}
		.reason{
				display: inline-block;
				background-color:#3A393E ;
				padding: 10rpx 40rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				opacity: 0.8;
				border-radius: 40rpx;
				margin:10rpx
		}
		.textarea{
			box-sizing: border-box;
			margin-top: 10rpx;
			background-color:#3A393E ;
			color: #747377;
			font-size: 28rpx;
			width: 100%;
			padding: 30rpx 30rpx;
			border-radius: 8rpx;
		}
		.submit{
			font-size: 32rpx;
			color: #000000;
			background-color: #EEAB68;
			position: absolute;
			width: 652rpx;
			left: 0;
			right: 0;
			margin: auto; 
			bottom: 150rpx;
			border-radius: 100rpx;
		}
	}
}
</style>
