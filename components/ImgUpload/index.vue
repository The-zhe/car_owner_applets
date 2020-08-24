<template>
	<view class="upload-container">
		<view class="upload-wrap" @click="handleChooseImage" v-if="!mult">
			<image v-if="src" :src="src" mode="aspectFit" @load="imgLoaded(0, $event)"></image>
			<view v-if='!src' class="upload-tip flex flex-direction c-center j-center">
				<!-- <text>+</text> -->
                <i class="iconfont iconicon_upload1x add-icon"></i>
                <text class="font-size-24">{{uploadText}}</text>
			</view>
		</view>
		<view class="mult-upload-wrap" v-else>
			<view
			class="upload-wrap"
			v-for="(item, index) in src"
			:key='index'
			@click="handleChooseImageMult(index)">
				<image v-if="item" :src="item" mode="aspectFit" @load="imgLoaded(index, $event)"></image>
				<view v-if='!item' class="upload-tip  flex flex-direction c-center j-center">
                    <i class="iconfont iconicon_upload1x add-icon"></i>
					<text class="font-size-24">{{uploadText}}</text>
				</view>
				<image v-if="item" @click.stop="onDel(index)" class="ic-close" src="/static/img/ic-close.png" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		mult: { // 多图上传
			type: Boolean,
			default: false
		},
		imgMaxNum: {
			type: Number,
			default: 0
		},
		imgMinNum: {
			type: Number,
			default: 0
		},
		uploadText:{
			type: String,
			default: '添加照片'
		}
	},
	watch: {
		value(val) {
			this.setSrc(val)
		}
	},
	data() {
		return {
			src: ''
		}
	},
	mounted() {
		this.setSrc(this.value)
	},
	methods: {
		imgLoaded(index, e) {
			const detail = e.detail
			const params = {
				t: 'image',
				r: (detail.width / detail.height).toFixed(2)
			}
			const path = this.mult ? this.src[index] : this.src
			if (path.indexOf('/tmp') !== -1) {
				this.$store.commit('addFilename', {
					key: path,
					value: params
				})
			}
		},
		onDel(index) {
			this.src.splice(index, 1)
		},
		// 多图
		handleChooseImageMult(index) {
			let src = this.src
			let isReplace = index !== src.length - 1
			uni.chooseImage({
				count: isReplace ? 1 : 9,
				success: res => {
					let tempFilePaths = res.tempFilePaths
					if (isReplace) {
						src[index] = tempFilePaths[0]
					} else {
						src.splice(index, 1, ...tempFilePaths)
					}
					this.$emit('input', src.filter(item => item).join(','))
				}
			})
		},
		handleChooseImage() {
			uni.chooseImage({
				count: 1,
				success: res => {
					this.src = res.tempFilePaths[0]
					this.$emit('input', this.src)
				}
			})
		},
		setSrc(val) {
			if (this.mult) {
				if (!val) {
					this.src = ['']
				} else {
					let src = val.split(',')
					src.push('')
					this.src = src
				}
			} else {
				this.src = val
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.mult-upload-wrap {
	font-size: 0;
	.upload-wrap {
		display: inline-block;
		vertical-align: top;
		/*margin-bottom: 30rpx;*/
		/*margin-left: 30rpx;*/
		&:nth-child(3n + 1) {
			margin-left: 0;
		}
	}
}
.add-icon{
	font-size:48rpx;
	color:#999999
}
.upload-wrap {
	width: 300rpx;
	height: 300rpx;
	background-color: #F5F5F5;
	position: relative;
	margin-right:20rpx;
	&>image {
		width: 100%;
		height: 100%;
	}
	&>.upload-tip {
		text-align: center;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 1px dashed;
		color: #EFEFEF;
		background-color: #fff;
		text {
			font-size: 28rpx;
            color: #999999;
			margin-top: 4rpx;
		}
        .iconicon_add{
            color: #999999;
            font-size: 100rpx;
            padding-bottom: 10rpx;
        }
	}
	.ic-close {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		z-index: 1;
		width: 40rpx;
		height: 40rpx;
	}
}
</style>
