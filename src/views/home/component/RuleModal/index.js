import React, {Component} from 'react'
import ReactDOM, {createPortal} from 'react-dom'
import { Modal, ModalHeader, ModalContent, CloseBtn } from './style'
import { disableBodyScroll, clearAllBodyScrollLocks } from '@/utils/bodyScrollLock.js'
import TransitionModal from '@/common/TransitionModal'

const container = document.createElement('div')

const handleTransitionExited = function() {
	ReactDOM.unmountComponentAtNode(container)
}

class RuleModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
		this.scrollEl = React.createRef()
	}

	componentDidMount() {
		const targetElement = this.scrollEl.current
		disableBodyScroll(targetElement)
		this.setState({
			visible: true
		})
	}

	componentWillUnmount() {
		clearAllBodyScrollLocks()
	}

	closeModal = () => {
		this.setState({
			visible: false
		})
	}

	render() {
		return createPortal(
			<TransitionModal handleClose={this.closeModal} show={this.state.visible} transitionExited={handleTransitionExited}>
				<Modal onClick={e=>e.stopPropagation()}>
					<ModalHeader>活动规则</ModalHeader>
					<ModalContent ref={this.scrollEl}>
						<p>【活动对象】 <br/>中国移动用户（不含港澳台、副卡用户）</p>
						<p>【活动时间】<br/>即日起至2020年6月30日</p>
						<p>【活动规则】</p>
						<p>1、活动期间的和留言微信绑定用户通过活动参与每日签到，每天签到随机获得10-30【言值】;</p>
						<p>2、签到获得的【言值】可在当月累加，次月清零重新计算;</p>
						<p>3、当用户消耗100【言值】，即可获得小福袋抽奖（包含爱奇艺/腾讯/芒果TV视频会员周卡/应答语）</p>
						<p>4、当用户消耗200【言值】，即可获得大福袋抽奖（包含爱奇艺/腾讯/芒果TV视频会员周卡和月卡）</p>
						<p>5、抽奖获得视频会员权益包实时派发至中奖用户手机的视频账户并在中奖当天激活生效，应答语在活动页面实时派发并可立即设置生效，奖品数量有限，先到先得，领完即止。</p>
						<p>6、如遇恶意中伤投诉或恶意刷单，活动方有权取消该号码的中奖资格。</p>
						<p>7、如需咨询活动内容，请详询中国移动10086客服</p>
						<p>【视频会员权益】</p>
						<p>腾讯视频、芒果TV、爱奇艺视频周卡和月卡，在中奖之日起直接在用户手机号码的相关视频账户上激活并开始计算使用有效期，请用户自行使用活动中奖手机号码登录相关视频账户查看并尽快使用（视频会员周卡7天有效、月卡30天失效），逾期自动失效。</p>
						<p>【和留言应答语权益】</p>
						<p>应答语是和留言提供的个性应答服务，用户可针对开会、休息、关机等不同场景设置对应场景应答语，也可给指定号码设置专属应答语。当你手机处于对应场景、免扰、关机、无信号等情况时，对方来电将听到你设置的应答语，同时你也会收到对方的来电提醒。</p>
						<p>更多应答语设置和更换，请关注“和留言”公众号后点击菜单栏【个人中心】，或安装“和留言”APP后首页点击【应答语】进入应答语设置界面，各类应答语等你玩转！</p>
					</ModalContent>
					<CloseBtn onClick={this.closeModal}></CloseBtn>
				</Modal>
			</TransitionModal>,
			document.body
		)
	}
}

const renderRuleModal = function() {
	ReactDOM.render(<RuleModal />,container)
}

export default renderRuleModal