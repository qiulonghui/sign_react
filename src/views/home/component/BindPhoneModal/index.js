import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import { Modal, ModalHeader, ModalContent, InputWrapper, PhoneInput, CodeBtn, CodeInput, SubmitBtn, CloseBtn } from './style'
import WithBodyScrollPrevent from '@/common/WithBodyScrollPrevent'
import TransitionModal from '@/common/TransitionModal'
import { getSmsCode, phoneLogin } from '@/api/home'

const container = document.createElement('div')

const handleTransitionExited = function () {
  ReactDOM.unmountComponentAtNode(container)
}

class BindPhoneModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      phone: '',
      smsCode: '',
      sceonds: 60
    }
  }

  componentDidMount() {
    this.setState({
      visible: true
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
  }

  decreaseSeconds = () => {
    if (this.state.sceonds === 0) {
      this.setState({
        sceonds: 60
      })
      return
    }
    setTimeout(() => {
      this.setState({
        sceonds: this.state.sceonds - 1
      })
      this.decreaseSeconds()
    }, 1000)
  }

  handleClickCodeBtn = () => {
    if (this.state.phone.length < 11) {
      React.$Toast('请输入移动手机号码')
      return
    }
    const phone = this.state.phone
    getSmsCode({ phone }).then(res => {
      this.decreaseSeconds()
      React.$Toast('验证码已发送')
    }).catch(res => {
      const { msg } = res
      React.$Toast(msg)
    })
  }

  handleFormSubmit = () => {
    if (!this.submitValidate()) return
    const phone = this.state.phone
    const code = this.state.smsCode
    phoneLogin({ phone, code }).then(() => {
      React.$Toast('操作成功')
      this.props.updateUserInfo()
      this.closeModal()
    }).then(res => {
      const { msg } = res
      React.$Toast(msg)
    })
  }

  handleInputChange = (stateKay, e) => {
    const newVal = e.target.value.replace(/[^\d]/g, '')
    this.setState({
      [stateKay]: newVal
    })
  }

  submitValidate() {
    if (this.state.phone.length < 11) {
      React.$Toast('请输入移动手机号码')
      return false
    } else if (this.state.smsCode === '') {
      React.$Toast('请输入验证码')
      return false
    }
    return true
  }

  renderCodeBtn() {
    let awaiting = this.state.sceonds === 60 ? false : true
    let color = awaiting ? '#000430' : '#2BB5FC'
    const BtnText = awaiting ? `请稍后${this.state.sceonds}秒` : '获取验证码'
    return <CodeBtn textColor={color} onClick={awaiting ? null : this.handleClickCodeBtn}>{BtnText}</CodeBtn>
  }

  render() {
    return createPortal(
      <TransitionModal handleClose={this.closeModal} show={this.state.visible} transitionExited={handleTransitionExited}>
        <Modal onClick={e => e.stopPropagation()}>
          <ModalHeader>请输入手机号码绑定和留言</ModalHeader>
          <ModalContent>
            <InputWrapper>
              <PhoneInput value={this.state.phone} onChange={e => this.handleInputChange('phone', e)}></PhoneInput>
            </InputWrapper>
            <InputWrapper>
              <CodeInput value={this.state.smsCode} onChange={e => this.handleInputChange('smsCode', e)}></CodeInput>
              {this.renderCodeBtn()}
            </InputWrapper>
            <SubmitBtn onClick={this.handleFormSubmit}></SubmitBtn>
          </ModalContent>
          <CloseBtn onClick={this.closeModal}></CloseBtn>
        </Modal>
      </TransitionModal>,
      document.body
    )
  }
}

const NewComponent = WithBodyScrollPrevent(BindPhoneModal)

const renderBindPhoneModal = function (props) {
  ReactDOM.render(<NewComponent {...props} />, container)
}

export default renderBindPhoneModal