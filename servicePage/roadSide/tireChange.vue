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
			mainList: [],
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

