<template>
	<view class="prohibition">
		<view class="nav-top" :style="'height:' +  nav.height + 'px;' + 'padding-top:' + nav.top + 'px;padding-bottom:10rpx'">
			<view class="left" :style="'top:' + nav.top + 'px'">
				<view class="iconfont icon-xiaoxi">111</view>
			</view>
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

<style lang="scss">
	.nav-top {
		position: relative;
		display: flex;
		align-items: center;
		background: #fff;
		font-size: 26rpx;

		.left {
			float: left;
			position: absolute;
			width: max-content;
			height: max-content;
			top: 0;
			bottom: 0;
			left: 20rpx;
			margin: auto;

			.iconfont {
				color: #3C3C3C;
			}
		}

		.nav-top-text {
			padding-left: 80rpx;
		}
	}
</style>
