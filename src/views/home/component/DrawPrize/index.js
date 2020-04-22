import React from 'react';
import { DrawPrizeWrapper, DrawPrizeItem, DrawBtn } from './style.js'
import { drawPrizeType } from '../../options'

function DrawPrize(props) {

	const computedList = function () {
		let active = true
		let btnTxt = '立即抽奖'
		let tipInfo = ''
		const bagStatus = {
			'0': '未抽',
			'1': '已抽'
		}
		const sVal = props.smallLuckyBag // 0 || 1
		const bVal = props.bigLuckyBag // 0 || 1
		const list = drawPrizeType.map(item => {
			if (bagStatus[sVal] === '已抽' && item.type === '小福袋') { 
				active = false
				btnTxt = '已抽奖'
				tipInfo = '小福袋已经抽过了~'
			} else if (bagStatus[bVal] === '已抽' && item.type === '大福袋') {
				active = false
				btnTxt = '已抽奖'
				tipInfo = '大福袋已经抽过了~'
			} else if ((props.score < item.scoreLimit)) {
				active = false
				btnTxt = '立即抽奖'
				tipInfo = '言值不够了...'
			} else {
				active = true
				btnTxt = '立即抽奖'
			}
			return {
				...item,
				active,
				btnTxt,
				tipInfo
			}
		})
		return list
	}

	const bagsList = computedList()

	return (
		<DrawPrizeWrapper>
			{bagsList.map(item => {
				return (
					<DrawPrizeItem iconUrl={item.icon} key={item.type}>
						<div className="draw-item" >
							<i className="package-icon"></i>
							<div className="desc">
								<div className='m-desc'>{item.mDesc}</div>
								<div className="sub-desc">{item.subDesc}</div>
							</div>
							<DrawBtn className={item.active?'':'disabled'} onClick={() => props.drawLottery(item)}>
								{item.btnTxt}
							</DrawBtn>
						</div>
					</DrawPrizeItem>
				)
			})}
		</DrawPrizeWrapper>
	)
}

export default DrawPrize