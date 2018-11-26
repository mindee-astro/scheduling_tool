import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {
	getAllSchedule,
	getUserSchedule,
	loginUser,
	getAllUser,
	updateUser
} from '../../../actions/index';

const styles = {

}

const temp = [
	{
		HHKAHMAD1:[
			{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	}
		  ],
	},
	{
		 CPSHEISH:[
		 	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  ],
	}
];


const status = [
	{label: "Active"},
	{label: "Pending"},
	{label: "Deactive"}
]



class apiCard extends Component {
	constructor(props){
		super(props)
		this.state={
			responseLabel: '',
			response: '',
			username: 'username',
			password: 'password',
			userid: '12345',
			displayname: '',
			joindate: '',
			status: 'active',
			data: {

			  "username": "string",
			  "displayName": "string",
			  "password": "string",
			  "joinDate": "string",
			  "electives": [
			    "string"
			  ],
			  "status": "active",
			  "mentor": "string"

			}
		}
	}

	componentDidUpdate(prevProps, prevState){
		if (prevProps.allSchedule != this.props.allSchedule)
		{
			this.setState({
				...this.state,
				response: JSON.stringify(this.props.allSchedule)
			})
		} else if (prevProps.userSchedule != this.props.userSchedule) {
			this.setState({
				...this.state,
				response: JSON.stringify(this.props.userSchedule)
			})
		} else if (prevProps.isLoggedIn != this.props.isLoggedIn) {
			this.setState({
				...this.state,
				response: JSON.stringify(this.props.isLoggedIn)
			})
		} else if (prevProps.listUser != this.props.listUser) {
			this.setState({
				...this.state,
				response: JSON.stringify(this.props.listUser)
			})
		}
	}

	handleClick(name){
		this.setState({
			...this.state,
			responseLabel: name
		}, ()=>{this.handleApiCall()})
	}

	handleChange=name=>event=>{
		this.setState({
			...this.state,
			[name]: event.target.value
		})
	}

	handleApiCall(){
		console.log(this.props)
		switch(this.state.responseLabel){
			case 'schedule.allSchedule':
				return(
					this.props.getAllSchedule()
				)

			case 'schedule.userSchedule':
				return(
					this.props.getUserSchedule(this.state.userid)
				)

			case 'auth.isLoggedIn':
				return(
					this.props.loginUser(this.state.username, this.state.password)
				)

			case 'auth.listUser':
				return(
					this.props.getAllUser()
				)

			case 'auth.updateUser':
				return(
					this.props.updateUser(this.state.userid, this.state.data)
				)

			default:
				return(
					this.setState({
					...this.state,
					response: 'Undefined'
					})
				)
		}
	}

	render(){
	return(
			<div>
				<Card>
					<CardContent style={{textAlign: 'center'}}>
						List of API
					</CardContent>
				</Card>
			
				<div style={{paddingTop: '10px'}}>
					<Card>
						<CardContent style={{textAlign: 'center'}}>
							Config
							<br/><br/>
							
							<Button variant="outlined">
								Get All Rotations
								
							</Button>
						</CardContent>
					</Card>

				</div>
				<div style={{paddingTop: '10px'}}>
					<Card>
						<CardContent style={{textAlign: 'center'}}>
							<span>Schedule</span>
							<br/><br/>
							
							<Button variant="outlined" onClick={()=>this.handleClick('schedule.allSchedule')}>
								Get All Schedule
							</Button>
							<br/><br/>
							
							<TextField
					          required
					          id="standard-required"
					          defaultValue={this.state.userid}
					          margin="normal"
					          onChange={this.handleChange('userid')}
					        />
							<Button variant="outlined" onClick={()=>this.handleClick('schedule.userSchedule')}>
								Get User Schedule
							</Button>
						</CardContent>
					</Card>
					
				</div>
				<div style={{paddingTop: '10px'}}>
					<Card>
						<CardContent style={{textAlign: 'center'}}>
							Auth
							<br/><br/>
							<Button variant="outlined" onClick={()=>this.handleClick('auth.listUser')}>
								Get All Users
							</Button>
							<br/><br/>
							<div style={{borderStyle: 'solid', padding: '10px'}}>
								<TextField
						          required
						          id="standard-required"
						          defaultValue={this.state.username}
						          margin="normal"
						          onChange={this.handleChange('username')}
						        />
						        <TextField
						          required
						          id="standard-required"
						          defaultValue={this.state.password}
						          margin="normal"
						          onChange={this.handleChange('password')}
						        />
								<Button variant="outlined" onClick={()=>this.handleClick('auth.isLoggedIn')} disabled={this.props.isLoggedIn}>
									Login
								</Button>
							</div>
							<br/><br/>
							<div style={{borderStyle: 'solid', padding: '10px'}}>
								<span>User Id: </span><TextField defaultValue={this.state.userid} onChange={this.handleChange('userid')}/><br/>
								<span>data: "username": "string",<br/>
			  					"displayName": "string",<br/>
			  					"password": "string",<br/>
			  					"joinDate": "string",<br/>
							  	"electives": [<br/>
							    "string"<br/>
							  	],<br/>
							  	"status": "active",<br/>
							  	"mentor": "string"<br/>
							  	</span>
								<br/>
								<Button variant="outlined" onClick={()=>this.handleClick('auth.updateUser')}>
									Update User
								</Button>
							</div>
							<br/><br/>
							<div style={{borderStyle: 'solid', padding: '10px'}}>
								<span>data: "username": "string",<br/>
				  					"displayName": "string",<br/>
				  					"password": "string",<br/>
				  					"joinDate": "string",<br/>
								  	"electives": [<br/>
								    "string"<br/>
								  	],<br/>
								  	"status": "active",<br/>
								  	"mentor": "string"<br/>
								  	</span>
									<br/>
								<Button variant="outlined" onClick={()=>this.handleClick('auth.createUser')}>
									Create User
								</Button>
							</div>
							<br/><br/>
							<Button variant="outlined">
								Update User
							</Button>
						</CardContent>
					</Card>
				</div>
				<div style={{paddingTop: '10px'}}>
					<Card>
						<CardContent style={{textAlign: 'center'}}>
							State
							<br/><br/>
							
							<span style={{
								fontFamily: 'Courier New',
								fontSize: '0.7em'
							}}>
								<span style={{color: 'green'}}>{this.state.responseLabel}:</span>
								<br/>
								{this.state.response}
							</span>

						</CardContent>
					</Card>
				</div>

			</div>
		)
	}
}

const mapStateToProps = ({schedule, auth}) => {
	const {allSchedule, userSchedule} = schedule;
	const {isLoggedIn, listUser} = auth;
    return{allSchedule, userSchedule, isLoggedIn, listUser};
};

export default connect(mapStateToProps, {getUserSchedule, getAllSchedule, loginUser, getAllUser, updateUser})(withStyles(styles)(apiCard));