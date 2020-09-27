<template>
	<view class="prohibition">
		<view class="nav-top" :style="'height:' + nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<view @click="sao" class="iconfont iconsaoyisao"></view>
			<!-- <view class="iconfont icondingwei margin-left"></view> -->
			<view @click="toSearch" class="iconfont icondingwei margin-left"></view>
			<view class="nav-top-text" :key="localkey">{{localName}}</view>
		</view>
		<view :style="'height:' + nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'"></view>
		<car-list :car="carLists"></car-list>
		<view class="my">
			<view class="my-name flex-c-between">
				<view class="font-b one-hidden" style="width: 400rpx;">{{ nickName }}</view>
				<text>平台积分：520</text>
			</view>
			<view class="my-type font-size-24">VIP8</view>
			<view class="flex-c-space panel">
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon01.png"></image>
					<view>美容洗车</view>
				</view>
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon02.png"></image>
					<view class="type-text">维修保养</view>
				</view>
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon03.png"></image>
					<view class="type-text">道路救援</view>
				</view>
				<view class="type-text">
					<image class="my-icon" src="../../static/img/index/icon04.png"></image>
					<view>我的订单</view>
				</view>
			</view>
		</view>
		<view class="flex oil-box">
			<view class="oil flex-c-center oil-width">
				<view class="oil-circle">92</view>
				<view>{{ oil92 }}/L</view>
				<view class="oil-circle">95</view>
				<view>{{ oil95 }}/L</view>
				<view class="oil-circle">98</view>
				<view>{{ oil98 }}/L</view>
			</view>
			<view class="oil flex-c-center right">28</view>
		</view>
		<view class="oil-title flex-c-center">
			<view class="left oil-width">今日油价</view>
			<view class="right">附近优惠商家</view>
		</view>
		<view class="gift">
			<image src="../../static/img/index/banner01.png" class="gift-ba"></image>
			<image src="../../static/img/index/gift.png" class="gift-icon"></image>
		</view>
		<view style="height: 10rpx;"></view>
		<scroll-list :height="350" :list="list" :effect3d="effect3d" :mode="mode" :indicatorPos="indicatorPos"></scroll-list>
		<view style="height: 150rpx;"></view>
		<view class="pay-box">
			<view class="pay-bg flex-c-center">
				<view class="pay-right flex-c-center">
					<view class="operate-pop-wrap flex-c-center" :class="[showPay ? 'show-operate' : '']" @click="showPayEvent">
						<view class="iconfont iconshijian pay-icon" style="margin-left:20rpx;"></view>
						<text class="h-text">待支付</text>
						<text class="h-text">浙B16J65</text>
						<text class="h-text">预计完成08-05 14:00</text>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="base" :before-close="true" :content="msg" :duration="2000" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<!--<uni-popup ref="login" type=""> 
			<uni-popup-message type="error" message="您尚未授权,即将跳转授权页" :duration="2000" ></uni-popup-message>
		</uni-popup> -->
	</view>
</template>

