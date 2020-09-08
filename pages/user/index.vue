<template>
	<view>
		
		<view class="top">
			<image src="../../static/img/user.png" class="user-bg"></image>
			<view  :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx;'"></view>
			<view class="user" :style="'top:'+nav.height+'px;'+'padding-top:'+nav.top+'px;'">
				<navigator class="user-infor flex-c-center" url="/userPage/myInfor">
					<view class="user-heard"></view>
					<view>
						<view class="user-name">{{userInfo.nickName}}</view>
						<view class="flex-c-center">
							<image src="../../static/img/level.png" class="user-level"></image>
							<text class="level-text">{{userInfo.cascade}}</text>
						</view>
					</view>
				</navigator>
				<view class="user-order flex-c-space">
					<navigator class="order-list" url="../../userPage/myCoupon" hover-class="none">
						<view>12</view>
						<view class="order-text">优惠券</view>
					</navigator>
					<navigator class="order-list" url="/userPage/myPoints">
						<view>1</view>
						<view class="order-text">积分</view>
					</navigator>
					<navigator class="order-list" url="/userPage/myAttention">
						<view>1</view>
						<view class="order-text">我的关注</view>
					</navigator>
				</view>
			</view>
			<view class="top-footer ">
				<navigator class="footer-content flex-c-between" url="../../userPage/allCard" hover-class="none">
					<view class="left">我的卡包</view>
					<view class="right flex-c-center">
						查看全部<text class="iconfont iconyoujiantou right-icon"></text>
					</view>
				</navigator>
			</view>
		</view>
		<view class="gray-bg">
			<view class="order-title">我的订单</view>
			<view class="flex-c-space order">
				<navigator url="../../orderPage/order" class="order-list">
					<view>12</view>
					<view class="big">全部订单</view>
				</navigator>
				<navigator url="../../orderPage/order?currentTab=1" class="order-list">
					<view>12</view>
					<view class="big">待付款</view>
				</navigator>
				<navigator url="../../orderPage/order?currentTab=2" class="order-list">
					<view>12</view>
					<view class="big">待评价</view>
				</navigator>
			</view>
		</view>
		<view class="bgHeight"></view>
		<view class="gray-bg">
			<view class="order-title flex-c-between"><text>我的爱车</text><navigator class="flex-c-center" url="/userPage/carList">查看全部<text class="iconfont iconyoujiantou right-icon"></text></navigator></view>
			<view class="flex-c-center car">
				<image src="../../static/img/car-icon%20(1).png" class="car-logo"></image>
				<view class="car-infor">
					<view class="car-name">
						华晨宝马-520Li
					</view>
					<view class="car-type">2017款2.0T手自一体 典雅版</view>
				</view>
				
			</view>
		</view>
		<view class="bgHeight"></view>
		<view class="footer-content flex-c-between kefu">
			<view class="left">客服中心</view>
			<view class="right flex-c-center">
				<text class="iconfont iconyoujiantou right-icon"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import { GetMemberAjax } from "@/apis/api";
	export default{
		data(){
			return{
				nav: {
					top: 0,
					height: 0
				},
				userInfo:null,
			}
		},
		created() {
			this.nav.top = this.$store.state.system.heardBar.top
			this.nav.height = this.$store.state.system.heardBar.height
		},
		onShow(){
			this.getUserInfo()
		},
		methods:{
			getUserInfo(){
				this.userInfo=uni.getStorageSync('userInfor')
			}
		}
	}
</script>

<style scoped lang="scss">
	.bgHeight{
		height: 20rpx;;
	}
	.gray-bg{
		background: #333;
		width: 86%;
		border-radius: 14rpx;
		margin:0 auto;
		padding:20rpx 30rpx;
		.car{
			padding-bottom:10rpx;
			padding-top:35rpx;
		}
		.car-logo{
			width: 84rpx;
			height: 84rpx;
			margin-right: 20rpx;
		}
		.car-name{
			font-size:24rpx;
			color:#fff;
			margin-bottom:10rpx;
		}
		.car-type{
			color: rgba(255,255,255,0.6);
			font-size:22rpx;
		}
		.order-title{
			font-size:28rpx;
			color:$theme-color;
			
		}
		.right-icon{
			color:$theme-color;
		}
		.order{
			margin-top:20rpx;
 
			.order-list{
				color:#fff;
				font-size:28rpx;
				text-align: center;
				padding-bottom:20rpx;
				padding-top:15rpx;
				.big{
					font-size:24rpx;
				}
			}
		}
		
	}
	.footer-content{
		width: 94%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 14rpx;
		background: #333;
		margin:0 auto;
		.left{
			font-size: 28rpx;
			color:#EEAB68;
			margin-left:30rpx
		}
		.right{
			font-size:24rpx;
			color:$theme-color;
			margin-right:30rpx
			
		}
	}
	.top{
		position: relative;
		height: 500rpx;
		.top-footer{
			position: absolute;
			left:0;
			bottom:20rpx;
			width: 100%;
			
		}
		.user-bg{
			width: 100%;
			height: 460rpx;
			
		}
		.user-order{
			margin-top:10rpx;
		}
		.user{
			width: 100%;
			position: absolute;
			left:0;
			top:0;
		}
		.user-infor{
			padding:30rpx;
			.user-heard{
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
				background: #333;
				margin-right:20rpx;
			}
			.user-name{
				font-size:32rpx;
				color:#000;
				margin-bottom:10rpx;
			}
			.user-level{
				width: 28rpx;
				height: 19rpx;
				margin-right: 10rpx;
			}
			.level-text{
				color:#000;
				font-size:24rpx;
			}
		}
		.order-list{
			text-align: center;
			font-size:28rpx;
			color:#000;
			.order-text{
				font-size:32rpx;
				margin-top:10rpx;
			}
		}
	}
</style>
