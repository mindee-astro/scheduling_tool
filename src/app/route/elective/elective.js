// Author: Brianna Chang
// Reviewer: Ahmad Akmaluddin
// Notes: Moved variable to be handle by state and sagas, to be added to apis i believe 


import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
} from '../../../actions/index';
import Typography from '@material-ui/core/Typography';
// help icon
//import Tooltip from '../../../components/Tooltip'
import Tooltip from '@material-ui/core/Tooltip'
import HelpIcon from '@material-ui/icons/Help';
//show module page 
import ShowSelectedMod from './components/showSelectedMod'; 
// show module selection page 
import ShowModOpt from './components/showModOptions'; 
// tocall API
//get userID & electives from loaded credentials
import {
	updateUser,
	setNotificationSnackbar
} from '../../../actions/index'; 

const styles = theme => ({
	// design for cards 
	card: {
		display: 'flex',
		width: 230,
		height: 50,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// arrangement for module cards 
	arrangedCard: {
		display:'flex', 
		flexWrap:'wrap',
	},
	//for tooltip
	tooltip: {
		maxWidth: 220,
		},
	});

//list down all the core modules 
var coreMod = ['Product Engineering', 'Product Management', 'Project Management', 'Software Engineering'];
//user data 
var userData = {
	"data": "",
	"displayName": "",
	"joinDate": "",
	"electives": [],
	"status": 'active',
	"mentorName":"",
	"mentorEmail": ""
}
class ElectiveCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			electives: this.props.electives, 
			editMode: false, 
		};
	};

	componentDidMount(){
		this.setState({electives:this.props.electives})
	}

	componentDidUpdate(prevProps){
		if (prevProps.electives != this.props.electives){
			this.setState({
				...this.state,
				electives:this.props.electives
			})
			console.log("user fetched", this.state.electives)
		}
		}
	// when edit choices button is hit, change the editButtonHit to true to show mod selection page
	onChange = () => {
		this.setState({editMode:true})
	}
	
	//update new module list and send to updateUser
	updateModuleList = list => {
		//turn off editMode
		this.setState({editMode: false})
		if (list){
			console.log("choices got passed into function:", list)
			//in the case when user just click submit without changing anything, we dont need to update db again. 
			if (list != this.state.electives){
				userData = {
					"data": "active#2017-09-04",
					"displayName": this.props.displayname,
					"joinDate": this.props.joindate,
					"electives":list,
					"schedule": [],
					"status": 'active',
					"mentorName":this.props.mentor,
					"mentorEmail": this.props.mentorEmail
				}
				this.props.updateUser(this.props.username, userData)
			}
		}
		console.log('updated User Data List', userData)
	};

	render() {
		const {classes} = this.props
		//determine which page to show, use emptyModList 
		return(
			<div>
				<Card>
					<CardContent style={{textAlign: 'center'}}>
						<div>
							<Typography variant="body2">
									<span>
										Core Modules
										<Tooltip 
										title="The number indicates the number of months spent in the rotation"
										classes={{ tooltip: classes.tooltip }}
										>
										<HelpIcon
										fontSize="small"/>
										</Tooltip>
									</span>
							</Typography>
						</div>
						<div>
							<div className={classes.arrangedCard}>
								{coreMod.map(mod => {
									return(
										<Card className={classes.card} key={mod}>
												<CardContent>
													<Typography variant="body1">
														{mod} (3)
													</Typography>
												</CardContent>
										</Card>); 
								})}
							</div>
						</div>
						<div>
							<Typography variant="body2" style={{marginTop:15}}>
									<span>
										Elective Modules
									</span>
							</Typography>
						</div>
						<div>
							{this.state.editMode 
								? <ShowModOpt moduleList={this.updateModuleList.bind(this)} />
								: <ShowSelectedMod electMod={this.state.electives}
								onChange={this.onChange.bind(this)}/> 
							}
						</div>
					</CardContent>
				</Card>
			</div>
	)
}
};


const mapStateToProps = ({auth}) => {
	const {displayname, joindate, electives, mentoremail, mentor, username} = auth
  return{displayname, joindate, electives, mentoremail, mentor, username}
};

export default connect(mapStateToProps, {updateUser, setNotificationSnackbar})(withStyles(styles)(ElectiveCard));