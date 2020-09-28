<template>
	<view class="addCard">
		<view class="car001" style="z-index: 1;top:30rpx"><image class="car01" src="../static/img/car01.png"></image></view>
		<view v-if="carUrl == ''">
			<view class="car001" style="z-index: 2;top:64rpx"><image class="car02" src="../static/img/car02.png"></image></view>
			<view class="car001" style="z-index: 3;top:78rpx" @click="handleChooseImage">
				<image class="car03" src="../static/img/car03.png"></image>
				<view class="saomiao">扫描填写行驶证</view>
			</view>
		</view>
		<view class="car001" style="z-index: 2;top:64rpx" v-else><image :src="carUrl" class="car02"></image></view>

		<!-- 		<view class="car001" style="z-index: 99;top:78rpx;opacity: 0;">
			<ImgUpload v-model='carUrl' class='car001' style="z-index: 2;top:64rpx"></ImgUpload>
		</view> -->

		<view class="car002">
			<view class="flex-center xing">
				<view class="car-line"></view>
				<view class="shoudong">手动输入行驶证</view>
				<view class="car-line"></view>
			</view>
			<view class="carbox">
				<view class="cardbox-title">车牌号码</view>
				<view class="add-border add-padding"><plate @listenPlateChange="plateChange" :defaultPlate="plateNumber"></plate></view>
				<navigator url="/userPage/voucher/index" class="car-type flex-c-between">
					<text>车型</text>
					<view class="flex-c-center">
						<text class="carType" style="color:rgba(255,255,255,0.4)">{{carInfor.vehicle_type }}</text>
					</view>
				</navigator>
				<view class="car-type flex-c-between">
					<text>车辆识别代码</text>
					<view class="flex-c-center">
						<input placeholder="请输入完整车辆识别代码" class="input-type" placeholder-style="color:rgba(255,255,255,0.4)" v-model="carInfor.vin" />
						<!-- <text class="iconfont iconyoujiantou"></text> -->
					</view>
				</view>
				<view class="car-type flex-c-between">
					<text>发动机号</text>
					<view class="flex-c-center">
						<input placeholder="请输入完整发动机号" class="input-type" placeholder-style="color:rgba(255,255,255,0.4)" v-model="carInfor.engine_num" />
						<!-- <text class="iconfont iconyoujiantou"></text> -->
					</view>
				</view>
				<view class="car-type flex-c-between">
					<text>牌照颜色</text>
					<view class="flex-c-center">
						<input placeholder="请输入车身颜色" class="input-type" placeholder-style="color:rgba(255,255,255,0.4)" v-model="carInfor.carColor" />
					</view>
				</view>
				<view style="height: 200rpx;"></view>
			</view>
		</view>
		<view class="fixed-btn" style="z-index: 99"><view class="submit-btn" @click="saveCar">保存</view></view>
	</view>
</template>

<script>
import { plate } from '@/components/plate/index.vue';
import { uploadFile } from '@/utils/uploadFile.js';
import { formatTime } from '@/utils/util.js';
import { drivingCard, ossConfig, addCar } from '@/apis/api';
export default {
	components: {
		plate
	},
	data() {
		const currentDate = this.getDate({
			format: true
		});
		const currentDate1 = this.getDate1({
			format: true
		});
		return {
			plateNumber: [],
			carUrl: '',
			carInfor: {
				vin: 'LFMAYACC6K0033333',
				licensePlate: '浙B888888',
				licenseHolder: '小球球',
				vehicle_type: '请选择>',
				userId: uni.getStorageSync('userId')
			},
			carData: {
				addr: '浙江省宁波市鄞州区福明街道江南模石周家公寓2',
				config_str: '',
				engine_num: 'K970947',
				issue_date: '20191018',
				model: '丰田牌TV7121E6',
				owner: '邱丽丽',
				plate_num: '浙B6P52K',
				register_date: '20191018',
				request_id: '20200820164229_c413d570099fac0c2214337b19dc4184',
				success: true,
				use_character: '非营运',
				vehicle_type: '小型轿车',
				vin: 'LFMAYACC6K0031936'
			},
			date: currentDate,
			latestMaintenanceDate: currentDate1,
			registrationDate: currentDate1
		};
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		},
		startDate1() {
			return this.getDate1('start');
		},
		endDate1() {
			return this.getDate1('end');
		}
	},
	created() {
		const that = this;
		let arr2 = Array.from(this.carData.plate_num);
		that.plateNumber = arr2;
		console.log(that.plateNumber, 'arr1');
	},
	onLoad(option) {
		if(option.carName){
			console.log('option',option)
			this.carInfor.vehicle_type =option.carName + option.name + option.cc
			console.log(this.carInfor.vehicle_type)
		}
	},
	methods: {
		async saveCar() {
			if (this.carInfor.vin == '') {
				uni.showToast({
					title: '请上传行驶证',
					icon: 'none'
				});
				return;
			}
			await addCar(this.carInfor);
		},
		bindDateChange(val) {
			this.carInfor.carYearType = val.detail.value;
		},
		bindDateChange1(val) {
			this.carInfor.latestMaintenanceDate = val.detail.value;
		},
		bindDateChange2(val) {
			this.carInfor.registrationDate = val.detail.value;
		},
		plateChange(val) {
			console.log(val);
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
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}`;
		},
		getDate1(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		handleChooseImage() {
			const that = this;
			wx.chooseImage({
				count: 1, // 默认最多一次选择9张图
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
					var tempFilePaths = res.tempFilePaths;
					var nowTime = formatTime(new Date());

					//支持多图上传
					for (var i = 0; i < res.tempFilePaths.length; i++) {
						//显示消息提示框
						wx.showLoading({
							title: '上传中' + (i + 1) + '/' + res.tempFilePaths.length,
							mask: true
						});

						//上传图片
						//你的域名下的/cbb文件下的/当前年月日文件下的/图片.png
						//图片路径可自行修改
						uploadFile(
							res.tempFilePaths[i],
							'cbb/' + nowTime + '/',
							function(result) {
								that.carUrl = result;
								//	console.log("======上传成功图片地址为：", result);
								wx.hideLoading();
								drivingCard({ side: 'face', url: that.carUrl }).then(res1 => {
									that.carInfor = res1.data;
									let arr2 = Array.from(res1.data.plate_num);
									that.plateNumber = arr2;
									//console.log(res1,'res1111')
								});
							},
							function(result) {
								//console.log("======上传失败======", result);
								wx.hideLoading();
							}
						);
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/style/car.scss';

.car-xingshi {
}
.carType{
	display: contents;
	width: 435rpx;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-all;
	float: right;
}
</style>
