import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
} from '../../../actions/index';

const styles = {
	title: {
		fontSize: '1em',
		paddingBottom: '20px'
	},
	fieldName: {
		fontSize: '0.8em',
		color: '#9f74fc'
	}
};


function profileCard (props) {
	const { classes } = props;

	return(
		<div>
			<Grid container spacing={24}>
				<Grid item xs={6}>
					<Card>
						<CardContent>
							<Typography className={classes.title}>Profile Information</Typography>
							<Typography className={classes.fieldName}>Name : <span style={{color: 'black'}}>{props.displayname}</span></Typography>
							<Typography className={classes.fieldName}>User Name : <span style={{color: 'black'}}>{props.username}</span></Typography>
							<Typography className={classes.fieldName}>Email : <span style={{color: 'black'}}>{props.email}</span></Typography>
							<Typography className={classes.fieldName}>Mentor : <span style={{color: 'black'}}>{props.mentor}</span></Typography>
							<Typography className={classes.fieldName}>Mentor Email : <span style={{color: 'black'}}>{props.mentoremail}</span></Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card>
						<CardContent>
							<Typography className={classes.title}>Module Selection</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	)
}

const mapStateToProps = ({auth}) => {
	const {username,displayname,joindate,mentor,accesslevel,email,mentoremail} = auth;
    return{username,displayname,joindate,mentor,accesslevel,email,mentoremail}
};

export default connect(mapStateToProps)(withStyles(styles)(profileCard));