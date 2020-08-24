<template>
	<view class="order_all">
		<view class="all_order" v-for="(item, index) in mainList" :key="index">
			<view class="all_top">
				<view class="top_title">
					{{ item.name }}
					<i
						class="iconfont iconyoujiantou"
						style="font-size: 30rpx;
					color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"
					></i>
				</view>
				<view class="top_type" v-show="item.type === 1">待付款</view>
				<view class="top_type" v-show="item.type === 2">待评价</view>
				<view class="top_type" v-show="item.type === 3">已关闭</view>
			</view>
			<navigator class="all_center" :url="'/orderPage/orderDetail?' + 'id=' +item.id + '&type=' + item.type">
				<view class="center_detail">
					<view class="detail_img"><image :src="item.image"></image></view>
					<view class="detail_message">
						<view class="message_orderNum">{{ item.payNum }}</view>
						<view class="message_carNum">车牌：{{ item.carNum }}</view>
					</view>
				</view>
				<view class="center_price">￥{{ item.allpay }}</view>
			</navigator>
			<view class="all_bottom">
				<view class="bottom_pay">
					<view class="pay">
						<view class="pay_all" v-show="item.type === 2">总价&nbsp;&nbsp;￥{{ item.allpay }}</view>
						<view class="pay_rea">实付&nbsp;&nbsp;￥{{ item.reapay }}</view>
					</view>
					<view class="payfor" v-show="item.type === 1">支付</view>
					<view class="payfor" v-show="item.type === 2">立即评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo:null,
			mainList: [
				{
					id: '1',
					name: '鄞州百慕大汽修厂',
					type: 1, //1 待付款  2 待评价  3 已关闭
					image: require('../../static/img/banner.png'),
					payNum: 'DDH202013135454',
					carNum: '浙B66666',
					allpay: '500.00',
					reapay: '500.00'
				},
				{
					id: '2',
					name: '鄞州百慕大汽修厂',
					type: 2, //1 待付款  2 待评价  3 已关闭
					image: require('../../static/img/banner.png'),
					payNum: 'DDH202013135454',
					carNum: '浙B66666',
					allpay: '500.00',
					reapay: '500.00'
				},
				{
					id: '3',
					name: '鄞州百慕大汽修厂',
					type: 3, //1 待付款  2 待评价  3 已关闭
					image: require('../../static/img/banner.png'),
					payNum: 'DDH202013135454',
					carNum: '浙B66666',
					allpay: '500.00',
					reapay: '500.00'
				}
			]
		};
	},
	methods:{
		getMember(){
			this.userInfo=uni.getStorageSync('userInfor')
		}
	},
	mounted() {
		this.getMember()
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
					color: #9e9e9e;
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
