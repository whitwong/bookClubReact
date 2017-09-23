import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from '../config/routes.js';
import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyBUVyIW2d33WHzArLsdPx3X-X39qV-SZLY",
//   authDomain: "bookclub-ed08b.firebaseapp.com",
//   databaseURL: "https://bookclub-ed08b.firebaseio.com",
//   projectId: "bookclub-ed08b",
//   storageBucket: "bookclub-ed08b.appspot.com",
//   messagingSenderId: "874403788158"
// };
  const config = {
    apiKey: "AIzaSyBTEYvtoqeo5iHwWDim_rif0GnSvep2mXY",
    authDomain: "trainhw-7c836.firebaseapp.com",
    databaseURL: "https://trainhw-7c836.firebaseio.com",
    projectId: "trainhw-7c836",
    storageBucket: "trainhw-7c836.appspot.com",
    messagingSenderId: "339587231309"
  };
firebase.initializeApp(config);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Routes />, document.getElementById('app'));