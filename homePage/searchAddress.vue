<template>
	<view>
		<!--<view class="search flex-c-between">
			 <view class="search-left flex-c-center">
				<text class="theme-color margin-left">宁波市</text>
				<text class="iconfont iconxiajiantou theme-color"></text>
				<view class="search-line"></view>
				<text class="iconfont iconsousuo sousou"></text>
				<input placeholder="请输入地址"  class="search-input"/>
			</view>
			<view class="right-text">搜索</view> -->
			<!-- <iframe id="mapPage" width="100%" height="100%" frameborder=0
			    src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=AFOBZ-SVR3X-ZHN46-TWOZH-JWZSQ-KUBGG key&referer=亲车吧">
			</iframe> 
			
		</view>-->
	</view>
	<!-- <web-view src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=AFOBZ-SVR3X-ZHN46-TWOZH-JWZSQ-KUBGG key&referer=亲车吧"></web-view> -->
</template>

<script>
	// var QQMapWX = require('@/lib/qqmap-wx-jssdk.js');
	// var qqmapsdk;
	// export default{
	// 	data(){
	// 		return{
				
	// 		}
	// 	}
	// }
	 // window.addEventListener('message', function(event) {
	 //        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
	 //        var loc = event.data;
	 //        if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
	 //          console.log('location', loc);
	 //        }
	 //    }, false);
</script>

<style lang="scss" scoped>
	.search{
		padding:30rpx 30rpx 20rpx 30rpx;
		.search-left{
			width: 87%;
			background: #353439;
			border-radius: 40rpx;
			height: 68rpx;
			position: relative;
			.margin-left{
				margin:0 18rpx 0 20rpx;
			}
			.sousou{
				color:#767677;
				margin-right:10rpx;
			}
			.search-input{
				color:#fff;
			}
		}
		.theme-color{
			color:$theme-color;
			font-size:24rpx;
		}
		.search-line{
			width: 2rpx;
			height: 34rpx;
			background: #59585B;
			margin:15rpx;
		}
		.right-text{
			color:$theme-color
		}
	}
</style>
