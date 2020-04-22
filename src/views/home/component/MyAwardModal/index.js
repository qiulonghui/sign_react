import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import WithBodyScrollPrevent from '@/common/WithBodyScrollPrevent'
import TransitionModal from '@/common/TransitionModal'
import { Modal, ModalHeader, ModalContent, CloseBtn } from './style'

const container = document.createElement('div')

const handleTransitionExited = function () {
	ReactDOM.unmountComponentAtNode(container)
}

class MyAwardModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
	}

	closeModal = () => {
		this.setState({ visible: false })
	}

	componentDidMount() {
		this.setState({
			visible: true
		})
	}

	render() {
		const awardList = this.props.awardList
		return createPortal(
			<TransitionModal handleClose={this.closeModal} show={this.state.visible} transitionExited={handleTransitionExited}>
				<Modal onClick={e => e.stopPropagation()}>
					<ModalHeader></ModalHeader>
					<ModalContent>
						<div className="t-header">
							<div className="col1">奖品</div>
							<div className="col2">日期</div>
							<div></div>
						</div>
						{console.log(awardList)}
						{awardList.map((item,index) => {
							return (
								<div className="a-item" key={index}>
									<div className="name">{item.name}</div>
									<div className="date">{item.date}</div>
									<div className="btn" onClick={()=>this.props.showAwardItem(item)}>查看</div>
								</div>
							)
						})}
					</ModalContent>
					<CloseBtn onClick={this.closeModal}></CloseBtn>
				</Modal>
			</TransitionModal>,
			document.body
		)
	}
}

const NewComponent = WithBodyScrollPrevent(MyAwardModal) // WithBodyScrollPrevent HOC（高阶组件）

const renderMyAwardModal = function (myAwardList, handleShowAwardContent) {
	ReactDOM.render(
	<NewComponent 
		awardList={myAwardList} 
		showAwardItem={handleShowAwardContent} 
	/>, 
	container)
}

export default renderMyAwardModal