import Request from './utils/request.js'
// 请求地址
export const ajaxUrl = 'https://xiaoyemaapi.juzhentech.com/'
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
export const GetMemberMobileAjax = (data, config) => {
	return request.post('api/Member/SaveMemberMobile', data, config)
}

// 登录
export const MemberLoginInAjax = (data, config) => {
	return request.post('api/Connect/AccessToken', data, config)
}
// 获取用户模型
export const GetMemberAjax = (data, config) => {
	return request.get('api/Connect/UserInfo', data, config)
}
export const SaveMemberInfoAjax = (data, config) => {
	return request.post('api/Member/SaveMemberInfo', data, config)
}
// 退出登录
export const MemberLoginOutAjax = (data, config) => {
	return request.post('api/Member/MemberLoginOut', data, config)
}

// 短信验证码
export const SendVerifyCodeAjax = (data, config) => {
	return request.post('api/Member/SendVerifyCode', data, config)
}
//首页banner
export const GetIndexSlideListAjax = (data, config) => {
	return request.post('api/Config/GetIndexSlideList', data, config)
}
/* === 商品模块 END === */
/* ===  商品兑换模块 START === */
//发布帖子
export const SubmitOrderAjax = (data, config) => {
	return request.post('api/Forum/Subjects', data, config)
}
//修改帖子
export const SubjectsPutAjax = (data, config) => {
	return request.PUT('api/Forum/Subjects', data, config)
}
//删除帖子
export const SubjectsDeleteAjax = (data, config) => {
	return request.DELETE('api/Forum/Subjects', data, config)
}
//获取帖子详情
export const SubjectsGetAjax = (data, config) => {
	return request.get(`api/Forum/Subjects/${data}`, data, config)
}
//创建订单
export const CreateOrderAjax = (data, config) => {
	return request.post('api/Order/CreateOrder', data, config)
}

//发起支付
export const InitiatePayOrderAjax = (data, config) => {
	return request.post('api/Order/InitiatePayOrder', data, config)
}
//******************************************新接口*********************************************************//
//产品管理
export const GoodsAjax = (data, config) => {
	return request.post('api/Product/Goods', data, config)
}
//banner
export const BannersAjax = (data, config) => {
	return request.get('api/Product/Banners', data, config)
}
//产品详情
export const goodsInforAjax = (data, config) => {
	return request.get(`api/Product/Goods/${data}`, data, config)
}
//供应商详情
export const SupplierInfoAjax = (data, config) => {
	return request.get(`api/Supplier/Info/${data}`, data, config)
}
//产品规格
export const SpecsAjax = (data, config) => {
	return request.get('api/Product/Goods/Specs', data, config)
}
//品牌列表
export const BrandsAjax = (data, config) => {
	return request.get('api/Product/Brands', data, config)
}
//优质商家列表
export const SuppliersAjax = (data, config) => {
	return request.get('api/Product/Suppliers', data, config)
}
//获取产品类目
export const allCategoriesAjax = (data, config) => {
	return request.get('api/Product/Categories', data, config)
}
//申请成为供应商
export const SupplierAppliesAjax = (data, config) => {
	return request.post('api/Supplier/Applies', data, config)
}
//修改供应商
export const AppliesAjax = (data, config) => {
	return request.PUT('api/Supplier/Applies', data, config)
}
//获取申请供应商记录
export const ApplieslistAjax = (data, config) => {
	return request.get('api/Supplier/Applies', data, config)
}
//供应商地址
export const RegionsAjax = (data, config) => {
	return request.get('api/Supplier/Regions', data, config)
}
//帖子子类目
export const CategoriesAjax = (data, config) => {
	return request.get('api/Forum/Subjects/Categories', data, config)
}
//发布帖子
export const postSubjectsAjax = (data, config) => {
	return request.get('api/Forum/Subjects', data, config)
}
//获取帖子列表
export const SubjectsAjax = (data, config) => {
	return request.get('api/Forum/Subjects', data, config)
}
//帖子详情
export const SubjectsInforAjax = (data, config) => {
	return request.get(`api/Forum/Subjects/${data}`, data, config)
}
//帖子评论列表
export const getCommentsAjax = (data, config) => {
	return request.get('api/Forum/Subjects/Comments', data, config)
}
//发布帖子评论
export const postCommentsAjax = (data, config) => {
	return request.post('api/Forum/Subjects/Comments', data, config)
}
//点赞帖子
export const LikesAjax = (data, config) => {
	return request.post('api/Forum/Subjects/Likes', data, config)
}
//获取供应商店铺下的分类
export const shopCategoriesAjax = (data, config) => {
	return request.get(`api/Product/Supplier/Categories/${data}`, data, config)
}
//关注店铺
export const shopcollectAjax = (data, config) => {
	return request.post('api/Supplier/Collections/Shop', data, config)
}
//通过供应商id获取供应商发布的帖子
export const SubjectsByIdAjax = (data, config) => {
	return request.get('api/Supplier/SubjectsById', data, config)
}
//获取供应商信息
export const handleSupplierInfoAjax = (data, config) => {
	return request.get('api/Supplier/Info', data, config)
}
//获取供应商收藏的店铺
export const CollectionShopAjax = (data, config) => {
	return request.get('api/Supplier/Collection/Shop', data, config)
}
//获取供应商点赞记录
export const CollectionLikesAjax = (data, config) => {
	return request.get('api/Supplier/Subjects/Likes', data, config)
}
//获取供应商收藏商品
export const CollectionProducAjax = (data, config) => {
	return request.get('api/Supplier/Collection/Product', data, config)
}
//获取供应商评论列表
export const CollectionCommentsAjax = (data, config) => {
	return request.get('api/Supplier/Subjects/Comments', data, config)
}

