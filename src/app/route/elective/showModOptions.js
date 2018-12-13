import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
} from '../../../actions/index';
import Typography from '@material-ui/core/Typography';
import allElectMod from './allElectiveModules';

// to do check box 
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//listing 
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';

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

class ShowModOpt extends React.Component {
    constructor(props) {
		super(props);
    };

    state = {
        checked: [1],
        value:12,
    };
    
    //for select options
  	handleChange = formSubmitEvent => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(formSubmitEvent.name);
		const newChecked = [...checked];

		if (currentIndex === -1) {
				this.setState({value: this.state.value - formSubmitEvent.weight});
			  	newChecked.push(formSubmitEvent.name);
		} else {
			this.setState({value: parseInt(formSubmitEvent.weight, 10) + this.state.value});
		  	newChecked.splice(currentIndex, 1);
		}
		this.setState({
		  checked: newChecked,
		});
		
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
                <Typography>
                    Minimum required months are 11. Please select up to 4-5 preferred modules. 
                </Typography>
                <Typography variant="body2" style={{marginLeft: 300}}>
                    Months Left
                </Typography>
                <Typography variant="title" style={{marginLeft: 50}}>
                    {this.state.value}
                </Typography>
            </div>
            <div>
                {allElectMod.map(item =>(
                    <List>
                        <ListItem key={item.name} role={undefined} dense button onClick={this.handleChange(item)}>
                        <FormControl>
                        <FormLabel>
                        <FormGroup>
                            <FormControlLabel control={
                                <Checkbox 
                                checked={this.state.checked.indexOf(item.name) !== -1}
                                tabIndex={-1}
                                disableRipple/>
                            }
                            />
                        </FormGroup>
                        </FormLabel>
                        </FormControl>
                        <ListItemText primary={item.label+" "+"("+item.weight+")"} />
                        </ListItem>
                    </List>
                ))}
            </div>
            <div>
                <Button disabled={this.state.value > 1} variant='outlined' color='secondary' className={classes.button}>
                    Submit Choices
                </Button>
            </div> 
        </div>
    );
    }
}

ShowModOpt.propTypes = {
    classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(ShowModOpt);