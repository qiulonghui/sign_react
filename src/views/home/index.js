import React, { Component } from 'react';
import { HomeWrapper, TopWrapper, MainWrapper, AwardWrapper, AwardItem } from './style'
import { awardTypes, awardOptions } from './options'
import { formatTime } from '../../utils/util'
import { auth, getUserData, getAppID, getPreSign, getSignApi, getTokenInfo, updateDay, drawLottery } from '../../api/home.js'
import {wxShareInit} from '../../api/wxShareApi'
import { setIsSubs, setIsBound, getIsBound } from '../../utils/sessionStorage'
import DrawPrize from './component/DrawPrize'
import showRuleModal from './component/RuleModal'
import showBindPhoneModal from './component/BindPhoneModal'
import showTextTipModal from '../../common/TextTipModal'
import showMyAwardModal from './component/MyAwardModal'
import showDirectBindModal from './component/DirectBindModal'
import showAwardInfoModal from './component/AwardInfoModal'
import showYdySetModal from './component/YdySetModal'

// const DrawPrize = React.lazy(/* webpackPrefetch: true */() => import('./component/DrawPrize'));

const computedMyAwardList = function (awards) {
	const list = awards.map(award => {
		for (const item of awardOptions) {
			if (item.id === award.prizeType) {
				const vox = award.vox || null
				return {
					...item,
					date: formatTime(award.time),
					vox
				}
			}
		}
	})
	return list
}

const handleShowAwardContent = function (item) {
	// 展示中奖内容
	if(item.name === '和留言语音应答语') { 
		showYdySetModal(item)
		return 
	}
	showAwardInfoModal(item)
}

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			totalDay: 0, // 天数
			score: 0,
			smallLuckyBag: 0, //  0未抽奖，1已抽奖
			bigLuckyBag: 0,
			myAwardList: []
		}
	}

	async componentDidMount() {
		await auth()
		this.pageInitCheck()
		wxShareInit()
	}

	getDirLoginToken = () => {
		// 获取一键登录的token
		getAppID() // 获取appid
			.then(res => {
				this.appid = res.data
				const preSign = getPreSign(this.appid, '1.2') // 获取preSign
				return getSignApi(preSign) // 获取sign 签名
			})
			.then(res => {
				const sign = res.data
				const data = {
					version: '1.2',
					appId: this.appid,
					sign
				}
				return getTokenInfo(data) // 获取token
			})
			.then(res => {
				console.log('一键登录的token获取成功')
				console.log(res)
				const directLoginProps = {
					token: res.token,
					userInformation: res.userInformation
				}
				React.$LoadingClear()
				showDirectBindModal(directLoginProps)
			})
			.catch(err => {
				console.log('一键登录token获取失败', err)
				React.$LoadingClear()
				showBindPhoneModal()
			})
	}

	pageInitCheck = () => {
		getUserData().then(res => {
			React.$LoadingClear()
			setIsSubs(true)
			setIsBound(true)
			const { integral, totalDay, smallLuckyBag, bigLuckyBag, awards } = res.data
			const myAwardList = computedMyAwardList(awards)
			this.setState({
				score: integral,
				totalDay,
				smallLuckyBag,
				bigLuckyBag,
				myAwardList
			})
		}).catch(res => {
			const { code, msg } = res
			if (code === '403') {// 未关注公众号
				setIsSubs(false)
				this.showSubscribeTip()
			} else if (code === '406') {// 手机未绑定公众号
				setIsBound(false)
				this.getDirLoginToken()
			}
			else {
				React.$Toast(msg)
			}
		})
	}

	handleSignIn = () => {
		// 签到
		if (!getIsBound()) {
			// 未绑定手机号
			this.getDirLoginToken() // 调用一键绑定操作
			return
		}
		updateDay().then(res => {
			React.$LoadingClear()
			const { signValue, totalDay, integral } = res.data

			const modalOptions = {
				title: "提示",
				content: `签到成功,获得 ${signValue} 言值`
			}
			showTextTipModal(modalOptions)
			
			this.setState({
				score: integral,
				totalDay
			})
		}).catch(res => {
			const { msg } = res
			React.$Toast(msg)
		})
		window._hmt.push(['_trackEvent', '点击签到', '点击签到', '点击签到'])
	}

	handleDrawLottery = (type) => {
		// 抽奖
		if (!getIsBound()) {
			// 未绑定手机号
			this.getDirLoginToken() // 调用一键绑定操作
			return
		}

		drawLottery(type).then(res => {
			React.$LoadingClear()
			const { data } = res
			const { integral, smallLuckyBag, bigLuckyBag, awards } = data
			const myAwardList = computedMyAwardList(awards)
			const currentIndex = myAwardList.length-1
			const curAwardItem = myAwardList[currentIndex]
			console.log(myAwardList)
			handleShowAwardContent(curAwardItem)

			this.setState({
				score: integral,
				smallLuckyBag,
				bigLuckyBag,
				myAwardList
			})
		}).catch(res => {
			const { msg } = res
			React.$Toast(msg)
		})
	}

	handleMyAwardClick = () => {
		if (this.state.myAwardList.length === 0) {
			React.$Toast('暂无中奖记录')
			return
		}
		showMyAwardModal(this.state.myAwardList,handleShowAwardContent)
	}

	showSubscribeTip = () => {
		const modalOptions = {
			title: "提示",
			content: "关注和留言微信公众号后参与活动",
			allowClose: false,
			qrCode: true
		}
		showTextTipModal(modalOptions)
	}

	render() {
		return (
			<HomeWrapper>
				<TopWrapper>
					<img className="logo" src={require('../../assets/logo.png')} alt="" />
					<img className="banner-pic" src={require('../../assets/banner.png')} alt=""></img>
					<div className="rule-btn" onClick={showRuleModal}></div>
				</TopWrapper>
				<MainWrapper>
					<div className="sign-btn" onClick={this.handleSignIn}></div>
					<div className="my-btn" onClick={this.handleMyAwardClick}></div>
					<div className="text">
						<div className="text-left">
							<div className="m-txt">本月已签到<span className="day"> {this.state.totalDay} </span>天</div>
							<div className="sub-txt">每天签到获得言值</div>
						</div>
						<div className="text-right">
							<div className="m-txt"><span className="count">{this.state.score}</span></div>
							<div className="sub-txt">当前言值</div>
						</div>
					</div>
					<DrawPrize
						score={this.state.score}
						smallLuckyBag={this.state.smallLuckyBag}
						bigLuckyBag={this.state.bigLuckyBag}
						drawLottery={this.handleDrawLottery}
					/>
				</MainWrapper>
				<AwardWrapper>
					<div className="award-container">
						{
							awardTypes.map(item => {
								return <AwardItem key={item.id} awardImg={item.imageUrl}></AwardItem>
							})
						}
					</div>
				</AwardWrapper>
			</HomeWrapper>
		);
	}
}

export default Home;