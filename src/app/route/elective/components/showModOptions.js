import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import allElectMod from './allElectiveModules';
import {connect} from 'react-redux';
// to do check box 
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// to do API 
import {
    updateUser,
} from '../../../../actions/index'; 
import elective from '../elective';

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
		flexWrap:'wrap',
	},
  });

  const data = {
    "username": "string",
    "displayName": "string",
    "password": "string",
    "joinDate": "2019-01-16",
    "electives": [],
    "status": "active",
    "mentor": "string"
  } 

class ShowModOpt extends Component {
    constructor(props) {
		super(props);
    };

    state = {
        checked: [],
        value:12,
        currentList: this.props.electMod, 
    };
    
    //for select options
  	handleChange = formSubmitEvent => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(formSubmitEvent.label);
		const newChecked = [...checked];

		if (currentIndex === -1) { 
            if (this.state.value >0 ){
                this.setState({value: this.state.value - formSubmitEvent.weight});
                if (this.state.value >0){
                    newChecked.push(formSubmitEvent.label);
                }
            }
            else{
            }
		} else {
			this.setState({value: parseInt(formSubmitEvent.weight, 10) + this.state.value});
		  	newChecked.splice(currentIndex, 1);
		}
		this.setState({
		  checked: newChecked,
		});
		
    };
    
    onClickButton = e => {
        e.preventDefault();
        if (this.state.checked != this.state.currentList){
            data['electives'] = this.state.checked
            // update User Profile
            this.props.updateUser('123', data)
            console.log(data, this.state.checked)
        }
    }

    render(){
        const {classes} = this.props
        return(
        <div> 
            <div>
                <Typography variant="body2" style={{marginTop:50}}>
                    Elective Modules
                </Typography>
            </div>
            <div className={classes.arrangedCard}>
                <Typography variant="body1">
                    <span>Minimum required months are 11. Please select up to 4-5 preferred modules.</span>
                    <span style={{textAlign: 'right'}}>10</span>
                </Typography>
                <br/>
                <Typography variant="body1" style={{marginLeft: 200}}>
                    Months Left
                </Typography>
                <Typography variant="body1" style={{marginLeft: 50}}>
                    {this.state.value}
                </Typography>
            </div>
            <div style={{textAlign: 'left', paddingTop: '20px'}}>
                <FormControl>
                    <FormLabel>
                        <FormGroup column>
                            {allElectMod.map(item =>(
                                <FormControlLabel control=
                                    {
                                        <Checkbox 
                                            checked={this.state.checked.indexOf(item.label) !== -1}
                                            tabIndex={-1}
                                        />
                                    }
                                    onChange={this.handleChange(item)}
                                    label={
                                        <span>
                                            {item.label+" "+"("+item.weight+")"}
                                        </span>
                                    }
                                />
                            ))}
                        </FormGroup>
                    </FormLabel>
                </FormControl>
            </div>
            <div>
                <Button disabled={this.state.value > 1}  onClick={this.onClickButton}>
                    Submit Choices
                </Button>
            </div> 
        </div>
    );
    }
}

const mapStateToProps = ({modules}) => {
	//const {updateUser} = modules
    //return{updateUser}
};

export default connect(mapStateToProps, {updateUser})(withStyles(styles)(ShowModOpt));