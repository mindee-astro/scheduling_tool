import React, { Component } from 'react';
import './Form.css';
import FormValidator from './FormValidator';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class Form extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([

      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required.'
      },
      {
        field: 'password',
        method:this.passwordLength1,
        validWhen:true,
        message:'Minimum character length is 6'
      },
      {
        field: 'passwordold',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required.'
      },
      {
        field: 'passwordold',
        method:this.passwordLength2,
        validWhen:true,
        message:'Minimum character length is 6'
      },

      {
        field: 'password_confirmation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password confirmation is required.'
      },
      {
        field: 'password_confirmation',
        method: this.passwordMatch,   // notice that we are passing a custom function here
        validWhen: true,
        message: 'Password and password confirmation do not match.'
      }

    ]);

    this.state = {
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
    }

    this.submitted = false;
  }

  passwordLength1=(state)=> {
    let pass=this.state.password
    if (pass.length>5){
      return true
    }
    else if (pass.length<6){
      return false
    }
  }
  passwordLength2=(state)=> {
    let pass=this.state.passwordold
    if (pass.length>5){
      return true
    }
    else if (pass.length<6){
      return false
    }
  }



  passwordMatch = (confirmation, state) => (state.password === confirmation)

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      alert("Success")
      // handle actual form submission here
    }
  }



  render() {
    let validation = this.submitted ?                         // if the form has been submitted at least once
                      this.validator.validate(this.state) :   // then check validity every time we render
                      this.state.validation                   // otherwise just use what's in state

    return (
      <form className="demoForm">

        <div className={validation.passwordold.isInvalid && 'has-error'}>

          <TextField type="text" className="form-control"
            name="passwordold"
            variant="outlined"
            label="Old Password"
            onChange={this.handleInputChange}
            error={validation.passwordold.message}
          />
          <br />
          <span className="help-block">{validation.passwordold.message}</span>
        </div>

        <div className={validation.password.isInvalid && 'has-error'}>

          <TextField type="text" className="form-control"
            label="New Password"
            name="password"
            variant="outlined"
            onChange={this.handleInputChange}
            style={{marginTop:"25px"}}
            error={validation.password.message}
          />
          <br />
          <span className="help-block" >{validation.password.message}</span>
        </div>

        <div className={validation.password_confirmation.isInvalid && 'has-error'}>

          <TextField type="text" className="form-control"
            label="Re-Type New Password"
            name="password_confirmation"
            variant="outlined"
            onChange={this.handleInputChange}
            style={{marginTop:"25px"}}
            error={validation.password_confirmation.message}
          />
          <br />
          <Typography className="help-block">{validation.password_confirmation.message}</Typography>
        </div>
        <br/>

        < Button color="primary" variant= "contained" onClick={this.handleFormSubmit} className="btn btn-primary">
          Change
        </Button>
      </form>
    )
  }
}
export default Form;
