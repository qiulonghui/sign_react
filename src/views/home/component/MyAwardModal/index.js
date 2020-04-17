import React from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import WithBodyScrollPrevent from '../../../../common/WithBodyScrollPrevent'
import { ModalMask, Modal, ModalHeader, ModalContent, CloseBtn } from './style'
import showAwardInfoModal from '../AwardInfoModal' 

const container = document.createElement('div')

function MyAwardModal(props) {
	const handleBtnClick = function () {
		showAwardInfoModal()
	}

	const closeModal = function () {
		ReactDOM.unmountComponentAtNode(container)
	}

	return createPortal(
		<ModalMask onClick={closeModal}>
			<Modal onClick={e => e.stopPropagation()}>
				<ModalHeader></ModalHeader>
				<ModalContent>
					<div className="t-header">
						<div className="col1">奖品</div>
						<div className="col2">日期</div>
						<div></div>
					</div>
					<div className="a-item">
						<div className="name">爱奇艺视频会员月卡</div>
						<div className="date">2020-05-20</div>
						<div className="btn" onClick={handleBtnClick}>查看</div>
					</div>
					<div className="a-item">
						<div className="name">爱奇艺视频会员月卡</div>
						<div className="date">2020-05-20</div>
						<div className="btn" onClick={handleBtnClick}>查看</div>
					</div>
				</ModalContent>
				<CloseBtn onClick={closeModal}></CloseBtn>
			</Modal>
		</ModalMask>,
		document.body
	)
}

const NewComponent = WithBodyScrollPrevent(MyAwardModal) // WithBodyScrollPrevent HOC（高阶组件）

const renderMyAwardModal = function () {
	ReactDOM.render(<NewComponent />, container)
}

export default renderMyAwardModal