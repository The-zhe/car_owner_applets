<template>
	<view>
		<view class="search flex-c-between">
			<view class="search-left flex-c-center">
				<!-- <text class="theme-color margin-left">宁波市</text> -->
				<picker :range="cityList" range-key="cityName" :value="value" @change="change">
					<view class="theme-color margin-left">
					{{cityList[value].cityName}}<text class="iconfont iconxiajiantou theme-color"></text>
					</view>
				</picker>
				
				<view class="search-line"></view>
				<text class="iconfont iconsousuo sousou"></text>
				<input v-model="dataFrom.searchParam" placeholder="输入门店地址、名称、标签" class="search-input" />
			</view>
			<view class="right-text" @click="searchShop">搜索</view>
		</view>
		<view class="shop">
			<serveCard :mainList="shopList"></serveCard>
		</view>
	</view>
</template>

<script>
import city from '@/lib/utils/citys.js';
import { storeInfo } from '../apis/api.js';
import serveCard from '@/components/serveCard.vue'
var QQMapWX = require('@/lib/qqmap-wx-jssdk.js');
var qqmapsdk;
export default {
	components:{
		serveCard
	},
	data() {
		return {
			dataFrom:{
				searchParam: null,
				storeLatitude:null,
				storeLongitude:null
			},
			value:87,
			cityList:null,
			shopList:null,
			isshop:false,
			localtion:null,
		};
	},
	onLoad() {
		this.localtion = uni.getStorageSync('localtion')
	},
	mounted() {
		this.cityList = city
	},
	methods: {
		change(e){
			this.value = e.target.value
		},
		searchShop() {
			this.dataFrom.storeLatitude = this.localtion.latitude
			this.dataFrom.storeLongitude = this.localtion.longitude
			if (this.dataFrom.searchParam == null || this.dataFrom.searchParam == '') {
				uni.showToast({
					title: '无效搜索',
					icon: 'none'
				});
			} else {
				storeInfo(this.dataFrom).then(res => {
					// console.log(res);
					this.shopList = res.data.data
					this.isshop = true
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.search {
	padding: 30rpx 30rpx 20rpx 30rpx;
	.search-left {
		width: 87%;
		background: #353439;
		border-radius: 40rpx;
		height: 68rpx;
		position: relative;
		.margin-left {
			margin: 0 18rpx 0 20rpx;
		}
		.sousou {
			color: #767677;
			margin-right: 10rpx;
		}
		.search-input {
			color: #fff;
			width: 350rpx;
		}
	}
	
	.theme-color {
		color: $theme-color;
		font-size: 24rpx;
	}
	.search-line {
		width: 2rpx;
		height: 34rpx;
		background: #59585b;
		margin: 15rpx;
	}
	.right-text {
		color: $theme-color;
	}
}
.shop{
		padding: 16rpx 30rpx;
	}
</style>
