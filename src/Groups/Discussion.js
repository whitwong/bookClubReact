import React, {Component} from 'react';

import discussionHelpers from '../utils/helpersDiscussion';

import {Tabs, Tab} from 'material-ui/Tabs';
import * as firebase from 'firebase';
import CreateDiscussion from './DiscussionCreate';

const config = {
  apiKey: "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY",
  authDomain: "bookclub-ed08b.firebaseapp.com",
  databaseURL: "https://bookclub-ed08b.firebaseio.com",
  projectId: "bookclub-ed08b",
  storageBucket: "bookclub-ed08b.appspot.com",
  messagingSenderId: "874403788158"
};
firebase.initializeApp(config);

class Discussion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			name: "",
			time: firebase.database.ServerValue.TIMESTAMP,
			discList: []
		}
		this.getDiscussions = this.getDiscussions.bind(this);
	}

	getDiscussions() {
		discussionHelpers.getDiscussionsOfGroup(this.props.groupId)
			.then((ListOfDiscussions) => {
				this.setState({ discList: ListOfDiscussions })
			})
	}

	componentDidMount(){
		this.getDiscussions();
		const rootRef = firebase.database().ref().child('chat');
		// Figure out how to get chat messages out of firebase without unique keys for each message
		const chatRef = rootRef.child('chat' + 1).child("-Kty-D9BrB5qIgKEhvt8");
		chatRef.on('value', snap => {
			this.setState({
				message: snap.val().message,
				name: snap.val().name,
				time: snap.val().time
			})
		})
	}

	render(){
		{/*const {chats} = this.props;
		const chatIds = Object.keys(chats);*/}

		let display;
		if (!this.state.discList.data){
			display = (
			  <Tabs className="col-sm-5">
			    <Tab label="+ Create Chat" >
			    	<CreateDiscussion groupId={this.props.groupId} getDiscussions={this.getDiscussions} />
			    </Tab>
			  </Tabs>
			);
		} else {
		  display = (
			  <Tabs className="col-sm-5">
			  	<Tab label="+ Create Chat" >
			    	<CreateDiscussion groupId={this.props.groupId} getDiscussions={this.getDiscussions} />
			    </Tab>
			    {this.state.discList.data.map((discussion, i)=>{
			    	return (
			    		<Tab key={i} label={discussion.name}>
					      <div>
					        <p>
					          {this.state.name}: {this.state.message}
					        </p>
					        {/*<div>
					        	{chatIds.map((id) => {
					        		const chat = chat[id]
					        		return (
					        			<div key={id}>
					        				<div>{chat.name}: {chat.message}</div>
					        			</div>
					        		)
					        	})}
					        </div>*/}
					      </div>
			    		</Tab>
			    	)
			    })}
			  </Tabs>
		  );
		}

		return(
			<div className="container">
				{display}
			</div>
		)
	}
}

export default Discussion;