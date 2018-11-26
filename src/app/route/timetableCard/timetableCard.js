import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
	getAllSchedule,
	getUserSchedule
} from '../../../actions/index';

const styles = {

};

const temp2 = [
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
]

const temp = [
	{
		HHKAHMAD:[
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


function timetableCard (props) {
	const renderinfo = (props.allSchedule.length>=1) ? (
		<div>
			{(temp.map((n, index) => {
				 return(
				 	Object.entries(n).map(([key, value])=>{
				 		return(
					 		<Grid container spacing={8} style={{paddingTop: '10px', overflowX: 'scroll'}} key={key}>
					 			{
					 				Object.entries(value).map(([ind, value])=>{
								 			return(
								 				<Grid item xs key={ind}>
										 			<Card>
										 				<CardContent>
										 					<Typography>{key}</Typography>
										 				</CardContent>
									 				</Card>
									 			</Grid>
									 		)
								 	})
								 }
					 		</Grid>
				 		)			 	
					})
			 	)
			}))}

		</div>
	) : (<div/>)

	return(
		<div style={{padding: '10px'}}>
			<Card >
				<CardContent style={{textAlign: 'center'}}>
					Time Table
					
					<Button variant="outlined" onClick={()=>props.getAllSchedule(123)}>
						Get All Schedule
						
					</Button>

				</CardContent>
			</Card>

			
			{renderinfo}
			
		</div>
	)
}

const mapStateToProps = ({schedule}) => {
	const {allSchedule, userSchedule, totalSchedule} = schedule
    return{allSchedule, userSchedule, totalSchedule}
};

export default connect(mapStateToProps, {getAllSchedule, getUserSchedule})(withStyles(styles)(timetableCard));