<template>
	<view>
		<view class="main_list" v-for="(item, index) in tempList" :key="index">
			<view class="list_card">
				<navigator :url="'/homePage/shopInfor?' + 'id=' + item.id" class="card_left">
					<view class="left_img"><image :src="item.storeHeadImgUrlList" mode=""></image></view>
					<view class="left_detail">
						<view class="detail_name">{{ item.storeName }}</view>
						<view class="detail_time">{{item.storeStatus=='0'?'营业中':'休息中'}}:{{item.businessStartTime}} - {{item.businessEndTime}}</view>
						<view class="detail_pf">
							<uniRate :current="item.totalScoreStar" active="#EEAB68" :size="13" />
							{{ item.totalScoreStar }}分
						</view>
						<view class="detail_type">
							<view class="type" v-for="(type, index) in item.rescueTypeList" :key="index">{{type}}</view>
						</view>
					</view>
				</navigator>
				<view class="card_right">
					<view class="right_focus">
						<view v-show="item.isConcern" class="focus" @click="foucs(item)">已关注</view>
						<view v-show="!item.isConcern" class="unfocus" @click="foucs(item)">关注</view>
					</view>
					<view class="right_message">
						<view class="right_distance">
							<i class="iconfont icondingwei3 dingwei" style="color: #eeab68;"></i>
							{{ item.distance }}Km
						</view>
						<view class="right_phone">
							<icon class="iconfont icontel-fill phone" style="color: #eeab68;"></icon>
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
import { userConcernedStore, deConcernedStore } from '../apis/api.js';
import uniRate from  '@/components/rate/rate.vue'
export default {
	props: ['mainList'],
	components: { uniRate },
	data() {
		return {
			show: false,
			comprehensiveValue:4,
			valList:null,
			dataFrom:{
				storeId:null,
				userId:null,
			},
			tempList: []
		};
	},
	watch:{
		mainList(val){
			this.valList = val
			console.log('valList',val)
			this.valList.forEach((item,index) => {
				if(item.businessStartTime){
					item.businessStartTime = item.businessStartTime.substring(1,item.businessStartTime.length-3)
				}
				if(item.businessEndTime){
					item.businessEndTime = item.businessEndTime.substring(1,item.businessEndTime.length-3)
				}
				item.totalScoreStar = (item.totalScoreStar/10000).toFixed(1)
				item.rescueTypeList = item.rescueTypeList.concat(item.serviceTypeList)
				if(item.rescueTypeList.length>3){
					// item.rescueTypeList.splice(-1,item.rescueTypeList.length - 3)
					item.rescueTypeList.length = 3
				}
				item.distance = Number(item.distance/1000).toFixed(1)
			})
			this.tempList = this.valList
		}
	},
	onShow() {
		this.foucs(item)
	},
	methods: {
		foucs(item) {
			// console.log(item.isConcern)
			// item.isConcern = !item.isConcern;
			// console.log(item.isConcern)
			this.dataFrom.storeId = item.id
			this.dataFrom.userId = uni.getStorageSync('userId')
			if (item.isConcern) {
				console.log(item.isConcern)
				deConcernedStore(this.dataFrom).then(res => {
					console.log(res)
					if (res.code == '200') {
						uni.showToast({
							title: '已取消关注',
							icon: 'success',
						});
						item.isConcern = false;
					}else{
						uni.showToast({
							title: res.message,
							icon: 'loading',
						});
					}
				});
			} else {
				userConcernedStore(this.dataFrom).then(res => {
					console.log(res)
					if (res.code == '200') {
						uni.showToast({
							title: '关注成功',
							icon: 'success',
						});
					}else{
						uni.showToast({
							title: res.message,
							icon: 'loading',
						});
					}
				});
				item.isConcern = true;
			}
		}
	},
	created() {
		// this.tempList = this.mainList
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
						padding: 4rpx 13rpx;
						border: 1rpx solid #b4550e;
						border-radius: 10rpx;
						margin: 0rpx 5rpx;
						font-size: 22rpx;
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
			.right_message {
				display: flex;
				flex-direction: row;
				font-size: 25rpx;
				margin-top: 10rpx;
				.right_distance {
					display: flex;
					text-align: center;
					flex-direction: column;
					color: #aeadaf;
					justify-content: flex-end;
				}
				.right_phone {
					text-align: center;
					display: flex;
					flex-direction: column;
					color: #aeadaf;
					justify-content: flex-end;
					margin-left: 30rpx;
					width: 100rpx;
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
