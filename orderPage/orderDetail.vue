<template>
	<view class="orderDetail">
		<view class="detail_main">
			<view class="unpay_main" v-show="type == 1"><unpay></unpay></view>
			<view class="unevaluate_main" v-show="type == 2"><unevaluate></unevaluate></view>
			<view class="orderclose_main" v-show="type == 3"><orderclose></orderclose></view>
		</view>
	</view>
</template>

<script>
	import unpay from '../components/orderDetail/unpay.vue';
	import unevaluate from '../components/orderDetail/unEvaluate.vue';
	import orderclose from '../components/orderDetail/orderClose.vue'
	export default{
		components:{ unpay,unevaluate,orderclose },
		data(){
			return{
				type:'',
			}
		},
		onLoad(option){
			console.log(option)
			this.type = option.type
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
