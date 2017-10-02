
import React, {Component} from 'react';

import discussionHelpers from '../utils/helpersDiscussion';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as firebase from 'firebase';
import CreateDiscussion from './CreateDiscussion';

const config = {
  apiKey: "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY",
  authDomain: "bookclub-ed08b.firebaseapp.com",
  databaseURL: "https://bookclub-ed08b.firebaseio.com",
  projectId: "bookclub-ed08b",
  storageBucket: "bookclub-ed08b.appspot.com",
  messagingSenderId: "874403788158"
};
firebase.initializeApp(config);

const divStyle = {
    textAlign: "center"
};

class Discussion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			name: "",
			time: "",
			discList: [],
			userMessage: "",
			firebaseMessages: [],
			chatId: ""
		}
		this.getDiscussions = this.getDiscussions.bind(this);
		this.handleSubmitChat = this.handleSubmitChat.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTabClick = this.handleTabClick.bind(this);
		this.getData = this.getData.bind(this);
	}

  handleChange = (event) => {
    var newState={};
    newState[event.target.id]=event.target.value;
    this.setState(newState);
  }

  handleTabClick(tab) {
  	console.log("DiscussionID: " + tab.props.value);
  	this.setState({ chatId: tab.props.value }, this.getData)
  }

	getDiscussions() {
		discussionHelpers.getDiscussionsOfGroup(this.props.group.id)
			.then((ListOfDiscussions) => {
				console.log(ListOfDiscussions);
				this.setState({ discList: ListOfDiscussions })
			})
	}

  handleSubmitChat = (event) => {
    event.preventDefault();
    console.log("Chat ID: " + this.state.chatId)
		const chatRef = firebase.database().ref().child('chat').child('chat'+this.state.chatId);
		const chat = {
			message: this.state.userMessage,
			name: "Whitney",
			time: firebase.database.ServerValue.TIMESTAMP
		}
		chatRef.push(chat);
    this.setState({ userMessage: "" });
  }

  getData() {
		const chatRef = firebase.database().ref().child('chat').child('chat'+this.state.chatId);
		chatRef.on('value', snap => {
			let firebaseMessages = snap.val();
			let newStateChat = [];
			for (let chat in firebaseMessages){
				newStateChat.push({
					id: chat,
					message: firebaseMessages[chat].message,
					name: firebaseMessages[chat].name
				})
			}
			this.setState({
				firebaseMessages: newStateChat
			})
		})
  }

	componentDidMount(){
		this.getDiscussions();
	}

	render(){
		let display;
		if (!this.state.discList.data){
			display = (
			  <Tabs className="col s5">
			    <Tab label="+ Create Chat" >
			    	<CreateDiscussion groupId={this.props.groupId} getDiscussions={this.getDiscussions} />
			    </Tab>
			  </Tabs>
			);
		} else {
		  display = (
			  <Tabs className="col s8 offset-s2">
			  	<Tab label="+ Create Chat" >
			    	<CreateDiscussion groupId={this.props.group.id} getDiscussions={this.getDiscussions} />
			    </Tab>
			    {this.state.discList.data.map((discussion, i)=>{
			    	return (
			    		<Tab key={i} label={discussion.name} value={discussion.id} onActive={this.handleTabClick}>
					      <div>
					      {this.state.firebaseMessages.map((chat) => {
					      	return(
					      		<p key={chat.id}>
					          	{chat.name}: {chat.message}
					        	</p>
					        )
					      })}
					        <TextField 
					          value={this.state.userMessage}
					          type="text"
					          placeholder="Add to the conversation!"
					          id="userMessage"
					          onChange={this.handleChange}
					          fullWidth={true}
					          onSubmit={(event) => this.handleSubmitChat(event)}
					         />
					        <RaisedButton label="Add" type="submit" primary={true} onClick={this.handleSubmitChat} />
					      </div>
			    		</Tab>
			    	)
			    })}
			  </Tabs>
		  );
		}

		return(
			<div className="container" style={divStyle}>
				{display}
			</div>
		)
	}
}

export default Discussion;


/* import React, {Component} from 'react';

import discussionHelpers from '../utils/helpersDiscussion';


import {deepOrange500} from 'material-ui/styles/colors';
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


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Discussion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			name: "",
			time: firebase.database.ServerValue.TIMESTAMP
		}
		this.getDiscussions = this.getDiscussions.bind(this);
	}

	componentDidMount() {
		this.getDiscussions();
	}

	getDiscussions() {
		discussionHelpers.getDiscussionsOfGroup(this.props.groupId)
			.then((results) => {
				console.log("Discussion List: " + results);
			});
	}

	componentDidMount(){
		const rootRef = firebase.database().ref().child('chat');
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


		return(
			<div className="container">
				  <Tabs className="col-sm-9">
				    <Tab label="+ Create Chat" >
				    	<CreateDiscussion groupId={this.props.groupId} />
				    </Tab>


				  </Tabs>
			</div>
		)
	}
}

export default Discussion; */