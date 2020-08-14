<template>
	<view>
		<view class="success" v-if='type==1'>
			<image src="../static/img/success.png" class="success-icon"></image>
			<view class="title">恭喜您，积分兑换成功！</view>
			<view class="flex-c-between success-width">
				<view class="success-btn">回到首页</view>
				<view class="success-btn">查看订单</view>
			</view>
		</view>
		<view class="success" v-if='type==2'>
			<image src="../static/img/fail.png" class="success-icon"></image>
			<view class="title">对不起，您的积分不足无法兑换</view>
			<view class="success-width flex-center">
				<view class="success-btn">回到积分商城</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type:null
			}
		},
		onLoad(opt){
			this.type=opt.type;
			if(opt.type==1){
				uni.setNavigationBarTitle({
					title:'兑换成功'
				})
			}else{
				uni.setNavigationBarTitle({
					title:'兑换失败'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.success{
		.success-icon{
			display: block;
			width: 194rpx;
			height: 194rpx;
			margin:60rpx auto;
		}
		.title{
			color:#EEAB68;
			font-size:28rpx;
			text-align: center;
			margin-bottom:40rpx;
		}
		.success-width{
			width: 60%;
			margin:30rpx auto;
		}
		.success-btn{
			padding:8rpx 26rpx 9rpx 26rpx;
			border:2rpx solid $sub-theme-color;
			border-radius: 10rpx;
			color:$sub-theme-color;
			font-size:28rpx;
		}
	}
</style>
