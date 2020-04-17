import http from '../utils/http'

// 获取 appID
export function getAppID() {
	return http({
		url: "/active/getAppId",
		method: "get",
	});
}

export function getSignInfo() {
	return http({
		url: '/active/drink/signInfo?actId=h5SgInActivity',
		method: 'get'
	}) 
}