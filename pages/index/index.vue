<template>
	<view class="prohibition">
		<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<view class="iconfont iconsaoyisao"></view>
			<view class="iconfont icondingwei margin-left"></view>
			<view class="nav-top-text">宁波保险科技产业园</view>
		</view>
		<view  :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'"></view>
         <car-list :car="newsList"></car-list>
		<view class="my">
			<view class="my-name flex-c-between">
			   <text class="font-b">爱吃草的咸鱼</text>
			   <text>平台积分：520</text>
			</view>
			<view class="my-type font-size-24">VIP8</view>
			<view class="flex-c-space panel">
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon01.png"></image>
					<view>美容洗车</view>
				</view>
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon02.png"></image>
					<view  class="type-text">维修保养</view>
				</view>
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon03.png"></image>
					<view  class="type-text">道路救援</view>
				</view>
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon04.png"></image>
					<view>我的订单</view>
				</view>
			</view>
		</view>
		<view class="flex oil-box">
			<view class="oil flex-c-center oil-width">
				<view class="oil-circle">92</view>
				<view>5.85/L</view>
				<view class="oil-circle">93</view>
				<view>5.85/L</view>
				<view class="oil-circle">95</view>
				<view>5.85/L</view>
			</view>
			<view class="oil flex-c-center right">28</view>
		</view>
		<view class="oil-title flex-c-center">
			<view class="left oil-width">今日油价</view>
			<view class="right">附近优惠商家</view>
		</view>
		<view class="gift">
			<image src="../../static/img/index/banner01.png" class="gift-ba"></image>
			<image src="../../static/img/index/gift.png" class="gift-icon"></image>
		</view>
		<view style="height: 10rpx;"></view>
	   <scroll-list :height="350" :list="list" :effect3d="effect3d"  :mode='mode' :indicatorPos='indicatorPos'></scroll-list>
	   <view style="height: 150rpx;"></view>
	   <view class="pay-box">
		   <view class="pay-bg flex-c-center" @click="showPayEvent">
			  <view class="iconfont iconshijian pay-icon"></view>
			   <view   class="pay-right flex-c-center">
				   <view class="operate-pop-wrap flex-c-center" :class="[showPay?'show-operate':'']">
					  <view class="iconfont iconshijian pay-icon" style="margin-left:20rpx;"></view>
					   <text class="h-text">待支付</text>
					   <text class="h-text">浙B16J65</text>
					   <text class="h-text">预计完成08-05 14:00</text>
				   </view>
			   </view>
		   </view>
	   </view>
	   
	</view>

</template>

