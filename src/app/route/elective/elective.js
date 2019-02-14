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
//show button 
import Button from '@material-ui/core/Button';
// show module selection page 
import ShowModOpt from './components/showModOptions'; 
// tocall API
//get userID & electives from loaded credentials
import {
	updateUser,
	getAllRotations,
	setNotificationSnackbar
} from '../../../actions/index'; 

const styles = theme => ({
	// design for cards 
	card: {
		display: 'flex',
		width: 230,
		height: 50,
		marginLeft: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// arrangement for module cards 
	arrangedCard: {
		display:'flex', 
		flexWrap:'wrap',
		justifyContent: 'center',
	},
	//for tooltip
	tooltip: {
		maxWidth: 220,
		},
	});

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
			rotations: [],
		}
	}
	componentDidMount(){
		this.props.getAllRotations()
	}

	componentDidUpdate(prevProps){
		console.log("electives",this.props.electives)
		if (prevProps.electives != this.props.electives){
			this.setState({
				...this.state,
				electives:this.props.electives,
			})
		}
		if (prevProps.rotations != this.props.rotations){
			this.setState({
				...this.state,
				rotations:this.props.rotations.rotations
			})
		}
		console.log('all rotations',this.state.rotations)
		}

	//get module dictioanry 
	getModuleDictionary=(module)=>{
		var dict = []
		for (var eMod in module){
			console.log('Emod:', eMod)
			this.state.rotations.map(item=>{
				if (module[eMod]==item.pK){
					dict.push(
						{
						name: item.name,
						weight: item.duration,
					}
					)
				}
			}
			)
		}
		console.log("module dictionary is:", dict)
		return(dict)
	}
	// when edit choices button is hit, change the editButtonHit to true to show mod selection page
	onChange = () => {
		this.setState({editMode:true})
	}

	//update new module list and send to updateUser
	updateModuleList = list => {
		//empty list to store electives id 
		var rot_id =[]
		//turn off editMode
		this.setState({editMode: false})
		// if list passed is null, meaning they cancel submission 
		// then we dont process
		if (list){
			console.log("choices got passed into function:", list)
			// change the list into rotations ID 
			for (var elective in list){
				this.state.rotations.map(check=>{
					if (list[elective] == check.name){
						rot_id.push(check.pK)
					}
				}
				)
			}
			console.log('rotation_id', rot_id)
			//in the case when user just click submit without changing anything, we dont need to update db again. 
			if (rot_id != this.state.electives){
				userData = {
					"data": "active#2017-09-04",
					"displayName": this.props.displayname,
					"joinDate": this.props.joindate,
					"electives":rot_id,
					"schedule": [],
					"status": 'active',
					"mentorName":this.props.mentor,
					"mentorEmail": this.props.mentorEmail
				}
				this.props.updateUser(this.props.username, userData)
			}
		}
		console.log('updated User Data List', userData)
	}

	render() {
		const {classes} = this.props
		const dict =this.getModuleDictionary(this.state.electives)
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
								{this.state.rotations.map(mod => {
									if (mod.data == 'core'){
										return(
										<Card className={classes.card} key={mod}>
												<CardContent>
													<Typography variant="body1">
														{mod.name} ({mod.duration})
													</Typography>
												</CardContent>
										</Card>); 
									}
								})}
							</div>
						</div>
						<div>
							<Typography variant="body2" style={{marginTop:40}}>
									<span>
										Elective Modules
									</span>
							</Typography>
						</div>
						<div>
							{this.state.editMode 
								? <ShowModOpt moduleList={this.updateModuleList.bind(this)} />
								: 
								<div>
									<div className={classes.arrangedCard}>
										{dict.map(mod => {
											return(
												<Card className={classes.card}>
													<div>
														<CardContent>
															<Typography variant="body1">
																{mod.name} ({mod.weight})
															</Typography>
														</CardContent>
													</div>
												</Card>); 
										})}
									</div>
									<div style={{paddingTop:20}}>
										<Button onClick={this.onChange} style={{float: 'right'}}>
											Edit Choices
										</Button>
									</div> 
								</div>
							}
						</div>
					</CardContent>
				</Card>
			</div>
	)
}
};


const mapStateToProps = ({auth, rotation}) => {
	const {displayname, joindate, electives, mentoremail, mentor, username} = auth
	const {rotations} = rotation
  return{displayname, joindate, electives, mentoremail, mentor, username, rotations}
};

export default connect(mapStateToProps, {updateUser, getAllRotations,setNotificationSnackbar})(withStyles(styles)(ElectiveCard));