<template>
	<view class="washCar">
<!-- 		<view class="nav-top" :style="'height:' + nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<icon class="iconfont iconzuojiantou" style="font-size: 40rpx;"></icon>
			<view class="wash_title">美容洗车</view>
			<view class="nav_space"></view>
		</view> -->
		<view class="wash_main">
			<view class="main_top">
				<view class="top_dw">
					<i class="iconfont icondingwei dingweiIcon"></i>
					<view class="dw_text">宁波保险科技创业园</view>
				</view>
				<view class="top_choose">
					<u-select v-model="show" mode="single-column" :list="chooseList" @confirm="confirm" style="color: $theme-color;"></u-select>
					<view class="option">{{ select }}</view>
					<icon class="iconfont iconxiajiantou1 xiala" @click="isShow"></icon>
				</view>
			</view>
			<view class="main_bottom">
				<serveCard :mainList="washList"></serveCard>
			</view>
		</view>
	</view>
</template>

<script>
import serveCard from '../components/serveCard.vue'
export default {
	name: 'washCar',
	components: { serveCard },
	data() {
		return {
			nav: {
				top: 0,
				height: 0
			},
			select: '距离优先',
			show:false,
			chooseList: [
				{
					value: '1',
					label: '距离优先'
				},
				{
					value: '2',
					label: '价格优先'
				},
				{
					value: '3',
					label: '可用门店'
				}
			],
			washList: [
				{
					image: require('../static/img/banner.png'),
					name: '小伙子',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '2.3',
					point: 4.7
				},
				{
					image: require('../static/img/banner.png'),
					name: '你那什么车啊?',
					time: '24小时',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '5.4',
					point: 4.9
				},
				{
					image: require('../static/img/banner.png'),
					name: 'AE86啊',
					time: '24小时',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [{ typeName: '救援' }, { typeName: '搭电' }, { typeName: '拖车' }],
					distance: '5.4',
					point: 4.9
				},
				{
					image: require('../static/img/banner.png'),
					name: '飘一下啊',
					time: '8:30 - 22:30',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '6.4',
					point: 4.7
				},
				{
					image: require('../static/img/banner.png'),
					name: '随便啊',
					time: '8:30 - 22:30',
					isFocus: true,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '7',
					point: 4.8
				},
				{
					image: require('../static/img/banner.png'),
					name: '小伙子,你这车不错啊',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '备胎'
						}
					],
					distance: '7.1',
					point: 4.5
				},
			]
		};
	},
	methods: {
		confirm(e) {
			console.log(e);
			this.select = e[0].label;
		},
		isShow() {
			this.show = true;
		},
		foucs(item) {
			console.log(item)
			item.isFocus = !item.isFocus
		}
	}
};
</script>

<style lang="scss" scoped>
.washCar {
	// .nav-top {
	// 	position: relative;
	// 	position: fixed;
	// 	z-index: 1000;
	// 	display: flex;
	// 	align-items: center;
	// 	background: #242328;
	// 	font-size: 26rpx;
	// 	padding-left: 30rpx;
	// 	margin-bottom: 20rpx;
	// 	width: 100%;
	// 	color: #ffffff;
	// 	justify-content: space-between;
	// 	.wash_title {
	// 		font-size: 36rpx;
	// 	}
	// 	.nav_space{
	// 		width: 100rpx;
	// 	}
	// }
	.wash_main{
		display: flex;
		flex-direction: column;
		padding: 10rpx 40rpx;
		.main_top{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.top_dw {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.dingweiIcon {
					color: $theme-color;
					font-size: 40rpx;
				}
				.dw_text {
					color: #ffffff;
					font-size: 28rpx;
					margin-left: 15rpx;
				}
			}
			.top_choose {
				padding-left: 20rpx;
				display: flex;
				width: 200rpx;
				height: 60rpx;
				flex-direction: row;
				justify-content: space-around;
				/* align-items: center; */
				border-radius: 36rpx;
				background-color: #353439;
				.option {
					color: $theme-color;
					line-height: 60rpx;
				}
				.xiala {
					color: $theme-color;
					margin-right: 36rpx;
				}
			}
		}
		.main_bottom{
			font-size: 24rpx;
		}
	}
}
</style>
