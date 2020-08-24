<template>
	<view class="tireChange">
		<view class="tire_address">
			<view class="tire_dw">
				<i class="iconfont icondingwei dingweiIcon"></i>
				<view class="dw_text">宁波保险科技创业园</view>
			</view>
			<view class="tire_jl">
				<picker @change="getAdd" :value="address" :range="disList" >
					<view class="uni-input" style="color: #EEAB68;">{{ disList[address] }}
						<icon class="iconfont iconxiajiantou1 xiala"></icon>
					</view>
				</picker>
			</view>
		</view>
		<view class="tire_card">
			<serveCard :mainList="mainList"></serveCard>
		</view>
	</view>
</template>

<script>
import serveCard from '../../components/serveCard.vue';
export default {
	name: 'tireCar',
	components: { serveCard },
	data() {
		return {
			address: 0,
			disList:['距离优先','距离优先1','距离优先2','距离优先3'],
			mainList: [
				{
					image: require('../../static/img/banner.png'),
					name: '小伙子',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '换胎'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '2.3',
					point: 4.7
				},
				{
					image: require('../../static/img/banner.png'),
					name: '龙王？？？？',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '换胎'
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
					image: require('../../static/img/banner.png'),
					name: '你那什么车啊?',
					time: '24小时',
					isFocus: false,
					pImg: require('../../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '换胎'
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
					image: require('../../static/img/banner.png'),
					name: '小伙子,你这车不错啊',
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
							typeName: '换胎'
						}
					],
					distance: '7.1',
					point: 4.5
				}
			],
		};
	},
	methods: {
		getAdd(e) {
			console.log(e);
			this.address = e.target.value
		},
	}
};
</script>

<style lang="scss" scoped>
.tireChange {
	display: flex;
	flex-direction: column;
	padding: 10rpx 40rpx;
	color: #FFFFFF;
	.tire_address {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		.tire_dw {
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
		.tire_jl {
			display: flex;
			width: 200rpx;
			height: 60rpx;
			flex-direction: row;
			justify-content: space-around;
			/* align-items: center; */
			border-radius: 36rpx;
			background-color: #353439;
			.xiala {
				color: $theme-color;
				margin-left: 20rpx;
			}
		}
	}
}
</style>

