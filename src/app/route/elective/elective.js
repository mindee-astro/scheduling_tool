// Author: Brianna Chang
// Reviewer: Ahmad Akmaluddin
// Notes: Moved variable to be handle by state and sagas, to be added to apis i believe 


import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
} from '../../../actions/index';

<<<<<<< HEAD
// to do mouse over behaviour
import Typography from '@material-ui/core/Typography';

// icons 
import Tooltip from '../../../components/Tooltip'

//show selected module page 
import ShowSelectedMod from './components/showSelectedMod'; 

// show module selection page 
import ShowModOpt from './components/showModOptions'; 

import {
	getAllSchedule,
	getUserSchedule,
	setNotificationSnackbar
} from '../../../actions/index';


const styles = theme => ({
	card: {
		display: 'flex',
		width: 230,
		height: 60,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	  },

	arrangedCard: {
		display:'flex', 
	//},
	//button: {
	//	position: 'relative',
	//	marginTop: 30,
	//	marginLeft: 950,
	//	bottom: 10,
	},
	popover: {
		pointerEvents: 'none',
	  },
  });

//list core modules 
var coreMod = ['Product Engineering', 'Product Management', 'Project Management', 'Software Engineering'];

//list elective modules 
//for this one, we will call api and get the list
//const electMod = ['Innovation', 'Architecture', 'Analytics', 'Broadcast', ' IT Security']
var electMod = []

// viewing elective choices 
class ElectiveCard extends React.Component{
	constructor(props) {
		super(props);
	};
	
	state = {
		anchorEl: null,
		value: '12',
		selectedMod: electMod, 
	};

	// popover
	handlePopoverOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};
	
	handlePopoverClose = () => {
	this.setState({ anchorEl: null });
	};



	render() {
		const {classes} = this.props
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const emptyModList = !electMod.length;

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
							{ emptyModList
								? <ShowModOpt electMod={electMod}/>
								: <ShowSelectedMod electmod={electMod}/> 
							}
						</div>
					</CardContent>
				</Card>
			</div>
	)
}
}

const mapStateToProps = ({schedule}) => {
	const {allSchedule, userSchedule, totalSchedule} = schedule
    return{allSchedule, userSchedule, totalSchedule}
};


export default connect(mapStateToProps, {getAllSchedule, getUserSchedule, setNotificationSnackbar})(withStyles(styles)(ElectiveCard));


// elective selection
//class SelectModule extends ElectiveCard {
//	constructor(props) {
//		super(props);
//	};

//	render() {
///		const {classes} = this.props
//	}
		

//SelectModule.propTypes = {
//	classes: PropTypes.object.isRequired,
//	};


//export default withStyles(styles)(ElectiveCard);
=======
const styles = {

};


function electiveCard (props) {
	return(
		<div>
			<Card style={{padding: '10px'}}>
				<CardContent style={{textAlign: 'center'}}>
					electiveCard
				</CardContent>
			</Card>
		</div>
	)
}

const mapStateToProps = ({}) => {
    return{}
};

export default connect(mapStateToProps)(withStyles(styles)(electiveCard));
>>>>>>> staging
