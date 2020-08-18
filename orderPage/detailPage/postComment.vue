<template>
	<view class="comment">
		<view class="comment_shop">
			<view class="shop_name">鄞州百慕大汽修厂</view>
			<i
				class="iconfont iconyoujiantou"
				style="font-size: 30rpx;
					color: #FFFFFF;line-height: 40rpx;margin-left: 30rpx;"
			></i>
		</view>
		<view class="comment_detail">
			<view class="detail_name">项目&商品配件明细</view>
			<view class="detail_main" v-for="(item, index) in proList" :key="index">
				<view class="main_top">
					<view class="main_title">{{ item.name }}</view>
					<icon class="iconfont iconxiajiantou" style="font-size: 30rpx;color: #EEAB68;line-height: 40rpx;margin-left: 30rpx;" @click="show()"></icon>
				</view>
				<view class="main_pro" v-for="(pro, proindex) in item.service" :key="proindex">
					<view class="main_mes">
						<view class="main_name">{{ pro.name }}</view>
						<view class="main_num">￥{{ pro.price }}.00 x {{ pro.num }}</view>
					</view>
					<view class="main_price">￥{{ pro.price * pro.num }}.00</view>
				</view>
			</view>
			<view class="partners">
				<view class="partners_name">工时费</view>
				<view class="partners_price">￥100.00</view>
			</view>
			<view class="detail_total">
				<view class="total_text">总计</view>
				<view class="total_price">￥{{ total }}</view>
			</view>
		</view>
		<view class="comment_rate">
			<view class="rate">
				<view class="rate_title">综合评分</view>
				<uniRate :current="comprehensiveValue" :score="0.45" active='#EEAB68' :size="15" @change="comprehensive" />
				<view class="rate_text">{{ comprehensiveValue }}分</view>
			</view>
			<view class="rate">
				<view class="rate_title">店铺环境</view>
				<uniRate :current="shopValue" :score="0.45" active='#EEAB68' :size="15" @change="shop" />
				<view class="rate_text">{{ shopValue }}分</view>
			</view>
			<view class="rate">
				<view class="rate_title">技术能力</view>
				<uniRate :current="skillValue" :score="0.45" active='#EEAB68' :size="15" @change="skill" />
				<view class="rate_text">{{ skillValue }}分</view>
			</view>
			<view class="rate">
				<view class="rate_title">服务态度</view>
				<uniRate :current="serviceValue" :score="0.45" active='#EEAB68' :size="15" @change="service" />
				<view class="rate_text">{{ serviceValue }}分</view>
			</view>
		</view>
		<view class="comment_text"><textarea class="text" v-model="text" placeholder="请从多个角度描述门店服务" /></view>
		<view class="comment_upload">
			<view class="img_box" v-for="(item, index) in uploadImages" :key="index"><image class="image" :src="item" /></view>
			<van-uploader :after-read="onRead" accept="image/*" style="width: 178rpx;height:178rpx;"><image src="../../static/img/img/tab/tabbar05.png" style="width: 100%;height: 100%;" mode=""></image></van-uploader>
		</view>
		<view class="comment_submit">立即发布</view>
	</view>
</template>

<script>
// import { uniRate } from '@dcloudio/uni-ui';
import uniRate from  '../../components/rate/rate.vue'
export default {
	components: { uniRate },
	data() {
		return {
			comprehensiveValue: 0,
			shopValue: 0,
			skillValue: 0,
			serviceValue: 0,
			coupon: 200,
			timeprice: 100,
			total: 1000.0,
			uploadImages: [],
			text: '',
			proList: [
				{
					name: '服务项目',
					service: [
						{
							name: '项目一',
							price: 100,
							num: 1
						},
						{
							name: '项目二',
							price: 100,
							num: 2
						},
						{
							name: '项目三',
							price: 100,
							num: 3
						}
					]
				},
				{
					name: '配件商品',
					service: [
						{
							name: '配件一',
							price: '100',
							num: 1
						},
						{
							name: '配件二',
							price: '100',
							num: 1
						},
						{
							name: '配件三',
							price: '100',
							num: 1
						}
					]
				}
			]
		};
	},
	methods: {
		comprehensive(e) {
			console.log(e)
			this.comprehensiveValue = e.index;
		},
		shop(e) {
			this.shopValue = e.index;
		},
		skill(e) {
			this.skillValue = e.index;
		},
		service(e) {
			this.serviceValue = e.index;
		},
		onRead(file) {
			console.log(file);
			uni.chooseImage({
			    success: (chooseImageRes) => {
			        const tempFilePaths = chooseImageRes.tempFilePaths;
					console.log(chooseImageRes)
			    }
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	flex-direction: column;
	padding: 30rpx 20rpx;
	.comment_shop {
		display: flex;
		flex-direction: row;
		background-color: #333333;
		padding: 20rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.shop_name {
			color: #ffffff;
			font-size: 28rpx;
		}
	}
	.comment_detail {
		background-color: #333333;
		display: flex;
		flex-direction: column;
		padding: 0rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.detail_name {
			font-size: 28rpx;
			color: #ffffff;
			border-bottom: 1rpx solid #525252;
			padding: 20rpx 0rpx;
		}
		.detail_main {
			padding: 20rpx 0rpx;
			display: flex;
			flex-direction: column;
			.main_top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.main_title {
					color: $theme-color;
					font-size: 30rpx;
					margin-bottom: 30rpx;
				}
			}

			.main_pro {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 24rpx;
				margin-bottom: 20rpx;
				.main_mes {
					display: flex;
					flex-direction: column;
					.main_name {
						color: #ffffff;
					}
					.main_num {
						color: #7d7d7d;
						font-size: 20rpx;
					}
				}

				.main_price {
					color: $theme-color;
				}
			}
		}
		.partners {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			margin-bottom: 20rpx;
			.partners_name {
				color: $theme-color;
				font-size: 30rpx;
			}
			.partners_price {
				color: $theme-color;
				font-size: 24rpx;
			}
		}
		.detail_total {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 20rpx;
			.total_text {
				color: #ffffff;
				font-size: 30rpx;
			}
			.total_price {
				color: $theme-color;
				font-size: 24rpx;
			}
		}
	}
	.comment_rate {
		background-color: #333333;
		display: flex;
		flex-direction: column;
		padding: 30rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.rate {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 30rpx;
			padding: 10rpx 0rpx;
			.rate_title {
				color: #ffffff;
				margin-right: 20rpx;
			}
			.rate_text {
				color: $theme-color;
				margin-left: 20rpx;
			}
		}
	}
	.comment_text {
		display: flex;
		.text {
			background-color: #333333;
			padding: 30rpx;
			height: 200rpx;
			width: 100%;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			color: #ffffff;
		}
	}
	.comment_upload {
		background-color: #333333;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		padding: 30rpx 30rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		.img_box{
			width: 178rpx;
			height: 178rpx;
			margin-right: 16rpx;
			margin-bottom: 16rpx;
			.image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.comment_submit {
		height: 100rpx;
		background-color: #333333;
		color: #ffffff;
		font-size: 32rpx;
		text-align: center;
		line-height: 100rpx;
		border-radius: 10rpx;
	}
}
</style>
