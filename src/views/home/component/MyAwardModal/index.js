import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import WithBodyScrollPrevent from '../../../../common/WithBodyScrollPrevent'
import ModalTransition from '../../../../common/ModalTransition'
import { ModalMask, ModalWrapper, Modal, ModalHeader, ModalContent, CloseBtn } from './style'
import showAwardInfoModal from '../AwardInfoModal'

const container = document.createElement('div')

const handleBtnClick = function () {
  showAwardInfoModal()
}

const handleTransitionExited = function () {
  ReactDOM.unmountComponentAtNode(container)
}

class MyAwardModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  closeModal = () => {
    this.setState({ visible: false })
  }

  componentDidMount() {
    this.setState({
      visible: true
    })
  }

  renderModalMask = () => {
    return <ModalMask />
  }

  renderModal = () => {
    return (
      <ModalWrapper onClick={this.closeModal}>
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
          <CloseBtn onClick={this.closeModal}></CloseBtn>
        </Modal>
      </ModalWrapper>
    )
  }

  render() {
    return createPortal(
      <ModalTransition renderMask={this.renderModalMask} renderModal={this.renderModal} show={this.state.visible} transitionExited={handleTransitionExited}>
      </ModalTransition>,
      document.body
    )
  }
}

const NewComponent = WithBodyScrollPrevent(MyAwardModal) // WithBodyScrollPrevent HOC（高阶组件）

const renderMyAwardModal = function () {
  ReactDOM.render(<NewComponent />, container)
}

export default renderMyAwardModal