<template>
	<view class="addCard">
		<view class="car001" style="z-index: 1;top:30rpx">
			<image class="car01" src="../static/img/car01.png"></image>
		</view>
		<view class="car001" style="z-index: 2;top:64rpx">
			<image class="car02" src="../static/img/car02.png"></image>
		</view>
		<view class="car001" style="z-index: 3;top:78rpx">
			<image class="car03" src="../static/img/car03.png"></image>
			<view class="saomiao">扫描填写行驶证</view>
		</view>
        <view class="car002">
			<view class="flex-center xing">
				<view class="car-line"></view>
				<view class="shoudong">手动输入行驶证</view>
				<view class="car-line"></view>
			</view>
			<view class="carbox">
				<view class="cardbox-title">车牌号码</view>
				<view class="add-border add-padding">
					<plate @listenPlateChange="plateChange" :defaultPlate="plateNumber"></plate>
				</view>
				<view class="car-type flex-c-between">
					<text>车型</text>
					<view class="right-text">大众   宝来   2020款  1.4TSL  双离合</view>
				</view>
				<view class="car-type flex-c-between">
					<text>车辆识别代码</text>
					<view class="right-text">LSGJR52U85S110284</view>
				</view>
				<view class="car-type flex-c-between">
					<text>发动机号</text>
					<view class="flex-c-center">2466764K</view>
				</view>
				  <view style="height: 200rpx;"></view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		plate
	} from '@/components/plate/index.vue'
	export default {
		components: {
			plate
		},
		data() {
			return {
              plateNumber:['粤','S','8','8','8','8','H']
			}
		},
		methods:{
			plateChange(val){
				console.log(val);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/style/car.scss";
</style>
