import React, {Component} from 'react'

const preventDefault = function(e) {
	e.preventDefault();
}

function WithBodyScrollPrevent (WrappedComponent) {

	return class extends Component {
		componentDidMount() {
			document.addEventListener('touchmove', preventDefault,{passive:false})
		}

		componentWillUnmount() {
			document.removeEventListener('touchmove', preventDefault)
		}

		render() {
			return <WrappedComponent {...this.props}/>
		}
	}
}

export default WithBodyScrollPrevent