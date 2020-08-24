<template>
	<view class="coupons">
		<view class="coupons_card" v-for="(item, index) in mainList" :key="index">
			<view class="card_left">
				<view style="font-size: 24rpx;">{{ item.title }}</view>
				<view class="message">{{ item.msg }}</view>
				<view class="message">{{ item.date }}</view>
			</view>
			<view class="card_right">
				<view class="get" @click="chooseCoupons(index)"><image :src="item.get ? getImg : ungetImg" mode=""></image></view>
			</view>
		</view>
		<view class="untalk_total" @click="exchange()">立即兑换</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			coupons: '',
			img: require('../../static/img/unget.png'),
			getImg: require('../../static/img/get.png'),
			ungetImg: require('../../static/img/unget.png'),
			mainList: [
				{
					title: '￥50元抵扣券',
					msg: '可用门店:全网通用',
					date: '2020.08.18-2020.09.01',
					get: false
				},
				{
					title: '￥30元抵扣券',
					msg: '可用门店:全网通用',
					date: '2020.08.18-2020.09.01',
					get: false
				},
				{
					title: '￥100元抵扣券',
					msg: '可用门店:全网通用',
					date: '2020.08.18-2020.09.01',
					get: false
				}
			]
		};
	},
	methods: {
		chooseCoupons(index) {
			this.mainList[index].get = !this.mainList[index].get;
		},
		exchange() {
			this.coupons = this.mainList.filter((item, index) => {
				if (item.get === true) return item;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.coupons {
	display: flex;
	flex-direction: column;
	padding: 20rpx 40rpx;
	justify-content: space-between;
	.coupons_card {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 175rpx;
		background-image: url(../../static/img/coupon.png);
		margin-top: 20rpx;
		.card_left {
			display: flex;
			flex-direction: column;
			color: #ffffff;
			font-size: 20rpx;
			padding: 0rpx 40rpx;
			justify-content: center;
			.message {
				margin-top: 15rpx;
			}
		}
		.card_right {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.get {
				width: 50rpx;
				height: 50rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.untalk_total {
		position: absolute;
		bottom: 10rpx;
		width: 675rpx;
		height: 100rpx;
		background-color: $theme-color;
		color: #ffffff;
		font-size: 32rpx;
		text-align: center;
		line-height: 100rpx;
		border-radius: 10rpx;
	}
}
</style>
