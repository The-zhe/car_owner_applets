<template>
	<view>
		<view class="main_list" v-for="(item, index) in tempList" :key="index">
			<view class="list_card">
				<view class="card_left">
					<view class="left_img"><image :src="item.image" mode=""></image></view>
					<view class="left_detail">
						<view class="detail_name">{{ item.name }}</view>
						<view class="detail_time">营业时间:{{ item.time }}</view>
						<view class="detail_pf">
							<image :src="item.pImg" mode=""></image>
							{{ item.point }}分
						</view>
						<view class="detail_type">
							<view class="type" v-for="(type, index) in item.type" :key="index">{{ type.typeName }}</view>
						</view>
					</view>
				</view>
				<view class="card_right">
					<view class="right_focus">
						<view v-show="item.isFocus" class="focus" @click="foucs(item)">已关注</view>
						<view v-show="!item.isFocus" class="unfocus" @click="foucs(item)">关注</view>
					</view>
					<view class="right_message">
						<view class="right_distance">
							<i class="iconfont icondingwei3 dingwei"></i>
							{{ item.distance }}Km
						</view>
						<view class="right_phone">
							<icon class="iconfont icontel-fill phone"></icon>
							联系商家
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['mainList'],
	data() {
		return {
			show: false,
			tempList:[],
		};
	},
	methods: {
		foucs(item) {
			item.isFocus = !item.isFocus
		}
	},
	created(){
		this.tempList = this.mainList
	}
};
</script>

<style lang="scss">
.main_list {
	display: flex;
	flex-direction: column;
	margin-top: 20rpx;
	.list_card {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-top: 10rpx;
		justify-content: space-between;
		.card_left {
			display: flex;
			.left_img {
				width: 170rpx;
				height: 170rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
			.left_detail {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				.detail_name {
					width: 270rpx;
					color: #edaa68;
					font-size: 33rpx;
					margin-bottom: 10rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.detail_time {
					margin-bottom: 10rpx;
					font-size: 24rpx;
					color: #FFFFFF;
				}
				.detail_pf {
					color: #edaa68;
					margin-bottom: 10rpx;
					font-size: 20rpx;
					image {
						width: 80rpx;
						height: 20rpx;
						margin-right: 10rpx;
					}
				}
				.detail_type {
					display: flex;
					flex-direction: row;
					.type {
						color: #b4550e;
						padding: 4rpx 20rpx;
						border: 1rpx solid #b4550e;
						border-radius: 10rpx;
						margin: 0rpx 5rpx;
						font-size: 20rpx;
					}
				}
			}
		}
		.card_right {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			.right_focus {
				display: flex;
				flex-direction: row;
				justify-content: end;
				font-size: 24rpx;
				.unfocus {
					border: 1rpx solid #e0a264;
					color: #e0a264;
					padding: 10rpx 30rpx;
					border-radius: 20rpx;
					width: 50rpx;
				}
				.focus {
					border: 1rpx solid #78777a;
					color: #78777a;
					padding: 10rpx 20rpx;
					border-radius: 20rpx;
					width: 80rpx;
				}
			}
			.right_message {
				display: flex;
				flex-direction: row;
				font-size: 25rpx;
				margin-top: 10rpx;
				.right_distance {
					display: flex;
					text-align: center;
					flex-direction: column;
					color: #eeab68;
					justify-content: flex-end;
				}
				.right_phone {
					text-align: center;
					display: flex;
					flex-direction: column;
					color: #eeab68;
					justify-content: flex-end;
					margin-left: 30rpx;
				}
			}
		}
	}
	.line {
		margin-top: 35rpx;
		background-color: #37363a;
		height: 2rpx;
	}
}
</style>
