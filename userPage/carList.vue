<template>
	<view>
		<view v-if="nodata">
			<image src="../static/img/addcar.png" class="car-logo"></image>
			<view class="no-car-data">您暂未添加爱车，赶紧去添加吧~</view>
			
			
		</view>
		<view class="fixed-btn">
			<navigator class="submit-btn" @click="toAdd">添加爱车</navigator>
		</view>
		<view class="car">
			<view class="car-list">
				<view class="car-content">
					<view class="car-infor flex-c-center">
						<image src="../static/img/car-logo.png" class="car-logo1"></image>
						<view>一众汽车宝来</view>
						<view class="car-num flex-c-center">
							浙
							<view class="car-num-text">B1KB15</view>
						</view>
					</view>
					<view class="car-alllabel one-hidden">大众  宝来  2020款  1.4TSI  双离合  28……</view>
				</view>
				<view class="right-logo bg1">已认证</view>
			    <view class="operate-allbtn">
					<view class="operate-btn btn-del">删除</view>
					<view class="operate-btn mo-btn">默认车俩</view>
				</view>
			</view>
			<view class="car-list">
				<view class="car-content">
					<view class="car-infor flex-c-center">
						<image src="../static/img/car-logo.png" class="car-logo1"></image>
						<view>一众汽车宝来</view>
						<view class="car-num flex-c-center">
							浙
							<view class="car-num-text">B1KB15</view>
						</view>
					</view>
					<view class="car-alllabel one-hidden">大众  宝来  2020款  1.4TSI  双离合  28……</view>
					
				</view>
				<view class="right-logo bg1">已认证</view>
			    <view class="operate-allbtn">
					<view class="operate-btn btn-del">删除</view>
					<view class="operate-btn mo-btn">默认车俩</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				nodata:false
			}
		},
		methods:{
			toAdd(){
				uni.navigateTo({
					url:'addCar'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.car{
		padding:0 30rpx;
		.operate-allbtn{
			height: 110rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.operate-btn{
				border:2rpx solid $theme-color;
				padding:14rpx 38rpx 13rpx 38rpx;
				border-radius: 30rpx;
				font-size:24rpx;
			}
			.btn-del{
				color:$theme-color
			}
			.mo-btn{
				background: $theme-color;
				color:#fff;
				margin-left:20rpx;
			}
		}
		.car-list{
			background: #333333;
			border-radius: 20rpx;
			margin-top:20rpx;
			padding:0 20rpx;
			position: relative;
			.car-content{
				padding:30rpx 20rpx 20rpx 30rpx;
				border-bottom:2rpx solid $theme-color;
			}
		}
		.car-infor{
			color:#fff;
			font-size:32rpx;
			.car-logo1{
				width: 50rpx;
				height: 50rpx;
				margin-right:20rpx;
			}
			.car-num{
				color:#000;
				font-size:28rpx;
				background: $theme-color;
				width: 166rpx;
				height: 48rpx;
				border:4rpx dashed $theme-color;
			justify-content:space-around;
			margin-left:20rpx;
			}
			.car-num-text{
				color:#fff;
				background: #000;
				width: 112rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
			}
		
		}
		.car-alllabel{
			color:$white-color;
			margin-top:20rpx;
			font-size:24rpx;
		}
		.right-logo{
			width: 100rpx;
			height: 48rpx;
			color:#fff;
			font-size:24rpx;
			border-top-left-radius: 24rpx;
			border-bottom-left-radius: 24rpx;
			line-height: 48rpx;
			text-align: center;
			position: absolute;
			top:30rpx;
			right:0
		}
		.bg1{
			background: $theme-color;
		}
		.bg2{
			background: #656565;
		}
		
	}
	.car-logo{
		width: 200rpx;
		height: 200rpx;
		margin:80rpx auto 0 auto;
		display: block;
	}
	.no-car-data{
		color:#fff;
		margin-top:30rpx;
		text-align: center;
	}
</style>
