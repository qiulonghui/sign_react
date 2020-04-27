import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { Modal, ModalHeader, ModalContent, BindBtn, CloseBtn } from './style'
import WithBodyScrollPrevent from '@/common/WithBodyScrollPrevent'
import TransitionModal from '@/common/TransitionModal'
import { getUserInfo } from '@/api/home'

const container = document.createElement('div')

const handleTransitionExited = function () {
  ReactDOM.unmountComponentAtNode(container)
}

class DirectBindModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  componentDidMount() {
    document.scrollingElement.scrollTop = 0
    this.setState({
      visible: true
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
  }

  handleBindClick = () => {
    const token = this.props.token
    const userInformation = this.props.userInformation
    getUserInfo({
      token,
      userInformation
    }).then(res => {
      React.$Toast('操作成功')
      this.props.updateUserInfo()
      this.closeModal()
    }).catch(res => {
      const { msg } = res
      React.$Toast(msg)
    })
  }

  render() {
    return createPortal(
      <TransitionModal handleClose={this.closeModal} show={this.state.visible} transitionExited={handleTransitionExited}>
        <Modal onClick={e => e.stopPropagation()}>
          <ModalHeader></ModalHeader>
          <ModalContent>
            <div>一键登录绑定和留言</div>
            <BindBtn onClick={this.handleBindClick} />
          </ModalContent>
          <CloseBtn onClick={this.closeModal}></CloseBtn>
        </Modal>
      </TransitionModal>,
      document.body
    )
  }
}

const NewComponent = WithBodyScrollPrevent(DirectBindModal)

const renderDirectBindModal = function (props) {
  ReactDOM.render(<NewComponent {...props} />, container)
}

export default renderDirectBindModal 