<template>
	<view>
		<my-tabs :tabs="tabs" :isFixed="false" :currentTab="currentTab" selectedColor="#EEAB68" sliderBgColor="#EEAB68"
		 @change="change" bgColor='#242328' :padding='30' color='#fff'></my-tabs>
		<view class="content">
			<view class="content-bg">
				<view class="contet-title">适用范围</view>
				<view class="content-text">
					<view>1、使用时间：领取之日起一个月内</view>
					<view>2、每人限领1张</view>
					<view>3、具体描述：此处为优惠券的描述</view>
				</view>
				<view class="contet-title">积分有效期说明</view>
				<view class="content-text">
					<view>1、使用时间：领取之日起一个月内</view>
					<view>2、每人限领1张</view>
					<view>3、具体描述：此处为优惠券的描述</view>
				</view>
				<view class="contet-title">违规说明</view>
				<view class="content-text">
					<view>1、使用时间：领取之日起一个月内</view>
					<view>2、每人限领1张</view>
					<view>3、具体描述：此处为优惠券的描述</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myTabs from "@/components/tabs/index.vue"
	export default {
		components: {
			myTabs
		},
		data() {
			return {
				tabs: [{
					name: '积分说明'
				}, {
					name: '积分领取'
				}, {
					name: '积分用途'
				}, ],
				currentTab: 0,
			}
		},
		methods: {
			change(e) {
				this.currentTab = e.index;

				//	this.getNewList(this.tabs[e.index].id)
			},
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding: 0 20rpx;
        margin-top:20rpx;
		.content-bg {
			background: #353439;
			border-radius: 15rpx;
			padding-bottom:40rpx;
		}

		.contet-title {
			color: #fff;
			font-size: 28rpx;
			padding: 24rpx 0 24rpx 20rpx;
		}

		.content-text {
			padding: 0 20rpx;
			color: $white-color;
			line-height: 42rpx;
			font-size:24rpx;
		}


	}
</style>
