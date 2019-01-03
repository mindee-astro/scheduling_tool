import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

// Import the styles
import styles from './styles101'

// Tue Nov 27 2018 15:28:27 GMT+0800 (UTC)
const birthday  = new Date();

// getDateComponents
const YYYY = birthday.getFullYear();    // 1980
const MM = birthday.getMonth();         // 6
const DD = birthday.getDate();          // 31

// // Turn const into strings
var todaysdate = String(YYYY)+"-"+String(MM)+"-"+String(DD);
var estenddate = String(YYYY+2)+"-"+String(MM)+"-"+String(DD);

class AddMe extends Component {

    constructor() {
        super(); 
        this.state = { showMessage: false }
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = { id: '', displayName: 'Protege', username: '', mentor: '', memail: '', 
                     joinDate: "", endDate: "", electives: ["apple", "bettle", "cards", "dungeon"], status: 'onboarding'}
    }

    _showMessage = (bool) => {

        this.setState({
            showMessage: bool
        });
    
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })

        // console.log( e.target.id ) --> Which box clicked : e.g. Mentor
        // console.log( e.target.value ) --> What is in the box : e.g. Joel Wong
        // console.log( this.props.AddAProtege ) --> ƒ (ninja) {
		// 	var ninjas = [].concat(_toConsumableArray(_this.state.ninjas), [ninja]);
		// 	_this.setState({
		// 		ninjas: ninjas
		// 	});
        // }
    
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.AddAProtege(this.state);
        this._showMessage(false);
    
    }

    render () {

        const { classes } = this.props;
        
        return (

            <div>

                <Paper> <Card> <Grid>

                    <br/>
                    
                    <Grid container spacing={0} direction="column" alignItems="center" justify="center"> 
                        
                        <Button variant="fab" color="disabled" onClick={this._showMessage.bind(null, true)}>
                            <AddIcon />
                        </Button> <br/>

                    </Grid>
                        
                    <Grid>

                        { this.state.showMessage && 
                            ( 
                                <div>

                                    <form className={classes.container} noValidate> <Grid container spacing={0}>

                                        <Grid item xs={12} sm={2} align='left'>

                                            <TextField onChange={this.handleChange}
                                                required
                                                id="username"
                                                label="Username"
                                                placeholder="(e.g. : ABCDEFGH)"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                margin="normal"
                                            />

                                            <br />

                                            <TextField onChange={this.handleChange}
                                                id="joinDate"
                                                label="Join Date"
                                                type="date"
                                                //defaultValue={todaysdate}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                margin="normal"
                                            />

                                        </Grid>

                                        <Grid item xs={12} sm={8} align='center'>

                                            <TextField onChange={this.handleChange}
                                                id="mentor"
                                                label="Mentor"
                                                placeholder="Mentor's Name?"
                                                multiline
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                margin="normal"
                                            />
                                            
                                            <br />
                                            
                                            <TextField onChange={this.handleChange}
                                                id="memail"
                                                label="Mentor's Email"
                                                placeholder="Mentor's Work Email?"
                                                multiline
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                margin="normal"
                                            />

                                        </Grid>
                                        
                                        <Grid item xs={12} sm={2} align='left'>
                                            <Typography variant='title'> Preferences: </Typography>
                                            <Typography variant='body2'> • Pending Selection </Typography>
                                            <Typography variant='body2'> • Pending Selection </Typography>
                                            <Typography variant='body2'> • Pending Selection </Typography>
                                            <Typography variant='body2'> • Pending Selection </Typography>
                                        </Grid> 
                                    
                                        <Grid item sm={12} align='right'> 
                                            <Button className={classes.button} onClick={this.handleSubmit}> Submit </Button>
                                            <Button className={classes.button} onClick={this._showMessage.bind(null, false)}> Cancel </Button>
                                        </Grid>

                                    </Grid> </form>
                                    
                                </div>
                            ) 
                        }
                    
                    </Grid>

                </Grid> </Card> </Paper>

            </div>
        
        )
    }
}

AddMe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMe);