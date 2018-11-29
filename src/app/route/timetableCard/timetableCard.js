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
	getUserSchedule,
	setNotificationSnackbar
} from '../../../actions/index';

const styles = {

};


class timetableCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSchedule: [],
			schdeuleLength: 0
		}
	}

	componentDidMount() {
		this.props.getAllSchedule();
		this.props.setNotificationSnackbar({isOpen: true, message:(<span>Please go to Modules and select your
		elective modules by DD/MM/YY<br/>Note: You will no longer be able to edit your choices after this date</span>)})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.allSchedule != this.props.allSchedule)
		{
			this.setState({
				...this.state,
				allSchedule: this.props.allSchedule,
				schdeuleLength: this.props.allSchedule.length
			})
		}
	}

	componentWillUnmount(){
		this.props.setNotificationSnackbar({isOpen: false, message:""})
	}

	render() {

		const renderinfo = (this.state.schdeuleLength>=1) ? (
			<div style={{width: '100%', overflowX: 'scroll', height: '100%', padding: '10px'}}>
				{(this.state.allSchedule.map((n, index) => {
					 return(
					 	Object.entries(n).map(([key, value])=>{
					 		return(
						 		<Grid container gutter={0} spacing={8} style={{width: '240%'}} key={key}>
						 			{
						 				Object.entries(value).map(([ind, value])=>{
									 			return(
									 				<Grid item xs key={ind} style={{paddingTop: '10px', maxWidth: '20vw', minWidth: '180px'}}>
											 			<Card>
											 				<CardContent>
											 					<Typography color='primary'>{key}</Typography>
											 					<Typography variant='caption'>{value.rotationID}</Typography>
											 					<Typography variant='caption'>Start: {value.startDate}</Typography>
											 					<Typography variant='caption'>End: {value.endDate}</Typography>
											 					<Typography variant='caption'>Status: {value.status}</Typography>
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

					</CardContent>
				</Card>

				{renderinfo}
				
			</div>
		)
	}
}

const mapStateToProps = ({schedule}) => {
	const {allSchedule, userSchedule, totalSchedule} = schedule
    return{allSchedule, userSchedule, totalSchedule}
};

export default connect(mapStateToProps, {getAllSchedule, getUserSchedule, setNotificationSnackbar})(withStyles(styles)(timetableCard));