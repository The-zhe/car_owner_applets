<template>
	<view>
		<view class="nickName">我的昵称</view>
		<view class="shuru">
			<input v-model="nickName" placeholder="请输入您的昵称" class="shuru-input" @input='inputEvent' :maxlength="20"/>
		</view>
		<view class="word-num">{{wordNum}}/20</view>
		<view class="fixed-btn">
			<view class="submit-btn" @click="submit">保存</view>
		</view>
	</view>
</template>

<script>
	import { editNickName } from '../apis/api.js'
	export default{
		data(){
			return{
				wordNum:0,
				nickName:'',
				dataForm:null,
				apiInfo:{
					userId : null,
					nickName : null
				}
			}
		},
		methods:{
			inputEvent(e){
				this.wordNum=e.detail.value.length
			},
			getNickName(){
				this.dataForm=uni.getStorageSync('userInfor')
				this.nickName = this.dataForm.nickName
			},
			submit(){
				this.dataForm.nickName = this.nickName
				uni.setStorageSync('userInfor',this.dataForm);
				this.apiInfo.userId = this.dataForm.userId
				this.apiInfo.nickName = this.dataForm.nickName
				editNickName(this.apiInfo).then(res => {
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
			this.getNickName()
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
