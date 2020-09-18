<template>
	<view class="shopInfo">
		<icon class="iconfont iconzuojiantou back" @click="back()"></icon>
		<swiper autoplay circular :interval="5000" :duration="300" class="swiperStyle">
			<swiper-item>
				<!-- <image :src="item" class="slide-image" mode="scaleToFill" /> -->
				<view class="slide-image color1"></view>
			</swiper-item>
		</swiper>
		<view class="about-shop">
			<view class="shop-top-padding">
				<view class="flex-c-between">
					<view class="shop-name">{{bannerArryList.storeName}}</view>
					<view class="shop-rate flex-center">
						<text class="iconfont iconguanzhu add"></text>
						关注
					</view>
				</view>
				<tui-rate :current="bannerArryList.totalScoreStar" :disabled="true" :score="0.5" active="#EEAB68"></tui-rate>
			</view>
			<view class="add-padding">
				<view class="shop-time">营业中 {{bannerArryList.businessDate}} {{bannerArryList.businessStartTime}} - {{bannerArryList.businessEndTime}}
					<icon class="iconfont icontel-fill shop-call"></icon>
				</view>
				<view class="shopbox-lable">
					<text v-for="(item,index) in bannerArryList.rescueTypeList" :key="index" class="shopbox-lable-text">{{item}}</text>
				</view>
				<view class="shopbox-lable">
					<text v-for="(item,index) in bannerArryList.serviceTypeList" :key="index" class="shopbox-lables-text">{{item}}</text>
				</view>
			</view>
			<view class="shop-top flex-c-between">
				<view>
					<view class="shop-address">鄞州区潘火街道金源路988号</view>
					<view class="shop-juli">距您0.33km，驾车需要约8分钟</view>
				</view>
			</view>
		</view>
		<!-- <view class="service">
			<view class="service-title">服务</view> -->
			<!-- <my-tabs :tabs="tabs" :isFixed="false" :currentTab="currentTab" selectedColor="#EEAB68" sliderBgColor="#EEAB68"
			 @change="change" bgColor='#fff' :padding='30' color='#333'></my-tabs> -->
			<!-- <scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index == TabCur ? 'text-green cur' : ''" v-for="(item, index) in tabs" :key="index" @tap="tabSelect" :data-id="index">
					{{ item.name }}
				</view>
			</scroll-view>
			<serve-list></serve-list>
		</view>
		<view class="service">
			<navigator class="service-title flex-c-between" url="./evaluateList" hover-class="none">
				<view>
					用户评价
					<text class="service-title-num">(30)</text>
				</view>
				<text class="iconfont iconyoujiantou"></text>
			</navigator>
			<evaluate-list></evaluate-list>
			<evaluate-list></evaluate-list>
		</view> -->
		<view class="shop_temp">
			<view class="temp_title">
				<view class="hui">惠</view>
				<view class="title">优惠套餐</view>
			</view>
			<navigator :url="'/homePage/tempDetail?id='+ item.id" v-for="(item,index) in templist" :key="index" class="temp_card">
				<view class="card_left">
					<view class="left_name">{{item.package_name}}</view>
					<view class="left_type">美容洗车</view>
					<view class="left_price">
						<view class="price">¥ 9.9</view>
						<view class="unprice">¥ 199.9</view>
					</view>
				</view>
				<view class="card_right">
					<view class="btn">在线预约</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
import { storeInfoDetail,tempList } from '../apis/api.js';
import tuiRate from '@/components/rate/rate';
import myTabs from '@/components/tabs/index.vue';
import serveList from '@/components/serveList/index.vue';
import evaluateList from '@/components/evaluate-list/index.vue';
export default {
	components: {
		tuiRate,
		myTabs,
		serveList,
		evaluateList
	},
	data() {
		return {
			bannerArryList: [],
			tabs: [],
			currentTab: 0,
			scrollTop: 0,
			scrollLeft: 0,
			TabCur: 0,
			orderId: null,
			templist:null,
			dataFrom:{
				storeId :null,
				status  :'1',
			}
		};
	},
	onLoad(option) {
		console.log(option);
		this.orderId = option.id;
	},
	methods: {
		back(){
			uni.navigateBack()
		},
		change(e) {
			this.currentTab = e.index;
			//	this.getNewList(this.tabs[e.index].id)
		},
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		getStoreInfo() {
			storeInfoDetail(this.orderId).then(res => {
				console.log('storeInfo', res);
				this.bannerArryList = res.data
				this.bannerArryList.totalScoreStar =Number(Number(res.data.totalScoreStar)/10000).toFixed(1)
				this.bannerArryList.businessStartTime = res.data.businessStartTime.substring(-1,1)
				this.bannerArryList.businessEndTime = res.data.businessEndTime.substring(-1,1)
			});
		},
		getTempList(){
			this.dataFrom.storeId = this.orderId
			tempList(this.dataFrom).then(res => {
				console.log('templist',res)
				this.templist = res.data.data
			})
		}
	},
	mounted() {
		this.getStoreInfo();
		this.getTempList()
	}
};
</script>

