<template>
	<view class="roadSide">
		<view class="nav-top" :style="'height:' + nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack">
				<icon class="iconfont iconzuojiantou" style="font-size: 40rpx;color: white;"></icon>
			</navigator>
			<view :class="[currentTab == 0 ? 'on' : 'trailerCar']" @click="changeTab(0)">拖车</view>
			<view :class="[currentTab == 1 ? 'on' : 'tireChange']" @click="changeTab(1)">换胎</view>
			<view :class="[currentTab == 2 ? 'on' : 'eleTake']" @click="changeTab(2)">搭电</view>
		</view>
		<view  :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx;'"></view>
		<view class="road_main">
			<view class="repair_main" v-show="currentTab == 0"><trailer></trailer></view>
			<view class="mainten_main" v-show="currentTab == 1"><tire></tire></view>
			<view class="mainten_main" v-show="currentTab == 2"><eletake></eletake></view>
		</view>
	</view>
</template>

<script>
import eletake from './roadSide/eleTake.vue';
import trailer from './roadSide/trailerCar.vue';
import tire from './roadSide/tireChange.vue';
export default {
	name: 'roadSide',
	components: { eletake, trailer, tire },
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
	created() {
		this.nav.top = this.$store.state.system.heardBar.top;
		this.nav.height = this.$store.state.system.heardBar.height;
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
	.trailerCar {
		color: #ffffff;
		font-size: 24rpx;
		padding: 10rpx 20rpx 10rpx 20rpx;
		margin-left: 10rpx;
	}
	.tireChange {
		color: #ffffff;
		font-size: 24rpx;
		padding: 10rpx 20rpx 10rpx 20rpx;
		margin-left: 10rpx;
	}
	.eleTake {
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
.road_main {
	margin-top:48rpx;
}
</style>
