<template>
	<view class="container">
		<!-- <list-index v-if="addressBook.length" :dataList="addressBook" @click="chooseEvent"></list-index> -->
		<list-index :options="addressBook" :show-select="false" @click="chooseEvent" />
		<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
			<scroll-view :scroll-top="0" scroll-y="true" :style="{ height: winHeight + 'px' }">
				<block v-for="(list, idx) in vehicle" :key="idx">
					<view class="vehicle-list-item">
						<!-- <view v-if="list.data && list.data.length" :id="list.letter" class="vehicle-list-item-title">{{ list.letter }}</view> -->
						<view v-if="list.data && list.data.length" class="uni-list">
							<view v-for="(item, index) in list.data" :key="index" class="vehicle-list-item-contect" hover-class="uni-list-item--hover" @click="chooseVehicle(item)">
								<view class="uni-list-item__content">{{ item.name }}</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<view></view>
		</uni-drawer>
	</view>
</template>

<script>
import { carBrands, addressBook } from '../../data/allBrands.js';
import { carBrand, carType, crawlerCar } from '../../apis/api.js';
import listIndex from '@/components/list-index/list-index';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	data() {
		return {
			title: 'Hello',
			brands: [],
			showRigth: false,
			vehicle: [],
			select_path: [],
			winHeight: 0,
			carBrandList: [],
			userinfo: null
		};
	},
	onLoad() {
		// 全局监听完选择完成
		uni.$on('vechice_computed', e => {
			this.select_path.computed = true;
			this.select_path.detail = typeof e === 'string' ? e : '';
			uni.clearStorageSync();
			console.debug(this.select_path);
		});
	},
	onUnload() {
		// 移除监听事件
		uni.$off('vechice_computed');
	},
	created() {
		let winHeight = uni.getSystemInfoSync().windowHeight;
		this.winHeight = winHeight;
		// let _obj = []
		// _obj.push({'letter':'TOP','data':[]});
		// carBrands.HotBrand.filter(item=>{
		// 	var _data = item['Brand'].split(' - ');
		// 	_obj[0].data.push({'brand':item['Brand'],'name':_data[1],'img':item['ImageUrl'],'md5':item['md5']})
		// 	console.log(item.name)
		// 	return item.name = _data[0];
		// })
		// console.log(carBrands.HotBrand)
		// carBrands.Brand.filter(item=>{
		// 	var _data = item['Brand'].split(' - ');
		// 	var _index = _obj.findIndex(_item =>{
		// 		return _item.letter == _data[0] ? true :false;
		// 	})
		// 	if (-1 == _index){
		// 		_obj.push({'letter':_data[0],'data':[{'brand':item['Brand'],'name':_data[1],'img':item['ImageUrl'],'md5':item['md5']}]})
		// 	}else{
		// 		_obj[_index].data.push({'brand':item['Brand'],'name':_data[1],'img':item['ImageUrl'],'md5':item['md5']})

		// 	}
		// })
		// addressBook.list=_obj;
	},
	mounted() {
		this.getCarBrands();
	},

	computed: {
		addressBook() {
			console.log('computed');
			console.log('addressBook.list', addressBook.list);
			return addressBook.list.filter(item => {
				return item.data.length > 0;
			});
		}
	},
	components: {
		listIndex,
		uniDrawer
	},
	methods: {
		//获取车辆品牌
		getCarBrands() {
			carBrand().then(res => {
				console.log(res.data);
				this.carBrandList = res.data;
				let _obj = [];
				_obj.push({ letter: 'TOP', data: [] });
				this.carBrandList.heat.filter(item => {
					_obj[0].data.push({ id: item['id'], name: item['name'], img: item['img'], ini: item['ini'] });
					return item;
				});
				this.carBrandList.letter.filter(item => {
					// var _data = item['Brand'].split(' - ');
					var _index = _obj.findIndex(_item => {
						return _item.letter == item.ini ? true : false;
					});
					if (-1 == _index) {
						_obj.push({ letter: item.ini, data: [{ id: item['id'], name: item['name'], img: item['img'] }] });
					} else {
						_obj[_index].data.push({ id: item['id'], name: item['name'], img: item['img'] });
					}
				});
				addressBook.list = _obj;
			});
		},
		//选择车辆
		chooseVehicle(data) {
			console.log('chooseVehicle', data);
			crawlerCar(data.id).then(res => {
				console.log(res);
				uni.setStorageSync('vehice_storage', res.data);
				this.showRigth = false;
				if (Object.keys(res.data).length == 0) {
					return uni.$emit('vechice_computed', this.select_path);
				}

				console.log('chooseVehicle111');
				uni.navigateTo({
					url: '/userPage/voucher/vechice?name=' + data.name
				});
				console.log('chooseVehicle1112');
			});
			// let url = ''
			// uni.removeStorageSync('vehice_storage');
			// url =  'http://nb-car-brand.nbnat.com/'+this.select_path.brand_id+'/'+data.VehicleId+'.js';
			// this.select_path.vehicle_id = data.VehicleId
			// this.select_path.vehicle_name = data.name
			// uni.request({
			// 	url: url,
			// 	success: (res) => {
			// 		uni.setStorageSync('vehice_storage', res.data);
			// 		this.showRigth = false
			// 		/*
			// 		数据里包含最多三级数据 [排量,年份,款式]
			// 		如果返回为数据长度为0则没有下级数据
			// 		*/
			// 		if(Object.keys(res.data).length == 0){
			// 			return uni.$emit('vechice_computed',this.select_path)
			// 		}

			// 		uni.navigateTo({
			// 		    url: 'vechice'
			// 		});

			// 	}
			// })
		},
		// 选择品牌
		chooseEvent(data) {
			console.log(data.data.id);
			carType(data.data.id).then(res => {
				console.log(res, 'cartype');
				let _obj = [];
				this.showRigth = true;
				res.data.filter(item => {
					var _index = _obj.findIndex(_item => {
						return _item.letter == item['name'];
					});
					if (-1 == _index) {
						_obj.push({ letter: item['name'], data: [{ id: item['id'], name: item['name'] }] });
					} else {
						_obj[_index].data.push({ id: item['id'], name: item['name'] });
					}
				});
				this.vehicle = _obj;
				console.log(this.vehicle);
			});
			// this.vehicle = this.select_path = []
			// this.select_path.computed = false
			// this.select_path.brand_name = data.data.name
			// this.select_path.brand_id = data.data.md5
			// let _obj = []
			// let url =  'http://nb-car-brand.nbnat.com/'+data.data.md5+'/Vehicle.js';
			// uni.request({
			// 	url: url,
			// 	success: (res) => {
			// 		this.showRigth = true;
			// 		res.data.filter(item=>{
			// 			var _index = _obj.findIndex(_item =>{
			// 				return _item.letter == item['BrandType'];
			// 			})

			// 			if (-1 == _index){
			// 				_obj.push({'letter':item['BrandType'],'data':[{'VehicleId':item['VehicleId'],'name':item['CarName']}]})
			// 			}else{
			// 				_obj[_index].data.push({'VehicleId':item['VehicleId'],'name':item['CarName']})

			// 			}
			// 		})
			// 		this.vehicle=_obj;
			// 	}
			// })
		},
		closeDrawer(e) {
			this.showRigth = false;
		}
	}
};
</script>
<style>
.vehicle-list-item-title {
	padding: 24upx 30upx;
	line-height: 1.5;
	background-color: #f7f7f7;
	font-size: 32upx;
}

.vehicle-list-item-contect {
	font-size: 32upx;
	padding: 24upx 30upx;
	width: 100%;
	box-sizing: border-box;
	flex: 1;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-data: center;
	border-bottom: 1rpx solid #eee;
}
</style>
