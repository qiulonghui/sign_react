import React, { Component } from 'react';
import { HomeWrapper, TopWrapper, MainWrapper, AwardWrapper, AwardItem } from './style'
import { awardList } from './options'
import { getSignInfo } from '../../api/home.js'
import DrawPrize from './component/DrawPrize'
import showRuleModal from './component/RuleModal'
import showBindPhoneModal from './component/BindPhoneModal'
import showYdySetModal from './component/YdySetModal'
import showTextTipModal from '../../common/TextTipModal'
import showMyAwardModal from './component/MyAwardModal'
import { CodeBtn } from './component/BindPhoneModal/style';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedCount: 0,
      score: 0,
    }
  }

  componentDidMount() {
    getSignInfo().then(res => {
      React.$LoadingClear()
      const {code, message} = res
      console.log(code,message)
    }).catch(res=>{
       React.$Toast(res.msg)
    })

    this.showSubscribeTip()
  }

  showSubscribeTip = () => {
    const modalOptions = {
      title: "提示",
      content: "关注和留言微信公众号后参与活动",
      allowClose: true,
      qrCode: true
    }
    showTextTipModal(modalOptions)
  }

  render() {
    return (
      <HomeWrapper>
        <TopWrapper>
          <img className="logo" src={require('../../assets/logo.png')} alt="" />
          <img className="banner-pic" src={require('../../assets/banner.png')} alt=""></img>
          <div className="rule-btn" onClick={showRuleModal}></div>
        </TopWrapper>
        <MainWrapper>
          <div className="sign-btn"></div>
          <div className="my-btn" onClick={showMyAwardModal}></div>
          <div className="text">
            <div className="text-left">
              <div className="m-txt">本月已签到<span className="day">{this.state.signedCount}</span>天</div>
              <div className="sub-txt">每天签到获得言值</div>
            </div>
            <div className="text-right">
              <div className="m-txt"><span className="count">{this.state.score}</span></div>
              <div className="sub-txt">当前言值</div>
            </div>
          </div>
          <DrawPrize></DrawPrize>
        </MainWrapper>
        <AwardWrapper>
          <div className="award-container">
            {
              awardList.map(item => {
                return <AwardItem key={item.id} awardImg={item.imageUrl}></AwardItem>
              })
            }
          </div>
        </AwardWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;