import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './App';
import Login from './Login';

class EntryApp extends Component{
	render(){
		const {match, isLoggedIn, location} = this.props

		const checkLoggedIn = (isLoggedIn) ? (
			<div>
				<Route path={`${match.url}`} component={App}/>	
			</div>
		) : (
			<div>
				<Redirect to={'/login'}/>
				<Route path='/login' component={Login}/>
			</div>
		)
		

		return(
			<React.Fragment>
				{console.log(location)}
				{checkLoggedIn}			
			</React.Fragment>
		)
	}
}

const mapStateToProps = ({auth}) => {
	const {isLoggedIn} = auth;
	return {isLoggedIn};
};

export default connect(mapStateToProps)(EntryApp);