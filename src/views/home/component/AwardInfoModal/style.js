import styled from 'styled-px2vw'
import closeBtnPic from '../../../../assets/btn_close.png'
import titlePic  from'../../../../assets/zhongjiang_title.png'

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
	width: 640px;
	height: 744px;
	transform: translate(-50%,-51%);
	background-color: #fff;
	border-radius:24px;
	border: 4px solid #000;
	background-color: #2BB5FC;
	overflow: hidden;
`

export const ModalHeader = styled.div`
	margin-top: 48px;
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	height: 78px;
	background-image: url(${titlePic});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`

export const ModalContent = styled.div`
	width: 488px;
	height: 540px;
	border:4px solid rgba(42, 49, 45, 1);
	border-radius:20px;
	margin: 0 auto;
	margin-top: 24px;
	background-color:#fff;
	overflow: auto;
	.title{
		font-size:38px;
		text-align: center;
		font-weight:bold;
		margin-top: 38px;
		margin-bottom: 20px;
	}
	.txt{
		width:445px;
		margin: 0 auto;
		font-size:26px;
		font-weight:400;
		color:rgba(113,113,113,1);
		line-height:36px;
	}
	.qrCode{
		width: 200px;
		height: 200px;
		display: block;
		margin: 0 auto;
		margin-top: 28px;
		margin-bottom: 12px;
	}
	.tip{
		font-size: 30px;
		text-align: center;
		color: #666666;
	}
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

