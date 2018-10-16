import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './paginations/App';
import configureStore from './store';

export const store = configureStore();

const MainApp = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" component={App}/>
			</Switch>
		</Router>
	</Provider>
);

export default MainApp;