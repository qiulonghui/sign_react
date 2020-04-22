import styled from 'styled-px2vw'
import closeBtnPic from '@/assets/btn_close.png'
import bg from '@/assets/jp_kuang.png'

export const Modal = styled.div`
	position: relative;
	top:50%;
	left:50%;
	width: 640px;
	height: 770px;
	transform: translate(-50%,-50%);
	border-radius:24px;
	background-image: url(${bg});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	overflow: hidden;
`

export const ModalHeader = styled.div`
	margin-top: 48px;
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	height: 78px;
`

export const ModalContent = styled.div`
	width: 540px;
	height: 540px;
	padding: 0 42px;
	padding-right: 18px;
	margin: 0 auto;
	margin-top: 24px;
	background-color: transparent;
	.t-header {
		display: flex;
		line-height: 68px;
		font-size: 28px;
		.col1{
			text-indent: -50px;
		}
		.col2{
			text-indent: 50px;
		}
		div{
			flex: 1;
			text-align: center;
		} 
	}
	.a-item{
		display: flex;
		padding: 20px 0;
		align-items: center;
		font-size: 28px;
		border-bottom: 1px solid #999;
		.name{
			width:148px;
		}
		.date{
			flex:1;
			margin-right: 20px;
			text-align: right;
		}
		.btn{
			width: 124px;
			height: 50px;
			line-height:48px;
			text-align: center;
			background-color: #2BB5FC;
			border:3px solid rgba(0,4,48,1);
			border-radius:25px;
			font-size: 26px;
		}
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

