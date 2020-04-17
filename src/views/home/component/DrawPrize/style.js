import styled from 'styled-px2vw'
import itemBg from '../../../../assets/pic_cjbg.png'

export const DrawPrizeWrapper = styled.div`
`

export const DrawPrizeItem = styled.div`
.draw-item{
	display: flex;
	align-items: center;
	width: 620px;
	height: 122px;
	margin: 0 auto;
	margin-bottom: 16px;
	padding-left: 28px;
	padding-right: 18px;
	background-image: url(${itemBg});
	background-repeat: no-repeat;
	background-size: contain;
	.package-icon{
		width: 86px;
		height: 88px;
		margin-right: 17px;
		background-image: url(${props=>props.iconUrl});
		background-repeat: no-repeat;
		background-size: contain;
	}
	.desc{
		flex: 1;
		.m-desc{
			font-size: 30px;
			font-weight: 600;
			margin-bottom: 10px;
		}
		.sub-desc{
			font-size: 22px;
			color: #020202
		}
	}
	.draw-btn{
		width: 164px;
		height: 64px;
		line-height: 56px;
		text-align: center;
		font-size: 28px;
		font-weight: 600;
		background:rgba(251,174,66,1);
		border:4px solid rgba(0,4,48,1);
		border-radius:32px;
	}
}
`