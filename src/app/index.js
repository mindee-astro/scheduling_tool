import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import timetableCard from './route/timetableCard/timetableCard';
import electiveCard from './route/elective/elective';
import profileCard from './route/profile/profile';
import configurationCard from './route/configuration/configuration';
import protegeCard from './route/protege/protegeCard';
import rotationCard from './route/rotations/rotationCard';
import apiCard from './route/api/api';
import ChangePassword from './route/changePassword/ChangePassword/ChangePassword';

class AppContainer extends Component {

	render(){
		const {match} = this.props

		return(
			<div>
				<Route exact path='/login' exact={true} render={() => (
			    	<Redirect to={`${match.url}schedule`}/>
				)}/>
				<Route path={`${match.url}schedule`} component={timetableCard}/>
				<Route path={`${match.url}elective`} component={electiveCard}/>
				<Route path={`${match.url}profile`} component={profileCard}/>
				<Route path={`${match.url}configuration`} component={configurationCard}/>
				<Route path={`${match.url}protege`} component={protegeCard}/>
				<Route path={`${match.url}rotation`} component={rotationCard}/>
				<Route path={`${match.url}api`} component={apiCard}/>
				<Route path={`${match.url}changepassword`} component={ChangePassword}/>
	        </div>
		)
	}
}

export default withRouter(AppContainer);