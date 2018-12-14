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

// to do mouse over behaviour
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

// icons 
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

//show selected module page 
import ShowSelectedMod from './showSelectedMod'; 

// show module selection page 
import ShowModOpt from './showModOptions'; 


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
		marginTop: 10,
		display:'flex', 
		flexWrap: ' wrap', 
	},
	button: {
		position: 'relative',
		marginTop: 30,
		marginLeft: 950,
		bottom: 10,
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
			//core modules listing 
				<div>
					<div className={classes.arrangedCard}>
						<Typography component="h2" style={{marginTop:15}}>
								Core Modules
						</Typography>
						<Typography
							aria-owns={open ? 'mouse-over-popover' : undefined}
							aria-haspopup="true"
							onMouseEnter={this.handlePopoverOpen}
							onMouseLeave={this.handlePopoverClose}
							>
							<IconButton>
								<HelpIcon />
							</IconButton>
							</Typography>
							<Popover
							id="mouse-over-popover"
							className={classes.popover}
							open={open}
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							onClose={this.handlePopoverClose}
							disableRestoreFocus
							>
							<Typography>The number after the rotation name indicates the number of months you will spend in the rotations</Typography>
							</Popover>
					</div>
					<div>
						<div className={classes.arrangedCard}>
							{coreMod.map(mod => {
								return(
									<Card className={classes.card}>
											<CardContent>
												<Typography>
													{mod} (3)
												</Typography>
											</CardContent>
									</Card>); 
							})}
						</div>
					</div>
					<div>
						{ emptyModList
							? <ShowModOpt/>
							: <ShowSelectedMod electmod= {electMod}/> 
						}
					</div>
				</div>
		)
	}
}

ElectiveCard.propTypes = {
	classes: PropTypes.object.isRequired,
	};

export default withStyles(styles)(ElectiveCard);


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