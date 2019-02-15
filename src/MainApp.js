import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import App from './paginations/App';
import EntryApp from './paginations/EntryApp';
import configureStore, {history} from './store';

export const store = configureStore();

const MainApp = () => (
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route path="/" component={EntryApp}/>
			</Switch>
		</Router>
	</Provider>
);

export default MainApp;
