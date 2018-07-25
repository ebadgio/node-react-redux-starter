import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// React Router
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'; // Import history in any component you want to use it

// Root reducer
import rootReducer from './reducers/index';

// Components
import Navbar from './components/Navbar'
import Home from './components/Home/HomeContainer';

// Initialize redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
        <Router history={history}>
        	<div>
		    	<Navbar title={"React Redux Starter"}
		    			tabs={[
		    					{text: "Home", route: '/home'},
		    					{text: "Profile", route: '/profile'}
							]}/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/home" component={Home}/>
					<Route path="/profile" render={() => <div className="page-wrapper">
										    				<h1>This is the profile page!</h1>
										    			</div>}/>
				</Switch>
    		</div>
        </Router>
  </Provider>,
   document.getElementById('root'));