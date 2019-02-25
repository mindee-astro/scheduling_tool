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
	 							<Typography variant="title" color="primary">Profile Information</Typography>
	 							<span><br/></span>
	 							<Typography variant="caption" color="primary">Name : <span style={{color: 'black'}}>{this.props.displayname}</span></Typography>
	 							<Typography variant="caption" color="primary">User Name : <span style={{color: 'black'}}>{this.props.username}</span></Typography>
	 							<Typography variant="caption" color="primary">Email : <span style={{color: 'black'}}>{this.props.email}</span></Typography>
	 							<Typography variant="caption" color="primary">Mentor : <span style={{color: 'black'}}>{this.props.mentor}</span></Typography>
	 							<Typography variant="caption" color="primary">Mentor Email : <span style={{color: 'black'}}>{this.props.mentoremail}</span></Typography>
	 						</CardContent>
	 					</Card>
	 				</Grid>
	 				<Grid item xs>
	 					<Card>
	 						<CardContent>
	 							<Typography variant="title" color="primary">Modules</Typography>
	 							<span><br/></span>
	 							{this.props.electives.map((n, index)=>{
	 								return(
	 									<Typography variant="caption" key={index}>{n}</Typography>
	 								)
	 							})}
	 						</CardContent>
	 					</Card>
	 				</Grid>
	 			</Grid>
	 		</div>
	 	)
	}
}

const mapStateToProps = ({auth}) => {
	const {username,displayname,joindate,mentor,accesslevel,email,mentoremail,data,electives} = auth;
    return{username,displayname,joindate,mentor,accesslevel,email,mentoremail,data,electives}
};

export default connect(mapStateToProps)(withStyles(styles)(profileCard));