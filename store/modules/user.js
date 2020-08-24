const state = {
	userId:null,
	userData: null, // 用户数据
	updateInfoList: null, //待更新数据
	navigateInfoList: null, //待跳转数据
	addressInfo: null, // 用户地址
	fId: null, // 推荐上级用户
    ffId: null, // 推荐祖先用户
	tempAddressInfo: null, // 结算选择地址
	tempOrderInfo: {}, // 临时订单信息(结算页面显示用)
	tempEvaluateOrderItem: null, // 评价订单显示
	tempOrderDetailInfo: null, // 订单详情显示
	tmpDeliverInfo: null, // 快递信息显示
	Category1:null,//选择的分类
	Category2:null,//选择的分类
	Region1:null,//选择的地区
	Region2:null,//选择的地区
}

const mutations = {
	updateUserData(state, newVal) {
		state.userData = newVal
	},
	updateInfoList(state, info) {
		state.updateInfoList = info
	},
	updateNavigateList(state, info) {
		state.navigateInfoList = info
	},
	'UPDATA_CATEGORY_ONE'(state,newVal){
		state.Category1 = newVal
	},
	'UPDATA_CATEGORY_TWO'(state,newVal){
		state.Category2 = newVal
	},
	'UPDATA_REGION_ONE'(state,newVal){
		state.Region1 = newVal
	},
	'UPDATA_REGION_TWO'(state,newVal){
		state.Region2 = newVal
	},
	'UPDATE_ADDRESS_INFO'(state, newVal) {
		state.addressInfo = newVal
	},
    'UPDATE_FATHER_FID'(state, fId) {
        state.fId = fId
    },
	'UPDATE_TEMP_ORDER'(state, info) {
		state.tempOrderInfo = info
	},
	'UPDATE_TEMP_ADDRESS'(state, info) {
		state.tempAddressInfo = info
	},
	'UPDATE_TEMP_EVALUATE'(state, info) {
		state.tempEvaluateOrderItem = info
	},
	'UPDATE_TEMP_ORDERDETAIL'(state, info) {
		state.tempOrderDetailInfo = info
	},
	'UPDATE_TEMP_DELIVER'(state, info) {
		state.tmpDeliverInfo = info
	}
}

export default {
	state,
	mutations
}
