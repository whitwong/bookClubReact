// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Home = require("../components/Home");
var Signup = require("../components/Signup");
var Login = require("../components/Login");
var Library = require("../components/Library");
var Discussions = require("../components/Discussions");
var Discover = require("../components/Discover");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Library" component={Library} />
      <Route path="Discussions" component={Discussions} />
      <Route path="Discover" component={Discover} />

      <IndexRoute component={Library} />

    </Route>
  </Router>
);
