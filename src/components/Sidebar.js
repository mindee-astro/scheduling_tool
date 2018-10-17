import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
	toggleSideBar
} from '../actions/index';

const styles = {
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
};

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class Sidebar extends Component {

	constructor(props){
		super(props)
		console.log(props)
		this.state = {
			classes: props.classes
		}
	}

	toggledrawer = (isOpen) => () => {
		this.setState({
			sidebar: isOpen,
		}, () => {this.props.toggleSideBar(isOpen)})
	} 

	render() {
		
		return( 
			<MuiThemeProvider theme={theme}>
			<div>
				<Drawer open={this.props.sidebar} onClose={this.toggledrawer(false)}>
			        <div
				        tabIndex={0}
				        role="button"
			        >
			        	<div 
			        		className = {this.state.classes.list}
			        		onClick={this.toggledrawer(false)}
			        		onKeyDown={this.toggledrawer(false)}
			        	>
			        		
				        </div>
			        </div>
		        </Drawer>
			</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = ({page}) => {
	const {sidebar} = page;
	return {sidebar}
};

export default connect(mapStateToProps, {toggleSideBar})(withStyles(styles)(Sidebar));