<style scoped lang="scss">
@import '@/style/shop.scss';
.shopInfo{
	// background-color: #242328;
	background-color: #000000;
	height: 100%;
}
.service {
	background: #fff;
	margin-top: 30rpx;
	padding-top: 10rpx;
	.service-title {
		padding: 0 30rpx;
		color: #333;
		font-size: 38rpx;
		line-height: 60rpx;
	}
	.service-title-num {
		font-size: 24rpx;
		color: #999;
	}
}
.slide-image {
	width: 100%;
	height: 376rpx;
}
.color1 {
	background: $theme-color;
}
.color2 {
	background: $price-color;
}
.back {
	position: absolute;
	top: 70rpx;
	left: 10rpx;
	color: #000000;
	font-size: 50rpx;
	z-index: 9;
}
.about-shop {
	// padding: 0 30rpx;
	color:#ffffff;
	.shop-top-padding {
		padding: 20rpx 30rpx 10rpx 30rpx;
		border-bottom: 2rpx solid #242328;
		background-color: #242328;
	}
	.shop-top {
		background-color: #242328;
		padding: 18rpx 30rpx;
		border-bottom: 2rpx solid #242328;
		margin-top: 5rpx;
	}
	.shop-name {
		color: #fff;
		font-size: 36rpx;
	}
	.shop-rate {
		padding: 8rpx 16rpx 9rpx 16rpx;
		background: #2d2d2d;
		color: #fff;
		font-size: 24rpx;
		border-radius: 24rpx;
		.add {
			margin-right: 4rpx;
		}
	}
	.shop-address {
		font-size: 28rpx;
		color: #fff;
		margin-bottom: 10rpx;
	}
	.shop-juli {
		font-size: 24rpx;
		color: #666;
		padding-top: 6rpx;
	}
	.add-padding {
		padding: 18rpx 30rpx 22rpx 30rpx;
		border-bottom: 2rpx solid #000000;
		margin-top: 5rpx;
		background-color: #242328;
		.shop-time{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.shop-call {
				font-size: 48rpx;
				color: #FF6F00;
				margin-right: 20rpx;
			}
		}
	}
}
.shop_temp{
	margin-top: 24rpx;
	display: flex;
	flex-direction: column;
	background-color: #242328;
	padding: 15rpx 30rpx;
	.temp_title{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 20rpx;
		.hui{
			width: 32rpx;
			height: 32rpx;
			background-color: #FFAA00;
			color: #FFFFFF;
			font-size: 20rpx;
			border-radius: 5rpx;
			text-align: center;
		}
		.title{
			font-size: 32rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #FFFFFF;
			opacity: 0.8;
			margin-left: 10rpx;
		}
	}
	.temp_card{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 15rpx 30rpx;
		.card_left{
			display: flex;
			flex-direction: column;
			.left_name{
				font-size: 32rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 32rpx;
				color: #FFFFFF;
				opacity: 1;
				margin-bottom: 20rpx;
			}
			.left_type{
				font-size: 24rpx;
				font-family: Microsoft YaHei;
				font-weight: 300;
				line-height: 20rpx;
				color: #9F9FA1;
				opacity: 0.6;
				margin-bottom: 20rpx;
			}
			.left_price{
				display: flex;
				flex-direction: row;
				align-items: center;
				.price{
					font-size: 28rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					line-height: 28rpx;
					color: #FF6F00;
					opacity: 1;
					margin-right: 20rpx;
				}
				.unprice{
					text-decoration:line-through;
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 300;
					line-height: 24rpx;
					color: #FFFFFF;
					opacity: 0.6;
				}
			}
		}
		.card_right{
			display: flex;
			.btn{
				width: 112rpx;
				height: 28rpx;
				padding: 15rpx 10rpx;
				background: #FF6F00;
				opacity: 1;
				border-radius: 24rpx;
				font-size: 24rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 28rpx;
				color: #FFFFFF;
				text-align: center;
			}
		}
	}
}
.nav {
	white-space: nowrap;
	width: 94%;
	border-bottom: 2rpx solid #fcfcfc;
	margin: 0 auto;
	padding-top: 15rpx;
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
