import React, {PureComponent} from 'react'
import ReactDOM, {createPortal} from 'react-dom'
import { ModalMask, Modal, ModalHeader, ModalContent, CloseBtn, MiniPlayer, PlayBtn, PauseBtn, SetBtn } from './style'
import WithBodyScrollPrevent from '../../../../common/WithBodyScrollPrevent'

const container = document.createElement('div')

const closeModal = function() {
	ReactDOM.unmountComponentAtNode(container)
}

class YdySetModal extends PureComponent {
	constructor(props) {
		super(props)
		this.audioDom = React.createRef();
	}

	handlePlay = () => {
		const audioDom = this.audioDom.current
		audioDom.play()
	}

	handlePause = () => {
		const audioDom = this.audioDom.current
		audioDom.pause()
	} 

	render() {
		const {props} = this
		return createPortal(
			<ModalMask onClick={closeModal}>
				<Modal onClick={e=>e.stopPropagation()}>
					<ModalHeader></ModalHeader>
					<ModalContent>
						<div className="title">VIP应答语</div>
						<MiniPlayer>
							<PlayBtn onClick={this.handlePlay}></PlayBtn>
							<PauseBtn onClick={this.handlePause}></PauseBtn>
							<div className='txt'>你好在吗你好在吗你好在吗你好在吗</div>
						</MiniPlayer>
						<SetBtn></SetBtn>
						<img className="qrCode" src={require('../../../../assets/ma.png')} alt="" />
						<div className="tip">扫码关注和留言，享更多服务</div>
					</ModalContent>
					<CloseBtn onClick={closeModal}></CloseBtn>
					<audio ref={this.audioDom}>
						<source src={null} type="aduio/mpeg"></source>
					</audio>
				</Modal>
			</ModalMask>,
			document.body
		)
	}
}

const NewComponent = WithBodyScrollPrevent(YdySetModal)

const renderYdySetModal = function () {
	ReactDOM.render(<NewComponent />, container)
}

export default renderYdySetModal