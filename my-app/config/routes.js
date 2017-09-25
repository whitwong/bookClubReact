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
import Discussion from '../app/components/Discussion';


// https://teamtreehouse.com/community/warning-you-should-not-use-route-component-and-route-children-in-the-same-route-route-children-will-be-ignored
const Routes = () => (

  <Router>
    <div>
      <Main>
        <Switch>
          <Route path="/library" component={Library}/>
          <Groups>
            <Route path="/discussion" component={Discussion} />
          </Groups>
          <Route path="/discover" component={Discover}/>
        </Switch>
      </Main>
    </div>
  </Router>
)

export default Routes;