<script>
import scrollList from '@/components/uni-swiper/index.vue';
import carList from '@/components/carList/index.vue';
import uniRate from '@/components/rate/rate.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
var QQMapWX = require('@/lib/qqmap-wx-jssdk.min.js');
import { GetMemberAjax, oilPrice, GetMemberCar } from '@/apis/api';
const chooseLocation = requirePlugin('chooseLocation');
export default {
	components: {
		scrollList,
		carList,
		uniRate,
		uniPopup,
		uniPopupMessage,
		uniPopupDialog
	},
	data() {
		return {
			nav: {
				top: 0,
				height: 0
			},
			msg: '您尚未绑定手机号，请绑定手机号',
			nickName: '',
			carLists: [],
			list: [
				{
					image: 'http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/615e675c203994cde8029ceddf5c482.png',
					price: '50',
					man: '满100减50',
					quan: '会员专属代金券',
					time: '长期有效'
				},
				{
					image: 'http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/615e675c203994cde8029ceddf5c482.png',
					price: '299',
					man: '每月限定一次',
					quan: '会员免费洗车券',
					time: '长期有效'
				},
				{
					image: 'http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/615e675c203994cde8029ceddf5c482.png',
					price: '2000',
					man: '积分100000',
					quan: '免费保养兑换券',
					time: '长期有效'
				}
			],
			effect3d: true,
			mode: 'round',
			indicatorPos: 'bottomCenter',
			showPay: false,
			userInfor: null,
			oil92: 0,
			oil95: 0,
			oil98: 0,
			userId: null,
			localName:'',
			islocal:true,
			localkey:1
		};
	},
	created() {
		console.log('created')
		this.nav.top = this.$store.state.system.heardBar.top;
		this.nav.height = this.$store.state.system.heardBar.height;
		this.userId = uni.getStorageSync('userId');
	},
	onShow() {
		this.userInfor = uni.getStorageSync('userInfor');
		this.nickName = this.userInfor.nickName;
		const location = chooseLocation.getLocation();
		if(location){
			this.localName = location.name
			uni.setStorageSync('localtion',location)
		}
	},
	onUnload() {
		// 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
		chooseLocation.setLocation(null);
	},
	mounted() {
		console.log('mounted')
		if (!uni.getStorageSync('userId')) {
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					console.log(res, 'res');
				}
			});
		}

		this.getLocal()
		this.init();
		this.open();
	},
	methods: {
		getLocal(){
			const qqmapsdk = new QQMapWX({
				key: 'AFOBZ-SVR3X-ZHN46-TWOZH-JWZSQ-KUBGG'
			});
			let that = this
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					console.log(res, 'resresre');
					uni.setStorageSync('localtion',res)
					qqmapsdk.reverseGeocoder({
						location: {
							latitude: res.latitude,
							longitude: res.longitude
						},
						success: function(res1) {
							console.log(res1, 'res111');
							that.localName = res1.result.address
						},
						fail: function(error) {
							console.error(error);
						},
						complete: function(res) {
							console.log(res);
						}
					});
					//console.log(res,'res')
				}
			});
		},
		toSearch() {
			let plugin = requirePlugin("chooseLocation");
			const key = 'AFOBZ-SVR3X-ZHN46-TWOZH-JWZSQ-KUBGG'; //使用在腾讯位置服务申请的key
			const referer = '亲车吧'; //调用插件的app的名称
			const location = '';
			const category = '生活服务,娱乐休闲';

			wx.navigateTo({
			  url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category  
			});
		},
		sao() {
			//扫一扫
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				}
			});
		},
		open() {
			if(!this.userId){
				// this.$refs.login.open();
				uni.showToast({
					title:'您尚未授权,即将跳转授权页',
					icon:'none'
				})
				setTimeout(()=>{
					uni.reLaunch({
						url: '/pages/login/index'
					});
				},2000)
			}else if (!this.userInfor.mobilephone) {
				console.log('open');
				this.$refs.popup.open();
			}
		},
		close() {
			console.log('close');
			uni.reLaunch({
				url: '/pages/login/index'
			});
			// done()
		},
		confirm(done) {
			console.log('confirm');
			uni.reLaunch({
				url: '/pages/login/phone'
			});
			done();
		},
		init() {
			//console.log(6678)
			//this.showPageLoading()
			Promise.all([this.memberInfor(), this.getPrice(), this.getcarList()])
				.then(() => {
					//	this.hidePageLoading()
					uni.stopPullDownRefresh();
				})
				.catch(() => {
					this.hidePageLoading();
					uni.stopPullDownRefresh();
				});
		},
		showPayEvent() {
			this.showPay = !this.showPay;
		},
		async memberInfor() {
			let x = await GetMemberAjax(this.userId);
			this.userInfor = x;
			this.nickName = this.userInfor.data.nickName;
			console.log(this.userInfor);
			this.carLists = x.data.carInfoTaEntityList;
			uni.setStorageSync('userInfor', x.data);
		},
		async getPrice() {
			let p = await oilPrice();
			this.oil92 = p.data.oil92;
			this.oil95 = p.data.oil95;
			this.oil98 = p.data.oil98;
		},
		async getcarList() {
			let car = GetMemberCar(this.userId);
		}
	}
};
</script>

