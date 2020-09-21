<template>
	<view class="appiont">
		<view class="appiont_search">
			<icon class="iconfont iconsousuo serachIcon"></icon>
			<input class="rec_ipt" type="text" placeholder="搜索活动关键字" disabled="true" />
		</view>
		<view class="appiont_title">
			<view :class="[currentTab == 0?'on':'unon']" style="margin-right: 30rpx;" @click="changeTab(0)">已预约</view>
			<view :class="[currentTab == 1?'on':'unon']" style="margin-left: 30rpx;" @click="changeTab(1)">已失效</view>
		</view>
		<view class="appiont_main">
			<view class="appionted" v-show="currentTab == 0"><appionted></appionted></view>
			<view class="overappiont" v-show="currentTab == 1"><overAppiont></overAppiont></view>
		</view>
	</view>
</template>

<script>
	import appionted from './appionted.vue'
	import overAppiont from './overAppiont.vue'
	export default{
		components:{appionted,overAppiont},
		data(){
			return{
				currentTab: 0,
			}
		},
		methods:{
			changeTab(currentTab){
				this.currentTab = currentTab
			}
		}
	}
</script>

<style lang="scss" scoped>
	.appiont{
		.appiont_search {
			position: relative;
			width: 100%;
			margin-top: 10rpx;
			.serachIcon {
				position: absolute;
				top: 5rpx;
				left: 60rpx;
				font-size: 40rpx;
				color: #8b8b8b;
			}
			.rec_ipt {
				background-color: #353439;
				color: #8b8b8b;
				padding: 10rpx 10rpx 10rpx 80rpx;
				margin: auto 40rpx;
				border-radius: 36rpx;
			}
		}
		.appiont_title{
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin: 20rpx 0rpx;
			.on{
				color: $theme-color;
				font-size: 28rpx;
				padding: 10rpx 20rpx 10rpx 20rpx;
				border-bottom: 5rpx solid $theme-color;
			}
			.unon{
				color: #FFFFFF;
				font-size: 28rpx;
				padding: 10rpx 20rpx 10rpx 20rpx;
			}
		}
		.appiont_main{
			padding: 0px 30rpx;
		}
	}
</style>
