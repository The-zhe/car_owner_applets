<template>
	<view>
		<view class="coupon flex-c-between">
			<view class="coupon-left">
				<view class="coupon-price">￥20元抵扣券</view>
				<view class="coupon-use">可用门店，全网通用</view>
				<view class="coupon-time">2020.07.07-2020.07.21</view>
			</view>
			<view class="coupon-right">
				<view class="coupon-num">2000积分</view>
				<view class="coupon-btn">兑换</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style  lang="scss" scoped>
	.coupon{
		width: 94%;
		height: 200rpx;
		margin:20rpx auto;
		background: url('../../static/img/youhui.png') no-repeat center center;
	   background-size:100%;
	   .coupon-left{
		   margin-left:40rpx;
		   color:$sub-theme-color;
		   .coupon-price{
			   font-size:34rpx;
			    margin-bottom:15rpx;
		   }
		   .coupon-use{
			   font-size:24rpx;
			   margin-bottom:10rpx;
		   }
		   .coupon-time{
			   font-size:22rpx;
		   }
	   }
	   .coupon-right{
		   width: 30%;
		   height: 186rpx;
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   flex-direction: column;
		   .coupon-num{
			   font-size:28rpx;
			   color:#1B1A18;
			   margin-bottom:15rpx;
			   font-weight: bold;
		   }
		   .coupon-btn{
			   width: 138rpx;
			   height: 64rpx;
			   background:rgba(255,255,255,0.3);
			   line-height: 64rpx;
			   text-align: center;
			   font-size:32rpx;
			   color:#1B1A18;
			   border-radius: 15rpx;
			   font-weight: bold;
		   }
		   
	   }
	}
</style>
