import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as firebase from 'firebase';
import CreateDiscussion from './discussionCreate';


const config = {
  apiKey: "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY",
  authDomain: "bookclub-ed08b.firebaseapp.com",
  databaseURL: "https://bookclub-ed08b.firebaseio.com",
  projectId: "bookclub-ed08b",
  storageBucket: "bookclub-ed08b.appspot.com",
  messagingSenderId: "874403788158"
};
firebase.initializeApp(config);

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class Discussion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: "",
			name: "",
			time: firebase.database.ServerValue.TIMESTAMP
		}
	}

	componentDidMount(){
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
		return(
			<div className="container">
				<MuiThemeProvider muiTheme={muiTheme}>
				  <Tabs>
				    <Tab label="+ Create Chat" >
				    	<CreateDiscussion />
				    </Tab>
				    <Tab label="Test Tab" >
				      <div>
				        <h2 style={styles.headline}>Tab Two</h2>
				        <p>
				          {this.state.name}: {this.state.message}
				        </p>
				        <p>
				          You can put any sort of HTML or react component in here. It even keeps the component state!
				        </p>
				      </div>
				    </Tab>
				  </Tabs>
				</MuiThemeProvider>
			</div>
		)
	}
}

export default Discussion;