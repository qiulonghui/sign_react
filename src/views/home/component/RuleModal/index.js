import React, {Component} from 'react'
import ReactDOM, {createPortal} from 'react-dom'
import { ModalMask, Modal, ModalHeader, ModalContent, CloseBtn } from './style'
import { disableBodyScroll, enableBodyScroll } from '../../../../utils/bodyScrollLock.js'

const container = document.createElement('div')

const closeModal = function() {
	ReactDOM.unmountComponentAtNode(container)
}

class RuleModal extends Component {
	constructor(props) {
		super(props)
		this.scrollEl = React.createRef()
	}

	componentDidMount() {
		const targetElement = this.scrollEl.current
		disableBodyScroll(targetElement)
	}

	componentWillUnmount() {
		const targetElement = this.scrollEl.current
		enableBodyScroll(targetElement)
	}

	render() {
		return createPortal(
			<ModalMask onClick={closeModal}>
				<Modal onClick={e=>e.stopPropagation()}>
					<ModalHeader>活动规则</ModalHeader>
					<ModalContent ref={this.scrollEl}>
						<p>【活动对象】 <br/>中国移动和留言订购用户</p>
						<p>【活动时间】<br/>2020年4月1日至6月30日</p>
						<p>【活动规则】</p>
						<p>1）和留言订购用户可通过活动页面，每天进行打卡；若用户非和留言订购用户，需要先成功订购和留言业务（可通过活动线上或线下方式订购和留言，包含各省定制化的和留言付费产品包），才可参与活动打卡。</p>
						<p>2）当月用户累计签到3天，可获得1次抽奖，抽奖内容有1元/3元/5元和包券、VIP应答语1条。</p>
						<p>3）当月用户累计签到7天，可获得1次抽奖，抽奖内容有1元/3元/5元/10元和包券、VIP应答语1条。</p>
						<p>4）当月用户累计签到14天，可获得1次抽奖，抽奖内容有3元/5元/10元/50元/100元和包券。</p>
						<p>5）每个月重新计算用户打卡周期，当月打卡记录不延续到次月。</p>
						<p>6）抽奖100%中奖，数量有限，先到先得，送完即止。</p>
						<p>7）若用户存在漏打卡，可点击活动补卡并分享活动获得1次补打卡机会，每个用户每月仅限1次补打卡机会。</p>
						<p>8）活动中奖的和包卷奖励按月兑奖派发，在中奖后的次月15日前合并派发至用户参与活动的手机号码（中奖的订购用户必须符合在次月都处于和留言订购状态才可获得派奖）；应答语奖励可在活动页面设置并立即生效。</p>
						<p>9）订购和留言业务，以成功收到短信通知成功开通和留言业务为准。</p>
						<p>10）如遇号码恶意中伤投诉或恶意刷单，活动方有权取消该号码的中奖资格。</p>
						<p>11）如需咨询活动内容，请详询中国移动10086客服。</p>
						<p>【和包券】</p>
						<p>1）和包电子券可在和包官网上的合作商家进行兑换消费（例如华润万家、当当网、优酷、腾讯等商家，商家根据与和包官网的合作期限以及商家实际情况提供兑换服务），具体商家以及和包电子券使用范围请登录“和包”APP了解，或可直接在应用市场搜索“和包”APP下载。</p>
						<p>2）和包电子券均设置有效期，用户需在和包电子券有效期内完成兑换消费。自收到和包电子券到账信息后即可在电子券有效期60天内通过和包官网进行和包券兑换消费，逾期未使用，电子券将作废，则我司不再承担兑付义务。</p>
						<p>【应答语】</p>
						<p>应答语是和留言提供的个性应答服务，用户可针对开会、休息、关机等不同场景设置对应场景应答语，也可给指定号码设置专属应答语。当你手机处于对应场景、免扰、关机、无信号等情况时，对方来电将听到你设置的应答语，同时你也会收到对方的来电提醒。</p>
						<p>更多应答语设置和更换，请关注“和留言”公众号后点击菜单栏【个人中心】，或安装“和留言”APP后首页点击【应答语】进入应答语设置界面，各类应答语等你玩转！</p>
					</ModalContent>
					<CloseBtn onClick={closeModal}></CloseBtn>
				</Modal>
			</ModalMask>,
			document.body
		)
	}
}

const renderRuleModal = function() {
	ReactDOM.render(<RuleModal />,container)
}

export default renderRuleModal