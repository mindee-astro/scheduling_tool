import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
} from '../../../actions/index';
import Typography from '@material-ui/core/Typography';
import allElecMod from './allElectiveModules';

var electMod = ['Innovation', 'Architecture', 'Analytics', 'Broadcast', ' IT Security']
const styles = theme => ({
	card: {
		display: 'flex',
		width: 230,
		height: 60,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	  },

	arrangedCard: {
		marginTop: 10,
		display:'flex', 
		flexWrap: ' wrap', 
	},
	button: {
		position: 'relative',
		marginTop: 30,
		marginLeft: 950,
		bottom: 10,
	},
  });

class showElectMod extends React.Component{
	constructor(props) {
		super(props);
    };
    
    render(){
        const {classes} = this.props
        return(
                <div>
                    <div>
                        <Typography component="h2" style={{marginTop:50}}>
                            Elective Modules
                        </Typography>
                    </div>
                    <div className={classes.arrangedCard}>
                            {electMod.map(mod => {
                                return(
                                    <Card className={classes.card}>
                                        <div>
                                            <CardContent className={classes.controls}>
                                                <Typography>
                                                    {mod} (3)
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </Card>); 
                            })}
                    </div>
                    <div>
                        <Button variant='outlined' color='secondary' className={classes.button}>
                            Edit Choices
                        </Button>
                    </div> 
                </div>
            );
        }
    }
    
showElectMod.propTypes = {
    classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(showElectMod);