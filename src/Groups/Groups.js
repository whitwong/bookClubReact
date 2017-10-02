// **************************
//   ~~NO LONGER IN USE ~~
// **************************
/* 
import React, { Component } from 'react';

import groupHelpers from '../utils/groupHelpers';

import GroupCards from './GroupCards.js';
import CreateGroup from './CreateGroup.js';
import Discussion from './Discussion';



class Groups extends Component {
	constructor(props) {
		super(props);

		this.state = {
			groups: [],
			selected: false,
			selectedGroup: "",
		};

		this.getGroups = this.getGroups.bind(this);
		this.createGroup = this.createGroup.bind(this);
		this.selectGroup = this.selectGroup.bind(this);
	}

	componentDidMount() {
		this.getGroups();
	}

	getGroups() {
		const { userProfile } = this.props.auth;
		groupHelpers.getGroups(userProfile.email)
			.then((data) => {
				this.setState({ groups: data })
			})
	}

	createGroup(groupName) {
		const { userProfile } = this.props.auth;
		groupHelpers.createGroup(groupName, userProfile.email)
			.then(() => {
				this.getGroups()
			})
	}

	selectGroup(group) {
		this.setState({ 
			selectedGroup: group,
			selected: true
		 })
	}


	render() {

		let display;
		if (!this.state.selected) {
			display = (
				<div>
					<CreateGroup createGroup={this.createGroup} />
					<GroupCards groups={this.state.groups} selectGroup={this.selectGroup} />
				</div>
			);

		} else {
			display = (
				<Discussion group={this.state.selectedGroup} />
			);
			
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col 12">
						{display}
					</div>
				</div>
			</div>
		)
	}

}

export default Groups; */