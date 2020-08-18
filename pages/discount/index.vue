<template>
	<view>
		<view class="u-swiper-wrap">
			<swiper autoplay circular :interval="5000" :duration="300" class="swiperStyle " :current='current'>
				<swiper-item>
					<image src="../../static/img/banner.png" class="slide-image" mode="scaleToFill"/>
				</swiper-item>
			</swiper>
			<view class="u-swiper-indicator">
				<view class="u-indicator-item-number">{{ current + 1 }}/1</view>
			</view>
		</view>

		<view class="order">
			<view class="order-box flex-c-between">
				<view class="flex-c-center order-left">
					<view class="heard"></view>
					<view class="font-size-28">我的订单/</view>
					<view class="font-size-20 marginLeft">2000积分</view>
				</view>
				<navigator class="right-list" url="/userPage/pointsList" hover-class="none">积分明细</navigator>
			</view>
		</view>
		 <scroll-list :height="350" :list="list" :effect3d="effect3d"  :mode='mode' :indicatorPos='indicatorPos'></scroll-list>
		 <view class="margin-tops">
			 <coupon-list></coupon-list>
			 <coupon-list></coupon-list>
		 </view>
		 <view style="height: 60rpx;"></view>
	</view>
</template>

<script>
	import scrollList from '@/components/uni-swiper/index.vue'
	import couponList from '@/components/couponList/index.vue'
	export default{
		components: {
			scrollList,
			couponList
		},
		data(){
			return{
				indicatordots:true,
				current:0,
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
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-swiper-wrap {
		position: relative;
		transform: translateY(0);
	}
	.u-swiper-indicator {
		position: absolute;
		display: flex;
		width: 100%;
		z-index: 1;
		bottom: 10rpx;
		right: 30rpx;
		justify-content: flex-end;
	}
	.u-indicator-item-number {
		padding: 6rpx 16rpx;
		line-height: 1;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 100rpx;
		font-size: 26rpx;
		color: rgba(255, 255, 255, 0.8);
	}
	.margin-tops{
		margin-top:80rpx;
	}
	.order{
		width: 94%;
		height: 92rpx;
		margin:20rpx auto;
		background: $btn-bg;
		border-radius: 20rpx;
		.order-box{
			width: 100%;
			height: 92rpx;
		}
		.order-left{
			margin-left:40rpx;
			color:$sub-theme-color;
			.heard{
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				background: $theme-color;
				margin-right: 20rpx;
			}
			.marginLeft{
				margin-left:15rpx;
			}
		}
		.right-list{
			width: 150rpx;
			height: 50rpx;
			line-height: 50rpx;
			 background-image: linear-gradient(to right , #383939, #282828);
			 color:$sub-theme-color;
			 font-size:24rpx;
			 border-top-left-radius: 25rpx;
			 border-bottom-left-radius: 25rpx;
			 text-align: center;
		}
		
	}
	.swiperStyle {
		height: 359rpx;
		position: relative;
	}
	.indicatordots{
		position: absolute;
		right:30rpx;
		bottom:30rpx;
		color:#fff;
		z-index: 99;
		font-size:32rpx;
	}
	.slide-image {
		width: 100%;
		height: 359rpx;
	}
</style>
