import styled from 'styled-px2vw'
import closeBtnPic from '@/assets/btn_close.png'
import loginBtn from '@/assets/btn_login.png'
 
export const Modal = styled.div`
	position: relative;
	top:50%;
	left:50%;
	width: 640px;
	height: 600px;
	transform: translate(-50%,-50%);
	background-color: #fff;
	border-radius:24px;
	border: 4px solid #000;
	overflow: hidden;
`

export const ModalHeader = styled.div`
	margin-top: 57px;
	text-align: center;
	font-size: 36px;
	font-weight: bold;
`

export const ModalContent = styled.div`
	margin-top: 48px;
`
export const CloseBtn = styled.div`
	position: absolute;
	top: 14px;
	right: 14px;
	width: 60px;
	height: 60px;
	background-image: url(${closeBtnPic});
	background-size: contain;
	background-repeat: no-repeat;
`

export const InputWrapper = styled.div`
	width: 520px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	margin-bottom: 22px;
	font-size: 32px;
`

export const PhoneInput = styled.input.attrs({
	placeholder: '请输入移动手机号码',
	type: 'text',
	maxLength: '11'
})`
	width:520px;
	height:80px;
	padding: 0 25px;
	border:2px solid rgba(0,4,48,1);
	border-radius:10px;
	outline:none;
`
export const CodeInput = styled.input.attrs({
	placeholder: '请输入验证码',
	type: 'text',
	maxLength: '6'
})`
	width: 340px;
	height: 80px;
	border:2px solid rgba(0,4,48,1);
	border-radius:10px;
	padding: 0 25px;
	outline:none;
	margin-right:12px;
`

export const CodeBtn = styled.span`
	line-height: 80px;
	color: ${props=>props.textColor}
`

export const SubmitBtn = styled.div`
	width: 520px;
	height: 100px;
	margin: 0 auto;
	margin-top: 94px;
	background-image: url(${loginBtn});
	background-size: contain;
	background-repeat: no-repeat;
`