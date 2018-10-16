import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import load from './load';

const reducers = combineReducers({
	routing: routerReducer,
    load: load,
});

export default reducers;