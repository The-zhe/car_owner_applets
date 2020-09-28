<template>
	<view class="interest">
		<view class="addValue">
			<view class="value_top">
				<view class="value_title">
					<view class="title">
						<view class="name">增值服务名称</view>
						<view class="date">2020.8.21 至 2020.10.30</view>
					</view>
					<navigator url="/makeAppoint/appiontInsurance" class="value_btn">在线预约</navigator>
				</view>
			</view>
			<view class="value_main">
				<ul class="main">
					<li class="main_list">
						<view class="img"><image src="../static/img/index/icon01.png" mode=""></image></view>
						<view class="main_name">套餐A</view>
					</li>
					<li class="main_list">
						<view class="img"><image src="../static/img/index/icon02.png" mode=""></image></view>
						<view class="main_name">套餐B</view>
					</li>
					<li class="main_list">
						<view class="img"><image src="../static/img/index/icon03.png" mode=""></image></view>
						<view class="main_name">套餐C</view>
					</li>
					<li class="main_list">
						<view class="img"><image src="../static/img/index/icon04.png" mode=""></image></view>
						<view class="main_name">套餐D</view>
					</li>
				</ul>
			</view>
			<view class="line"></view>
			<view class="value_equity">
				<view class="equity_img"><image src="../static/img/index/index01.png"></image></view>
				<view class="equity_num">浙B12345</view>
				<view class="equity_card">宝马X7</view>
				<view class="equity_card">2.0T 2014产</view>
				<i class="iconfont iconyoujiantou" style="color:#eeab68 ;"></i>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'interest',
	data() {
		return {};
	},
	methods: {},
	mounted() {}
};
</script>

<style lang="scss" scoped>
.interest {
	display: flex;
	flex-direction: column;
	padding: 10rpx;
	.addValue {
		// width: 710rpx;
		height: 480rpx;
		background-image: url(../static/img/index/topbg.png);
		background-size: 100% 100%;
		.value_top {
			display: flex;
			flex-direction: column;
			padding: 30rpx;
			padding-bottom: 0rpx;
			.value_title {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.title {
					display: flex;
					flex-direction: column;
					.name {
						color: $theme-color;
						font-size: 42rpx;
						margin-bottom: 16rpx;
					}
					.date {
						color: #989898;
						font-size: 24rpx;
					}
				}
				.value_btn {
					height: 40rpx;
					line-height: 40rpx;
					border-radius: 32rpx;
					padding: 12rpx 24rpx;
					color: #000000;
					font-size: 28rpx;
					background-color: $theme-color;
					text-align: center;
					font-weight: 600;
					font-family: Microsoft YaHei;
				}
			}
		}
		.value_main {
			margin-top: 80rpx;
			margin-bottom: 30rpx;
			padding: 0rpx 30rpx;
			.main {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.main_list {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.img {
						width: 106rpx;
						height: 106rpx;
						image {
							width: 100%;
							height: 100%;
						}
					}
					.main_name {
						margin-top: 10rpx;
						font-size: 26rpx;
						color: $theme-color;
						text-align: center;
					}
				}
			}
		}
		.line {
			width: 100%;
			height: 1rpx;
			background: $theme-color;
			opacity: 0.3;
		}
		.value_equity {
			height: 92rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			.equity_img {
				width: 54rpx;
				height: 54rpx;
				image {
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
			}
			.equity_card {
				height: 48rpx;
				border: 1rpx $theme-color solid;
				padding: 5rpx 25rpx;
				color: $theme-color;
				border-radius: 25rpx;
				text-align: center;
				line-height: 48rpx;
			}
			.equity_num{
				color: #FFFFFF;
			}
		}
	}
}
</style>
