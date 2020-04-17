import styled from 'styled-px2vw'
import pageBg from '../../assets/indexbg.png'
import ruleBtnPic from '../../assets/rule_btn.png'
import cardPic from '../../assets/index_qd.png'
import signBtnPic from '../../assets/sign_btn.png'
import myBtnPic from '../../assets/btn_my.png'
import awardDetailBg from '../../assets/jp.png'

export const HomeWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	font-size: 24px;
	background-color: #2CB6FF;
	background-image: url(${pageBg});
	background-repeat: no-repeat;
	background-size: contain;
	padding-bottom: 38px;
`

export const TopWrapper = styled.div`
	position:relative;
	overflow:hidden;
	.logo{
		display:block;
		width: 320px;
		height: 54px;
		margin-top: 23px;
		margin-left: 22px;
	}
	.banner-pic{
		width: 708px;
		height: 344px;
		display:block;
		margin: 0 auto;
	}
	.rule-btn{
		position: absolute;
		right: 0;
		top: 25px;
		width: 160px;
		height: 56px;
		background-image: url(${ruleBtnPic});
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}
` 

export const MainWrapper = styled.div`
	width: 680px;
	height: 481px;
	position: relative;
	margin: 0 auto;
	margin-top: 78px;
	background-image: url(${cardPic});
	background-repeat: no-repeat;
	background-size: contain;
	.sign-btn{
		width: 180px;
		height: 180px;
		position: absolute;
		top:0;
		left:0;
		right: 0;
		transform: translateY(-58%);
		margin: 0 auto;
		background-image: url(${signBtnPic});
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}
	.my-btn{
		width: 160px;
		height: 62px;
		position: absolute;
		right: 2px;
		top:4px;
		transform: translateY(-100%);
		background-image: url(${myBtnPic});
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}
	.text{
		display: flex;
		justify-content: center;
		padding-top:88px;
		margin-bottom: 25px;
		.text-left{
			padding-right: 40px;
			border-right: 3px solid #000430;
			.m-txt{
				font-size: 40px;
				color: #000430;
				font-weight: bold;
			}
			.sub-txt{
				font-size: 30px;
				margin-top: 11px;
			}
		}
		.text-right{
			padding-left: 70px;
			text-align: center;
			.m-txt{
				font-size: 40px;
				font-weight: bold;
			}
			.sub-txt{
				font-size: 30px;
				margin-top: 11px;
			}
		}
		.count, .day{
			color: #E03A3A;
		}
	}
`

export const AwardWrapper = styled.div`
	width: 680px;
	height: 414px;
	margin: 0 auto;
	margin-top: 20px;
	background-image: url(${awardDetailBg});
	background-repeat: no-repeat;
	background-size: contain;
	overflow: hidden;
	.award-container{
		width: 560px;
		margin: 0 auto;
		margin-top: 98px;
	}
`


export const AwardItem = styled.div`
	float: left;
	width: 260px;
	height:124px;
	margin-bottom: 18px;
	background-image: url(${props=>props.awardImg});
	background-repeat: no-repeat;
	background-size: contain;
	&:nth-of-type(2n){
		margin-left: 40px;
	}
`


