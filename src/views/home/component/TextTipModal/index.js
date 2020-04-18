import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { Modal, ModalHeader, ModalContent, QrCode, CloseBtn } from './style'
import WithBodyScrollPrevent from '../../../../common/WithBodyScrollPrevent'
import BaseModal from '../../../../common/BaseModal'

const container = document.createElement('div')

const handleTransitionExited = function () {
  ReactDOM.unmountComponentAtNode(container)
}

class TextTipModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.setState({
      visible: true
    })
  }
  
  closeModal = () => {
    this.setState({ visible: false })
  }

  render() {
    const { title, content, allowClose, qrCode } = this.props
    return createPortal(
      <BaseModal handleClose={allowClose ? this.closeModal:null} show={this.state.visible} transitionExited={handleTransitionExited}>
        <Modal onClick={e => e.stopPropagation()}>
          <ModalHeader>{title}</ModalHeader>
          <ModalContent>
            {qrCode ? <QrCode /> : null}
            <div>{content}</div>
          </ModalContent>
          {allowClose ? (<CloseBtn onClick={this.closeModal}></CloseBtn>) : null}
        </Modal>
      </BaseModal>,
      document.body
    )
  }
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