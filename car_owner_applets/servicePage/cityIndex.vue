<template>
	<view>
		<city-select
			@cityClick="cityClick"
			:formatName="formatName"
			:activeCity="activeCity"
			:hotCity="hotCity"
			:obtainCitys="obtainCitys"
			:isSearch="true"
			ref="citys"
		></city-select>
	</view>
</template>

<script>
import citys from '@/lib/utils/citys.js'
import citySelect from '@/components/city-select/city-select.vue'
export default {
	data() {
		return {
			//需要构建索引参数的名称（注意：传递的对象里面必须要有这个名称的参数）
			formatName: 'title',
			//当前城市
			activeCity: {
				id: 1,
				title: '宁波市'
			},
			//热门城市
			hotCity: [
				{
					id: 0,
					title: '宁波市'
				},
				{
					id: 1,
					title: '杭州市'
				}
			],
			//显示的城市数据
			obtainCitys: [
				// {
				// 	id: 0,
				// 	title: '南京'
				// },
				// {
				// 	id: 1,
				// 	title: '北京'
				// },
				// {
				// 	id: 2,
				// 	title: '天津'
				// },
				// {
				// 	id: 3,
				// 	title: '东京'
				// }
			],
			type:''
		}
	},
	components: {
		citySelect
	},
	onLoad(opt) {
		this.type=opt.type
		//动态更新数据
		setTimeout(() => {
			//修改数据格式
			this.formatName = 'cityName'
			//修改当前城市
			this.activeCity = {
				cityName: uni.getStorageSync('city').city,
				cityCode: 110100
			}
			//修改热门城市
			this.hotCity = [
				{
					cityName: '杭州市',
					cityCode: 110102
				},
				{
					cityName: '宁波市',
					cityCode: 110100
				}
			]
			//修改构建索引数据
			this.obtainCitys = citys
			uni.showToast({
				icon: 'none',
				title: '更新数据成功',
				// #ifdef MP-WEIXIN
				duration: 3000,
				// #endif
				mask: true
			})
		}, 1000)
		uni.setNavigationBarColor({
		    frontColor: '#000000',
		    backgroundColor: '#fff',
		})
	},
	methods: {
		cityClick(item) {
		   // console.log(item)
			if(this.type==1){
				// uni.switchTab({
				//         url:'/pages/index/indexNew?city='+item.city
				//     })
				uni.setStorageSync('indexCity',item)
			}else{
				uni.setStorageSync('RegionCity',item)
			}
			uni.navigateBack({
			    delta: 1
			});

            // if(item.cityName == '宁波市'){
            //     uni.switchTab({
            //         url:'/pages/index/index'
            //     })
            // }else{
            //     uni.showToast({
            //     	icon: 'none',
            //     	title: '当前选择城市暂无数据，请切换至宁波市',
            //     	mask: true
            //     })
            // }

		}
	}
}
</script>

<style></style>
