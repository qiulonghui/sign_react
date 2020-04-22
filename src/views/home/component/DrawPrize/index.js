import React from 'react';
import {DrawPrizeWrapper, DrawPrizeItem, DrawBtn} from './style.js'
import {drawPrizeType} from '../../options'

function DrawPrize (props) {

	let btnsTxt = []
	let btnsState = []

	const computeBtnState = function () { // 计算按钮状态
		btnsState = drawPrizeType.map(item => {
			if(props.smallLuckyBag===1&&item.type==='0') { //type'0'小福袋 1代表已经抽过奖了
				return 'disabled'
			}else if(props.bigLuckyBag===1&&item.type==='1') { //type'1'大福袋
				return 'disabled'
			} else if((props.score<item.scoreLimit)) {
				return 'disabled'
			} else {
				return 'active'
			}
		})	
	}

	const computeBtnTxt= function() {
		if(props.smallLuckyBag===1) {
			btnsTxt[0] = '已抽奖'
		}else {
			btnsTxt[0] = '立即抽奖'
		}
		if(props.bigLuckyBag===1) {
			btnsTxt[1] = '已抽奖'
		}else {
			btnsTxt[1] = '立即抽奖'
		}
	}

	// const handleBtnClick = function(item){
	// 	if(item.type==='1') {

	// 	}
		
	// }

	computeBtnState()
	computeBtnTxt()

	return (
		<DrawPrizeWrapper>
			{drawPrizeType.map((item,index)=>{
				return (
					<DrawPrizeItem iconUrl={item.icon} key={item.type}>
						<div className="draw-item" >
							<i className="package-icon"></i>
							<div className="desc">
								<div className='m-desc'>{item.mDesc}</div>
								<div className="sub-desc">{item.subDesc}</div>
							</div>
							<DrawBtn className={btnsState[index]} onClick={()=>props.drawLottery(item.type)}>
								{btnsTxt[index]}
							</DrawBtn>
						</div>
					</DrawPrizeItem>
				)
			})}
		</DrawPrizeWrapper>
	)
}

export default DrawPrize