<template>
	<view class="appiontOnline">
		<view class="online_top">
			<view class="top">
				<view class="top_shop">
					<icon class="iconfont icondianpu"></icon>
					<view class="shop_name">百慕大汽修厂</view>
				</view>
				<view class="top_price">￥<view style="display: contents;">199.9</view></view>
			</view>
			<view class="top">
				<view class="top_temp">暑期倾情让利套餐</view>
				<view class="price">￥<view style="display: contents;font-size: 48rpx;">9.9</view></view>
			</view>
		</view>
		<view class="online_cars">
			<view class="cars_title">选择车辆</view>
			<view class="cars_more">其他></view>
		</view>
		<view class="online_car">
			<view class="car_msg">
				<view class="car_name">一汽大众宝来</view>
				<view class="car_config">大众  宝来  2020款  1.4TSI  双离合  28  大众  宝来  2020款  1.4TSI  双离合  28</view>
			</view>
			<view class="car_img"><image src="../static/img/get.png" mode=""></image></view>
		</view>
		<view class="online_shops">
			<view class="shops_title">选择门店</view>
			<view class="shops_more">其他></view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.appiontOnline{
	display: flex;
	flex-direction: column;
	.online_top{
		display: flex;
		flex-direction: column;
		padding: 10rpx 30rpx;
		background-color: #353439;
		margin-bottom: 30rpx;
		.top{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.top_shop{
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 10rpx;
				icon{
					font-size: 48rpx;
					color: #FFFFFF;
					opacity: 0.8;
				}
				.shop_name{
					font-size: 24rpx;
					color: #FFFFFF;
					opacity: 0.8;
				}
			}
			.top_price{
				text-decoration: line-through;
				font-size: 24rpx;
				color: #FFFFFF;
				opacity: 0.6;
			}
			.top_temp{
				color: #FFFFFF;
				font-size:36rpx;
			}
			.price{
				font-size: 24rpx;
				color: #FF6F00;
			}
		}
	}
	.online_cars{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 2rpx;
		.cars_title{
			color: #EEAB68;
			font-size: 28rpx;
		}
		.cars_more{
			font-size: 24rpx;
			color: #FFFFFF;
			opacity: 0.6;
		}
	}
	.online_car{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 30rpx;
		.car_msg{
			display: flex;
			flex-direction: column;
			.car_name{
				font-size: 32rpx;
				color: #FFFFFF;
				margin-bottom: 20rpx;
			}
			.car_config{
				width: 600rpx;
				font-size: 24rpx;
				color: #9A9A9A;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		.car_img{
			width: 44rpx;
			height: 44rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.online_shops{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 2rpx;
		.shops_title{
			color: #EEAB68;
			font-size: 28rpx;
		}
		.shops_more{
			font-size: 24rpx;
			color: #FFFFFF;
			opacity: 0.6;
		}
	}
}

</style>
