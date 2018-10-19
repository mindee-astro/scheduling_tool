import { createStore } from 'redux';
import reducers from '../reducers/index';
import createHistory from 'history/createHashHistory';

const history = createHistory();

export default function configureStore (initialState) {
	const store = createStore(reducers, initialState);
	return store;
}

export {history}
