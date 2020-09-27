<template>
	<view class="phone">
		<view class="tel">
			<view class="tel_temp">
				<view class="tel_img"><image src="../../static/img/tel.png" mode=""></image></view>
				<input class="telnum" type="text" v-model="dataFrom.phone" placeholder="手机号" />
			</view>
			<view :class="[send == false ? 'btn' : 'send']" @click="getCode">{{ tipC }}{{ time }}</view>
		</view>
		<view class="code">
			<view class="tel_img"><image src="../../static/img/password.png" mode=""></image></view>
			<input class="codenum" type="text" v-model="dataFrom.code" placeholder="验证码" />
		</view>
		<view class="submit" @click="submit">确认绑定</view>
	</view>
</template>

<script>
import { SendVerifyCode, userPhone } from '../../apis/api.js';
import { verify } from '../../lib/utils/verify.js';
export default {
	data() {
		return {
			tipC: '获取验证码',
			tip: '重新获取',
			sendTip: '已发送验证码',
			send: false,
			time: '',
			timer: null,
			verCode: '',
			tel: null,
			dataFrom: {
				code: '',
				phone: '',
				userId: ''
			}
		};
	},
	methods: {
		getUserId() {
			this.dataFrom.userId = uni.getStorageSync('userId');
		},
		getCode() {
			//获取验证码
			if (verify('mobile', this.dataFrom.phone)) {
				SendVerifyCode(this.dataFrom.phone).then(res => {
					console.log(res)
					this.verCode = res.data;
				});
				this.tel = this.dataFrom.phone;
				this.time = 60;
				this.send = true;
				this.tipC = this.sendTip;
				clearInterval(this.timer);
				this.timer = setInterval(() => {
					this.time--;
					if (this.time == 0) {
						console.log(this.time);
						clearInterval(this.timer);
						(this.time = ''), (this.timer = null);
						this.send = false;
						this.tipC = this.tip;
					}
				}, 1000);
			} else {
				uni.showToast({
					title: '请输入正确的号码',
					icon: 'none'
				});
			}
		},
		submit() {
			//提交
			if (this.dataFrom.code === this.verCode && this.dataFrom.phone === this.tel) {
				userPhone(this.dataFrom).then(res => {
					console.log('phone', res);
					uni.showToast({
						title: '绑定成功',
						icon: 'success'
					});
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						});
					}, 500);
				});
			} else {
				uni.showToast({
					title: '请输入正确的验证码和手机号',
					icon: 'none'
				});
			}
		}
	},
	mounted() {
		this.getUserId();
	}
};
</script>

<style lang="scss" scoped>
.phone {
	display: flex;
	flex-direction: column;
	padding: 90rpx 40rpx;
	.tel {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15rpx 0rpx;
		border-bottom: 2rpx solid #353439;
		.tel_temp {
			display: flex;
			flex-direction: row;
			.telnum {
				color: #d2d2d3;
			}
		}
		.btn {
			padding: 10rpx 18rpx;
			font-size: 28rpx;
			color: #242328;
			background-color: $theme-color;
			border-radius: 8rpx;
			float: right;
		}
		.send {
			padding: 10rpx 18rpx;
			font-size: 28rpx;
			color: #f1f1f1;
			background-color: #808080;
			border-radius: 8rpx;
			float: right;
			pointer-events: none;
			cursor: default;
		}
	}
	.code {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 15rpx 0rpx;
		border-bottom: 2rpx solid #353439;
		.codenum {
			color: #d2d2d3;
		}
	}
	.submit {
		margin-top: 100rpx;
		border-radius: 10rpx;
		background-color: #eeab68;
		padding: 30rpx 0rpx;
		color: #000000;
		font-size: 32rpx;
		text-align: center;
	}
}
.tel_img {
	width: 48rpx;
	height: 48rpx;
	margin-right: 20rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
</style>
