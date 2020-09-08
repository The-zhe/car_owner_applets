<template>
	<view class="order_all">
		<view class="all_order" v-for="(item, index) in mainList" :key="index">
			<view class="all_top">
				<view class="top_title">
					{{ item.orderMaster.storeName }}
					<i
						class="iconfont iconyoujiantou"
						style="font-size: 30rpx;
					color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"
					></i>
				</view>
				<view class="top_type" v-if="item.orderMaster.orderStatus == 0">待付款</view>
				<view class="top_type" v-else-if="item.orderMaster.orderStatus == 6">待评价</view>
				<view class="top_type" v-else>已关闭</view>
			</view>
			<navigator class="all_center" :url="'/orderPage/orderDetail?' + 'id=' +item.orderMaster.orderId + '&type=' + item.orderMaster.orderStatus">
				<view class="center_detail">
					<view class="detail_img"><image :src="item.image"></image></view>
					<view class="detail_message">
						<view class="message_orderNum">{{ item.orderMaster.orderId }}</view>
						<view class="message_carNum">车牌：{{ item.orderMaster.licensePlate }}</view>
					</view>
				</view>
				<view class="center_price">￥{{ item.orderMaster.totalPrice | NumFormat }}</view>
			</navigator>
			<view class="all_bottom">
				<view class="bottom_pay">
					<view class="pay">
						<view class="pay_all" >总价&nbsp;&nbsp;￥{{ item.orderMaster.totalPrice | NumFormat }}</view>
						<view class="pay_rea" v-show="item.orderMaster.orderStatus == 6">实付&nbsp;&nbsp;￥{{ item.orderMaster.payPrice | NumFormat }}</view>
					</view>
					<view class="payfor" v-show="item.orderMaster.orderStatus === 0">支付</view>
					<view class="payfor" v-show="item.orderMaster.orderStatus === 6">立即评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {order} from '../../apis/api.js'
import verify from '../../lib/utils/verify.js'
export default {
	data() {
		return {
			userInfo:null,
			dataFrom:{
				userId:null,
				pageSize:'10',
				currentPage:'1',
			},
			mainList: []
		};
	},
	methods:{
		getMember(){
			this.userInfo=uni.getStorageSync('userInfor')
		},
		getOrderList(){
			this.dataFrom.userId = uni.getStorageSync('userId')
			order(this.dataFrom).then( res => {
				console.log(res)
				this.mainList = res.data.content
			})
		}
	},
	mounted() {
		this.getMember()
		this.getOrderList()
	}
};
</script>

<style lang="scss" scoped>
.order_all {
	display: flex;
	flex-direction: column;
	padding: 10rpx 40rpx;
	.all_order {
		display: flex;
		flex-direction: column;
		background: #333333;
		padding: 10rpx 20rpx;
		margin-top: 30rpx;
		border-radius: 10rpx;
		.all_top {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 10rpx 10rpx 20rpx 10rpx;
			.top_title {
				display: flex;
				flex-direction: row;
				justify-content: center;
				font-size: 28rpx;
				color: #ffffff;
			}
			.top_type {
				font-size: 28rpx;
				color: $theme-color;
			}
		}
		.all_center {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.center_detail {
				display: flex;
				flex-direction: row;
				.detail_img {
					width: 170rpx;
					height: 170rpx;
					margin-right: 20rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
				}
				.detail_message {
					display: flex;
					flex-direction: column;
					.message_orderNum {
						width: 220rpx;
						 white-space: nowrap;
						    text-overflow: ellipsis;
						    overflow: hidden;
						    word-break: break-all;
						font-size: 30rpx;
						font-weight: 400;
						color: #ffffff;
						margin-bottom: 20rpx;
					}
					.message_carNum {
						color: #9e9e9e;
						font-size: 30rpx;
					}
				}
			}
			.center_price {
				color: $theme-color;
				font-size: 30rpx;
			}
		}
		.all_bottom {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			margin-top: 20rpx;
			.pay {
				display: flex;
				flex-direction: row;
				margin-bottom: 30rpx;
				.pay_all {
					// color: #9e9e9e;
					color: #FFFFFF;
					font-size: 30rpx;
				}
				.pay_rea {
					color: #ffffff;
					font-size: 30rpx;
					margin-left: 30rpx;
				}
			}
			.payfor {
				width: 170rpx;
				border: 2rpx solid $theme-color;
				color: $theme-color;
				text-align: center;
				padding: 10rpx 0rpx;
				border-radius: 10rpx;
				float: right;
			}
		}
	}
}
</style>
