<template>
	<view>
		<view class="evaluate">
			<view class="evaluate-list flex" @click="toInfor">
				<view class="member-heard"></view>
				<view class="evaluate-right">
					<view class="member-name flex-c-between">
						<text>用户名</text>
						<text>起亚K5</text>
					</view>
					<view class="flex-c-between mgj">
						<view>
							<tui-rate :current="4" :disabled="true" :score="0.45" active='#EEAB68'></tui-rate>
						</view>
						<view class="evaluate-time">2020-8-8</view>
					</view>
					<view class="evaluate-project">服务项目：美容洗车</view>
					<view class="evaluate-content">
						宁波洗车最⑥没有之一，洗得太干净了。每次去不
						管高新店还是下应店洗得都太干净了。完美！现在
						还有活动。希望大家都去体验一下，开着干干净…
					</view>
					<view class="rect">
						<view class="img-width"></view>
						<view class="img-width"></view>
						<view class="img-width"></view>
						<view class="img-width"></view>
						<view class="img-width"></view>
					</view>
					<view class="reply" v-if='hasReply'>
						<text class="iconfont "></text>
						<text class="merch">商家回复:</text>
						<text class="merch-content">感谢您的评论。欢迎下次光临！感谢您的评论。欢迎下次光临</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiRate from "@/components/rate/rate"
	export default {
		components: {
			tuiRate
		},
		props: {
			hasReply: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			toInfor() {
				console.log(123)
				uni.navigateTo({
					url: '/homePage/evaluateInfor'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.evaluate {
		padding: 20rpx 0;
		border-bottom: 2rpx solid #dcdcdc;
		width: 100%;

		.evaluate-list {
			padding: 0 30rpx;
		}

		.member-heard {
			width: 97rpx;
			height: 97rpx;
			border-radius: 50%;
			background: $theme-color;
		}

		.evaluate-right {
			margin-left: 20rpx;
			width: calc(100% - 117rpx);
		}

		.member-name {
			font-size: 36rpx;
			color: #333;

			text:last-child {
				font-size: 24rpx;
				color: #666
			}
		}

		.evaluate-time {
			color: #999;
			font-size: 24rpx;
		}

		.evaluate-project {
			font-size: 24rpx;
			color: #666;
			padding: 6rpx 0;
		}

		.evaluate-content {
			font-size: 26rpx;
			color: #333;
			margin-top: 8rpx;
			padding-bottom: 20rpx;
		}

		.mgj {
			padding-top: 4rpx;
		}

		.img-width {
			width: 189rpx;
			height: 189rpx;
			background: $theme-color;
			display: inline-block;
			vertical-align: top;
			margin-bottom: 6rpx;

			&:not(:nth-child(3n)) {
				margin-right: 6upx;
			}
		}

		.rect {

			//padding-right: 178rpx;
			.img-item {
				margin-right: 0;

				&:not(:nth-child(2n)) {
					margin-right: 6rpx;
				}
			}
		}

		.merch {
			color: #999;
			font-size: 24rpx;
		}

		.merch-content {
			color: #999;
			font-size: 24rpx;
		}
	}
</style>
