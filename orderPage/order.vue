<template>
	<view class="order">
		<view class="nav-top" :style="'height:' + nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack">
				<icon class="iconfont iconzuojiantou" style="font-size: 40rpx;color: white;"></icon>
			</navigator>
			<view class="order_search">
				<icon class="iconfont iconsousuo serachIcon"></icon>
				<input class="order_ipt" type="text" placeholder="搜索我的订单" disabled="true" />
			</view>
		</view>
		<view class="space"></view>
		<view class="order_tab">
			<view :class="[currentTab == 0 ? 'on' : 'allorder']" @click="changeTab(0)">全部</view>
			<view :class="[currentTab == 1 ? 'on' : 'unpay']" @click="changeTab(1)">待付款</view>
			<view :class="[currentTab == 2 ? 'on' : 'unevaluate']" @click="changeTab(2)">待评价</view>
			<view :class="[currentTab == 3 ? 'on' : 'orderclose']" @click="changeTab(3)">已关闭</view>
		</view>
		<view class="order_main">
			<view class="allorder_main" v-show="currentTab == 0"><allorder :orderList="orderList"></allorder></view>
			<view class="unpay_main" v-show="currentTab == 1"><unpay :orderList="orderList"></unpay></view>
			<view class="unevaluate_main" v-show="currentTab == 2"><unevaluate :orderList="orderList"></unevaluate></view>
			<view class="orderclose_main" v-show="currentTab == 3"><orderclose :orderList="orderList"></orderclose></view>
		</view>
	</view>
</template>

<script>
import allorder from './order/allOrder.vue';
import unpay from './order/unPay.vue';
import unevaluate from './order/unEvaluate.vue';
import orderclose from './order/orderClose.vue';
import { order } from '../apis/api.js';
export default {
	name: 'order',
	components: { allorder, unpay, unevaluate, orderclose },
	data() {
		return {
			nav: {
				top: 0,
				height: 0
			},
			dataFrom: {
				userId: null,
				pageSize: '10',
				currentPage: '1'
			},
			currentTab: 0,
			orderList: []
		};
	},
	methods: {
		changeTab(currentTab) {
			this.currentTab = currentTab;
		},
		getOrderList() {
			this.dataFrom.userId = uni.getStorageSync('userId');
			uni.showNavigationBarLoading();
			order(this.dataFrom).then(res => {
				console.log(res.data)
				if (res.data.data.length != 0) {
					this.dataFrom.currentPage = Number(this.dataFrom.currentPage) + 1;
					this.dataFrom.currentPage = String(this.dataFrom.currentPage);
					this.orderList = this.orderList.concat(res.data.data);
				} else {
					uni.showToast({
						title: '已加载完毕'
					});
				}
			});
		}
	},
	onLoad(options) {
		this.currentTab = options.currentTab;
	},
	created() {
		this.nav.top = this.$store.state.system.heardBar.top;
		this.nav.height = this.$store.state.system.heardBar.height;
	},
	onReachBottom() {
		if (this.dataFrom.currentPage == null) {
			return false;
		} else {
			console.log('currentPage',this.dataFrom.currentPage);
			this.getOrderList();
		}
	},
	mounted() {
		this.getOrderList();
	}
};
</script>

<style scoped lang="scss">
.order {
	display: flex;
	flex-direction: column;
	.nav-top {
		position: relative;
		position: fixed;
		z-index: 1000;
		display: flex;
		align-items: center;
		background: #242328;
		font-size: 26rpx;
		padding-left: 30rpx;
		margin-bottom: 20rpx;
		width: 100%;
		.order_search {
			position: relative;
			width: 100%;
			.serachIcon {
				position: absolute;
				top: 0rpx;
				left: 60rpx;
				font-size: 40rpx;
				color: #8b8b8b;
			}
			.order_ipt {
				background-color: #353439;
				color: #8b8b8b;
				padding: 10rpx 10rpx 10rpx 80rpx;
				margin: auto 40rpx;
				border-radius: 36rpx;
				width: 320rpx;
			}
		}
	}
	.space {
		height: 190rpx;
		width: 100%;
		height: 220rpx;
	}
	.order_tab {
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		z-index: 99;
		top: 150rpx;
		width: 100%;
		background-color: #242328;
		.allorder {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 0rpx 10rpx 0rpx;
		}
		.unpay {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 0rpx 10rpx 0rpx;
		}
		,
		.unevaluate {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 0rpx 10rpx 0rpx;
		}
		.orderclose {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 0rpx 10rpx 0rpx;
		}
		.on {
			color: $theme-color;
			font-size: 32rpx;
			padding: 10rpx 0rpx 10rpx 0rpx;
			border-bottom: 5rpx solid $theme-color;
		}
	}
	.order_main {
	}
}
</style>
