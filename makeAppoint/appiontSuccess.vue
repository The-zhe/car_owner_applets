<template>
	<view class="appiontFail">
		<view class="appiont_top">
			<view class="appiont_left">
				<view class="left_shop">
					<icon class="iconfont icondianpu"></icon>
					<view class="text">百慕大汽修厂</view>
				</view>
				<view class="left_temp">暑期倾清让利套餐</view>
			</view>
			<view class="appiont_right">
				<icon class="iconfont icondingwei3"></icon>
				<view class="distance">2.0km</view>
			</view>
		</view>
		<view v-if="isover == '0'" class="appiont_state">
			<view class="state_type">预约成功</view>
			<view class="state_msg">
				请于 <view class="text">2020-08-24 上午</view>驾驶<view class="text">浙B32658</view>的爱车前往<view class="text">百慕大汽修厂</view>参与活动。 
			</view>
		</view>
		<view v-if="isover == '2'" class="appiont_state">
			<view class="state_type">预约过期</view>
			<view class="state_msg">预约时段已过。</view>
		</view>
		<view v-if="isover == '1'" class="appiont_state">
			<view class="state_type">预约中</view>
			<view class="state_msg">等待商家确认。</view>
		</view>
		<view class="appiont_title">预约信息</view>
		<view class="appiont_msg">
			<view class="msg_car">车牌 &nbsp;&nbsp;&nbsp;&nbsp; 浙B32623</view>
			<view class="msg_car">时间 &nbsp;&nbsp;&nbsp;&nbsp; 2020-08-24 &nbsp;&nbsp;&nbsp; 上午</view>
			<view class="msg_car">门店 &nbsp;&nbsp;&nbsp;&nbsp; 百慕大修理厂(印象城店)</view>
			<view class="msg_car">地址 &nbsp;&nbsp;&nbsp;&nbsp; 鄞州区钱湖北路100号</view>
			<button v-if="isover != '2'" class="btn" type="default" @click="open">取消预约</button>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="base" :content="msg" :duration="2000" cancel="残忍拒绝" submit="暂不" @close="close()" @confirm="confirm()"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
export default{
	components:{uniPopupDialog},
	data(){
		return{
			msg:"是否取消预约",
			isover:'0', //0预约成功 1预约中 2预约过期
		}
	},
	methods:{
		open() {
			this.$refs.popup.open();
		},
		close(done) {
			done()
		},
		confirm(done) {
			done()
		},
	}
}
</script>

<style lang="scss" scoped>
.appiontFail{
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #000000;
	.appiont_top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #242328;
		padding: 30rpx 30rpx 50rpx 30rpx;
		margin-bottom: 30rpx;
		.appiont_left{
			display: flex;
			flex-direction: column;
			font-size: 24rpx;
			color: #ffffff;
			// align-items: center;
			// justify-content: center;
			.left_shop{
				display: flex;
				flex-direction: row;
				align-items: center;
				opacity: 0.8;
				margin-bottom: 10rpx;
				icon {
					font-size: 48rpx;
				}
			}
			.left_temp{
				color: #FFFFFF;
				font-size: 42rpx;
			}
		}
		.appiont_right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			icon{
				color: $theme-color;
				font-size: 42rpx;
			}
			.distance{
				color: #FFFFFF;
				opacity: 0.8;
			}
		}
	}
	.appiont_state{
		display: flex;
		flex-direction: column;
		padding: 30rpx 30rpx 30rpx 30rpx;
		background-color: #EEAB68;
		margin-bottom: 30rpx;
		.state_type{
			font-size: 36rpx;
			color: #000000;
			margin-bottom: 20rpx;
			font-weight: 600;
		}
		.state_msg{
			font-size: 28rpx;
			color: #000000;
			opacity: 0.8;
			.text{
				display: contents;
				font-weight: bold;
			}
		}
	}
	.appiont_title{
		background-color: #242328;
		padding: 20rpx 30rpx 20rpx 30rpx;
		color: #EEAB68;
		font-size: 28rpx;
		margin-bottom: 5rpx;
	}
	.appiont_msg{
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #242328;
		padding: 20rpx 30rpx 20rpx 30rpx;
		font-size: 28rpx;
		.msg_car{
			margin: 10rpx 0rpx;
			color: #FFFFFF;
			opacity: 0.6;
		}
		.btn{
			position: absolute;
			width: 652rpx;
			left: 0;
			right: 0;
			margin: auto; 
			bottom: 150rpx;
			box-sizing: border-box;
			color: #EEAB68;
			border: 2rpx solid #EEAB68;
			background-color: #242328;
		}
	}
}
</style>
