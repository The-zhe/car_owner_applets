<template>
	<view >
		<view class="fixed-top">
			<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
				<view class="left" :style="'top:' + nav.top + 'px'">
					<view class="iconfont iconzuojiantou nav-left-icon"></view>
				</view>
				<view class="nav-top-text">
					<uni-search-bar radius="100" placeholder="店铺名称" clearButton="always" cancelButton="none" @confirm="search" />
				</view>
			</view>
			<view class="select flex-c-between">
				<view class="select-label add-block">海曙区<text class="iconfont iconxiajiantou1 up-icon"></text></view>
				<view>
					<text class="select-label">我的关注</text>
					<text class="select-label add-marginLeft">距离优先</text>
					<text class="select-label add-marginLeft">评分优先</text>
				</view>
				
			</view>
		</view>
	  <view class="height"></view>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		<shop-list></shop-list>
		
	</view>
	
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import shopList from '@/components/shop-list/index.vue'
	export default{
		components: {
			uniSearchBar,
			uniSection,
			shopList
		},
		data(){
			return{
				nav: {
					top: 0,
					height: 0
				},
				showActionSheet:false
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
	.fixed-top{
		position: fixed;
		top:0;
		width: 100%;
		left:0;
		background: #fff;
		z-index: 99;
	}
	.height{
		height: 200rpx;
	}
	.select{
		padding:20rpx 30rpx;
		.select-label{
			padding:8rpx 16rpx 7rpx 16rpx;
			color:#fff;
			background: #999;
			border-radius: 6rpx;
			font-size:24rpx;
		}
		.add-marginLeft{
			margin-left:10rpx;
		}
		.add-block{
			display: inline-block;
			display: flex;
			align-items: center;
		}
		.up-icon{
			font-size:26rpx
		}
	}
</style>
