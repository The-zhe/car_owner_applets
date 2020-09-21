<template>
	<view class="submit">
		<view v-if="carList" class="havecar">
			<view class="carlist">
				<view class="car">
					<view class="car_detail">
						<view class="car_name">一汽大众宝来</view>
						<view class="car_msg">大众  宝来  2020款  1.4TSI  双离合  28双离合双离合双离合双离合双离合</view>
					</view>
					<view class="img">
						<image :src="img"></image>
					</view>
				</view>
				<view class="car">
					<view class="car_detail">
						<view class="car_name">一汽大众宝来</view>
						<view class="car_msg">大众  宝来  2020款  1.4TSI  双离合  28双离合双离合双离合双离合双离合</view>
					</view>
					<view class="img">
						<image :src="img"></image>
					</view>
				</view>
				<view class="car">
					<view class="car_detail">
						<view class="car_name">一汽大众宝来</view>
						<view class="car_msg">大众  宝来  2020款  1.4TSI  双离合  28双离合双离合双离合双离合双离合</view>
					</view>
					<view class="img">
						<image :src="img"></image>
					</view>
				</view>
				<view class="addcar">添加爱车</view>
			</view>
		</view>
		<view v-else class="havecar">
			<view class="tip">
				<image src="../static/img/addcar.png"></image>
			</view>
			<view class="text1">暂未获取到你的爱车</view>
			<view class="text2">请添加完整车型信息，以便我们为您提供更多车主服务。</view>
			<view class="btn">添加爱车</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userInfo:null,
				carList:null,
				getImg:require('../static/img/get.png'),
				ungetImg: require('../static/img/unget.png'),
				img: require('../static/img/unget.png'),
			}
		},
		methods:{
			getCarList(){
				this.userInfo=uni.getStorageSync('userInfor')
				this.carList = this.userInfo.carInfoTaEntityList
			}
		},
		mounted() {
			this.getCarList()
		}
	}
</script>

<style scoped lang="scss">
	.submit{
		display: flex;
		flex-direction: column;
		// padding: 0rpx 20rpx;
		.havecar{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.tip{
				height: 208rpx;
				width: 208rpx;
				margin-top: 100rpx;
				margin: 10rpx 0rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.text1{
				margin: 10rpx 0rpx;
				font-size: 32rpx;
				color: #EEAB68;
			}
			.text2{
				margin: 10rpx 0rpx;
				font-size: 28rpx;
				color: #FFFFFF;
				opacity: 0.6;
			}
			.btn{
				position: fixed;
				bottom: 68rpx;
				width: 700rpx;
				height: 92rpx;
				background-color: #EEAB68;
				font-size: 32rpx;
				color: #000000;
				text-align: center;
				line-height: 92rpx;
				border-radius: 10rpx;
			}
			.carlist{
				display: flex;
				flex-direction: column;
				width: 100%;
				.car{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					// width: 100%;
					padding:20rpx 30rpx;
					background-color: #353439;
					border-bottom: 2rpx solid #000000;
					.car_detail{
						display: flex;
						flex-direction: column;
						.car_name{
							font-size: 32rpx;
							color: #FFFFFF;
							margin: 5rpx 0rpx;
						}
						.car_msg{
							width: 300rpx;
							font-size: 24rpx;
							color: #9A9A9A;
							opacity: 1;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							margin: 5rpx 0rpx;
						}
					}
					.img{
						width: 44rpx;
						height: 44rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
				.addcar{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding:20rpx 30rpx;
					background-color: #353439;
					font-size: 24rpx;
					color: #9A9A9A;
				}
			}
		}
	}
</style>
