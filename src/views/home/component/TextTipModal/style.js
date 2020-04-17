import styled from 'styled-px2vw'
import closeBtnPic from '../../../../assets/btn_close.png'
import qrCode from '../../../../assets/ma.png'

export const ModalMask = styled.div`
	position: fixed;
	top:0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 998;
	background-color: rgba(0,0,0,0.6);
`
export const Modal = styled.div`
	position: relative;
	top:50%;
	left:50%;
	width: 600px;
	padding-bottom:76px;
	transform: translate(-50%,-65%);
	background-color: #fff;
	border-radius:24px;
	border: 4px solid #000;
	overflow: hidden;
`

export const ModalHeader = styled.div`
	margin-top: 52px;
	text-align: center;
	font-size: 40px;
	font-weight: bold;
`

export const ModalContent = styled.div`
	padding: 0 25px;
	margin: 0 auto;
	margin-top: 64px;
	text-align: center;
`
export const QrCode = styled.img.attrs({
	src: qrCode,
	alt: ''
})`
	width: 240px;
	height: 240px;
	display:block;
	margin: 0 auto;
	margin-top: -20px;
	margin-bottom: 20px;

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