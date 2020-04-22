import http from '../utils/http'
import axios from 'axios'

export function auth() {
	return http({
		url:'/active/drink/authenbyphone?phone=13560497679',
		method: 'get'
	})
} 

// 获取 appID
export function getAppID() {
	return http({
		url: "/active/getAppId",
		method: "get",
	});
}

// 通过jssdk获取预签名preSign
export function getPreSign(appid) {
	const preSign = window.YDRZ.getSign(appid, '1.2');
	return preSign
}

// 后台获取真正的 sign 签名
export function getSignApi(preSign) {
	const params = {
		preSign
	}
	return http({
		url: '/active/getSign',
		method: 'get',
		params
	})
}

// jssdk 获取token和userInformation
export function getTokenInfo({
	version,
	appId,
	sign,
}) {
	const data = {
		version, // 接口版本号 （必填）
		appId, // 应用Id （必填）
		sign, // RSA加密后的sign（必填）
		openType: '1', // 移动取号接口填写1,三网取号接口填写0 （必填，联调时必须填写为1）
		expandParams: '', // 扩展参数  格式：参数名=值  多个时使用 | 分割（选填，联调环境只能模拟取号，联调时需填写phoneNum=188185*****  手机号可以随便填写，生产可不填）
		// isTest: '0' // 是否启用测试线地址（传0时为启用不为0或者不传时为不启用）
	}
	return new Promise(function (resolve, reject) {
		console.log(data)
		window.YDRZ.getTokenInfo({
			data,
			success: function (res) { //成功回调
				resolve(res)
			},
			error: function (err) { //错误回调
				reject(err)
			}
		});
	})
}

// 通过 token 和 userInformation 获取用户信息（4g登录）
export function getUserInfo({
	token,
	userInformation,
}) {
	const params = {
		token,
		userInformation,
		actId: 'signHlyVact',
		channel: 2417
	}
	return http({
		url: '/active/drink/getUserInfo',
		method: 'get',
		params
	})
}
/**********4G登录相关接口结束*********/

export function getSmsCode({ phone }) {
	const params = {
		phone,
		actId: 'signHlyVact'
	}
	return http({
		url: '/active/drink/sendSmsCode',
		method: 'get',
		params
	})
}

// 手机号登录 
export function phoneLogin({
	phone,
	code,
}) {
	const params = {
		phone,
		code,
		channel: 2417,
		actId: 'signHlyVact'
	}
	return http({
		url: '/active/drink/verifySmsCode',
		method: 'get',
		params
	})
}

export function getUserData() {
	return http({
		url: '/active/drink/hlyvSignInfo?actId=signHlyVact&channel=2417',
		method: 'get'
	}) 
}

export function updateDay() {
	return http({
		url: '/active/drink/hlyvSign?actId=signHlyVact',
		method: 'get'
	}) 
}

export function drawLottery(type) {
	return http({
		url: `/active/drink/hlyvSignlottery?actId=signHlyVact&bag=${type}`,
		method: 'get'
	})
}

export function setYdy(id) {
	return http({
		url: `/active/zsh/setvox?fileId=${id}&actId=signHlyVact`,
		method: 'get'
	})
}

// 获取微信签名参数
export function getWxConfig(shareUrl){
	return axios.get('/active/wechat/shareIndex',{
		params: {
			url:shareUrl,
			ts:new Date().getTime() 
		}
	})
}