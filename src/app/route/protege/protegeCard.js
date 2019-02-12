import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
} from '../../../actions/index';
import axios from 'axios';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Import API
import {
	getAllUser,
	getAllSchedule
} from '../../../actions/index';


const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
		borderRadius: 12,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
	redText: {
		color: 'red'
	},
	overflowXTable: {
		overflowX: 'auto'
	}
});

let id = 0;
function createData(username, display_name, join_date, next_rotation, next_startdate) {
	id += 1;
	return { id, username, display_name, join_date, next_rotation, next_startdate };
}

const rows = [
	createData('MDYMINDE', 'Min Dee Yap', '2017-05-01', 'Software Engineering', '2018-11-13'),
	createData('SJTSOONJ', 'Soon Jin Tan', '2017-08-08', 'Software Engineering', '2018-11-20'),
	createData('JTTHAVAK', 'Thava', '2017-08-15', 'Products Engineering', '2018-12-25'),
	createData('AAAAHMAD', 'Akmaluddin', '2017-09-04', 'Analytics', '2018-11-29'),
	createData('CPSPEISH', 'Brianna Chang', '2017-09-04', 'Security', '2019-01-01'),
	createData('OAARAKMA', 'Akmal', '2017-12-01', 'Product Management', '2019-01-01'),
	createData('LWYWEIYE', 'Chris Lim', '2018-01-01', 'Product Management', '2019-01-01')
];



class CustomizedTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			classes: props.classes,
			listUser: {},
			allSchedule: [],
		}
	}

	componentDidMount(){
		this.props.getAllUser()
		this.props.getAllSchedule();
	}

	componentDidUpdate(prevProps,prevState){
		if(this.props.listUser !=prevProps.listUser || this.state.listUser !=prevState.listUser){
			this.setState({
				...this.state,
				listUser: this.props.listUser.rotations,
				listUserLength: this.props.listUser.rotations.length
			})
			console.log('listUser updated',this.state.listUser)
		}
		if (this.props.allSchedule && prevState.allSchedule != this.props.allSchedule && this.props.allSchedule.length > 0){
			this.setState({
				...this.state,
				allSchedule: this.props.allSchedule,
				protegeNum: this.props.allSchedule.length
			})
			console.log('printing all schedule',this.state.allSchedule)
			console.log('printing schedule pK',this.state.allSchedule.pK)
		}
	}

	render(){
		const classes = this.state.classes;
		const renderInfo = (this.state.listUserLength>0 && this.state.protegeNum>0) ? (
			<Paper className={classes.overflowXTable}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Username</TableCell>
							<TableCell>Display Name</TableCell>
							<TableCell>Join Date</TableCell>
							<TableCell>Next Rotation</TableCell>
							<TableCell>Next Rotation Start Date</TableCell>
							<TableCell>Starting In</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.listUser.map((row,index) => {

							// Time
							let current_date = Date.now()
							let next_startdate = new Date(row.next_startdate).getTime()
							let days_to_start = Math.ceil((next_startdate - current_date) / (1000 * 60 * 60 * 24))
							let starting_in = days_to_start.toString() + ' day' + (days_to_start > 1 ? 's' : '')
							if (days_to_start >= 30) {
								let month = Math.round(days_to_start / 30 * 10) / 10
								starting_in = month.toFixed(1) + ' month' + (month > 1 ? 's' : '')
							}
							
							return (
								<TableRow key={index}>
									{/* <TableCell component="th" scope="row">{this.state.listUser.username}</TableCell> */}
									<TableCell component="th" scope="row">{row.pK}</TableCell>
									<TableCell>{row.displayName}</TableCell>
									<TableCell>{row.joinDate}</TableCell>
									{/* TODO: rearrange schedule array to match row.pK */}
									<TableCell>{row.next_rotation}</TableCell>
									<TableCell className={days_to_start > 10 ? '' : classes.redText}>{row.next_startdate}</TableCell>
									<TableCell className={days_to_start > 10 ? '' : classes.redText}>{starting_in}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		):(
		<Paper className={classes.overflowXTable}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Username</TableCell>
						<TableCell>Display Name</TableCell>
						<TableCell>Join Date</TableCell>
						<TableCell>Next Rotation</TableCell>
						<TableCell>Next Rotation Start Date</TableCell>
						<TableCell>Starting In</TableCell>
					</TableRow>
				</TableHead>
			</Table>
		</Paper>)

		return (
			<div>{renderInfo}</div>
		);
	}
	
}
// function CustomizedTable(props) {
// 	const { classes } = props;

// 	return (
// 		<Paper className={classes.overflowXTable}>
// 			<Table>
// 				<TableHead>
// 					<TableRow>
// 						<TableCell>Username</TableCell>
// 						<TableCell>Display Name</TableCell>
// 						<TableCell>Join Date</TableCell>
// 						<TableCell>Next Rotation</TableCell>
// 						<TableCell>Next Rotation Start Date</TableCell>
// 						<TableCell>Starting In</TableCell>
// 					</TableRow>
// 				</TableHead>
// 				<TableBody>
// 					{rows.map(row => {
// 						let current_date = Date.now()
// 						let next_startdate = new Date(row.next_startdate).getTime()
// 						let days_to_start = Math.ceil((next_startdate - current_date) / (1000 * 60 * 60 * 24))
// 						let starting_in = days_to_start.toString() + ' day' + (days_to_start > 1 ? 's' : '')
// 						if (days_to_start >= 30) {
// 							let month = Math.round(days_to_start / 30 * 10) / 10
// 							starting_in = month.toFixed(1) + ' month' + (month > 1 ? 's' : '')
// 						}

// 						return (
// 							<TableRow key={row.id}>
// 								<TableCell component="th" scope="row">{row.username}</TableCell>
// 								<TableCell>{row.display_name}</TableCell>
// 								<TableCell>{row.join_date}</TableCell>
// 								<TableCell>{row.next_rotation}</TableCell>
// 								<TableCell className={days_to_start > 10 ? '' : classes.redText}>{row.next_startdate}</TableCell>
// 								<TableCell className={days_to_start > 10 ? '' : classes.redText}>{starting_in}</TableCell>
// 							</TableRow>
// 						);
// 					})}
// 				</TableBody>
// 			</Table>
// 		</Paper>
// 	);
// }

CustomizedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({auth,schedule}) => {
	const {listUser} = auth;
	const {allSchedule} = schedule;
	return {listUser,allSchedule}
};

// export default connect(mapStateToProps)(withStyles(styles)(protegeCard));
export default connect(mapStateToProps, {getAllSchedule,getAllUser})(withStyles(styles)(CustomizedTable));