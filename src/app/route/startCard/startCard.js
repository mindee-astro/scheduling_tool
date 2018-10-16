import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';

const styles = {

};


function startCard (props) {
	console.log(props)
	return(

		<div>
			<Card style={{padding: '10px'}}>
				<CardContent style={{textAlign: 'center'}}>
					<span>Welcome</span>
				</CardContent>
			</Card>
		</div>
	)
}

export default withStyles(styles)(startCard);