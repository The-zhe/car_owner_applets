<template>
	<view>
		<swiper autoplay circular :interval="5000" :duration="300" class="swiperStyle">
			<swiper-item >
				<!-- <image :src="item" class="slide-image" mode="scaleToFill" /> -->
				<view class="slide-image color1"></view>
			</swiper-item>
			<swiper-item >
				<!-- <image :src="item" class="slide-image" mode="scaleToFill" /> -->
				<view class="slide-image color2"></view>
			</swiper-item>
		</swiper>
		<view class="about-shop">
			<view class="shop-top-padding">
				<view class="flex-c-between">
					<view class="shop-name">STAR FIX 星虹汽车（下应店）</view>
					<view class="shop-rate flex-center"><text class="iconfont iconguanzhu add"></text>关注</view>
				</view>
				<tui-rate :current="4" :disabled="true" :score="0.45" active='#EEAB68'></tui-rate>
			</view>
            <view class="add-padding">
				<view class="shop-time">营业中  周一至周日</view>
				<view class="shopbox-lable">
					<text class="shopbox-lable-text">救援</text>
					<text class="shopbox-lable-text">拖车</text>
					<text class="shopbox-lable-text">道路救援</text>
				</view>
			</view>
			<view class="shop-top flex-c-between">
				<view>
					<view class="shop-address">鄞州区潘火街道金源路988号</view>
					<view class="shop-juli">距您0.33km，驾车需要约8分钟</view>
				</view>
				<view class="shop-call">电话</view>
			</view>
		</view>
		<view class="service">
			<view class="service-title">服务</view>
			<my-tabs :tabs="tabs" :isFixed="false" :currentTab="currentTab" selectedColor="#EEAB68" sliderBgColor="#EEAB68"
			 @change="change" bgColor='#fff' :padding='0' color='#333'></my-tabs>
		</view>
	</view>
</template>

<script>
	import tuiRate from "@/components/rate/rate"
	import myTabs from "@/components/tabs/index.vue"
	export default{
		components: {
			tuiRate,
			myTabs
		},
		data(){
			return{
				bannerArryList:[],
				tabs: [
					{
					name:'美容洗车'
				},{
					name:'维修保养'
				},{
					name:'道路救援'
				},
				],
				currentTab: 0,
				scrollTop: 0,
			}
		},
		methods:{
			change(e){
				this.currentTab = e.index;
			//	this.getNewList(this.tabs[e.index].id)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "@/style/shop.scss";
	.slide-image{
		width: 100%;
		height: 376rpx;
		
	}
	.color1{
		background: $theme-color;
	}
	.color2{
		background: $price-color;
	}
	.about-shop{
		padding:0 30rpx;
		background: #fff;
		.shop-top-padding{
			padding:20rpx 0 10rpx 0;
			 border-bottom: 2rpx solid #F8F8F8
		}
		.shop-top{
		  padding:18rpx 0;
		  border-bottom: 2rpx solid #F8F8F8
		}
		.shop-name{
			color:#333;
			font-size:36rpx;
		}
		.shop-rate{
			padding:8rpx 16rpx 9rpx 16rpx;
			background: #2D2D2D;
			color:#fff;
			font-size:24rpx;
			border-radius: 24rpx;
			.add{
				margin-right:4rpx;
			}
		}
		.shop-address{
			font-size:28rpx;
			color:#333;
		}
		.shop-juli{
			font-size:24rpx;
			color:#666;
			padding-top:6rpx;
		}
		.shop-call{
			font-size:24rpx;
			color:#333
		}
		.add-padding{
			padding:18rpx 0 22rpx 0;
			border-bottom: 2rpx solid #F8F8F8
		}
	}
</style>
