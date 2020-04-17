import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { ModalMask, Modal, ModalHeader, ModalContent, CloseBtn } from './style'
import WithBodyScrollPrevent from '../../../../common/WithBodyScrollPrevent'
import { CSSTransition } from 'react-transition-group'
import './style.css'

const container = document.createElement('div')

class AwardInfoModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
	}

	componentDidMount() {
		this.setState({
			show: true
		})
	}

	closeModal = () => {
		this.setState({
			show: false
		})
	}

	render() {
		return createPortal(
			<CSSTransition
				in={this.state.show}
				timeout={200}
				classNames="modal"
				unmountOnExit
			// onEnter={() => {}}
				onExited={()=>ReactDOM.unmountComponentAtNode(container)}
			>
				<ModalMask onClick={this.closeModal}>
					<Modal onClick={e => e.stopPropagation()}>
						<ModalHeader></ModalHeader>
						<ModalContent>
							<div className="title">{123}</div>
							<div className="txt">在中奖之日起直接在用户手机号码的相关视频账户上激活并开始计算使用有效期，请用户自行使用活动中奖手机号码登录相关视频账户查看并尽快使用。</div>
							<img className="qrCode" src={require('../../../../assets/ma.png')} alt="" />
							<div className="tip">扫码关注和留言，享更多服务</div>
						</ModalContent>
						<CloseBtn onClick={this.closeModal}></CloseBtn>
					</Modal>
				</ModalMask>
			</CSSTransition>,
			document.body
		)
	}
}

const NewComponent = WithBodyScrollPrevent(AwardInfoModal)
const renderAwardInfoModal = function () {
	ReactDOM.render(<NewComponent />, container)
}

export default renderAwardInfoModal