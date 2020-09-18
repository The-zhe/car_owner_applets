<template>
	<view class="complete">
		<view class="complete_type">
			<view class="type_title">
				<view class="type_text">已完成</view>
			</view>
			<view class="type_img"><image src="../../static/img/img/tab/complete.png" mode=""></image></view>
		</view>
		<view class="complete_shop">
			<view class="shop_name">{{payList.orderMaster.storeName}}</view>
			<i
				class="iconfont iconyoujiantou"
				style="font-size: 30rpx;
					color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"
			></i>
		</view>
		<view class="complete_detail">
			<view class="detail_name" >项目&商品配件明细</view>
			<view class="detail_main" v-for="(item, index) in proList" :key="index">
				<view class="main_top">
					<view class="main_title">{{ item.name }}</view>
					<icon class="iconfont iconxiajiantou" style="font-size: 30rpx;color: #EEAB68;line-height: 40rpx;margin-left: 30rpx;" @click="show()"></icon>
				</view>
				<view class="main_pro" v-if="isShow " v-for="(pro, proindex) in item.service" :key="proindex">
					<view class="main_mes">
						<view class="main_name">{{ pro.name }}</view>
						<view class="main_num">￥{{ pro.price }}.00 x {{ pro.num }}</view>
					</view>
					<view class="main_price">￥{{ pro.price * pro.num }}.00</view>
				</view>
			</view>
			<view class="partners">
				<view class="partners_name">工时费</view>
				<view class="partners_price">￥{{ payList.orderMaster.workPrice | NumFormat}}</view>
			</view>
			<view class="detail_total">
				<view class="total_text">总计</view>
				<view class="total_price">￥{{ payList.orderMaster.totalPrice | NumFormat}}</view>
			</view>
		</view>
		<view class="complete_coupons">
			<view class="coupons_title">
				<view class="coupons_name">优惠券</view>
				<i class="iconfont iconxiajiantou" style="font-size: 30rpx;color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"></i>
			</view>
			<view class="coupons_detail">
				<view class="coupons_num">洗车抵扣券(门店)</view>
				<view class="coupons_price">-￥10.00</view>
			</view>
		</view>
		<view class="complete_coupons">
			<view class="coupons_title">
				<view class="coupons_name">会员卡</view>
				<i class="iconfont iconxiajiantou" style="font-size: 30rpx;color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"></i>
			</view>
			<view class="coupons_detail">
				<view class="coupons_num">4455221265715126(储蓄卡)</view>
				<view class="coupons_price">-￥10.00</view>
			</view>
		</view>
		<view class="complete_pay">
			<view class="pay_cou">
				已优惠<view style="color: #EEAB68;margin-left: 10rpx;">
					-￥10.00
				</view>
			</view>
			<view class="pay_for">
				实付<view style="color: #EEAB68;margin-left: 10rpx;">
					￥980.00
				</view>
			</view>
		</view>
		<view class="complete_serial">
			<view class="serial_title">订单编号</view>
			<view class="serial_main">
				<view class="main_title">
					<view class="serial_name">支付方式:</view>
					<view class="serial_name">订单编号:</view>
					<view class="serial_name">创建时间:</view>
					<view class="serial_name">车牌号:</view>
					<view class="serial_name">预计完成:</view>
					<view class="serial_name">备注:</view>
					<view class="serial_name">结算完成:</view>
				</view>
				<view class="main_detail">
					<view class="serial_detail">微信</view>
					<view class="serial_detail">{{payList.orderMaster.orderId}}</view>
					<view class="serial_detail">{{payList.orderMaster.createdTime | timeFormat}}</view>
					<view class="serial_detail">{{payList.orderMaster.licensePlate}}</view>
					<view class="serial_detail">{{payList.orderMaster.deliveryTime | timeFormat}}</view>
					<view class="serial_detail">{{payList.orderMaster.remark}}</view>
					<view class="serial_detail">{{payList.orderMaster.payTime}}</view>
				</view>
			</view>
		</view>
		<view class="complete_total">查看评价详情</view>
	</view>
</template>

<script>
export default {
	props: ['mainList'],
	data() {
		return {
			isShow:true,
			coupon: 200,
			timeprice: 100,
			total: 0,
			payList:null,
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
	watch:{
		mainList(val){
			this.payList = val[0]
		}
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
		},
		show(index){
			this.isShow = !this.isShow
		}
	},
	mounted() {
		// this.getTotal();
	}
};
</script>

<style lang="scss" scoped>
.complete {
	display: flex;
	flex-direction: column;
	padding: 30rpx 20rpx;
	.complete_type {
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
	.complete_shop {
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
	.complete_detail {
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
			.main_top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.main_title {
					color: $theme-color;
					font-size: 30rpx;
					margin-bottom: 30rpx;
				}
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
	.complete_coupons {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #333333;
		padding: 20rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.coupons_title{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 10rpx;
			.coupons_name {
			color: #ffffff;
			font-size: 24rpx;
			}
		}
		.coupons_detail {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.coupons_num {
				color: #ffffff;
				font-size: 24rpx;
			}
			.coupons_price{
				color: $theme-color;
				font-size: 24rpx;
			}
		}
	}
	.complete_pay{
		background-color: #333333;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 20rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.pay_cou{
			display: flex;
			flex-direction: row;
			color: #808080;
		}
		.pay_for{
			display: flex;
			flex-direction: row;
			color: #FFFFFF;
			margin-left: 30rpx;
		}
	}
	.complete_serial {
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
	.complete_total {
		width: 100%;
		height: 100rpx;
		background-color: $theme-color;
		color: #ffffff;
		font-size: 32rpx;
		text-align: center;
		line-height: 100rpx;
		border-radius: 10rpx;
	}
}
</style>
