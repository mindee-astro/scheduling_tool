import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
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

// const styles = {

// };

const ProtegeTable = withStyles(theme => ({
	head: {
	//   backgroundColor: theme.palette.common.black,
	backgroundColor: '#1769aa',
	  color: theme.palette.common.white,
	  fontSize: 16,
	  textAlign: 'center'
	},
	body: {
	  fontSize: 14,
	  textAlign: 'center'
	},
  }))(TableCell);
  
  const styles = theme => ({
	root: {
	  width: '100%',
	  marginTop: theme.spacing.unit * 3,
	  overflowX: 'auto',
	},
	table: {
	  minWidth: 700,
	},
	row: {
	  '&:nth-of-type(odd)': {
		backgroundColor: theme.palette.background.default,
	  },
	},
	redText: {
		color: 'red'
	}
  });
  
  let id = 0;
  function createData(username, display_name, join_date, next_rotation, next_startdate) {
	id += 1;
	return { id, username, display_name, join_date, next_rotation, next_startdate };
  }

  const rows = [
	createData('MDYMINDE', 'Min Dee Yap', '2017-05-01', 'Software Engineering','2018-11-13'),
	createData('SJTSOONJ', 'Soon Jin Tan', '2017-08-08', 'Software Engineering', '2018-11-20'),
	createData('JTTHAVAK', 'Thava', '2017-08-15', 'Products Engineering', '2018-12-25'),
	createData('AAAAHMAD', 'Akmaluddin', '2017-09-04', 'Analytics', '2018-11-29'),
	createData('CPSPEISH', 'Brianna Chang', '2017-09-04', 'Security','2019-01-01'),
	createData('OAARAKMA', 'Akmal', '2017-12-01', 'Product Management', '2019-01-01'),
	createData('LWYWEIYE', 'Chris Lim', '2018-01-01', 'Product Management', '2019-01-01')
  ];
  
  function CustomizedTable(props) {
	const { classes } = props;
  
	return (
	  <Paper className={classes.root}>
		<Table className={classes.table}>
		  <TableHead>
			<TableRow>
			  <ProtegeTable>Username</ProtegeTable>
			  <ProtegeTable>Display Name</ProtegeTable>
			  <ProtegeTable>Join Date</ProtegeTable>
			  <ProtegeTable>Next Rotation</ProtegeTable>
			  <ProtegeTable>Next Rotation Start Date</ProtegeTable>
			  <ProtegeTable>Starting In</ProtegeTable>
			</TableRow>
		  </TableHead>
		  <TableBody>
			{rows.map(row => {
				let current_date = Date.now()
				let next_startdate = new Date(row.next_startdate).getTime()
				let days_to_start = Math.ceil((next_startdate - current_date)/(1000*60*60*24))
				let starting_in = days_to_start.toString()+' day'+(days_to_start>1?'s':'')
				if (days_to_start >= 30){
					let month = Math.round(days_to_start/30*10)/10
					starting_in = month.toFixed(1) + ' month' + (month>1?'s':'')
				}

			  return (
				<TableRow className={classes.row} key={row.id}>
				  <ProtegeTable component="th" scope="row">{row.username}</ProtegeTable>
				  <ProtegeTable>{row.display_name}</ProtegeTable>
				  <ProtegeTable>{row.join_date}</ProtegeTable>
				  <ProtegeTable>{row.next_rotation}</ProtegeTable>
				  <ProtegeTable className={days_to_start>10?'': classes.redText}>{row.next_startdate}</ProtegeTable>
				  <ProtegeTable className={days_to_start>10?'': classes.redText}>{starting_in}</ProtegeTable>
				</TableRow>
			  );
			})}
		  </TableBody>
		</Table>
	  </Paper>
	);
  }
  
  CustomizedTable.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  

// function protegeCard (props) {
// 	return(
// 		<div>
// 			<Card style={{padding: '10px'}}>
// 				<CardContent style={{textAlign: 'center'}}>
// 					Protege
// 				</CardContent>
// 			</Card>
// 		</div>
// 	)
// }

const mapStateToProps = ({}) => {
    return{}
};

// export default connect(mapStateToProps)(withStyles(styles)(protegeCard));
export default connect(mapStateToProps)(withStyles(styles)(CustomizedTable));