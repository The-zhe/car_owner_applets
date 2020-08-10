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
			<!-- <my-tabs :tabs="tabs" :isFixed="false" :currentTab="currentTab" selectedColor="#EEAB68" sliderBgColor="#EEAB68"
			 @change="change" bgColor='#fff' :padding='30' color='#333'></my-tabs> -->
			 <scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			 	<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tabs" :key="index" @tap="tabSelect" :data-id="index">
			 		{{item.name}}
			 	</view>
			 </scroll-view>
			 <serve-list></serve-list>
	
		</view>
		<view class="service">
			<navigator class="service-title flex-c-between" url="./evaluateList" hover-class="none">
				<view>
					用户评价<text class="service-title-num">(30)</text>
				</view>
				<text class="iconfont iconyoujiantou"></text>
			</navigator>
			<evaluate-list></evaluate-list>
			<evaluate-list></evaluate-list>
		</view>
	</view>
</template>

<script>
	import tuiRate from "@/components/rate/rate"
	import myTabs from "@/components/tabs/index.vue"
	import serveList from '@/components/serveList/index.vue'
	import evaluateList from '@/components/evaluate-list/index.vue'
	export default{
		components: {
			tuiRate,
			myTabs,
			serveList,
			evaluateList
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
				scrollLeft: 0,
				TabCur: 0,
			}
		},
		methods:{
			change(e){
				this.currentTab = e.index;
				
			//	this.getNewList(this.tabs[e.index].id)
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "@/style/shop.scss";
	.service{
		background:#fff;
		margin-top:30rpx;
		padding-top:10rpx;
		.service-title{
			padding:0 30rpx;
			color:#333;
			font-size:38rpx;
			line-height: 60rpx;
		}
		.service-title-num{
			font-size:24rpx;
			color:#999
		}
	}
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
	.nav {
		white-space: nowrap;
	    width: 94%;
		border-bottom:2rpx solid #fcfcfc;
		margin:0 auto;
		padding-top:15rpx;
	}
	
	::-webkit-scrollbar {
		display: none;
	}
	
	.nav .cu-item {
		height: 50upx;
		display: inline-block;
		line-height: 50upx;
		margin: 0 10upx;
		padding: 0 20upx;
	}
	
	.nav .cu-item.cur {
		border-bottom: 4upx solid;
	}
	
.text-green {
	color: $theme-color;
}

</style>
