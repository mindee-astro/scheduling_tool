import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
	setNavTitle,
} from '../../../actions/index';

const styles = {

};


function timetableCard (props) {
	return(
		<div>
			<Card style={{padding: '10px'}}>
				<CardContent style={{textAlign: 'center'}}>
					Time Table
				</CardContent>
			</Card>
		</div>
	)
}

const mapStateToProps = ({}) => {
    return{}
};

export default connect(mapStateToProps, {setNavTitle})(withStyles(styles)(timetableCard));