<template>
	<view class="voucherDetail">
		<view class="voucher">
			<view class="voucher_msg">
				<view :class="[use?'msg_name':'unmsg_name']">88元畅享全车喷漆</view>
				<view class="msg_date">2020.07.07-2020.07.21</view>
			</view>
			<view class="voucher_num" v-if="use">
				<view class="num_title">剩余次数</view>
				<view class="num">8</view>
			</view>
			<view class="voucher_num" v-else>
				<view class="unnum_title">已失效</view>
			</view>
		</view>
		<view class="voucher_code">
			<view :class="[use?'num_code':'unnum_code']">验证码:&nbsp;&nbsp;&nbsp;2368 9176 3231 3681</view>
			<view class="code">
				<canvas canvas-id="canvasCode" class="codeBg-canvas"></canvas>
			</view>
			<view class="code_msg">
				<view class="text">有效期：</view>
				<view class="text text_indent">2020.8.21 至 202010.30 23:59 （周末、法定节假日通用）</view>
				<view class="text">服务对象：</view>
				<view class="text text_indent">适用车辆范围</view>
				<view class="text">使用规则：</view>
				<view class="text text_indent">需提前1天电话预约</view>
				<view class="text">温馨提醒：</view>
				<view class="text text_indent">为了保障您的权益，建议使用亲车吧线上支付。若使用其他支付方式导致纠纷的，亲车吧不承担任何责任，感谢你的理由和支持！</view>
				<view class="text">退款规则：</view>
				<view class="text text_indent">本券不可退款，如有疑问请联系商户协商解决。商户热线：0574-87116688</view>
			</view>
		</view>
		<view class="voucher_use" v-if="!use">
			<view class="use_title">核销明细</view>
			<view class="use">
				<view class="use_top">
					<view>88元畅享全车喷漆</view>
					<view>-1次</view>
				</view>
				<view class="use_bottom">
					<view>核销的门店名称</view>
					<view>2020-06-14  12:59:31</view>
				</view>
			</view>
			<view class="use">
				<view class="use_top">
					<view>88元畅享全车喷漆</view>
					<view>-1次</view>
				</view>
				<view class="use_bottom">
					<view style="font-size: 24rpx;">核销的门店名称</view>
					<view style="font-size: 24rpx;">2020-06-14  12:59:31</view>
				</view>
			</view>
		</view>
		<button class="btn" v-if="use">查看可用门店</button>
	</view>
</template>

<script>
	import drawQrcode from '@/lib/weapp.qrcode.min.js'
	export default{
		data(){
			return{
				use:true,
			}
		},
		onLoad() {
			this.getCode()
		},
		methods:{
			getCode() {
				if(this.use){
					let options = {
						width: 180,
						height: 180,
						x: 10,
						y: 10,
						canvasId: 'canvasCode',
						background:'#EEAB68',
						foreground:'#353439',
						text: '你在扫nmn',
						callback: (e) => {
							// 使用 setTimeout, 避免部分安卓机转出来的二维码图片不完整
							setTimeout(() => {
								wx.canvasToTempFilePath({
									canvasId: 'canvasCode',
									x: 0,
									y: 0,
									width: 200,
									height: 200,
									success: (e) => {
										// that.setData({
										// 	qrcodeImg: e.tempFilePath
										// });
									}
								})
							}, 0);
						}
					}
					drawQrcode(options);
				}else{
					let options = {
						width: 180,
						height: 180,
						x: 10,
						y: 10,
						canvasId: 'canvasCode',
						background:'#6D5847',
						foreground:'#353439',
						text: '已过期',
						callback: (e) => {
							// 使用 setTimeout, 避免部分安卓机转出来的二维码图片不完整
							setTimeout(() => {
								wx.canvasToTempFilePath({
									canvasId: 'canvasCode',
									x: 0,
									y: 0,
									width: 200,
									height: 200,
									success: (e) => {
										// that.setData({
										// 	qrcodeImg: e.tempFilePath
										// });
									}
								})
							}, 0);
						}
					}
					drawQrcode(options);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.voucherDetail{
	display: flex;
	flex-direction: column;
	padding: 16rpx 30rpx;
	.voucher{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding:0rpx 50rpx;
		width: 595rpx;
		height: 187rpx;
		margin: 10rpx auto;
		background-image: url(../static/img/coupon.png);
		color: #9E9E9E;
		font-size: 20rpx;
		margin-bottom: 30rpx;
		.msg_name{
			color: $theme-color;
			margin-bottom: 40rpx;
			font-size: 28rpx;
		}
		.unmsg_name{
			color: #ABAAAB;
			margin-bottom: 40rpx;
			font-size: 28rpx;
		}
		.num_title{
			color: $theme-color;
			margin-bottom: 20rpx;
			font-size: 28rpx;
			text-align: center;
		}
		.unnum_title{
			color: #000000;
			font-size: 28rpx;
			text-align: center;
			background-color: #ABAAAB;
			padding: 10rpx 30rpx;
		}
		.num{
			color: $theme-color;
			font-size: 40rpx;
			text-align: center;
		}
	}
	.voucher_code{
		display: flex;
		flex-direction: column;
		background-color: #353439;
		padding: 16rpx 30rpx;
		border-radius: 20rpx;
		margin-bottom: 30rpx;
		.num_code{
			margin: 10rpx auto;
			background-color: #000000;
			color: $theme-color;
			font-size: 32rpx;
			padding: 24rpx 96rpx;
		}
		.unnum_code{
			margin: 10rpx auto;
			background-color: #000000;
			color: $theme-color;
			font-size: 32rpx;
			padding: 24rpx 96rpx;
			text-decoration:line-through
		}
		.code{
			border-bottom: 2rpx dashed #707070;
			.codeBg-canvas{
				width: 380rpx;
				height: 380rpx;
				margin: 20rpx auto 0 auto;
			}
			
		}
		.code_msg{
			font-size: 24rpx;
			color: #FFFFFF;
			opacity: 0.6;
			.text{
				margin: 10rpx;
			}
			.text_indent{
				text-indent:20rpx
			}
		}
	}
	.voucher_use{
		display: flex;
		flex-direction: column;
		background-color: #353439;
		border-radius: 20rpx;
		margin-bottom: 30rpx;
		padding: 16rpx 30rpx;
		.use_title{
			color: #FFFFFF;
		}
		.use{
			display: flex;
			flex-direction: column;
			color: #D5D5D6;
			.use_top{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 10rpx 0rpx;
			}
			.use_bottom{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 10rpx 0rpx;
				padding-bottom: 20rpx;
				border-bottom: 2rpx solid #2A2A2E;
			}
		}
	}
	.btn{
		width: 678rpx;
		color: #EEAB68;
		background: #333333;
		border: 1px solid #EEAB68;
		border-radius: 6px;
		margin-bottom: 30rpx;
	}
}
</style>
