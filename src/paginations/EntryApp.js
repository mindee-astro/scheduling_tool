import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './App';
import Login from './Login';
import Popup from '../components/Popup';
import ResponseSnackbar from '../components/ResponseSnackbar';
import { 
	authToken,
} from '../actions/index';

class EntryApp extends Component{
	componentDidUpdate(){
		this.props.authToken(this.props.sessionToken, this.props.username)
	}

	render(){
		const {match, isLoggedIn, location} = this.props

		const checkLoggedIn = (isLoggedIn) ? (
			<div>
				<Route path={`${match.url}`} component={App}/>	
			</div>
		) : (location.pathname!='/login') ? (
			<div>
				<Redirect to={'/login'}/>
				<Route path='/login' component={Login}/>
			</div>
		) : <Route path='/login' component={Login}/>
		

		return(
			<React.Fragment>
				<ResponseSnackbar/>
				<Popup/>
				{checkLoggedIn}			
			</React.Fragment>
		)
	}
}

const mapStateToProps = ({auth}) => {
	const {isLoggedIn, username, sessionToken} = auth;
	return {isLoggedIn, username, sessionToken};
};

export default connect(mapStateToProps, {authToken})(EntryApp);