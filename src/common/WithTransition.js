import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

function WithTransition(WrappedComponent) {
	return class extends Component {
		constructor(props) {
			super(props)
			this.state = {
				show: false
			}
		}

		componentDidMount() {
			this.setState({
				show: true
			})
		}

		closeModal = () => {
			this.setState({
				show: false
			})
		}

		render() {
			return(
				<CSSTransition
					in={this.state.show}
					timeout={200}
					classNames="modal"
					unmountOnExit
					// onEnter={() => {}}
					onExited={this.props.handleTransitionExited}
				>
					<WrappedComponent></WrappedComponent>
				</CSSTransition>,
				document.body
			)
		}
	}
}


export default WithTransition