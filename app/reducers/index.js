// reducers/index.js

import { combineReducers } from 'redux';
import routes from './routes';
import userReducer from './user';
//import itemReducer from './items';
// import { reducer as formReducer } from 'redux-form';
// ... other reducers

export default combineReducers({
    routes,
    userReducer,
    //itemReducer,
    // formReducer
    // ... other reducers
});