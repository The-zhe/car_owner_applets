<template>
	<view class="temp_detail">
		<view class="temp_top">
			<view class="temp_name">
				<view class="name_shop">
					<icon class="iconfont icondianpu"></icon>
					百慕大汽修厂
				</view>
				<view class="t_name">
					<view class="tname">{{tempList.packageName}}</view>
					<view class="temp_price">
						<view class="unprice">￥{{tempList.totalCost}}</view>
						<view class="price">￥{{tempList.sellingPrice}}</view>
					</view>
				</view>
				<view class="temp_type">
					<view class="type_name">美容洗车</view>
					<view class="type_people">购买人数{{tempList.balance}}</view>
				</view>
			</view>
			<view class="temp_main">
				<view class="main_title">套餐内容</view>
				<view class="main_service">
					<view class="service">服务项</view>
					<view class="service_detail">
						<view class="service_name">内容 x 1</view>
						<view class="service_price">￥100.00</view>
					</view>
				</view>
				<view class="main_service">
					<view class="service">配件商品</view>
					<view class="service_detail">
						<view class="service_name">内容 x 1</view>
						<view class="service_price">￥100.00</view>
					</view>
				</view>
			</view>
			<view class="temp_msg">
				<view class="msg_title">套餐须知</view>
				<view class="msg_date">有效期：</view>
				<li class="msg">&middot;{{tempList.startTime | timeFormat}} 至 {{tempList.endTime | timeFormat}} （周末、法定节假日通用）</li>
				<view class="msg_date">服务对象：</view>
				<li class="msg">&middot;适用车辆范围</li>
				<view class="msg_date">使用规则：</view>
				<li class="msg">&middot;需提前1天电话预约</li>
				<view class="msg_more">
					查看更多
					<icon class="iconfont iconxiajiantou"></icon>
				</view>
			</view>
			<view class="temp_shop">
				<navigator :url="'/homePage/shopList?id='+ tempId" class="shop">
					<view class="shop_title">
						适用门店
						<view class="shopnum">({{shop.length}})</view>
					</view>
					<icon class="iconfont iconyoujiantou"></icon>
				</navigator>
				<view class="shop_list">
					<view>
						<navigator :url="'/homePage/shopInfor?id='+shop[0].id" class="list_card">
							<view class="card_left" >
								<!-- <view class="left_img"><image :src="item.storeHeadImgUrlList" mode=""></image></view> -->
								<view class="left_detail">
									<view class="detail_name">{{shop[0].storeName}}</view>
									<view class="detail_time">营业中{{shop[0].businessStartTime}} - {{shop[0].businessEndTime}}</view>
									<view class="detail_pf">
										<uniRate :current="4.5" active="#EEAB68" :size="13" />
										4.5分
									</view>
									<view class="detail_type">
										<view class="type">救援</view>
										<view class="type">救援</view>
										<view class="type">搭电</view>
									</view>
								</view>
							</view>
							<view class="card_right">
								<view class="right_message">
									<view class="right_distance">
										<i class="iconfont icondingwei3 dingwei" style="color: #eeab68;"></i>
										{{shop[0].distance}}km
									</view>
									<view class="right_phone">
										<icon class="iconfont icontel-fill phone" style="color: #eeab68;"></icon>
										联系商家
									</view>
								</view>
							</view>
						</navigator>
					</view>
				</view>
			</view>
			<view v-if="overTime" class="temp_btndate">
				<view class="btn_dateover">已过期</view>
			</view>
			<view v-else class="temp_btn">
				<view class="btn_shop" @click="open">到店付款</view>
				<navigator url="/homePage/submit" class="btn_appoint">在线预约</navigator>
			</view>
			
			<view class="temp_space"></view>
			<uni-popup ref="popup" type="dialog">
				<uni-popup-dialog type="base" :content="msg" :duration="2000" @close="close()" @confirm="confirm()"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import uniRate from '@/components/rate/rate.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
import {packageDetail,storeIdDetailPackage} from '../apis/api.js'
import {timeFormat} from '../lib/utils/filters.js'
export default {
	components: {
		uniRate,
		uniPopup,
		uniPopupMessage,
		uniPopupDialog
	},
	data() {
		return {
			msg:"本套餐购买后不可退款，亲车吧建议您先行预约，到店付款。",
			overTime:false,
			tempId:null,
			tempList:null,
			shop:null,
			localtion:null,
			dataFrom:{
				packageId :null,
				storeLatitude:null, //纬度
				storeLongitude:null //经度
			}
		};
	},
		onLoad(option) {
			console.log(option);
			this.tempId = option.id;
		},
	methods: {
		open() {
			this.$refs.popup.open();
		},
		close(done) {
			done()
		},
		confirm(done) {
			done()
		},
		getlocaltion(){
			this.localtion = uni.getStorageSync('localtion')
		},
		getTemp(){
			packageDetail(this.tempId).then( res => {
				console.log('gettemp',res)
				this.tempList = res.data
			})
			this.getlocaltion()
			console.log('local',this.localtion)
			this.dataFrom.packageId = this.tempId
			this.dataFrom.storeLatitude = this.localtion.latitude
			this.dataFrom.storeLongitude = this.localtion.longitude
			storeIdDetailPackage(this.dataFrom).then( res => {
				console.log(res)
				this.shop = res.data.data
				console.log('shop',this.shop)
				if(this.shop[0].businessStartTime){
					this.shop[0].businessStartTime = this.shop[0].businessStartTime.substring(1,this.shop[0].businessStartTime.length-3)
				}
				if(this.shop[0].businessEndTime){
					this.shop[0].businessEndTime = this.shop[0].businessEndTime.substring(1,this.shop[0].businessEndTime.length-3)
				}
				this.shop[0].distance = Number(this.shop[0].distance/1000).toFixed(1)
			})
		},
	},
	mounted() {
		this.getTemp()
	}
};
</script>

