import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {connect} from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withRouter} from 'react-router-dom';
import AdminToggle from './ToggleAdmin';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 20,
  },
  appBarDefault: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  appBarOptional: {
    background: 'linear-gradient(45deg, #0519ff 9%, #9f74fc 97%)',
  },
  rightGroup: {
    textAlign: 'right',
  },
  accButton: {
    marginLeft: 0,
    marginRight: -10,
  }
};



class Navbar extends Component {
  
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      classes: props.classes,
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleNavigate = (options) => {
    if (options=='Profile') {
      this.props.history.push('/profile')
      this.setState({ anchorEl: null })
    }
  }


  render(){

    const title = (this.props.location.pathname == '/elective') ? (<span>Elective</span>) : 
    (this.props.location.pathname == '/schedule') ? (<span>Schedules</span>) : 
    (this.props.location.pathname == '/welcome') ? (<span>Home</span>) :
    (this.props.location.pathname == '/profile') ? (<span>Profile</span>) :
    (this.props.location.pathname == '/configuration') ? (<span>Configuration</span>) :
    (<span/>)

    return (
      <div className={this.state.classes.root}>
        <AppBar position="fixed" className={(this.props.theme==='optional') ? this.state.classes.appBarDefault : this.state.classes.appBarOptional}>
          <Toolbar>
            <IconButton className={this.state.classes.menuButton} color="inherit" aria-label="Menu" onClick={this.props.toggleSideBar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={this.state.classes.grow} >
            	{title} 
            </Typography>
            <div className={this.state.classes.rightGroup}>
              <Typography variant="subheading" color='inherit' className={this.state.classes.grow} style={{padding: '10px'}}>
                <span style={{paddingRight: '10px'}}>Hello, {this.props.displayname}</span>
                <IconButton className={this.state.classes.accButton} color='inherit'
                    aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                  <AccountCircle/>
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                  PaperProps={{
                    style: {
                      width: 200,
                    },
                  }}
                >
                  <MenuItem onClick={()=>this.handleNavigate('Profile')}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <AdminToggle/>
                  </MenuItem>
                </Menu>
              </Typography>
              
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({page, auth}) => {
  const {theme, navTitle} = page;
  const {displayname} = auth;
  return {displayname, theme, navTitle}
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Navbar)));