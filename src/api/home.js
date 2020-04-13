import http from '@/utils/http'

// 获取 appID
export function getAppID() {
	return http({
		url: "/active/getAppId",
		method: "get",
	});
}
