<template>
	<view>
		<view class="click-heard">点击头像</view>
		<view class="infor">
			<navigator class="flex-c-between infor-list">
				<view>昵称</view>
				<view class="flex-c-center">
					爱吃草的咸鱼<text class="iconfont iconyoujiantou"></text>
				</view>
			</navigator>
			<view class="flex-c-between infor-list">
				<view>手机号码</view>
				<view class="flex-c-center">
					13989366603<text class="iconfont iconyoujiantou"></text>
				</view>
			</view>
			<view class="flex-c-between infor-list">
				<view>性别</view>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="flex-c-center">
						{{array[index]}}<text class="iconfont iconyoujiantou"></text>
					</view>
				</picker>

			</view>
			<view class="flex-c-between infor-list">
				<view>生日</view>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="flex-c-center">
						date<text class="iconfont iconyoujiantou"></text>
					</view>
				</picker>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				array: ['男', '女'],
				index: 0,
				date: currentDate
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style scoped lang="scss">
	.click-heard {
		color: $white-color;
		text-align: center;


	}

	.infor {
		color: $white-color;
		font-size: 28rpx;
		padding: 0 30rpx;

		.infor-list {
			padding: 12rpx 0;
		}
	}
</style>
