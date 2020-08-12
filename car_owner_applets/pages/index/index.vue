<template>
	<view class="prohibition">
		<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<view class="iconfont iconsaoyisao"></view>
			<view class="iconfont icondingwei margin-left"></view>
			<view class="nav-top-text">宁波保险科技产业园</view>
		</view>
		<view>
			<view></view>
		</view>
	</view>

</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		components: {
			navTop
		},
		data() {
			return {
				nav: {
					top: 0,
					height: 0
				}
			}
		},
		created() {
			this.nav.top = this.$store.state.system.heardBar.top
			this.nav.height = this.$store.state.system.heardBar.height
		}
	}
</script>

<style lang="scss" scoped>
	.nav-top {
		position: relative;
		display: flex;
		align-items: center;
		background: #242328;
		font-size: 26rpx;
		padding-left:30rpx;
		.iconsaoyisao {
			color: #fff;
			font-size:38rpx;
		}
        .margin-left{
			margin-left:15rpx;
			margin-right:15rpx;
			color: #fff;
			font-size:38rpx;
		}
		.nav-top-text {
			color:#fff;
			padding-left:0 !important
		}
	}
</style>
