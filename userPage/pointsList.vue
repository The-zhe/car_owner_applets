<template>
	<view class="page">
		<view class="points" v-for="(integral,index) in integralList" :key="index">
			<view class="points-list  flex-c-between">
				<text>会员任务</text>
				<text>-15</text>
			</view>
			<view class="points-time">2020-06-24 18:59</view>
		</view>
	</view>
</template>

<script>
	import {getIntegralRecord} from '../apis/api.js'
	export default{
		data(){
			return{
				userInfo:null,
				integralList:[]
			}
		},
		methods:{
			getMember(){
				this.userInfo=uni.getStorageSync('userInfor')
			},
			integralRecord(){
				console.log(this.userInfo.userId)
				getIntegralRecord(this.userInfo.userId).then( res => {
					console.log(res)
					this.integralList = res.data
				})
			}
		},
		mounted() {
			this.getMember()
			this.integralRecord()
		}
	}
</script>

<style scoped lang="scss">
	.page{
		padding:0 30rpx;
	}
	.points{
		padding:20rpx 15rpx 10rpx 15rpx;
		border-bottom:2rpx solid #c59e6a;
		
	}
	.points-list{
		font-size:28rpx;
		color:#fff;
	}
	.points-time{
		font-size:24rpx;
		color:$white-color;
		margin-top:10rpx;
	}
</style>
