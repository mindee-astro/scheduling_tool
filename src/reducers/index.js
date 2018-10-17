import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import page from './page';
import proteges from './proteges';

const reducers = combineReducers({
	routing: routerReducer,
    page: page,
    proteges: proteges
});

export default reducers;