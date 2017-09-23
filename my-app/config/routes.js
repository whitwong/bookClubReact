import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Main from '../app/components/Main';
import Home from '../app/components/Home';
import Signup from '../app/components/Signup';
import Login from '../app/components/Login';
import Library from '../app/components/Library';
import Groups from '../app/components/Groups';
import Discover from '../app/components/Discover';


const Routes = () => (

  <Router>
    <div>
      <Main/>
        <Route path="/library" component={Library}/>
        <Route path="/groups" component={Groups}/>
        <Route path="/discover" component={Discover}/>
    </div>
  </Router>
)

export default Routes;