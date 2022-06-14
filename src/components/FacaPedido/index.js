import React from 'react';
import { withRouter } from 'react-router-dom'

class FacaPedido extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}


	render() {
		const { display } = this.props
		const {render} = this.state
			return (
				<div>Hello World</div> 
			)
			
		
	}
}

export default withRouter(FacaPedido)