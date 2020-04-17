import React from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { ModalMask, Modal, ModalHeader, ModalContent, QrCode, CloseBtn } from './style'
import WithBodyScrollPrevent from '../../../../common/WithBodyScrollPrevent'

const container = document.createElement('div')

function TextTipModal(props) {
	const { title, content, allowClose, qrCode } = props

	const closeModal = function () {
		ReactDOM.unmountComponentAtNode(container)
	}

	return createPortal(
		<ModalMask onClick={allowClose ? closeModal : null}>
			<Modal onClick={e => e.stopPropagation()}>
				<ModalHeader>{title}</ModalHeader>
				<ModalContent>
					{qrCode ? <QrCode /> : null}
					<div>{content}</div>
				</ModalContent>
				{allowClose ? (<CloseBtn onClick={closeModal}></CloseBtn>) : null}
			</Modal>
		</ModalMask>,
		document.body
	)
}

TextTipModal.defaultProps = {
	title: '提示',
	content: '',
	qrCode: false,
	allowClose: true
};

const NewComponent = WithBodyScrollPrevent(TextTipModal)

const renderTextModal = function (props) {
	ReactDOM.render(<NewComponent {...props} />, container)
}

export default renderTextModal