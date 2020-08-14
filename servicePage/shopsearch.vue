<template>
	<view >
		<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<view class="left" :style="'top:' + nav.top + 'px'">
				<view class="iconfont iconzuojiantou nav-left-icon"></view>
			</view>
			<view class="nav-top-text">
				<uni-search-bar radius="100" placeholder="输入门店地址、名称、标签" clearButton="always" cancelButton="none" @confirm="search" />
			</view>
		</view>
		<view class="search-history flex-c-between">
			<text>历史搜索</text>
			<text class="iconfont iconB del-icon"></text>
		</view>
		<view class="history">
			<text class="history-label">拖车</text>
			<text class="history-label">道路救援</text>
			<text class="history-label">拖车</text>
			<text class="history-label">道路救援</text>
			<text class="history-label">拖车</text>
			<text class="history-label">拖车</text>
			<text class="history-label">道路救援</text>
			<text class="history-label">拖车</text>
			<text class="history-label">道路救援</text>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default{
		components: {
			uniSearchBar,
			uniSection
		},
		data(){
			return{
				nav: {
					top: 0,
					height: 0
				}
			}
		},
		created(){
			this.nav.top = this.$store.state.system.heardBar.top
			this.nav.height = this.$store.state.system.heardBar.height
		},
		methods:{
			search(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.history{
		padding:10rpx 30rpx;
		display:flex;
		flex-wrap: wrap;
		.history-label{
			padding: 9rpx 16rpx 10rpx 16rpx;
			color: #666;
			font-size: 24rpx;
			background: #dcdcdc;
			border-radius: 30rpx;
			margin-right: 20rpx;
			margin-bottom:20rpx;
		}
	}
	.search-history{
		color:#333;
		font-size:24rpx;
		padding:20rpx 30rpx;
		.del-icon{
			font-size:48rpx;
			color:#EEAB68
		}
	}
</style>
