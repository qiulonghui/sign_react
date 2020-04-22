export function setIsSubs(value) {
	// isSubs 是否订阅公众号
	sessionStorage.setItem('isSubs', value)
}

export function getIsSubs() {
	const value = sessionStorage.getItem('isSubs')
	return JSON.parse(value)

}

export function setIsBound(value) {
	// isBound 手机是绑定公众号
	sessionStorage.setItem('isBound', value)
}

export function getIsBound() {
	const value = sessionStorage.getItem('isBound')
	return JSON.parse(value)
} 