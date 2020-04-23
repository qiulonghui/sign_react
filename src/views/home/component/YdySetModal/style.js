import styled from 'styled-px2vw'
import closeBtnPic from '@/assets/btn_close.png'
import titlePic  from'@/assets/zhongjiang_title.png'
import setBtnPic from '@/assets/btn_shezhi.png'
import playBtnPic from '@/assets/btn_play.png'
import pauseBtnPic from '@/assets/btn_stop.png'

export const Modal = styled.div`
	position: relative;
	top:50%;
	left:50%;
	width: 640px;
	height: 744px;
	transform: translate(-50%,-50%);
	background-color: #fff;
	border-radius:24px;
	border: 4px solid #000;
	background-color: #2BB5FC;
	/* overflow: hidden; */
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
	.qrCode{
		width: 180px;
		height: 180px;
		display: block;
		margin: 0 auto;
		margin-top: 18px;
		margin-bottom: 12px;
	}
	.tip{
		font-size: 30px;
		text-align: center;
		color: #666666;
	}
`

export const MiniPlayer = styled.div`
	display: flex;
	align-items: center;
	width: 384px;
	height: 84px;
	margin: 0 auto;
	background-color: #fff;
	padding: 0 18px;
	border:4px solid rgba(59,59,59,1);
	border-radius:10px;
	.txt{
		max-width: 320px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		margin-left: 15px;
		font-size: 30px;
	}
`

export const ControlBtn = styled.div`
	width: 46px;
	height: 46px;
	border-radius:50%;
	background-size: contain;
	background-repeat: no-repeat;
	overflow:hidden;
	&.pauseBtn {
		background-image: url(${pauseBtnPic});
	}
	&.playBtn {
		background-image: url(${playBtnPic});
	}
`

export const SetBtn = styled.div`
	width: 240px;
	height: 80px;
	margin: 0 auto;
	margin-top: 14px;
	background-image: url(${setBtnPic});
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

