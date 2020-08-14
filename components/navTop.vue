<template>
	<view>
		<view class="nav_top" :style="{height:barHeight.allHeight+'px','background-color':hasBgc}">
			<view class="status-bar" :style="{height:barHeight.statusBarHeight+'px'}"></view>
			<view class="topContent">
				<view v-if="isBack" class="goBack" @click="goBack(backUrl)" hover-class="bgBlack999">
				<!-- 	<image :src="'../static/icon_back_'+backColor+'.png'" mode=""></image> -->
				</view>
				<view class="title" :style="{color:color}">{{title}}</view>
			</view>
		</view>
		<view v-if="isHeight" class="marginBox" :style="{height:barHeight.allHeight+'px'}"></view>
	</view>
</template>
 
<script>
	import {mapState} from 'vuex'
	
	export default {
		props:{
			title:{
				type:String,
				default:'XXX'
			},
			hasBgc:{   //背景色
				type:String,
				default:'#5FCBAD'
			},
			color:{ //字体颜色
				type:String,
				default:'#fff;'
			},
			isBack:{   //是否有返回箭头
				type: Boolean,
				default:false
			},
			backColor:{ //回退箭头颜色
				type:String,
				default:'white'
			},
			isHeight:{   //头部撑开高度
				type:Boolean,
				default:true
			},
			isNavBack:{   //固定返回前面的页面
				type:Boolean,
				default:true
			},
			backUrl:{    //返回到那个页面
				type:String,
				default:'index'
			},
			backNum:{   //返回几个页面
				type:Number,
				default:1
			}
		},
		computed:{
			...mapState(['barHeight'])
		},
		data() {
			return {
			};
		},
		methods:{
			goBack(url){
				this.$store.state.moreStepBack = false
				if(this.isNavBack){
					const that = this
					uni.navigateBack({
						delta:that.backNum
					})
				}else{
					var isUrl = `/pages/${url}/${url}`
					console.log(isUrl)
					uni.switchTab({
						url: isUrl
					})
				}
			}
		},
		created() {
			if(!this.barHeight.allHeight||!this.barHeight.statusBarHeight){
				this.isBarHeight999().then((isTemp)=>{
					this.$store.state.barHeight = isTemp
				})
			}
		}
	}
</script>
 
<style lang="scss">
.nav_top{
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 900;
		display: flex;
		flex-direction: column;
		background-color: transparent;
		&.bgColor{
			background-color: #5FCBAD;
		}
		.topContent{
			width: 100vw;
			height: 100upx;
			position: relative;
			.goBack{
				position: absolute;
				top: 0;
				left: 0;
				width: 10vw;
				height: 100upx;
				display: flex;
				align-items: center;
				padding-left: 20upx;
				box-sizing: border-box;
				image{
					width: 40upx;
					height: 42upx;
				}
			}
			.title{
				text-align: center;
				width: 100%;
				height: 100%;
				line-height: 100upx;
				font-size: 40upx;
				
			}
		}
	}
</style>
