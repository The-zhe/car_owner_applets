<template>
	<view class="recommended">
		<!-- 搜索框 -->
		<navigator url="/homePage/searchShop" class="rec_search">
			<icon class="iconfont iconsousuo serachIcon"></icon>
			<input class="rec_ipt" type="text" placeholder="请输入门店,地址,标签" disabled="true" />
		</navigator>
		<!-- 轮播 -->
		<view class="rec_ad">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
				<swiper-item v-for="(item,index) in adlist" :key="index"><image :src="item.image" style="width: 100%;height: 100%;"></image></swiper-item>
			</swiper>
		</view>
		<!-- 模块 -->
		<view class="rec_list">
			<navigator :url="item.url" v-for="(item, index) in plateList" :key="index" class="rec_span">
				<view class="rec_image"><image :src="item.image" mode=""></image></view>
				<view class="rec_title">{{ item.title }}</view>
			</navigator>
		</view>
		<!-- 间隔槽 -->
		<view class="gap" style="height: 4rpx;background-color:#353439;"></view>
		<!-- 列表 -->
		<view class="rec_main">
			<view class="main_address">
				<view class="address_dw">
					<i class="iconfont icondingwei dingweiIcon"></i>
					<view class="dw_text">宁波保险科技创业园</view>
				</view>
				<view class="address_jl">
					<picker @change="getAdd" :value="address" :range="disList" >
						<view class="uni-input" style="color: #EEAB68;">{{ disList[address] }}
							<icon class="iconfont iconxiajiantou1 xiala"></icon>
						</view>
					</picker>
				</view>
			</view>
			<!-- <view class="main_list" v-for="(item, index) in mainList" :key="index">
				<view class="list_card">
					<view class="card_left">
						<view class="left_img"><image :src="item.image" mode=""></image></view>
						<view class="left_detail">
							<view class="detail_name">{{ item.name }}</view>
							<view class="detail_time">营业时间:{{ item.time }}</view>
							<view class="detail_pf">
								<image src="../static/img/img/tab/pingfen.png" mode=""></image>
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
			</view> -->
			<view class="main_list"><serveCard :mainList="mainList"></serveCard></view>
			<view class="text" v-if="true">我也是有底线的</view>
		</view>
	</view>
</template>

<script>
	import {storeInfo,deConcernedStore,userConcernedStore} from '@/apis/api.js'
	import serveCard from './/serveCard.vue';
export default {
	components: { serveCard },
	data() {
		return {
			address: 0,
			disList:['距离优先','评分优先'],
			adlist: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			],
			plateList: [
				{
					image: require('../static/img/index/icon01.png'),
					title: '美容洗车',
					url: '/servicePage/washCar'
				},
				{
					image: require('../static/img/index/icon02.png'),
					title: '维修',
					url: '/servicePage/fixCar?currentTab=0'
				},
				{
					image: require('../static/img/index/icon03.png'),
					title: '保养',
					url: '/servicePage/fixCar?currentTab=1'
				},
				{
					image: require('../static/img/index/icon04.png'),
					title: '道路救援',
					url: '/servicePage/roadSide'
				}
			],
			mainList: [],
			localtion:null,
			text:false,
			dataFrom:{
				// searchParam:'',
				// userId:null,
				sort:'0',
				storeLatitude:null,//纬度
				storeLongitude:null,//经度
				currentPage:1,
				pageSize:10,
			}
		};
	},
	methods: {
		getAdd(e) {
			// console.log(e);
			// this.address = e.target.value
			if(e.target.value == '0'){
				this.dataFrom.sort = '0'
				console.log(e);
				this.address = e.target.value
				this.getStoreInfo()
			}else{
				this.dataFrom.sort = '1'
				console.log(e);
				this.address = e.target.value
				this.getStoreInfo()
			}
		},
		foucs(item) {
			console.log(item);
			item.isFocus = !item.isFocus;
		},
		getStoreInfo(){
			this.localtion = uni.getStorageSync('localtion')
			// this.dataFrom.userId = uni.getStorageSync('userId')
			console.log(this.localtion)
			this.dataFrom.storeLatitude = '29.819141' //this.localtion.latitude
			this.dataFrom.storeLongitude = '121.590315' //this.localtion.longitude
			uni.showNavigationBarLoading();
			storeInfo(this.dataFrom).then( res => {
				console.log(res)
				if(res.data.data.length != 0){
					this.dataFrom.currentPage = Number(this.dataFrom.currentPage) + 1;
					this.dataFrom.currentPage = String(this.dataFrom.currentPage);
					this.mainList = this.mainList.concat(res.data.data)
				}else{
					this.text = true
				}
				
			})
		},
		// toDetail(item) {
		// 	// console.log('item', item);
		// 	uni.navigateTo({
		// 		url: item.url,
		// 		animationType: 'pop-in',
		// 		animationDuration: 200
		// 	});
		// }
	},
	mounted() {
		this.getStoreInfo();
	}
};
</script>

<style scoped lang="scss">
.recommended {
	color: #ffffff;
	font-size: 24rpx;
	.rec_search {
		position: relative;
		width: 100%;
		.serachIcon {
			position: absolute;
			top: 5rpx;
			left: 60rpx;
			font-size: 40rpx;
			color: #8b8b8b;
		}
		.rec_ipt {
			background-color: #353439;
			color: #8b8b8b;
			padding: 10rpx 10rpx 10rpx 80rpx;
			margin: auto 40rpx;
			border-radius: 36rpx;
		}
	}
	.rec_ad {
		margin: 20rpx 40rpx;
		border-radius: 10rpx;
	}
	.rec_list {
		padding: 10rpx 80rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.rec_span {
			display: flex;
			flex-direction: column;
			text-align: center;
			.rec_image {
				align-self: center;
				width: 92rpx;
				height: 92rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.rec_title {
				color: $sub-theme-color;
				margin-top: 10rpx;
			}
		}
	}
	.gap {
		margin: 20rpx 40rpx;
	}
	.rec_main {
		padding: 10rpx 40rpx;
		display: flex;
		flex-direction: column;
		.main_address {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.address_dw {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.dingweiIcon {
					color: $theme-color;
					font-size: 40rpx;
				}
				.dw_text {
					color: #ffffff;
					font-size: 28rpx;
					margin-left: 15rpx;
				}
			}
			.address_jl {
				display: flex;
				width: 200rpx;
				height: 60rpx;
				flex-direction: row;
				justify-content: space-around;
				/* align-items: center; */
				border-radius: 36rpx;
				background-color: #353439;
				.xiala {
					color: $theme-color;
					margin-left: 20rpx;
				}
			}
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
							color: $theme-color;
							font-size: 33rpx;
							margin-bottom: 10rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.detail_time {
							margin-bottom: 10rpx;
							font-size: 24rpx;
							color: #AEADAF;
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
							color: #AEADAF;
							justify-content: flex-end;
						}
						.right_phone {
							text-align: center;
							display: flex;
							flex-direction: column;
							color: #AEADAF;
							justify-content: flex-end;
							margin-left: 30rpx;
						}
					}
				}
			}
		}
		.line {
			margin-top: 35rpx;
			background-color: #37363a;
			height: 2rpx;
		}
		.text{
			margin: 16rpx auto;
			color: #aeadaf;
		}
	}
}
</style>
