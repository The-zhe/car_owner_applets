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
					<picker @change="getAdd" :value="address" :range="disList">
						<view class="uni-input" style="color: #EEAB68;">{{ disList[address] }}
							<icon class="iconfont iconxiajiantou1 xiala"></icon>
						</view>
					</picker>
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
			address: 0,
			disList:['距离优先','距离优先1','距离优先2','距离优先3'],
			washList: []
		};
	},
	methods: {
		getAdd(e) {
			console.log(e);
			this.address = e.target.value
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
					margin-left: 20rpx;
				}
			}
		}
		.main_bottom{
			font-size: 24rpx;
		}
	}
}
</style>