//获取供应商配置
export const supplierSettingsAjax = (data, config) => {
	return request.get('api/Supplier/Settings', data, config)
}
//修改供应商配置
export const supplierSettingsPut = (data, config) => {
	return request.PUT('api/Supplier/Settings', data, config)
}
//店铺统计
export const supplierReportAjax = (data, config) => {
	return request.get('api/Supplier/Report', data, config)
}
//获取供应商发布的帖子列表
export const supplierSubjectsAjax = (data, config) => {
	return request.get('api/Supplier/Subjects', data, config)
}
//获取供应商的评论
export const supplierCommentAjax = (data, config) => {
	return request.get('api/Supplier/Subjects/Comments', data, config)
}
//获取供应商产品类目列表
export const supplierGoodsCategoriesAjax = (data, config) => {
	return request.get('api/Supplier/Goods/Categories', data, config)
}
//创建供应商产品类目列表
export const supplierGoodsCategoriesPost = (data, config) => {
	return request.post('api/Supplier/Goods/Categories', data, config)
}
//修改供应商产品类目列表
export const supplierGoodsCategoriesPut = (data, config) => {
	return request.PUT('api/Supplier/Goods/Categories', data, config)
}
//删除供应商产品类目列表
export const supplierGoodsCategoriesDelete = (data, config) => {
	return request.DELETE('api/Supplier/Goods/Categories', data, config)
}
//获取供应商产品列表
export const supplierGoodsAjax = (data, config) => {
	return request.get('api/Supplier/Goods', data, config)
}
//创建供应商产品
export const supplierGoodsPost = (data, config) => {
	return request.post('api/Supplier/Goods', data, config)
}
//修改供应商产品
export const supplierGoodsPut = (data, config) => {
	return request.PUT('api/Supplier/Goods', data, config)
}
//删除供应商产品
export const supplierGoodsDelete = (data, config) => {
	return request.DELETE('api/Supplier/Goods', data, config)
}
//获取供应商产品类目
export const supplierCategories = (data, config) => {
	return request.get(`api/Product/Supplier/Categories/${data}`, data, config)
}
//子账号列表
export const SubUsersAjax = (data, config) => {
	return request.get('api/Supplier/SubUsers', data, config)
}
//子账号列表
export const SubUserspPostAjax = (data, config) => {
	return request.post('api/Supplier/SubUsers', data, config)
}
//子账号列表
export const SubUsersDeleteAjax = (data, config) => {
	return request.DELETE('api/Supplier/SubUsers', data, config)
}
//获取最大账户数
export const MaxCountAjax = (data, config) => {
	return request.get('api/Supplier/SubUsers/MaxCount', data, config)
}
//修改商品的供应商分类id，移动产品的分类
export const SubUsersGoodsCategoryIdPut = (data, config) => {
	return request.PUT('api/Supplier/Goods/CategoryId', data, config)
}
//收藏商品
export const CollectionsPostAjax = (data, config) => {
	return request.post('api/Product/Collections', data, config)
}
//品牌认证
export const supplierBrandAppliesAjax = (data, config) => {
	return request.post('api/Supplier/Brand/Applies', data, config)
}
//移除供应商商品类目id
export const supplierGoodsCategoryIdRemove = (data, config) => {
	return request.PUT('api/Supplier/Goods/CategoryId/Remove', data, config)
}
//品牌认证
export const ReplyCommentsAjax = (data, config) => {
	return request.get('api/Supplier/Subjects/ReplyComments', data, config)
}
//举报店铺
export const AccusationAjax = (data, config) => {
	return request.post('api/Supplier/Accusation', data, config)
}
//记录用户应用次数
export const ApplicationBrowse = (data, config) => {
	return request.post('api/Common/ApplicationBrowse', data, {
		noError: true
	})
}
//首页数据
export const ApplicationBrowseAjax = (data, config) => {
	return request.get('api/Common/ApplicationBrowse', data, config)
}
//修改分类排序
export const OrderByAjax = (data, config) => {
	return request.PUT('api/Supplier/Goods/Categories/OrderBy', data, config)
}
//供应商申请状态
export const StateAjax = (data, config) => {
	return request.get('api/Supplier/Applies/State', data, config)
}
//创建商品规格
export const specPostAjax = (data, config) => {
	return request.post('api/Supplier/Goods/Specs', data, config)
}
//修改商品规格
export const specPutAjax = (data, config) => {
	return request.PUT('api/Supplier/Goods/Specs', data, config)
}
