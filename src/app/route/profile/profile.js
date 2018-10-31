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
	},
	text: {
		fontSize: '0.8em',
		color: '#000000'	
	}
};


class profileCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			classes: props.classes,
			width: 0,
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
  		this.setState({ width: window.innerWidth});
	}
 render() {
	 	return(
	 		<div>
	 			<Grid container spacing={8}>
	 				<Grid item xs={(this.state.width>850) ? 6 : 12}>
	 					<Card>
	 						<CardContent>
	 							<Typography className={this.state.classes.title}>Profile Information</Typography>
	 							<Typography className={this.state.classes.fieldName}>Name : <span style={{color: 'black'}}>{this.props.displayname}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>User Name : <span style={{color: 'black'}}>{this.props.username}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>Email : <span style={{color: 'black'}}>{this.props.email}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>Mentor : <span style={{color: 'black'}}>{this.props.mentor}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>Mentor Email : <span style={{color: 'black'}}>{this.props.mentoremail}</span></Typography>
	 						</CardContent>
	 					</Card>
	 				</Grid>
	 				<Grid item xs>
	 					<Card>
	 						<CardContent>
	 							<Typography className={this.state.classes.title}>Module Selection</Typography>
	 							<Typography className={this.state.classes.text}>
	 								{this.props.data}
	 							</Typography>
	 						</CardContent>
	 					</Card>
	 				</Grid>
	 			</Grid>
	 		</div>
	 	)
	}
}

const mapStateToProps = ({auth}) => {
	const {username,displayname,joindate,mentor,accesslevel,email,mentoremail,data} = auth;
    return{username,displayname,joindate,mentor,accesslevel,email,mentoremail,data}
};

export default connect(mapStateToProps)(withStyles(styles)(profileCard));