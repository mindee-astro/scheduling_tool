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


class ShowSelectedMod extends React.Component{
	constructor(props) {
		super(props);
    };

    
    render(){
        const {classes} = this.props;
        var modList = this.props.electmod;
        var modDict = [];
        for (var eMod in modList){
            allElectMod.map(item=>{
                if (modList[eMod]==item.label){
                    modDict.push(
                        {
                        name: item.label,
                        weight: item.weight,
                    }
                    )
                }
            }
            );
        };

        return(
                <div>
                    <div>
                        <Typography component="body1" style={{marginTop:50}}>
                            Elective Modules
                        </Typography>
                    </div>
                    <div className={classes.arrangedCard}>
                            {modDict.map(mod => {
                                return(
                                    <Card className={classes.card}>
                                        <div>
                                            <CardContent className={classes.controls}>
                                                <Typography variant="body2">
                                                    {mod.name} ({mod.weight})
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </Card>); 
                            })}
                    </div>
                    <div>
                        <Button>
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