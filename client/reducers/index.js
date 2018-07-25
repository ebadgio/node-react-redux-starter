import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
	homeReducer: homeReducer   
	// add all your reducers here 
});

export default rootReducer;