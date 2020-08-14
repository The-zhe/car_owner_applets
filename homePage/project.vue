<template>
	<view>
		<view class="all-project">
			<uni-collapse>
				<uni-collapse-item :open="true" title='升级安装'>
					<view class="project-list">
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
					</view>
			
				</uni-collapse-item>
			</uni-collapse>
			<uni-collapse>
				<uni-collapse-item :open="true" title='升级安装'>
					<view class="project-list">
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
						<view class="flex-c-between size">
							<text>安装费</text>
							<text>¥100.00</text>
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>

	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default{
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data(){
			return{
			}
		}
	}
</script>

<style lang="scss" scoped>
	.all-project{
		background: #fff;
		width: 90%;
		border-radius: 20rpx;
		padding:0 20rpx;
		margin:20rpx auto;
	}
	.project-list{
		padding:0 12px;
		
	}
	.size{
		font-size:24rpx;
		color:#999;
		line-height: 60rpx;
		text:last-child{
			color:$theme-color
		}
	}
</style>
