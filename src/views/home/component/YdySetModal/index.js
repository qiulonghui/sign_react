import React, {PureComponent} from 'react'
import ReactDOM, {createPortal} from 'react-dom'
import { Modal, ModalHeader, ModalContent, CloseBtn, MiniPlayer, PlayBtn, PauseBtn, SetBtn } from './style'
import {setYdy} from '@/api/home'
import WithBodyScrollPrevent from '@/common/WithBodyScrollPrevent'
import TransitionModal from '@/common/TransitionModal'

const container = document.createElement('div')

const handleTransitionExited = function() {
	ReactDOM.unmountComponentAtNode(container)
}

class YdySetModal extends PureComponent {
	constructor(props) {
		super(props)
		this.state = { 
			visible: false
		}
		this.audioDom = React.createRef();
	}

	componentDidMount() {
		this.setState({
			visible: true
		})
	}

	handleSetYdy = (id) => {
		setYdy(id).then(res=>{
			const {msg} = res
			React.$LoadingClear()
			React.$Toast(msg)
		}).catch(res=> {
			const {msg} = res
			React.$Toast(msg)
		})
	}

	handlePlay = () => {
		const audioDom = this.audioDom.current
		audioDom.play()
	}

	handlePause = () => {
		const audioDom = this.audioDom.current
		audioDom.pause()
	} 

	closeModal = () => {
		this.setState({
			visible: false
		})
	}

	render() {
		const vox = this.props.award.vox // vox应答语

		return createPortal(
			<TransitionModal handleClose={this.closeModal} show={this.state.visible} transitionExited={handleTransitionExited}>
				<Modal onClick={e=>e.stopPropagation()}>
					<ModalHeader></ModalHeader>
					<ModalContent>
						<div className="title">VIP应答语</div>
						<MiniPlayer>
							<PlayBtn onClick={this.handlePlay}></PlayBtn>
							<PauseBtn onClick={this.handlePause}></PauseBtn>
							<div className='txt'>{vox.voxTitle}</div>
						</MiniPlayer>
						<SetBtn onClick={()=>this.handleSetYdy(vox.fileId)}></SetBtn>
						<img className="qrCode" src={require('@/assets/ma.png')} alt="" />
						<div className="tip">扫码关注和留言，享更多服务</div>
					</ModalContent>
					<CloseBtn onClick={this.closeModal}></CloseBtn>
					<audio ref={this.audioDom}>
						<source src={vox.voxFile} type="audio/mpeg"></source>
					</audio>
				</Modal>
			</TransitionModal>,
			document.body
		)
	}
}

const NewComponent = WithBodyScrollPrevent(YdySetModal)

const renderYdySetModal = function (award) {
	ReactDOM.render(<NewComponent award={award} />, container)
}

export default renderYdySetModal