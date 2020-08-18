<template>
	<view>
		<points-order></points-order>
		<view class="code">
			<view class="code-panel">
				<view class="code-num">验证码: <text class="code-margin">2368 9176 3231 3681</text></view>
				<view>
					<canvas canvas-id="canvasCode" class="codeBg-canvas"></canvas>
				</view>
			</view>
		</view>
		<view class="code">
			<view class="code-panel">
				<view class="order-title">订单信息</view>
				<view class="order-list">
					订单编号<text class="text">20200021523123112</text>
				</view>
				<view class="order-list">
					创建时间<text class="text">2020-06-14 12:59:31</text>
				</view>
				<view class="order-list">
					兑换时间<text class="text">2020-06-14 12:59:31</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pointsOrder from '@/components/pointsOrder.vue'
	import drawQrcode from '@/lib/weapp.qrcode.min.js'
	export default {
		components: {
			pointsOrder
		},
		onLoad() {
			//this.getdrawQrcode()
			this.getCode()
		},
		methods: {
			getCode() {
				// const query = wx.createSelectorQuery()
				//     query.select('#myCanvas')
				//       .fields({ node: true, size: true })
				//       .exec((res) => {
				//         const canvas = res[0].node
				//         const ctx = canvas.getContext('2d')
				
				//         const dpr = wx.getSystemInfoSync().pixelRatio
				//         canvas.width = res[0].width * dpr
				//         canvas.height = res[0].height * dpr
				//         ctx.scale(dpr, dpr)
				
				//         ctx.fillRect(0, 0, 100, 100)
				//       })
				let options = {
					width: 180,
					height: 180,
					x: 10,
					y: 10,
					canvasId: 'canvasCode',
					background:'#EEAB68',
					foreground:'#353439',
					text: 'https://www.baidu.com',
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
</script>

<style scoped lang="scss">
	.code {
		padding: 0 20rpx;

		.codeBg-canvas {
			width: 380rpx;
			height: 380rpx;
			margin: 30rpx auto 0 auto;
		}

		.code-panel {
			background: rgba(255, 255, 255, 0.1);
			padding: 20rpx 0 20rpx 0;
			border-radius: 15rpx;
			margin: 15rpx 0;

			.order-title {
				color: #fff;
				font-size: 28rpx;
				padding: 0 15rpx;
				margin-bottom: 20rpx;
				margin-top: 10rpx;
			}

			.order-list {
				color: $white-color;
				font-size: 28rpx;
				padding: 0 15rpx;
				line-height: 60rpx;

				.text {
					color: #fff;
					margin-left: 30rpx;
				}
			}
		}

		.code-num {
			background: #000;
			text-align: center;
			width: 94%;
			margin: 0 auto;
			color: $theme-color;
			font-size: 36rpx;
			line-height: 82rpx;
		}

		.code-margin {
			margin-left: 30rpx;
		}

	}
</style>
