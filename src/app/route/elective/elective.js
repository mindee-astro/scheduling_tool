// Author: Brianna Chang
// Reviewer: Ahmad Akmaluddin
// Notes: Moved variable to be handle by state and sagas, to be added to apis i believe 


import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
} from '../../../actions/index';
import Typography from '@material-ui/core/Typography';
// help icon
import Tooltip from '../../../components/Tooltip'
//show module page 
import ShowSelectedMod from './components/showSelectedMod'; 
// show module selection page 
import ShowModOpt from './components/showModOptions'; 
// tocall API
import {
	updateUser,
	getUser,
	setNotificationSnackbar
} from '../../../actions/index'; 

const styles = theme => ({
	// design for cards 
	card: {
		display: 'flex',
		width: 230,
		height: 60,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// arrangement for module cards 
	arrangedCard: {
		display:'flex', 
	},
  });

//list down all the core modules 
var coreMod = ['Product Engineering', 'Product Management', 'Project Management', 'Software Engineering'];
//const user = {
 //   "data": "active#2010-01-01",
 //   "displayName": "Michael Fu",
 //   "joinDate": "2010-01-01",
 //   "electives": [],
 //   "schedule": [],
 //   "status": "suspended",
 //  "mentorName": "Syahrul",
 //   "mentorEmail": "shahrul_sultan@astro.com.my"
 //} 
//const electMod = user['electives']
class ElectiveCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			prevModuleList: [], 
			editMode: false, 
			updatedModuleList: null, 
			listUser: {},
		};
	};

	componentDidMount(){
		this.props.getUser("ffsfu1")
	}

	componentDidUpdate(prevProps){
		if (prevProps.listUser != this.props.listUser){
			this.setState({
				...this.state,
				listUser:this.props.listUser
			})
			console.log("user fetched", this.state.listUser)
		}
		if (prevProps.prevModuleList != this.props.listUser['electives']){
			this.setState({
				...this.state,
					prevModuleList:this.props.listUser['electives']
			})
		}
		console.log("electives:",this.state.prevModuleList)
	}
	// when edit choices button is hit, change the editButtonHit to true to show mod selection page
	onChange = () => {
		this.setState({editMode:true})
	}
	
	//update new module list and send to updateUser
	updateModuleList = list => {
		//turn off editButtonHit
		this.setState({editMode: false})
		if (list){
			this.setState({updatedModuleList: list})
			console.log("updatedModList", this.state.updatedModuleList)
			if (list != this.state.prevModuleList){
				this.state.listUser['electives'] = list
				this.props.updateUser(this.state.listUser['pk'], this.state.listUser)
			}
		}
		//in the case when user just click submit without changing anything, we dont need to update db again. 
	};

	render() {
		const {classes} = this.props

		//determine which page to show, use emptyModList 
		return(
			<div>
				<Card style={{padding: '10px'}}>
					<CardContent style={{textAlign: 'center'}}>
						<div>
							<Typography variant="body2" style={{marginTop:15}}>
									<span>
										Core Modules
										<Tooltip
											iconType="help"
											color="primary"
											message="The number after the rotation name indicates the number of months you will spend in the rotations"
										/>
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
							{this.state.editButtonHit 
								? <ShowModOpt moduleList={this.updateModuleList.bind(this)} />
								: <ShowSelectedMod electMod={this.state.prevModuleList}
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
	const {listUser} = auth
  return{listUser}
};

export default connect(mapStateToProps, {updateUser,getUser, setNotificationSnackbar})(withStyles(styles)(ElectiveCard));