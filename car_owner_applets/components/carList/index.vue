<template>
	<view class="notice">
	    <swiper vertical autoplay circular interval="3000" class="notice-swiper">
	        <swiper-item v-for="(item,index) in car" :key="index" class="notice-swiper-item">
				<image src="../../static/img/index/index01.png" class="notice-img"></image>
	            <view class="notice-news-item">{{item.content}}</view>
				<text class="car-label">{{item.label}}</text>
				<text class="car-label">{{item.label1}}</text>
	        </swiper-item>
	    </swiper>
		<text class="iconfont iconyoujiantou right-icon"></text>
	</view>
</template>

<script>
	export default{
		props:{
			car:{
				type: Array,
				default () {
					return []
				}
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.notice {
		width: 90%;
		background: #000000;
	    color: #fff;
		border-radius: 60rpx;
		height: 112rpx;
	    font-size: $font-size-base;
	    padding: 0 30rpx;
	    box-sizing: border-box;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    flex-wrap: nowrap;	
		margin:15rpx auto 0 auto;
		position: relative;
	    .notice-img {
	        width: 56rpx;
	        height: 56rpx;
	        margin-right: 20rpx;
	    }
	    .notice-swiper {
	        font-size: 28rpx;
	        height: 82rpx;
	        flex: 1;
	    }
	.car-label{
	  padding:3rpx 20rpx 4rpx 20rpx;
	  border-radius: 20rpx;
	  border:2rpx solid #EEAB68;
	  font-size:24rpx;
	  color:$theme-color;
	  margin-left:15rpx
	}
	.right-icon{
		position: absolute;
		top:30rpx;
		right:40rpx;
		color:$theme-color;
	    font-size:48rpx;
	}
	    .notice-swiper-item {
	        display: flex;
	        align-items: center;
			
	    }
	
	    .notice-news-item {
	        line-height: 28rpx;
	        white-space: nowrap;
	        overflow: hidden;
	        text-overflow: ellipsis;
	    }
	}
</style>
