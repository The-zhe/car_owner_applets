<template>
	<view class="note">
		<view class="note_title">备注</view>
		<textarea placeholder="请输入备注" v-model="text"></textarea>
		<view class="note_need">
			<view class="need">
				<view class="need_title">猜你需要</view>
				<icon class="iconfont iconB"></icon>
			</view>
			<view class="need_text" v-for="(item,index) in needList" :key="index" @click="getNeed(item,index)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				text:'',
				needList:['能否上门取车','能否上','能否上门取车可以不'],
			}
		},
		methods:{
			getNeed(item,index){
				this.text = this.text + item
			}
		}
	}
</script>

<style scoped lang="scss">
	.note{
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #000000;
		.note_title{
			font-size: 28rpx;
			color: #EEAB68;
			padding: 20rpx 30rpx;
			background-color: #202020;
			margin-bottom: 10rpx;
		}
		textarea{
			box-sizing: border-box;
			background-color:#202020 ;
			color: #636266;
			font-size: 28rpx;
			width: 100%;
			padding: 30rpx 50rpx;
		}
		.note_need{
			padding: 20rpx 30rpx;
			.need{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.need_title{
					font-size: 24rpx;
					color: #FFFFFF;
					opacity: 0.5;
				}
				icon{
					color: $theme-color;
					font-size: 30rpx;
				}
			}
			.need_text{
				display: inline-block;
				background-color:#202020 ;
				padding: 10rpx 40rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				border-radius: 40rpx;
				margin:10rpx
			}
		}
	}
</style>