<style scoped lang="scss">
.temp_detail {
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #000000;
	.temp_top {
		display: flex;
		flex-direction: column;
		// padding: 10rpx 30rpx;
		.temp_name {
			display: flex;
			flex-direction: column;
			background-color: #242328;
			border-bottom: 2rpx solid #000000;
			padding: 10rpx 30rpx;
			.name_shop {
				display: flex;
				flex-direction: row;
				font-size: 24rpx;
				color: #ffffff;
				align-items: center;
				icon {
					font-size: 48rpx;
				}
			}
			.t_name {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.tname {
					font-size: 48rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #ffffff;
					opacity: 1;
				}
				.temp_price {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					.unprice {
						text-decoration: line-through;
						font-size: 24rpx;
						font-family: Microsoft YaHei;
						font-weight: 300;
						color: #ffffff;
						opacity: 0.6;
					}
					.price {
						font-size: 48rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #ff6f00;
						opacity: 1;
					}
				}
			}
			.temp_type {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin: 30rpx 0rpx;
				.type_name {
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 300;
					color: #ffffff;
					opacity: 0.6;
				}
				.type_people {
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 300;
					color: $theme-color;
				}
			}
		}
		.temp_main {
			display: flex;
			flex-direction: column;
			background-color: #242328;
			padding: 30rpx 30rpx;
			.main_title {
				font-size: 32rpx;
				font-weight: 400;
				color: #eeab68;
				margin-bottom: 20rpx;
				letter-spacing: 1rpx;
			}
			.main_service {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				margin-bottom: 20rpx;
				.service {
					font-size: 32rpx;
					font-weight: 400;
					color: #ffffff;
					margin-bottom: 10rpx;
				}
				.service_detail {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 10rpx;
					.service_name {
						font-size: 28rpx;
						color: #ffffff;
						opacity: 0.8;
					}
					.service_price {
						font-size: 28rpx;
						font-family: Microsoft YaHei;
						color: #eeab68;
					}
				}
			}
		}
		.temp_msg {
			display: flex;
			flex-direction: column;
			padding: 10rpx 30rpx;
			background-color: #242328;
			margin-top: 30rpx;
			.msg_title {
				font-size: 32rpx;
				color: #ffffff;
				opacity: 0.8;
				margin-bottom: 20rpx;
			}
			.msg_date {
				font-size: 28rpx;
				color: #ffffff;
				opacity: 0.6;
				margin: 5rpx 0rpx;
			}
			.msg {
				font-size: 28rpx;
				color: #ffffff;
				margin: 5rpx 0rpx;
			}
			.msg_more {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				text-align: center;
				font-size: 24rpx;
				color: #ffffff;
				opacity: 0.6;
				icon {
					line-height: 60rpx;
				}
			}
		}
		.temp_shop {
			padding: 10rpx 30rpx;
			display: flex;
			flex-direction: column;
			background-color: #242328;
			margin-top: 30rpx;
			.shop {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 20rpx;
				.shop_title {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 32rpx;
					color: #ffffff;
					opacity: 0.8;
					.shopnum {
						font-size: 24rpx;
						color: #ffffff;
						opacity: 0.6;
						margin-left: 10rpx;
					}
				}
				icon {
					font-size: 32rpx;
					color: #ffffff;
					opacity: 0.8;
				}
			}
			.shop_list {
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
								width: 350rpx;
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
			}
		}
		.temp_btn {
			position: fixed;
			bottom: 0;
			display: flex;
			box-sizing: border-box;
			flex-direction: row;
			padding: 20rpx 30rpx 50rpx 30rpx;
			justify-content: space-between;
			background-color: #242328;
			width: 100%;
			.btn_shop {
				padding: 20rpx 80rpx;
				border-radius: 44rpx;
				border: 1px solid #ff6f00;
				font-size: 32rpx;
				color: #ff6f00;
			}
			.btn_appoint {
				padding: 20rpx 80rpx;
				background: #ff6f00;
				opacity: 1;
				border-radius: 22px;
				font-size: 32rpx;
				color: #ffffff;
			}
		}
		.temp_btndate{
			position: fixed;
			bottom: 0;
			display: flex;
			box-sizing: border-box;
			flex-direction: row;
			padding: 20rpx 30rpx 50rpx 30rpx;
			justify-content: space-between;
			background-color: #242328;
			width: 100%;
			.btn_dateover{
				font-size: 16px;
				color: #FFFFFF;
				background: #8F8F8F;
				opacity: 0.3;
				border-radius: 40rpx;
				text-align: center;
				width: 100%;
				padding: 20rpx 0rpx;
			}
		}
		.temp_space {
			width: 100%;
			height: 180rpx;
			background-color: #000000;
		}
	}
}
</style>
