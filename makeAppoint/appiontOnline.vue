<template>
	<view class="appiontOnline">
		<view class="online_top">
			<view class="top">
				<view class="top_shop">
					<icon class="iconfont icondianpu"></icon>
					<view class="shop_name">百慕大汽修厂</view>
				</view>
				<view class="top_price">
					￥
					<view style="display: contents;">199.9</view>
				</view>
			</view>
			<view class="top">
				<view class="top_temp">暑期倾情让利套餐</view>
				<view class="price">
					￥
					<view style="display: contents;font-size: 48rpx;">9.9</view>
				</view>
			</view>
		</view>
		<view class="online_cars">
			<view class="cars_title">选择车辆</view>
			<view class="cars_more">其他></view>
		</view>
		<view class="online_car">
			<view class="car_msg">
				<view class="car_name">一汽大众宝来</view>
				<view class="car_config">大众 宝来 2020款 1.4TSI 双离合 28 大众 宝来 2020款 1.4TSI 双离合 28</view>
			</view>
			<view class="car_img"><image src="../static/img/get.png" mode=""></image></view>
		</view>
		<view class="online_shops">
			<view class="shops_title">选择门店</view>
			<view class="shops_more">其他></view>
		</view>
		<view class="online_shop">
			<view class="shop_name">品牌连锁的某区域门店</view>
			<view class="shop_time">营业中 8:30-20:30</view>
			<view class="shop_address">钱湖北路199号(巴丽新地旁边)</view>
		</view>
		<view class="online_calendar">
			<ei-calendar 
			:visible.sync="show" 
			type="single" 
			:disabledDate="disabledDate" 
			v-model="date" 
			:custom-date="customDate" 
			format="YYYY-MM-DD"
			:drawer="false">
			</ei-calendar>
		</view>
		<view class="online_num">
			<view class="num">上午已预约：50</view>
			<view class="num">下午已预约：50</view>
		</view>
		<view class="online_note">
			<view class="note_title">备注</view>
			<view class="note_add">添加备注></view>
		</view>
		<view class="online_btn">
			<button class="off">预约上午</button>
			<button class="on">预约下午</button>
		</view>
	</view>
</template>

<script>
import EiCalendar from '@/components/ei-calendar/ei-calendar';

    export default {
        components: {EiCalendar},
        data() {
            return {
                show: true,
				disDate:['2020/9/27','2020/9/28','2020/10/01'],
                customDate: [{
                    cellClass: 'custom-cell',
                    date: '2019-05-23',
                }]
            }
        },
        methods: {
            disabledDate(date) {
                const start = new Date().getTime();
                const end = new Date('2120/6/21').getTime();
				this.disDate = this.disDate.map((item,index) => {
					return new Date(item).getTime()
				})
				return date.getTime() <= start || date.getTime() >= end || date.getTime() == this.disDate[0]
            }
        }
    }
</script>

<style lang="scss" scoped>
.appiontOnline {
	display: flex;
	flex-direction: column;
	.online_top {
		display: flex;
		flex-direction: column;
		padding: 10rpx 30rpx;
		background-color: #353439;
		margin-bottom: 30rpx;
		.top {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.top_shop {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 10rpx;
				icon {
					font-size: 48rpx;
					color: #ffffff;
					opacity: 0.8;
				}
				.shop_name {
					font-size: 24rpx;
					color: #ffffff;
					opacity: 0.8;
				}
			}
			.top_price {
				text-decoration: line-through;
				font-size: 24rpx;
				color: #ffffff;
				opacity: 0.6;
			}
			.top_temp {
				color: #ffffff;
				font-size: 36rpx;
			}
			.price {
				font-size: 24rpx;
				color: #ff6f00;
			}
		}
	}
	.online_cars {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 2rpx;
		.cars_title {
			color: #eeab68;
			font-size: 28rpx;
		}
		.cars_more {
			font-size: 24rpx;
			color: #ffffff;
			opacity: 0.6;
		}
	}
	.online_car {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 30rpx;
		.car_msg {
			display: flex;
			flex-direction: column;
			.car_name {
				font-size: 32rpx;
				color: #ffffff;
				margin-bottom: 20rpx;
			}
			.car_config {
				width: 600rpx;
				font-size: 24rpx;
				color: #9a9a9a;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.car_img {
			width: 44rpx;
			height: 44rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.online_shops {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 2rpx;
		.shops_title {
			color: #eeab68;
			font-size: 28rpx;
		}
		.shops_more {
			font-size: 24rpx;
			color: #ffffff;
			opacity: 0.6;
		}
	}
	.online_shop {
		display: flex;
		flex-direction: column;
		background-color: #353439;
		padding: 16rpx 30rpx;
		margin-bottom: 30rpx;
		.shop_name {
			font-size: 36rpx;
			color: #eeab68;
		}
		.shop_time {
			font-size: 24rpx;
			color: #ffffff;
			opacity: 0.8;
			margin: 15rpx 0rpx;
		}
		.shop_address {
			font-size: 24rpx;
			color: #ffffff;
			opacity: 0.8;
		}
	}
	.online_calendar {
		background-color: #353439;
		padding: 16rpx 30rpx;
	}
	.online_num{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 16rpx 30rpx;
		background-color: #353439;
		margin-bottom: 30rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		opacity: 0.8;
	}
	.online_note{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 16rpx 30rpx;
		background-color: #353439;
		.note_title{
			font-size: 28rpx;
			color: #EEAB68;
		}
		.note_add{
			font-size: 24rpx;
			color: #FFFFFF;
			opacity: 0.6;
		}
	}
	.online_btn{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 30rpx 30rpx;
		.on{
			width: 320rpx;
			background-color: #FF6F00;
			border-radius: 44rpx;
			font-size: 32rpx;
			opacity: 1;
			color: #FFFFFF;
		}
		.off{
			width: 320rpx;
			background-color: #636363;
			border-radius: 44rpx;
			font-size: 32rpx;
			opacity: 1;
			color: #8B8B8B;
		}
	}
}
</style>
