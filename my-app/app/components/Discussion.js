import React, {Component} from 'react';
import * as firebase from 'firebase';

class Discussion extends Component {
    constructor(props, context) {
    super(props, context);
		this.state = {
			speed: 10
		}
	}

	componentDidMount(){
		const rootRef = firebase.database().ref().child('react');
		const speedRef = rootRef.child('speed');
		speedRef.on('value', snap => {
			this.setState({
				speed: snap.val()
			})
		})
	}

	render(){
		return(
			<div className="container">{this.state.speed}
			</div>
		)
	}
}

export default Discussion;