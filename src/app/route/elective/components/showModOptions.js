import React, {Component} from 'react';
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
    setNotificationSnackbar,
} from '../../../../actions/index'; 

const styles = theme => ({
	card: {
		display: 'flex',
		width: 230,
		height: 60,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
	  },

	arrangedCard: {
		display:'flex', 
		flexWrap:'wrap',
	},
  });

class ShowModOpt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: [],
            monthsLeft :12,
        } 
    }
    //when module is select, monthsLeft will change 
    //the module will be ticked 
  	handleChange = formSubmitEvent => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(formSubmitEvent.label);
        const newChecked = [...checked];

		if (currentIndex === -1) { 
            if (this.state.monthsLeft>=formSubmitEvent.weight){
                newChecked.push(formSubmitEvent.label);
                this.setState({monthsLeft: this.state.monthsLeft - formSubmitEvent.weight})
            }
            else{
                    this.props.setNotificationSnackbar({isOpen: true, message:(<span>You have reached the maximum number of selected modules.</span>)})
            }
		} else {
			this.setState({monthsLeft: parseInt(formSubmitEvent.weight, 10) + this.state.monthsLeft})
		  	newChecked.splice(currentIndex, 1)
		}
		this.setState({
		  checked: newChecked,
		});
		
    }
    
    onClickButton = e => {
        e.preventDefault();
        this.props.moduleList(this.state.checked)
    }

    onCancelButton = e => {
        e.preventDefault();
        this.props.moduleList()
    }
    
    render() {
        const {classes} = this.props
        return(
        <div> 
            <div>
                <Typography variant="body1">
                    <span>Minimum required months are 11. Please select up to 4-5 preferred modules.</span>
                </Typography>
                <Typography variant="body1" style={{textAlign:"right"}}>
                    <span>Months Left &nbsp; &nbsp; &nbsp; &nbsp; {this.state.monthsLeft}</span>
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
                <Button onClick={this.onCancelButton.bind(this)} style={{float: 'right', margin:10}}>
                    Cancel
                </Button>
                <Button disabled={this.state.monthsLeft > 1}  onClick={this.onClickButton.bind(this)} style={{float: 'right', margin:10}} >
                    Submit Choices
                </Button>
            </div>
        </div>
    );
    }
}

const mapStateToProps = ({user}) => {
	//const {userDetails} = user
   // return{userDetails}
};

export default connect(mapStateToProps, {setNotificationSnackbar})(withStyles(styles)(ShowModOpt));