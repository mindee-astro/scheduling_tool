import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import page from './page';
import auth from './auth';
import schedule from './schedule';
import rotation from './rotation';

const reducers = combineReducers({
	routing: routerReducer,
    page: page,
    auth: auth, 
    schedule: schedule,
    rotation: rotation
});

export default reducers;