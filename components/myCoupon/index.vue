<template>
	<view>
		<view class="coupon flex-c-between">
			<view class="coupon-left">
				<view class="coupon-price">阳光保险洗车券</view>
				<view class="coupon-use">可用门店，全网通用</view>
				<view class="coupon-time">2020.07.07-2020.07.21</view>
			</view>
			<view class="coupon-right">
				<view class="coupon-shop coupon-margin">适用商家</view>
				<view class="coupon-shop">立即使用</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style  lang="scss" scoped>
	.coupon{
		width: 94%;
		height: 198rpx;
		margin:20rpx auto;
		background: url('../../static/img/coupon.png') no-repeat center center;
	   background-size:100%;
	   .coupon-left{
		   margin-left:40rpx;
		   color:$white-color;
		   .coupon-price{
			   font-size:32rpx;
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
		   width: 28%;
		   height: 198rpx;
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   flex-direction: column;
		 .coupon-shop{
			 width: 154rpx;
			 height: 60rpx;
			 line-height: 58rpx;
			 border-radius: 34rpx;
			 color:$theme-color;
			 font-size:24rpx;
			 border:2rpx solid $theme-color;
			 text-align: center;
		 }
		 .coupon-margin{
			 margin-bottom:15rpx;
		 }
		   
	   }
	}
</style>
