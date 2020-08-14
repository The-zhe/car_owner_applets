<template>
	<view class="eleTake">
		<view class="ele_address">
			<view class="ele_dw">
				<i class="iconfont icondingwei dingweiIcon"></i>
				<view class="dw_text">宁波保险科技创业园</view>
			</view>
			<view class="ele_jl">
				<u-select v-model="show" mode="single-column" :list="jlList" @confirm="confirm" style="color: $theme-color;"></u-select>
				<view class="option">{{ select }}</view>
				<icon class="iconfont iconxiajiantou1 xiala" @click="isShow"></icon>
			</view>
		</view>
		<view class="ele_card">
			<serveCard :mainList="mainList"></serveCard>
		</view>
	</view>
</template>

<script>
import serveCard from '../serveCard.vue';
export default {
	name: 'eleCar',
	components: { serveCard },
	data() {
		return {
			show: false,
			select: '距离优先',
			mainList: [
				{
					image: require('../../static/img/img/tab/12.jpg'),
					name: '龙王？？？？',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '拖车'
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
					image: require('../../static/img/img/tab/3.jpg'),
					name: '小伙子',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../../static/img/img/tab/pingfen.png'),
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
					image: require('../../static/img/img/tab/11.jpg'),
					name: '你那什么车啊?',
					time: '24小时',
					isFocus: false,
					pImg: require('../../static/img/img/tab/pingfen.png'),
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
					image: require('../../static/img/img/tab/33.jpg'),
					name: 'AE86啊',
					time: '24小时',
					isFocus: false,
					pImg: require('../../static/img/img/tab/pingfen.png'),
					type: [{ typeName: '救援' }, { typeName: '搭电' }, { typeName: '拖车' }],
					distance: '5.4',
					point: 4.9
				},
				{
					image: require('../../static/img/img/tab/44.jpg'),
					name: '飘一下啊',
					time: '8:30 - 22:30',
					isFocus: false,
					pImg: require('../../static/img/img/tab/pingfen.png'),
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
			],
			jlList: [
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
			]
		};
	},
	methods: {
		isShow() {
			this.show = true;
		},
		confirm(e) {
			this.select = e[0].label;
		}
	}
};
</script>

<style lang="scss" scoped>
.eleTake {
	display: flex;
	flex-direction: column;
	padding: 10rpx 40rpx;
	color: #FFFFFF;
	.ele_address {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		.ele_dw {
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
		.ele_jl {
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
}
</style>
