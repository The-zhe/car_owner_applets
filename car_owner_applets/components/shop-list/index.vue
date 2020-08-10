<template>
	<view>
		<view class="shopbox">
			<view class="shopbox-inside flex">
				<view class="shopbox-img"></view>
				<view class="shopbox-right">
					<view class="shopbox-name text-hidden">店铺名称</view>
					<view class="shopbox-time">营业中 8：30-20：30</view>
					<view>
						<tui-rate :current="4" :disabled="true" :score="0.45" active='#EEAB68'></tui-rate>
					</view>
					<view class="shopbox-lable">
						<text class="shopbox-lable-text">救援</text>
						<text class="shopbox-lable-text">拖车</text>
						<text class="shopbox-lable-text">道路救援</text>
					</view>
				</view>
			</view>
			<view class="shopbox-distance flex-c-center">
				<text class="iconfont iconicon_dingwei"></text>
				<view>0.2km</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiRate from "@/components/rate/rate"
    export default{
		components: {
			tuiRate
		},
	}
	
</script>

<style lang="scss" scoped>
		@import "@/style/shop.scss";
</style>
