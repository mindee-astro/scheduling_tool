import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers/index';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

export default function configureStore (initialState) {


    const composeEnhancers =typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    // other store enhancers if any
    );
	
    const store = createStore(reducers, initialState, enhancer);

	sagaMiddleware.run(rootSaga);
	
	return store;
}

export {history}
