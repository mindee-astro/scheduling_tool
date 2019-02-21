import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const style={
	DialogText: {
		paddingTop: '20px',
	},
}

class ComplexDialog extends Component {
	render(){
		const { classes } = this.props
		return(
			<div>
			<Dialog
		        open={this.props.isOpen}
		        TransitionComponent={Transition}
		        keepMounted
		        onClose={this.props.callbackClose}
		        className={classes.DialogWidth}
		        fullWidth={true}
		    >
		    	<DialogTitle disableTypography={true}>
		    		{this.props.title}
		    	</DialogTitle>
		    	<DialogContent className={classes.DialogWidth}>
		    		<DialogContentText className={classes.DialogText}>
		    			{this.props.content}
		    		</DialogContentText>
		    		<DialogActions>
		    			{this.props.actions}
		    		</DialogActions>
		    	</DialogContent>
		    </Dialog>
		    </div>
		)
	}
}

export default withStyles(style)(ComplexDialog);