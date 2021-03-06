import styled from 'styled-px2vw'
import closeBtnPic from '@/assets/btn_close.png'

export const Modal = styled.div`
	position: relative;
	top:50%;
	left:50%;
	width: 640px;
	height: 860px;
	transform: translate(-50%,-50%);
	background-color: #fff;
	border-radius:24px;
	border: 4px solid #000;
	overflow: hidden;
`

export const ModalHeader = styled.div`
	margin-top: 57px;
	text-align: center;
	font-size: 40px;
	font-weight: bold;
`

export const ModalContent = styled.div`
	width: 586px;
	height: 696px;
	line-height:38px;
	margin: 0 auto;
	margin-top: 24px;
	overflow: auto;
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