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

// to do check box 
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import allElecMod from './allElectiveModules';
import Checkbox from '@material-ui/core/Checkbox';

//listing 
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';

// icons 
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
//select modulles 
import die from './electoMod'; 

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
//var electMod = ['Innovation', 'Architecture', 'Analytics', 'Broadcast', ' IT Security']
var electMod = []


// viewing elective choices 
class ElectiveCard extends React.Component{
	constructor(props) {
		super(props);
	};
	
	state = {
		anchorEl: null,
		checked: [1],
		value: '12',
	};

	// popover
	handlePopoverOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};
	
	handlePopoverClose = () => {
	this.setState({ anchorEl: null });
	};

	//for select options
  	handleChange = formSubmitEvent => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(formSubmitEvent.name);
		const newChecked = [...checked];

		if (currentIndex === -1) {
				this.setState({value: this.state.value - formSubmitEvent.weight});
			  	newChecked.push(formSubmitEvent.name);
		} else {
			this.setState({value: parseInt(formSubmitEvent.weight, 10) + this.state.value});
		  	newChecked.splice(currentIndex, 1);
		}
		this.setState({
		  checked: newChecked,
		});
		
	};

	selectMod = () => {
		const {classes} = this.props
		return(
			<div> 
				<div>
					<Typography component="h2" style={{marginTop:50}}>
						Elective Modules
					</Typography>
				</div>
				<div className={classes.arrangedCard}>
					<Typography>
						Minimum required months are 11. Please select up to 4-5 preferred modules. 
					</Typography>
					<Typography variant="body2" style={{marginLeft: 300}}>
						Months Left
					</Typography>
					<Typography variant="title" style={{marginLeft: 50}}>
						{this.state.value}
					</Typography>
				</div>
				<div>
					{allElecMod.map(item =>(
						<List>
							<ListItem key={item.name} role={undefined} dense button onClick={this.handleChange(item)}>
							<FormControl>
							<FormLabel>
							<FormGroup>
								<FormControlLabel control={
									<Checkbox 
									checked={this.state.checked.indexOf(item.name) !== -1}
									tabIndex={-1}
									disableRipple/>
								}
								/>
							</FormGroup>
							</FormLabel>
							</FormControl>
							<ListItemText primary={item.label+" "+"("+item.weight+")"} />
							</ListItem>
						</List>
					))}
				</div>
				<div>
					<Button disabled={this.state.value > 1} variant='outlined' color='secondary' className={classes.button}>
						Submit Choices
					</Button>
				</div> 
			</div>
		);
	};
			
	render() {
		const {classes} = this.props
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const isEmpty = !electMod.length; 
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
						<die/>
					</div>
				</div>
		)
	}
}

ElectiveCard.propTypes = {
	classes: PropTypes.object.isRequired,
	};

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


export default withStyles(styles)(ElectiveCard);
