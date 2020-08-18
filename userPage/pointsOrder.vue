<template>
	<view>
		<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx;background:#232428'">
			<view class="left" :style="'top:' + nav.top + 'px'">
				<view class="iconfont iconzuojiantou nav-left-icon"></view>
			</view>
			<view class="nav-top-text">
				<uni-search-bar radius="100" placeholder="搜索我的订单" clearButton="always" cancelButton="none" @confirm="search" bgColor='rgba(255,255,255,0.1)' borColor='rgba(255,255,255,0.1)'/>
			</view>
		</view>
		<view  :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'"></view>
        <points-order></points-order>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import pointsOrder from '@/components/pointsOrder.vue'
    export default{
		components: {
			uniSearchBar,
			pointsOrder
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

<style scoped lang="scss">
	
</style>
