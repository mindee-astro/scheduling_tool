import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TableChart from '@material-ui/icons/TableChart';
import People from '@material-ui/icons/People';
import {NavLink, withRouter} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
	toggleSideBar,
	setNavTitle,
} from '../actions/index';

const styles = {
  list: {
    width: 200,
  },
  avatar: {
  	height: '60px',
  	width: '60px'
  }
};

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: {
  	color: 'white'
  },
});

class Sidebar extends Component {

	constructor(props){
		super(props)
		this.state = {
			classes: props.classes
		}
	}

	toggledrawer = (isOpen) => () => {
		this.setState({
			sidebar: isOpen,
		}, () => {this.props.toggleSideBar(isOpen)})
	} 

	handleClick = (Title) =>() => {
		this.props.setNavTitle(Title)
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
			        	{console.log(this.props)}
			        	<div 
			        		className = {this.state.classes.list}
			        		onClick={this.toggledrawer(false)}
			        		onKeyDown={this.toggledrawer(false)}
			        	>

			        		<br/>
			        		<div>
			        			<div
			        				style={{
			        					paddingLeft: '70px',
			        				}}
			        			>
			        				<Avatar 
			        					className={
			        						this.state.classes.avatar
			        					}
			        				>{this.props.displayname[0].toUpperCase()}{this.props.displayname[1].toLowerCase()}</Avatar>
			        			</div>
					        	<div style={{color: "orange"}}>
					        		<List style={{color: "orange"}}>
					        		<NavLink to="/welcome">
					        			<ListItem button onClick={this.handleClick("Home")}>
					        				<ListItemIcon>
									        	<HomeIcon />
									        </ListItemIcon>
					        				<ListItemText primary="Home"/>
					        			</ListItem>
					        		</NavLink>
					        		<NavLink to="/schedule">
					        			<ListItem button onClick={this.handleClick("Schedules")}>
					        				<ListItemIcon>
									        	<TableChart />
									        </ListItemIcon>
					        				<ListItemText primary="Schedule"/>
					        			</ListItem>
					        		</NavLink>
					        		<NavLink to="/elective">
					        			<ListItem button onClick={this.handleClick("Proteges")}>
					        				<ListItemIcon>
									        	<People />
									        </ListItemIcon>
					        				<ListItemText primary="Proteges"/>
					        			</ListItem>
					        		</NavLink>
					        		</List>
					        	</div>	
					        </div>
				        </div>
			        </div>
		        </Drawer>
			</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = ({page, auth}) => {
	const {sidebar} = page;
	const {displayname} = auth;
	return {sidebar, displayname}
};

export default withRouter(connect(mapStateToProps, {toggleSideBar, setNavTitle})(withStyles(styles)(Sidebar)));