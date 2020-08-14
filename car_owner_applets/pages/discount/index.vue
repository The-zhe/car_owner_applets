<template>
	<view>
		<swiper autoplay circular :interval="5000" :duration="300" class="swiperStyle " :indicator-dots="indicatordots">
			<swiper-item>
				<image src="../../static/img/banner.png" class="slide-image" mode="scaleToFill"/>
			</swiper-item>
		</swiper>
		<view class="order">
			<view class="order-box flex-c-between">
				<view class="flex-c-center order-left">
					<view class="heard"></view>
					<view class="font-size-28">我的订单/</view>
					<view class="font-size-20 marginLeft">2000积分</view>
				</view>
				<view class="right-list">积分明细</view>
			</view>
		</view>
		 <scroll-list :height="350" :list="list" :effect3d="effect3d"  :mode='mode' :indicatorPos='indicatorPos'></scroll-list>
		 <view class="margin-tops">
			 <coupon-list></coupon-list>
			 <coupon-list></coupon-list>
		 </view>
	</view>
</template>

<script>
	import scrollList from '@/components/u-swiper/u-swiper.vue'
	import couponList from '@/components/couponList/index.vue'
	export default{
		components: {
			scrollList,
			couponList
		},
		data(){
			return{
				indicatordots:true,
				
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
	}
	
	.slide-image {
		width: 100%;
		height: 359rpx;
	}
</style>
