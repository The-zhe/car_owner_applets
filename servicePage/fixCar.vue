<template>
	<view class="fixCar">
		<view class="nav-top" :style="'height:' + nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack">
				<icon class="iconfont iconzuojiantou" style="font-size: 40rpx;color: white;"></icon>
			</navigator>
			<view :class="[currentTab == 0 ? 'on' : 'repair']" @click="changeTab(0)">维修</view>
			<view :class="[currentTab == 1 ? 'on' : 'maintenance']" @click="changeTab(1)">保养</view>
		</view>
		<view class="space"></view>
		<view class="fix_main">
			<view class="repair_main" v-show="currentTab == 0"><repair></repair></view>
			<view class="mainten_main" v-show="currentTab == 1"><mainten></mainten></view>
		</view>
	</view>
</template>

<script>
import repair from '../components/fixCar/repairCar.vue';
import mainten from '../components/fixCar/maintenCar.vue';
export default {
	name: 'fixCar',
	components: { repair, mainten },
	data() {
		return {
			nav: {
				top: 0,
				height: 0
			},
			currentTab: 1
		};
	},
	methods: {
		changeTab(currentTab) {
			this.currentTab = currentTab;
		}
	},
	created() {
		this.nav.top = this.$store.state.system.heardBar.top;
		this.nav.height = this.$store.state.system.heardBar.height;
	},
	onLoad(options){
		this.currentTab = options.currentTab
	}
};
</script>

<style lang="scss" scoped>
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
	.repair {
		color: #ffffff;
		font-size: 24rpx;
		padding: 10rpx 20rpx 10rpx 20rpx;
		margin-left: 10rpx;
	}
	.maintenance {
		color: #ffffff;
		font-size: 24rpx;
		padding: 10rpx 20rpx 10rpx 20rpx;
		margin-left: 10rpx;
	}
	.on {
		color: $theme-color;
		font-size: 36rpx;
		padding: 10rpx 20rpx 10rpx 20rpx;
		border-bottom: 5rpx solid $theme-color;
		margin-left: 10rpx;
	}
}
.space {
	height: 190rpx;
	width: 100%;
}
</style>
