import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import {connect} from 'react-redux';
import {
	setNotificationSnackbar
} from '../actions/index';

const styles = theme => ({
  snackbar: {
    marginTop:  '80px',
  },
  snackbarContent: {
  	maxWidth: '80vw',
  	minWidth: '30vw',
  	background: '#000080',
  	opacity: '0.7'
  },
  button: {
  	background: 'white',
  	opacity: '0.6',
  	'&:hover': {
    	opacity: '1',
    	background: 'white'
    },
  },
  buttonlabel: {
    textTransform: 'capitalize',
    fontSize: '12px'
  },
});

class NotificationSnackbar extends Component {
	constructor(props){
		super(props)
		this.state={
			classes:props.classes,
			notificationSnackbar:props.notificationSnackbar,
		}
	}

	componentDidMount(){
		console.log(this.state)
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.notificationSnackbar!=this.props.notificationSnackbar)
		{
			this.setState({
				...this.state,
				notificationSnackbar: this.props.notificationSnackbar
			})
		}
	}

	handleClose() {
		this.props.setNotificationSnackbar({isOpen:false, message:""})
	}

	render(){
		const action = (
			<Button classes={{root:this.state.classes.button, label:this.state.classes.buttonlabel}} onClick={()=>{this.handleClose()}}>
				Dismiss
			</Button>
		)

		return(
			<div>
		    	<Snackbar
		    		className = {this.state.classes.snackbar}
		    		anchorOrigin={{ vertical:'top', horizontal:'center' }}
		        	open={this.state.notificationSnackbar.isOpen}
		      	>
		      		<SnackbarContent className={this.state.classes.snackbarContent} message={this.state.notificationSnackbar.message} action={action}/>
		      	</Snackbar>
			</div>
		)
	}
}

const mapStateToProps = ({page}) => {
	const {notificationSnackbar} = page;
	return{notificationSnackbar}
};

NotificationSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {setNotificationSnackbar})(withStyles(styles)(NotificationSnackbar));