<template>
	<view class="interest">
		<view class="int_search">
			<icon class="iconfont iconsousuo serachIcon"></icon>
			<input class="int_ipt" type="text" placeholder="请输入门店,地址,标签" />
		</view>
		<view class="int_equity">
			<view class="equity_left">
				<view class="equity_img"><image src="../static/img/img/tab/44.jpg"></image></view>
				<view class="equity_num">浙B12345</view>
				<view class="equity_card">阳光保险权益卡</view>
			</view>
			<i class="iconfont iconyoujiantou" style="color:#eeab68 ;"></i>
		</view>
		<view class="int_choose">
			<view class="int_useShop">
				<u-select v-model="shop" mode="single-column" :list="useList" @confirm="getShop" style="color: $theme-color;"></u-select>
				<view class="option">{{ useShop }}</view>
				<icon class="iconfont iconxiajiantou1 xiala" @click="isShop"></icon>
			</view>
			<view class="int_address">
				<u-select v-model="address" mode="single-column" :list="disList" @confirm="getAdd" style="color: $theme-color;"></u-select>
				<view class="option">{{ distance }}</view>
				<icon class="iconfont iconxiajiantou1 xiala" @click="isAdd"></icon>
			</view>
		</view>
		<view class="int_main"><serveCard :mainList="mainList"></serveCard></view>
	</view>
</template>

<script>
import serveCard from './serveCard.vue';
export default {
	name: 'interest',
	components: { serveCard },
	data() {
		return {
			distance:'距离优先',
			useShop:'可用门店',
			shop:false,
			address:false,
			disList:[
				{
					value: '1',
					label: '距离优先'
				},
				{
					value: '2',
					label: '评分优先'
				},
				{
					value: '3',
					label: '时间优先'
				},
				{
					value: '4',
					label: '全部'
				},
			],
			useList:[
				{
					value: '1',
					label: '可用门店'
				},
				{
					value: '2',
					label: '猜你喜欢'
				},
				{
					value: '3',
					label: '热门门店'
				},
				{
					value: '4',
					label: '全部门店'
				},
			],
			mainList: [
				{
					image: require('../static/img/img/tab/11.jpg'),
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
					image: require('../static/img/img/tab/22.jpg'),
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
					image: require('../static/img/img/tab/33.jpg'),
					name: 'AE86啊',
					time: '24小时',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [{ typeName: '救援' }, { typeName: '搭电' }, { typeName: '拖车' }],
					distance: '5.4',
					point: 4.9
				},
				{
					image: require('../static/img/img/tab/44.jpg'),
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
					image: require('../static/img/img/tab/14.jpg'),
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
					image: require('../static/img/img/tab/13.jpg'),
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
	methods:{
		getAdd(e) {
			console.log(e);
			this.distance = e[0].label;
		},
		getShop(e) {
			console.log(e);
			this.useShop = e[0].label;
		},
		isAdd(){
			this.address = true;
		},
		isShop(){
			this.shop = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.interest {
	color: #ffffff;
	font-size: 24rpx;
	.int_search {
		position: relative;
		width: 100%;
		.serachIcon {
			position: absolute;
			top: 5rpx;
			left: 60rpx;
			font-size: 40rpx;
			color: #8b8b8b;
		}
		.int_ipt {
			background-color: #353439;
			color: #8b8b8b;
			padding: 10rpx 10rpx 10rpx 80rpx;
			margin: auto 40rpx;
			border-radius: 36rpx;
		}
	}
	.int_equity {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 70rpx;
		background: #161518;
		padding: 10rpx 40rpx 10rpx 40rpx;
		margin: 30rpx 40rpx;
		border-radius: 36rpx;
		.equity_left {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.equity_img {
				width: 54rpx;
				height: 54rpx;
				margin: 0rpx 15rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 50% 50%;
				}
			}
			.equity_num {
				font-size: 28rpx;
				margin: 0rpx 15rpx;
			}
			.equity_card {
				border: 1rpx solid #eeab68;
				color: #eeab68;
				padding: 10rpx 20rpx;
				margin: 0rpx 15rpx;
				border-radius: 20rpx;
			}
		}
	}
	.int_choose {
		display: flex;
		flex-direction: row;
		padding: 10rpx 40rpx;
		.int_address{
				display: flex;
				width: 200rpx;
				height: 60rpx;
				flex-direction: row;
				justify-content: space-around;
				/* align-items: center; */
				border-radius: 36rpx;
				background-color: #353439;
				margin-left: 30rpx;
				.option {
					color: $theme-color;
					line-height: 60rpx;
				}
				.xiala {
					color: $theme-color;
					margin-right: 10rpx;
				}
		}
		.int_useShop{
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
				margin-right: 10rpx;
			}
		}
	}
	.int_main {
		padding: 10rpx 40rpx;
	}
}
</style>
