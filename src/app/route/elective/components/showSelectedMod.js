import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import allElectMod from './allElectiveModules';

//show module page 
//user has already selected their electives 
const styles = theme => ({
	card: {
		display: 'flex',
		width: 230,
		height: 50,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},

	arrangedCard: {
		marginTop: 10,
		display:'flex', 
        flexWrap: ' wrap', 
        justifyContent: 'center',
	},
  });


class ShowSelectedMod extends React.Component{
	constructor(props) {
        super(props);
        this.state={
            moduleList : this.props.electMod, 
        }
        console.log("elective choices list",this.state.moduleList)
    };
    render(){
        const {classes} = this.props
        return(
                <div>
                    <div className={classes.arrangedCard}>
                            {this.state.moduleList.map(mod => {
                                return(
                                    <Card className={classes.card}>
                                        <div>
                                            <CardContent>
                                                <Typography variant="body1">
                                                    {mod.name} ({mod.weight})
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </Card>); 
                            })}
                    </div>
                    <div style={{paddingTop:20}}>
                        <Button onClick={this.props.onChange} style={{float: 'right'}}>
                            Edit Choices
                        </Button>
                    </div> 
                </div>
            );
        }
    }
    
ShowSelectedMod.propTypes = {
    classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(ShowSelectedMod);