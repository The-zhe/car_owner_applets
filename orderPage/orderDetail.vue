<template>
	<view class="orderDetail">
		<view class="detail_main">
			<view class="unpay_main" v-if="type == 0"><unpay :mainList = "mainList"></unpay></view>
			<view class="unevaluate_main" v-else-if="type == 6"><unevaluate :mainList = "mainList"></unevaluate></view>
			<view class="ordercomplete" v-else-if="type == 3"><orderComplete :mainList = "mainList"></orderComplete></view>
			<view class="orderclose_main" v-else><orderclose :mainList = "mainList"></orderclose></view>
		</view>
	</view>
</template>

<script>
	import unpay from './orderDetails/unpay.vue';
	import unevaluate from './orderDetails/unEvaluate.vue';
	import orderclose from './orderDetails/orderClose.vue';
	import orderComplete from './orderDetails/orderComplete.vue'
	import {orderDetail} from '../apis/api.js'
	export default{
		components:{ unpay,unevaluate,orderclose },
		data(){
			return{
				type:'',
				orderId:'',
				mainList:null
			}
		},
		onLoad(option){
			console.log(option)
			this.type = option.type
			this.orderId = option.id
		},
		methods:{
			getOrderDetail(){
				orderDetail(this.orderId).then( res => {
					console.log(res)
					this.mainList = res.data
				}).catch( err => {
					console.log(err)
				})
			},
		},
		mounted() {
			this.getOrderDetail()
		}
	}
</script>

<style lang="scss" scoped>
</style>
