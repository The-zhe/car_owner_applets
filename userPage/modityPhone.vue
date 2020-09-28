<template>
	<view>
		<view class="nickName">我的手机</view>
		<view class="shuru">
			<input v-model="mobilephone" placeholder="请输入您的手机" class="shuru-input" @input='inputEvent' :maxlength="11"/>
		</view>
		<view class="word-num">{{wordNum}}/11</view>
		<view class="fixed-btn">
			<view class="submit-btn" @click="submit">保存</view>
		</view>
	</view>
</template>

<script>
	import { phoneInfo } from '../apis/api.js'
	export default{
		data(){
			return{
				wordNum:11,
				mobilephone:'',
				dataForm:null,
				apiInfo:{
					userId : null,
					phone : null
				}
			}
		},
		methods:{
			inputEvent(e){
				this.wordNum=e.detail.value.length
			},
			getphone(){
				this.dataForm=uni.getStorageSync('userInfor')
				this.mobilephone = this.dataForm.mobilephone
			},
			submit(){
				this.dataForm.mobilephone = this.mobilephone
				uni.setStorageSync('userInfor',this.dataForm);
				this.apiInfo.userId = this.dataForm.userId
				this.apiInfo.phone = this.dataForm.mobilephone
				phoneInfo(this.apiInfo).then(res => {
					console.log(res)
				})
				
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			}
		},
		mounted(){
			this.getphone()
		}
	}
</script>

<style lang="scss" scoped>
	.nickName{
		padding:20rpx 30rpx;
		color:#fff;
		font-size:28rpx;
	}
	
	.shuru{
		width: 94%;
		margin:0 auto;
		padding-bottom:15rpx;
		border-bottom:2rpx solid $theme-color;
	}
	.word-num{
		font-size:24rpx;
		color:#fff;
		padding:20rpx 30rpx;
	}
	.shuru-input{
		font-size:28rpx;
		color:#fff;
	}
</style>
