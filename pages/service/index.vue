<template>
	<view class="service">
		<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<view :class="[currentTab == 0?'on':'interests']" @click="changeTab(0)">权益</view>
			<view :class="[currentTab == 1?'on':'recommended']" @click="changeTab(1)">推荐</view>
		</view>
		<!-- <view class="space"></view> -->
		<view  :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx;'"></view>
		<view class="ser_main">
			<view class="interests_main" v-show="currentTab == 0"><interest></interest></view>
			<view class="recommended_main" v-show="currentTab == 1"><recommend></recommend></view>
		</view>
	</view>
</template>

<script>
import interest from '@/components/interests.vue'
import recommend from '@/components/recommend.vue'
export default {
	name:'service',
	components:{ interest,recommend },
	data() {
		return {
			nav: {
				top: 0,
				height: 0
			},
			currentTab: 0,
		}
	},
	methods:{
		changeTab(currentTab){
			this.currentTab = currentTab
		},
	},
	created() {
		this.nav.top = this.$store.state.system.heardBar.top
		this.nav.height = this.$store.state.system.heardBar.height
	}
}
</script>

<style scoped lang="scss">
.nav-top {
	position: relative;
	position: fixed;
	z-index: 1000;
	display: flex;
	align-items: center;
	background: #242328;
	font-size: 26rpx;
	padding-left:30rpx;
	margin-bottom: 20rpx;
	width: 100%;
		.interests{
			color: #FFFFFF;
			font-size: 24rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
		}
		.recommended{
			color: #FFFFFF;
			font-size: 24rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
		}
		.on{
			color: $theme-color;
			font-size: 36rpx;
			padding: 10rpx 20rpx 10rpx 20rpx;
			border-bottom: 5rpx solid $theme-color;
		}
}
.ser_main{
		margin-top:48rpx;
	}
</style>
