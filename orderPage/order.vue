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
			<view class="allorder_main" v-show="currentTab == 0"><allorder></allorder></view>
			<view class="unpay_main" v-show="currentTab == 1"><unpay></unpay></view>
			<view class="unevaluate_main" v-show="currentTab == 2"><unevaluate></unevaluate></view>
			<view class="orderclose_main" v-show="currentTab == 3"><orderclose></orderclose></view>
		</view>
	</view>
</template>

<script>
	import allorder from '../components/order/allOrder.vue';
	import unpay from '../components/order/unPay.vue';
	import unevaluate from '../components/order/unEvaluate.vue';
	import orderclose from '../components/order/orderClose.vue';
export default {
	name: 'order',
	components: { allorder,unpay,unevaluate,orderclose },
	data() {
		return {
			nav: {
				top: 0,
				height: 0
			},
			currentTab: 0
		};
	},
	methods: {
		changeTab(currentTab) {
			this.currentTab = currentTab;
		}
	},
	onLoad(options){
		this.currentTab = options.currentTab
	},
	created() {
		this.nav.top = this.$store.state.system.heardBar.top;
		this.nav.height = this.$store.state.system.heardBar.height;
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
	}
	.order_tab {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.allorder {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
		}
		.unpay {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
		},
		.unevaluate {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
		}
		.orderclose {
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
		}
		.on {
			color: $theme-color;
			font-size: 32rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
			border-bottom: 5rpx solid $theme-color;
		}
	}
	.order_main {
	}
}
</style>