<style lang="scss" scoped>
.pay-box {
	position: fixed;
	padding: 20rpx;
	bottom: 20rpx;
	font-size: 24rpx;
	color: $sub-theme-color;
	width: 100%;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	.pay-bg {
		background: #000;
		border-bottom-left-radius: 50rpx;
		border-top-left-radius: 50rpx;
		height: 84rpx;
		width: 104rpx;
		position: relative;
		justify-content: center;
		position: relative;
	}

	.pay-width {
		width: 64rpx;
	}

	.pay-icon {
		color: $sub-theme-color;
		font-size: 50rpx;
		margin-right: 10rpx;
	}

	.h-text {
		font-size: 24rpx;
		margin-right: 14rpx;
	}

	.pay-right {
		width: 540rpx;
		padding-right: 15rpx;
		position: absolute;
		right: 0;
		height: 84rpx;
		top: 50%;
		z-index: 12;
		transform: translateY(-50%);

		.operate-pop-wrap {
			background-color: #000;
			width: 100%;
			height: 100%;
			border-bottom-left-radius: 50rpx;
			border-top-left-radius: 50rpx;
			position: absolute;
			transform: translateX(82.5%);
			transition: transform 0.2s ease;

			&.show-operate {
				transform: translateX(0%);
			}
		}
	}
}

.gift {
	position: relative;
	padding: 0 30rpx;
	margin-bottom: 30rpx;

	.gift-ba {
		width: 94%;
		height: 231rpx;
		margin: 0 auto;
		display: block;
	}

	.gift-icon {
		width: 124rpx;
		height: 120rpx;
		position: absolute;
		top: 85rpx;
		left: 77rpx;
	}
}

.oil-title {
	padding: 20rpx 30rpx;
	color: $sub-theme-color;

	.left {
		text-align: center;
		font-size: 24rpx;
		width: 72%;
		margin-right: 20rpx;
	}

	.right {
		width: 26%;
		font-size: 24rpx;
		text-align: center;
	}
}

.oil-box {
	position: relative;
	z-index: 10;
	width: 93%;
	margin: 0 auto;

	.oil {
		height: 90rpx;
		background: #000;
		border-radius: 45rpx;
		font-size: 28rpx;
		color: #fff;
		justify-content: center;
	}

	.oil-width {
		width: 72%;
		margin-right: 20rpx;
	}

	.right {
		width: 26%;
		color: #c54810;
		font-size: 38rpx;
	}

	.oil-circle {
		font-size: 32rpx;
		width: 55rpx;
		height: 55rpx;
		background: url('../../static/img/index/circle.png') no-repeat center center;
		background-size: 100%;
		color: $sub-theme-color;
		line-height: 55rpx;
		text-align: center;

		& + view {
			margin: 0 10rpx;
		}

		// border:2rpx solid $sub-theme-color;
		// border-radius: 50%;
	}
}

.my {
	background: url('http://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/images/20-08-11/c53532d854fdf2917f292412b41f4ed.png') no-repeat center center;
	width: 85%;
	height: 334rpx;
	padding: 30rpx 30rpx 20rpx 30rpx;
	background-size: 100%;
	margin: 0 auto;

	.my-name {
		font-size: 28rpx;
		color: $sub-theme-color;
		padding-top: 26rpx;
	}

	.font-b {
		font-size: 36rpx;
		font-weight: bold;
	}

	.my-type {
		margin: 10rpx 0 20rpx 0;
		color: $sub-theme-color;
	}

	.panel {
		padding: 30rpx 0 10rpx 0;
	}

	.my-icon {
		width: 92rpx;
		height: 92rpx;
	}

	.type-text {
		text-align: center;
		color: $sub-theme-color;
		font-size: 24rpx;
	}
}

.nav-top {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	background: #242328;
	font-size: 28rpx;
	padding-left: 30rpx;
	z-index: 99;

	.iconsaoyisao {
		color: #fff;
		font-size: 38rpx;
	}

	.margin-left {
		margin-left: 15rpx;
		margin-right: 15rpx;
		color: #fff;
		font-size: 38rpx;
	}

	.nav-top-text {
		color: #fff;
		padding-left: 0 !important;
	}
}
</style>
