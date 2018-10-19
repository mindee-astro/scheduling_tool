import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import page from './page';
import auth from './auth';

const reducers = combineReducers({
	routing: routerReducer,
    page: page,
    auth: auth
});

export default reducers;