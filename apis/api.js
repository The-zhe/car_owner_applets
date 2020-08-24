import Request from './utils/request.js'
// 请求地址
//export const ajaxUrl = 'http://192.168.1.155:8071/'
export const ajaxUrl = 'http://192.168.1.195:8073/'
export const imgUrl = 'https://yiliuapi.juzhentech.com/'

// export const ajaxUrl = 'http://localhost:4800/'
// export const imgUrl = 'http://localhost:4800/'

export const qiniu = {
	region: 'xiaoyema',
	tokenUrl: 'api/Common/Qiniu/AccessToken',
	uploadUrl: 'https://upload-z2.qiniup.com/',
	fileUrl: 'http://xiaoyemaimg.juzhentech.com/'
}


let request = new Request({
	name: 'api',
	baseUrl: ajaxUrl,
	freeUrls: ['api/ProductGoods/GetGoodsAttribute',
		'api/ProductGoods/GetGoodsEvaluateList',
		'api/Common/Qiniu/AccessToken'
	]
})


export let token = request.token

// 图片上传
export const UploadImgAjax = (path, {
	basePath
} = {
	basePath: 'api/upload/file'
}) => {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: ajaxUrl + basePath,
			name: 'file',
			filePath: path,
			formData: {
				path: 'uploadfile',
				file: path
			},
			success: function(res) {
				// 上传成功 处理数据
				resolve(res.data)
			},
			fail: function(res) {
				reject(res)
			}
		})
	})
}


export const GetQiniuUploadTokenAjax = (data, config) => {
	return request.get(qiniu.tokenUrl, data, config)
}

export const UploadQiniuImgAjax = (path) => {
	return new Promise(async (resolve, reject) => {
		const tokenResult = await GetQiniuUploadTokenAjax({}, {
			noError: true
		})
		const date = new Date()
		const _y = date.getFullYear()
		const _m = date.getMonth() + 1
		const _d = date.getDate()
		const name = `${qiniu.region}/${_y}${_m}${_d}/${Math.random().toString().slice(2)}`
		//console.log(tokenResult,'tokenResult.accessToken')
		const data = {
			token: tokenResult.data.accessToken,
			key: name,
			file: path
		}
		try {
			uni.uploadFile({
				url: qiniu.uploadUrl,
				name: 'file',
				filePath: path,
				formData: data,
				success: function(res) {
					// 上传成功 处理数据
					const data = JSON.parse(res.data)
					data.data = data.key
					resolve(JSON.stringify(data))
				},
				fail: function(res) {
					reject(res)
				}
			})
		} catch (error) {
			reject(error.message)
		}

	})
}
/* === 用户注册登录模块 START === */

// 注册
export const MemberRegisterAjax = (data, config) => {
	return request.post('api/Member/MemberRegister', data, config)
}
//用户信息
export const GetMemberAjax = (data, config) => {
	return request.get(`api/user/${data}`, data, config)
}
//油价查询
export const oilPrice = (data, config) => {
	return request.get('api/oilPrice', data, config)
}
//用户车辆列表
export const GetMemberCar = (data, config) => {
	return request.get(`car/user/${data}`, data, config)
}
//
export const findToken = (data, config) => {
	return request.get('token/find', data, config)
}
// 退出登录
export const MemberLoginOutAjax = (data, config) => {
	return request.post('api/Member/MemberLoginOut', data, config)
}
// 登录
export const MemberLoginAjax = (data, config) => {
	return request.post('wechat/wxapp/auth', data, config)
}
// 短信验证码
export const SendVerifyCodeAjax = (data, config) => {
	return request.post('api/Member/SendVerifyCode', data, config)
}
//首页banner
export const GetIndexSlideListAjax = (data, config) => {
	return request.post('api/Config/GetIndexSlideList', data, config)
}
//修改供应商产品
export const supplierGoodsPut = (data, config) => {
	return request.PUT('api/Supplier/Goods', data, config)
}
//删除供应商产品
export const supplierGoodsDelete = (data, config) => {
	return request.DELETE('api/Supplier/Goods', data, config)
}
//修改用户名
export const editNickName = (data,config) => {
	return request.PUT(`api/user/userNameInfo`,data,config)
}
//修改性别
export const editSex = (data,config) => {
	return request.PUT(`api/user/userSexInfo`,data,config)
}
//修改生日
export const editBirthday = (data,config) => {
	return request.PUT(`api/user/userBirthdayInfo`,data,config)
}
//用户积分记录
export const getIntegralRecord = (data,config) => {
	return request.get(`api/user/userintegral/${data}`,config)
}
//行驶证
export const drivingCard=(data,config)=>{
	return request.get('driving-license', data, config)
}
//上传图片获取签名
export const ossConfig=(data,config)=>{
	return request.get('oss/config', data, config)
}
//添加车辆信息
export const addCar=(data,config)=>{
	return request.post('car', data, config)
}
//获取车辆列表
export const CarList=(data,config)=>{
	return request.get(`car/user/${data}`, data, config)
}
//删除车辆
export const deleteCar = (data, config) => {
	return request.DELETE('api/user/info/car', data, config)
}
