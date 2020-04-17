import React, {Component} from 'react'
import WithTransition from './WithTransition'


const preventDefault = function(e) {
	e.preventDefault();
}

function WithBodyScrollPrevent (WrappedComponent) {
  const WithTransComponent = WithTransition(WrappedComponent)
  
	return class extends Component {
		componentDidMount() {
			document.addEventListener('touchmove', preventDefault,{passive:false})
		}

		componentWillUnmount() {
			document.removeEventListener('touchmove', preventDefault)
		}

		render() {
			return <WithTransComponent {...this.props}/>
		}
	}
}

export default WithBodyScrollPrevent