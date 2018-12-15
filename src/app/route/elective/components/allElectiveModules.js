<<<<<<< HEAD
const allElectMod = [
	
    {
        name: 'analytics',
        label: 'Analytics',
        weight: '3', 
    },
    {
        name: 'achitecture',
        label: 'Architecture',
        weight: '3', 
    },
    {
        name: 'broadcast',
        label:'Broadcast',
        weight: '3', 
    },
    {
        name: 'systems',
        label: 'Enterprise Systems',
        weight: '3', 
    },
    {
        name: 'assignment',
        label: 'External Assignment',
        weight: '2', 
    },
    {
        name: 'innovation',
        label: 'Innovation',
        weight: '3', 
    },
    {
        name: 'security',
        label: 'IT Security',
        weight: '1', 
    },
    {
        name: 'tfm',
        label: 'Teach For Malaysia',
        weight: '3', 
    }
]

export default allElectMod
=======
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
import Divider from '@material-ui/core/Divider'; 
import { ListItem } from '@material-ui/core';


const styles = theme => ({
	card: {
		display: 'flex',
		width: 210,
		height: 60,
		marginLeft: 10,
		marginTop:10,
	  },
	details: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf:'left'
	},
	controls: {
		display: 'flex',
	},
	arrangedCard: {
		display:'flex', 
		flexWrap: ' wrap', 
	},
	button: {
		position: 'relative',
		marginTop: 30,
		marginLeft: 950,
		bottom: 10,
	},

  });

//list core modules 
var coreMod = ['Product Engineering', 'Product Management', 'Project Management', 'Software Engineering'];

//list elective modules 
//for this one, we will call api and get the list
var electMod = ['Innovation', 'Architecture', 'Analytics', 'Broadcast', ' IT Security']

// viewing elective choices 
function electiveCard (props) {
	const {classes, theme} = props

	return(
		//core & elective modules listing 
			<div>
				<div>
				<Typography component="h2" variant="h5" style={{marginTop:50}}>
						Core Modules
				</Typography>
				</div>
				<div className={classes.arrangedCard}>
						{coreMod.map(mod => {
							return(
								<Card className={classes.card}>
									<div>
										<CardContent className={classes.controls}>
											<Typography>
												{mod} (3)
											</Typography>
										</CardContent>
									</div>
								</Card>); 
						})}
				</div>
				<div>
					<Typography component="h2" variant="h5" style={{marginTop:50}}>
						Elective Modules
					</Typography>
				</div>
				<div className={classes.arrangedCard}>
						{electMod.map(mod => {
							return(
								<Card className={classes.card}>
									<div>
										<CardContent className={classes.controls}>
											<Typography>
												{mod} (3)
											</Typography>
										</CardContent>
									</div>
								</Card>); 
						})}
				</div>
			<div>
				<Button variant='outlined' color='secondary' className={classes.button}>
					Edit Choices
				</Button>
			</div> 
	</div>
	)
}

// elective selection
class CheckboxesGroup extends React.Component {
	constructor(props) {
		super(props);
	};
	
	state = {
		checked: [1],
		value: '12',
	};

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


	render() {
		const {classes, theme} = this.props
		return(
			//core & elective modules listing 
			<div>
				<div>
				<Typography component="h2" variant="display1" style={{marginTop:50}}>
						Core Modules
				</Typography>
				</div>
				<div className={classes.arrangedCard}>
						{coreMod.map(mod => {
							return(
								<Card className={classes.card}>
									<div>
										<CardContent className={classes.controls}>
											<Typography>
												{mod} (3)
											</Typography>
										</CardContent>
									</div>
								</Card>); 
						})}
				</div>
				<div>
					<Typography component="h2" variant="display1" style={{marginTop:50}}>
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
	}
}

CheckboxesGroup.propTypes = {
	classes: PropTypes.object.isRequired,
	};

export default withStyles(styles)(CheckboxesGroup);
>>>>>>> 'testing'
