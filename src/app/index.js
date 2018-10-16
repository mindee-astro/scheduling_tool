import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import startCard from './route/startCard/startCard';
import timetableCard from './route/timetableCard/timetableCard';
import electiveCard from './route/elective/elective';

class AppContainer extends Component {
	render(){
		console.log(this.props)
		return(
			<div>
				<Route exact path="/" render={() => (
			    	<Redirect to="/welcome"/>
				)}/>
				<Route path='/welcome' component={startCard}/>
				<Route path='/timetable' component={timetableCard}/>
				<Route path='/elective' component={electiveCard}/>
	        </div>
		)
	}
}

export default AppContainer;