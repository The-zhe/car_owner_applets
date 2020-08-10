<template>
	<view class="my-tabs-view" :class="[isFixed?'my-tabs-fixed':'my-tabs-relative',unlined?'my-unlined':'']" :style="{height:height+'rpx',padding:`0 ${padding}rpx`,background:bgColor,top:isFixed?top+'px':'auto',borderTopLeftRadius:hasborder+'rpx',borderTopRightRadius:hasborder+'rpx'}">
		<view v-for="(item,index) in tabs" :key="index" class="my-tabs-item"  @tap.stop="swichTabs(index)">
			<view class="my-tabs-title" :class="{'my-tabs-active':currentIndex==index,'my-tabs-disabled':item.disabled}" :style="{color:currentIndex==index?selectedColor:color,fontSize:size+'rpx',lineHeight:size+'rpx',fontWeight:bold && currentIndex==index?'bold':'normal'}">{{item.name}}</view>
		</view>
		<view class="my-tabs-slider" :style="{transform:'translateX('+scrollLeft+'px)',width:sliderWidth+'rpx',height:
	sliderHeight+'rpx',borderRadius:sliderRadius,bottom:bottom,background:sliderBgColor,marginBottom:bottom=='50%'?('-'+sliderHeight/2+'rpx'):0}"></view>
	</view>
</template>

<script>
	export default {
		name: "myTabs",
		props: {
			//标签页
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			//rpx
			height: {
				type: Number,
				default: 80
			},
			//rpx 只对左右padding起作用，上下为0
			padding: {
				type: Number,
				default: 30
			},
			//背景色
			bgColor: {
				type: String,
				default: "#FFFFFF"
			},
			//是否固定
			isFixed: {
				type: Boolean,
				default: false
			},
			//px
			top: {
				type: Number
					// #ifndef H5
					,
				default: 0
					// #endif
					// #ifdef H5
					,
				default: 44
				// #endif
			},
			//是否去掉底部线条
			unlined: {
				type: Boolean,
				default: false
			},
			hasborder:{
				type:Number,
				default: 0
			},
			//当前选项卡
			currentTab: {
				type: Number,
				default: 0
			},
			//滑块宽度
			sliderWidth: {
				type: Number,
				default: 68
			},
			//滑块高度
			sliderHeight: {
				type: Number,
				default: 6
			},
			//滑块背景颜色
			sliderBgColor: {
				type: String,
				default: "#5677fc"
			},
			sliderRadius:{
				type: String,
				default: "50rpx"
			},
			//滑块bottom
			bottom: {
				type: String,
				default: "0"
			},
			//标签页宽度
			itemWidth: {
				type: String,
				default: "25%"
			},
			//字体颜色
			color: {
				type: String,
				default: "#666"
			},
			//选中后字体颜色
			selectedColor: {
				type: String,
				default: "#5677fc"
			},
			//字体大小
			size: {
				type: Number,
				default: 28
			},
			//选中后 是否加粗 ，未选中则无效
			bold: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			currentTab(newVal) {
				this.currentIndex=newVal
				this.checkCor();
			},
			tabs(newVal){
				this.checkCor();
			}
		},
		onReady() {
			this.currentIndex = this.currentTab
			this.checkCor();
		},
		created() {
			setTimeout(() => {
				// 高度自适应
				uni.getSystemInfo({
					success: (res) => {
						this.winWidth = res.windowWidth;
						
						this.checkCor()
					}
				});
				
			}, 50);

		},
		data() {
			return {
				winWidth: 0,
				scrollLeft: 0,
				currentIndex:0,
				tabwith:0
			};
		},
		methods: {
			checkCor: function() {
				let tabsNum = this.tabs.length
				let padding = this.winWidth / 750 * this.padding
				this.tabwith=(this.winWidth/this.tabs.length)*2
				let width = this.winWidth - padding * 2
				let left = (width / tabsNum - (this.winWidth / 750 * this.sliderWidth)) / 2 + padding
				let scrollLeft = left
				if (this.currentIndex > 0) {
					scrollLeft = scrollLeft + (width / tabsNum) * this.currentIndex
				}
				this.scrollLeft = scrollLeft
			},
			// 点击标题切换当前页时改变样式
			swichTabs: function(index) {
				let item = this.tabs[index]
				if (item && item.disabled) return;
				if (this.currentIndex == index) {
					return false;
				} else {
					this.$emit("change", {
						index: Number(index)
					})
				}
			}
		}
	}
</script>

<style>
	.my-tabs-view {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		z-index: 9999;
	}

	.my-tabs-relative {
		position: relative;
	}

	.my-tabs-fixed {
		position: fixed;
		left: 0;
	}

	.my-tabs-fixed::before,
	.my-tabs-relative::before {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.my-unlined::before {
		border-bottom: 0 !important
	}

	.my-tabs-item {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.my-tabs-disabled {
		opacity: .6;
	}

	.my-tabs-title {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 2;
	}

	.my-tabs-active {
		transition: all 0.15s ease-in-out;
	}

	.my-tabs-slider {
		position: absolute;
		left: 0;
		transition: all 0.15s ease-in-out;
		z-index: 0;
		transform: translateZ(0);
	}
</style>
