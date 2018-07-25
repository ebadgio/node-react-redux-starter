/*
* This is a sample reducer. 
* The state is an object with one key: header.
* header is set to an initial value of 'This is the home page!'
* A reducer state can have anything in it that you want.
*/
const homeReducer = (state = {
	header: 'This is the home page!'
}, action) => {
	/* 
	* Actions are used to trigger reducers. For any given reducer,
	* we might have a number of different action types.
	* So we use a switch statement.
	*/ 
	switch (action.type) {
		case 'CHANGE_HEADER':
			/* 
			* For this reducer we just want to return the state, but modify the header field
			* to reflect the new header passed from the action.
			*/
			const newState = Object.assign({}, state); // Deep copy of the current state
			newState.header = action.header; // Update header
			return newState; 
		/*
		* If the action does not match any cases,
		* we want the default behavior to just return the state
		*/
		default:
			return state;
	}
}

export default homeReducer;