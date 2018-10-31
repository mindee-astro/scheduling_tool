import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import timetableCard from './route/timetableCard/timetableCard';
import electiveCard from './route/elective/elective';
import profileCard from './route/profile/profile';
import configurationCard from './route/configuration/configuration';
import protegeCard from './route/protege/protegeCard';
import rotationCard from './route/rotations/rotationCard';

class AppContainer extends Component {

	render(){
		const {match} = this.props

		return(
			<div>
				{console.log(this.props)}
				<Route exact path={`${match.url}`} render={() => (
			    	<Redirect to={`${match.url}schedule`}/>
				)}/>
				<Route path={`${match.url}schedule`} component={timetableCard}/>
				<Route path={`${match.url}elective`} component={electiveCard}/>
				<Route path={`${match.url}profile`} component={profileCard}/>
				<Route path={`${match.url}configuration`} component={configurationCard}/>
				<Route path={`${match.url}protege`} component={protegeCard}/>
				<Route path={`${match.url}rotation`} component={rotationCard}/>
	        </div>
		)
	}
}

export default withRouter(AppContainer);