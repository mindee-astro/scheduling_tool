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

// to do mouse over behaviour
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

// icons 
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

//show selected module page 
import ShowSelectedMod from './components/showSelectedMod'; 

// show module selection page 
import ShowModOpt from './components/showModOptions'; 

import Tooltip from '../../../components/Tooltip';

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
		justifyContent: 'space-around',
		display:'flex', 
		flexWrap: 'nowrap',
	},

	popover: {
		pointerEvents: 'none',
	},
  });

var coreMod = ['Product Engineering', 'Product Management', 'Project Management', 'Software Engineering'];

var electMod = []


// viewing elective choices 
class ElectiveCard extends React.Component{
	constructor(props) {
		super(props);
	};

	render() {
		const {classes} = this.props
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
									? <ShowModOpt/>
									: <ShowSelectedMod electmod={electMod}/> 
								}
							</div>
						</CardContent>
					</Card>
				</div>
		)
	}
}

ElectiveCard.propTypes = {
	classes: PropTypes.object.isRequired,
	};

export default withStyles(styles)(ElectiveCard);