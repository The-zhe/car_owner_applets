<template>
	<view class="attention">
		<view class="main_list" v-for="(item, index) in mainList" :key="index">
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
				</view>
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
import { userConcernedStoreUserId } from '../apis/api.js';
export default {
	data() {
		return {
			userId: '',
			show: false,
			dataForm: null,
			mainList: [
				{
					image: require('../static/img/banner.png'),
					name: '龙王？？？？',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '拖车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '2.3',
					point: 4.7
				},
				{
					image: require('../static/img/banner.png'),
					name: '小伙子',
					time: '7:30 - 22:30',
					isFocus: true,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '2.3',
					point: 4.7
				},
				{
					image: require('../static/img/banner.png'),
					name: '你那什么车啊?',
					time: '24小时',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '5.4',
					point: 4.9
				},
				{
					image: require('../static/img/banner.png'),
					name: 'AE86啊',
					time: '24小时',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [{ typeName: '救援' }, { typeName: '搭电' }, { typeName: '拖车' }],
					distance: '5.4',
					point: 4.9
				},
				{
					image: require('../static/img/banner.png'),
					name: '飘一下啊',
					time: '8:30 - 22:30',
					isFocus: false,
					pImg: require('../static/img/img/tab/pingfen.png'),
					type: [
						{
							typeName: '修车'
						},
						{
							typeName: '保养'
						},
						{
							typeName: '搭电'
						}
					],
					distance: '6.4',
					point: 4.7
				}
			]
		};
	},
	methods: {
		foucs(item) {
			item.isFocus = !item.isFocus;
		},
		getNickName() {
			this.dataForm = uni.getStorageSync('userInfor');
		},
		getAttentionShop() {
			userConcernedStoreUserId(this.dataForm.userId).then(res => {
				if (res.code == '200') {
					console.log(res)
					this.mainList = res.data.data;
				} else {
					uni.showToast({
						title: res.message
					});
				}
			});
		}
	},
	onLoad() {
		this.getNickName();
	},
	mounted() {
		this.getAttentionShop();
	}
};
</script>

<style lang="scss">
.attention {
	padding: 0rpx 30rpx;
}
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
					color: #eeab68;
					font-size: 33rpx;
					margin-bottom: 10rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.detail_time {
					margin-bottom: 10rpx;
					font-size: 24rpx;
					color: #aeadaf;
				}
				.detail_pf {
					color: #eeab68;
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
					border: 1rpx solid #eeab68;
					color: #eeab68;
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
		}
	}
	.line {
		margin-top: 35rpx;
		background-color: #37363a;
		height: 2rpx;
	}
}
</style>
