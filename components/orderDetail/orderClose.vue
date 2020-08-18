<template>
	<view class="orderClose">
		<view class="close_type">
			<view class="type_title">
				<view class="type_text">已关闭</view>
			</view>
			<view class="type_img"><image src="../../static/img/img/tab/close.png" mode=""></image></view>
		</view>
		<view class="close_shop">
			<view class="shop_name">鄞州百慕大汽修厂</view>
			<i
				class="iconfont iconyoujiantou"
				style="font-size: 30rpx;
					color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"
			></i>
		</view>
		<view class="close_detail">
			<view class="detail_name">项目&商品配件明细</view>
			<view class="detail_main" v-for="(item, index) in proList" :key="index">
				<view class="main_title">{{ item.name }}</view>
				<view class="main_pro" v-for="(pro, index) in item.service" :key="index">
					<view class="main_mes">
						<view class="main_name">{{ pro.name }}</view>
						<view class="main_num">￥{{ pro.price }}.00 x {{ pro.num }}</view>
					</view>

					<view class="main_price">￥{{ pro.price * pro.num }}.00</view>
				</view>
			</view>
			<view class="partners">
				<view class="partners_name">工时费</view>
				<view class="partners_price">￥100.00</view>
			</view>
			<view class="detail_total">
				<view class="total_text">总计</view>
				<view class="total_price">￥{{ total }}</view>
			</view>
		</view>
		<view class="close_reason">
			<view class="reason_title">关闭原因</view>
			<view class="reason">填写原因</view>
		</view>
		<view class="close_serial">
			<view class="serial_title">订单编号</view>
			<view class="serial_main">
				<view class="main_title">
					<view class="serial_name">订单编号:</view>
					<view class="serial_name">创建时间:</view>
					<view class="serial_name">车牌号:</view>
					<view class="serial_name">预计完成:</view>
					<view class="serial_name">备注:</view>
				</view>
				<view class="main_detail">
					<view class="serial_detail">11923515456</view>
					<view class="serial_detail">2020-08-17 16:37:00</view>
					<view class="serial_detail">浙B66666</view>
					<view class="serial_detail">2020-08-17 18:37:00</view>
					<view class="serial_detail">轮胎换一下</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			coupon: 200,
			timeprice: 100,
			total: 0,
			proList: [
				{
					name: '服务项目',
					service: [
						{
							name: '项目一',
							price: 100,
							num: 1
						},
						{
							name: '项目二',
							price: 100,
							num: 2
						},
						{
							name: '项目三',
							price: 100,
							num: 3
						}
					]
				},
				{
					name: '配件商品',
					service: [
						{
							name: '配件一',
							price: '100',
							num: 1
						},
						{
							name: '配件二',
							price: '100',
							num: 1
						},
						{
							name: '配件三',
							price: '100',
							num: 1
						}
					]
				}
			]
		};
	},
	methods: {
		getTotal() {
			for (let i = 0; i < this.proList.length; i++) {
				for (let j = 0; j < this.proList[i].service.length; j++) {
					this.total += this.proList[i].service[j].price * this.proList[i].service[j].num;
				}
			}
			this.total = this.total + this.timeprice;
			if (!/\./.test(this.total)) this.total += '.00';
		}
	},
	mounted() {
		this.getTotal();
	}
};
</script>

<style lang="scss" scoped>
.orderClose {
	display: flex;
	flex-direction: column;
	padding: 30rpx 20rpx;
	.close_type {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
		padding: 60rpx 0rpx;
		background-color: #333333;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.type_text {
			color: #ffffff;
			font-size: 30rpx;
			font-size: 36rpx;
			margin-bottom: 10rpx;
		}
		.type_time {
			color: #ffffff;
			font-size: 24rpx;
		}
		.type_img {
			width: 80rpx;
			height: 80rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.close_shop {
		display: flex;
		flex-direction: row;
		background-color: #333333;
		padding: 20rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.shop_name {
			color: #ffffff;
			font-size: 28rpx;
		}
	}
	.close_detail {
		background-color: #333333;
		display: flex;
		flex-direction: column;
		padding: 0rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.detail_name {
			font-size: 28rpx;
			color: #ffffff;
			border-bottom: 1rpx solid #525252;
			padding: 20rpx 0rpx;
		}
		.detail_main {
			padding: 20rpx 0rpx;
			display: flex;
			flex-direction: column;
			.main_title {
				color: $theme-color;
				font-size: 30rpx;
				margin-bottom: 30rpx;
			}
			.main_pro {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 24rpx;
				margin-bottom: 20rpx;
				.main_mes {
					display: flex;
					flex-direction: column;
					.main_name {
						color: #ffffff;
					}
					.main_num {
						color: #7d7d7d;
						font-size: 20rpx;
					}
				}

				.main_price {
					color: $theme-color;
				}
			}
		}
		.partners {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			margin-bottom: 20rpx;
			.partners_name {
				color: $theme-color;
				font-size: 30rpx;
			}
			.partners_price {
				color: $theme-color;
				font-size: 24rpx;
			}
		}
		.detail_total {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 20rpx;
			.total_text {
				color: #ffffff;
				font-size: 30rpx;
			}
			.total_price {
				color: $theme-color;
				font-size: 24rpx;
			}
		}
	}
	.close_reason {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #333333;
		padding: 20rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.reason_title{
			color: #FFFFFF;
		}
		.reason{
			color: #FFFFFF;
			margin-top: 10rpx;
		}
	}
	.close_serial {
		display: flex;
		flex-direction: column;
		background-color: #333333;
		padding: 20rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.serial_title {
			font-size: 32rpx;
			color: #ffffff;
			margin-bottom: 20rpx;
		}
		.serial_main {
			display: flex;
			flex-direction: row;
			.main_title {
				display: flex;
				flex-direction: column;
				.serial_name {
					color: #747474;
					font-size: 24rpx;
					margin-bottom: 20rpx;
				}
			}
			.main_detail {
				display: flex;
				flex-direction: column;
				margin-left: 100rpx;
				.serial_detail {
					color: #ffffff;
					font-size: 24rpx;
					margin-bottom: 20rpx;
				}
			}
		}
	}
}
</style>
