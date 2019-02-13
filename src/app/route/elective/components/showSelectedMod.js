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
        //find the weights for each module 
        var modDict = []
        for (var eMod in this.state.moduleList){
            allElectMod.map(item=>{
                if (this.state.moduleList[eMod]==item.label){
                    modDict.push(
                        {
                        name: item.label,
                        weight: item.weight,
                    }
                    )
                }
            }
            )
        }
        console.log("Module Dictionary is created:", modDict)
        return(
                <div>
                    <div className={classes.arrangedCard}>
                            {modDict.map(mod => {
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
                    <div>
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