<script>
	import scrollList from '@/components/uni-swiper/index.vue'
	import carList from '@/components/carList/index.vue'
	export default {
		components: {
			scrollList,
			carList
		},
		data() {
			return {
				nav: {
					top: 0,
					height: 0
				},
				newsList:[{
					content:'浙B16J65',
					label:'宝马',
					label1:'2.0T 2014年产'
				},
				{
					content:'浙B16J65',
					label:'宝马',
					label1:'2.0T 2014年产'
				}],
				list: [{
						image: 'http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/615e675c203994cde8029ceddf5c482.png',
						price: '50',
						man:'满100减50',
						quan:'会员专属代金券',
						time:'长期有效'
					},
					{
						image: 'http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/615e675c203994cde8029ceddf5c482.png',
						price: '299',
						man:'每月限定一次',
						quan:'会员免费洗车券',
						time:'长期有效'
					},
					{
						image: 'http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/615e675c203994cde8029ceddf5c482.png',
						price: '2000',
						man:'积分100000',
						quan:'免费保养兑换券',
						time:'长期有效'
					}
				],
				effect3d: true,
				mode: 'round',
				indicatorPos: 'bottomCenter',
				showPay:false
			}
		},
		created() {
			this.nav.top = this.$store.state.system.heardBar.top
			this.nav.height = this.$store.state.system.heardBar.height
		},
		methods:{
			showPayEvent(){
				this.showPay=!this.showPay
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pay-box{
		position: fixed;
		padding:20rpx;
		bottom:20rpx;
		font-size:24rpx;
		color:$sub-theme-color;
		width: 100%;
		left:0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.pay-bg{
			background: #000;
			border-bottom-left-radius: 50rpx;
			border-top-left-radius: 50rpx;
			height: 84rpx;
			width: 104rpx;
			position: relative;
			justify-content: center;
		}
		.pay-width{
			width: 64rpx;
		}
		.pay-icon{
			color:$sub-theme-color;
			font-size:50rpx;
			margin-right:10rpx;
			
		}
		.h-text{
			font-size:24rpx;
			margin-right:14rpx;
		}
		.pay-right{
			width: 540rpx;
			padding-right: 15rpx;
			position: absolute;
			right:0;
			height: 84rpx;
			top: 50%;
			 transform: translateY(-50%);
			.operate-pop-wrap {
				background-color: #000;
				width: 100%;
				height: 100%;
				border-bottom-left-radius: 50rpx;
				border-top-left-radius: 50rpx;
				position: absolute;
				transform: translateX(100%);
				transition: transform .2s ease;
				&.show-operate {
					transform: translateX(0%);
				}
			}
		}
		
	}
	.gift{
		position: relative;
		padding:0 30rpx;
		margin-bottom:30rpx;
		.gift-ba{
			width: 94%;
			height: 231rpx;
			margin:0 auto;
			display: block;
			
		}
		.gift-icon{
			width: 124rpx;
			height: 120rpx;
			position: absolute;
			top:85rpx;
			left:77rpx;
		}
		
	}
	.oil-title{
		padding:20rpx 30rpx;
		color:$sub-theme-color;
		.left{
			text-align: center;
			font-size:24rpx;
			width: 72%;
			margin-right:20rpx;
		}
		.right{
			width: 26%;
			font-size:24rpx;
			text-align: center;
		}
	}
	.oil-box{
		
		position: relative;
		z-index:10;
		width: 93%;
		margin:0 auto;
		.oil{
			height: 90rpx;
		    background:#000;
			border-radius: 45rpx;
			font-size:28rpx;
			color:#fff;
			justify-content: center;
		}
		.oil-width{
			width: 72%;
			margin-right:20rpx;
			
		}
		.right{
			width: 26%;
			color:#C54810;
			font-size:38rpx;
		}
		.oil-circle{
			font-size:32rpx;
			width: 55rpx;
			height: 55rpx;
			background: url('../../static/img/index/circle.png')  no-repeat center center;
			background-size: 100%;
			color:$sub-theme-color;
			line-height: 55rpx;
			text-align: center;
			&+view{
				margin:0 10rpx;
			}
			// border:2rpx solid $sub-theme-color;
			// border-radius: 50%;
		}
			
	}
	.my{
		background: url('http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/c53532d854fdf2917f292412b41f4ed.png') no-repeat center center;
		width: 85%;
		height: 334rpx;
		padding:30rpx 30rpx 20rpx 30rpx;
		background-size:100% ;
		margin:0 auto;
		.my-name{
			font-size:28rpx;
			color:$sub-theme-color;
			padding-top:26rpx;
		}
		.font-b{
			font-size:36rpx;
			font-weight: bold;
		}
		.my-type{
			margin:10rpx 0 20rpx 0;
			color:$sub-theme-color
		}
		.panel{
			padding:30rpx 0 10rpx 0;
		}
		.my-icon{
			width: 92rpx;
			height: 92rpx;
		}
		.type-text{
			text-align: center;
			color:$sub-theme-color;
			font-size:24rpx;
		}
		
	}
	.nav-top {
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		display: flex;
		align-items: center;
		background: #242328;
		font-size: 28rpx;
		padding-left: 30rpx;
		z-index: 99;

		.iconsaoyisao {
			color: #fff;
			font-size: 38rpx;
		}

		.margin-left {
			margin-left: 15rpx;
			margin-right: 15rpx;
			color: #fff;
			font-size: 38rpx;
		}

		.nav-top-text {
			color: #fff;
			padding-left: 0 !important
		}
	}
</style>
