import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
  appBar: {
  	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  rightGroup: {
    textAlign: 'right',
  },
  accButton: {
    marginLeft: 0,
    marginRight: -10,
  }
};

function Navbar(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
          	{props.state.navtext} 
          </Typography>
          <div className={classes.rightGroup}>
            <Typography variant="subheading" color='inherit' className={classes.grow} style={{padding: '10px'}}>
              {props.state.loggedInUser}
              <Button className={classes.accButton} color='inherit'>
                <AccountCircle/>
              </Button>
            </Typography>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);