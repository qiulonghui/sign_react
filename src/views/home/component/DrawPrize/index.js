import React from 'react';
import {DrawPrizeWrapper, DrawPrizeItem} from './style.js'
import {drawPrizeType} from '../../options'

function DrawPrize () {
	return (
		<DrawPrizeWrapper>
			{drawPrizeType.map((item)=>{
				return (
					<DrawPrizeItem iconUrl={item.icon} key={item.id}>
						<div className="draw-item" >
							<i className="package-icon"></i>
							<div className="desc">
								<div className='m-desc'>{item.mDesc}</div>
								<div className="sub-desc">{item.subDesc}</div>
							</div>
							<div className="draw-btn">立即抽奖</div>
						</div>
					</DrawPrizeItem>
				)
			})}
		</DrawPrizeWrapper>
	)
}

export default DrawPrize