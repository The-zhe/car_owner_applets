import {
    GetMemberAjax,
	ApplicationBrowse,
    token
} from './api'

// token 获取用户模型
function getUserInfoByToken() {
    return new Promise((resolve, reject) => {
        GetMemberAjax({}, {
            noError: true
        }).then(res => {
            if (res.errMsg == 'request:ok') {
                resolve({
                    error: null,
                    data: res.data
                })
            } else {
                reject(res.errMsg)
            }
        })
    })
}

// jscode 获取用户模型
function getUserInfoByJsCode() {
    return new Promise((resolve, reject) => {
        uni.login({
            success: res => {
                GetMemberAjax({
                    jsCode: res.code
                }, {
                    noError: true
                }).then(res => {
                    let result = res.data
                    if (result.result) {
                        token.setValue(result.data.token)
                        resolve({
                            error: null,
                            data: result.data
                        })
                    } else {
                        token.remove()
                        resolve({
                            error: true,
                            data: result.message
                        })
                    }
                })
            }
        })
    })
}

// 获取用户模型
function getUserInfo() {
	return new Promise((resolve, reject) => {
		getUserInfoByToken().then(res => {
			if (!res.error) {
				resolve(res.data)
			}
		}).catch(err => {
		    reject(err)
		})
	})
}

function getBrowse() {
    return new Promise((resolve, reject) => {
        ApplicationBrowse({}, {
            noError: true
        }).then(res => {
            if (res.errMsg == 'request:ok') {
                resolve({
                    error: null,
                    data: res.data
                })
            } else {
                reject(res.errMsg)
            }
        })
    })
}
module.exports = {
    getUserInfo: getUserInfo,
	ApplicationBrowse:ApplicationBrowse
}
