import styled from 'styled-px2vw'
import closeBtnPic from '@/assets/btn_close.png'
import bindBtnPic from '@/assets/btn_bind.png'

export const Modal = styled.div`
	position: relative;
	top:50%;
	left:50%;
	width: 640px;
	height: 400px;
	transform: translate(-50%,-50%);
	background-color: #fff;
	border:4px solid rgba(0,4,48,1);
	border-radius:24px;
	overflow:hidden;
`

export const ModalHeader = styled.div`
	margin-top: 48px;
	text-align: center;
	font-size: 40px;
	font-weight: bold;
`

export const ModalContent = styled.div`
	margin: 0 auto;
	margin-top: 124px;
	font-size: 36px;
	font-weight:bold;
	text-align:center;
`

export const BindBtn = styled.div`
	width: 520px;
	height: 99px;
	margin: 0 auto;
	margin-top: 60px;
	background-image: url(${bindBtnPic});
	background-size: contain;
	background-repeat: no-repeat;
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