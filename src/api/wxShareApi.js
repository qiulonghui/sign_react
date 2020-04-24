import { getWxConfig } from './home'
export function wxShareInit() {
	const location = window.location
	const shareLink = location.href
	let url = location.href.split('#')[0]
	// url = encodeURIComponent(url)
	let imgUrl = (location.origin + location.pathname).replace('index.html', '')
	imgUrl = imgUrl + 'sharepic.jpg'
	getWxConfig(url).then(res => {
		const { appId, nonceStr, signature, timestamp } = res.data
		const wx = window.wx
		console.log(res.data)
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId, // 必填，公众号的唯一标识
			timestamp, // 必填，生成签名的时间戳
			nonceStr, // 必填，生成签名的随机串
			signature, // 必填，签名
			jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']  // 必填，需要使用的JS接口列表
		})
		wx.ready(() => {
			//需在用户可能点击分享按钮前就先调用
			wx.onMenuShareAppMessage({
				title: '和留言粉丝签到有礼', // 分享标题
				desc: '多种热门视频会员等你领取！', // 分享描述
				link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl, // 分享图标
				success: function () { // 2018 6月之后新版微信客户端，cancel回调和success回调合并，无法确定是否分享成功
					// 设置成功
					window._hmt.push(['_trackEvent', '分享成功', '分享成功', '分享成功'])
				},
			})

			wx.onMenuShareTimeline({
				title: '和留言粉丝签到有礼', // 分享标题
				link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl, // 分享图标
				success: function () {
					// 设置成功
					window._hmt.push(['_trackEvent', '分享成功', '分享成功', '分享成功'])
				},
			})
		})
		wx.error(function (err) {
			// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			console.log('wx config注入错误')
		})
	})
}

