import { combineReducers } from 'redux';

// Please, make specific files to store all related reducers e.g. login reducer as authReducer.js and import that here and keep that inside coombimereduer.

// import { loginReducer, signupReducer } from './authReducer';

// MAKE ALL NEW REDUCERS IN THIS DIRECTORY : src/reducer/yourreducer.js

const rootReducer = combineReducers({
	// e.g. login: loginReducer
	// signup: signupReducer
});

export default rootReducer;
