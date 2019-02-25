import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {connect} from 'react-redux';
import Popup from '../components/Popup';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ResponseSnackbar from '../components/ResponseSnackbar';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ComplexDialog from '../components/ComplexDialog';
import Typography from '@material-ui/core/Typography';
import icon from '../assets/rocket-icon-vector.png';
import {
	loginUser,
	setResponseSnackbar
} from '../actions/index';
import {
	forgotPassword,
	confirmForgotPassword
} from '../api/authAPI';
import PersonOutlineRounded from '@material-ui/icons/PersonOutlineRounded';

const styles = theme => ({
	card: {
		height: 'auto',
		minWidth: '300px',
		maxWidth: '40vw',
		textAlign:'center',
		margin: 'auto',
		marginTop: '20vh',
	},
	avatar: {
		textAlign: 'center',
		margin: 'auto',
		height: '90px',
  		width: '90px',
  		backgroundColor: theme.palette.primary.main,
  		color: 'white',
	},
	buttonLayout: {
		flexWrap: 'wrap',
	    justifyContent: 'space-around',
	    overflow: 'hidden',
	    textAlign: 'right',
	},
	button: {
		margin: '5px'
	}
});

class Login extends Component{
	constructor(props){
		super(props)
		this.state={
			classes: props.classes,
			username: '',
			password: '',
			popupIsOpen: false,
			email: '',
			verificationCode: '',
			requestForgetPasswordFlag: false,
			validUserName: false,
			newpassword: '',
			confirmpassword: '',
		}

		this.closePopupCallBack = this.closePopupCallBack.bind(this)
		this.handleAction = this.handleAction.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	closePopupCallBack=()=>{
		this.setState({
			...this.state,
			popupIsOpen: false,
			requestForgetPasswordFlag: false,
		})
	}

	handleAction=async(name)=>{
		if (name =="Confirm1"){
			await forgotPassword(this.state.username.toLowerCase())
							.then(response=>{
								this.setState({
									...this.state,
									popupIsOpen:false,
									requestForgetPasswordFlag: true,
								})
							})
							.catch(error=>{
								this.setState({
									...this.state,
									username: ' ',
									popupIsOpen:true,
									requestForgetPasswordFlag: false,
								})
							})
		}


		else if (name == "HaveCode"){
			this.setState({
				...this.state,
				popupIsOpen: false,
				requestForgetPasswordFlag: true
			})
		}

		else if (name =="Confirm2"){
			await confirmForgotPassword(this.state.username, this.state.verificationCode, this.state.newpassword)
							.then(response=>{
								this.setState({
									...this.state,
									popupIsOpen: false,
									requestForgetPasswordFlag: false,
								})
							})
							.catch(error=>{
								this.props.setResponseSnackbar({
									isOpen: true,
									message: "Invalid Code",
									type: "error"
								})
							})
		}
				 
	}

	handleForgotPassword=()=>{
		this.setState({
			...this.state,
			popupIsOpen: true,
			requestForgetPasswordFlag: false,
		})
	}

	handleChange=name=>event=>{
		this.setState({
			...this.state,
			[name]: event.target.value
		})
	}

	render(){
		const { loginUser, classes } = this.props;

		const loginButton = (this.state.username.length >= 8 && this.state.password.length > 0) ? (false) : (true)

		const equalPassword = (this.state.newpassword == this.state.confirmpassword) && this.state.newpassword!='' && this.state.verificationCode!=''

		const passwordText = (!equalPassword) ? "Verification Code Missing or Password Mismatch" : "" 

		const validUserName = (this.state.username.length >= 8)? "" : "Enter a valid username"

		return(
			<React.Fragment>
			<div style={{textAlign: 'center'}}>
				<ComplexDialog 
					isOpen={this.state.popupIsOpen} 
					callbackClose={this.closePopupCallBack} 
					title={<span>Forgot Password</span>} 
					content={<span>
						<TextField onChange={this.handleChange("username")} placeholder="Astro Username (eg. SJTSOONJ)" variant="outlined" fullWidth value={this.state.username} InputLabelProps={{shrink: true,}} label="Astro Username"/>
						<Typography color="error" variant="caption">{validUserName}</Typography>
					</span>}
					actions={<span className={classes.buttonLayout}><Button onClick={()=>{this.handleAction("Confirm1")}} className={classes.button} disabled={this.state.username===""}>Confirm</Button><Button onClick={()=>{this.handleAction("HaveCode")}} className={classes.button} disabled={this.state.username===""}>i have the code</Button><Button onClick={this.closePopupCallBack} className={classes.button}>Cancel</Button></span>}
				/>
				<ComplexDialog
					isOpen={this.state.requestForgetPasswordFlag}
					callbackClose={this.closePopupCallBack} 
					title={<span>Check your mailbox</span>} 
					content={<span>
						<TextField onChange={this.handleChange("verificationCode")} placeholder="Enter your verification code" variant="outlined" fullWidth className={classes.button} InputLabelProps={{shrink: true,}} label="Verification Code"/>
						<TextField onChange={this.handleChange("newpassword")} type="password" placeholder="Enter your new password" variant="outlined" fullWidth className={classes.button} InputLabelProps={{shrink: true,}} label="New Password"/>
						<TextField onChange={this.handleChange("confirmpassword")} type="password" placeholder="Confirm your new password" variant="outlined" fullWidth className={classes.button} InputLabelProps={{shrink: true,}} label="Confirm New Password"/>
						<Typography color="error" variant="caption">{passwordText}</Typography>
					</span>}
					actions={<span className={classes.buttonLayout}><Button onClick={()=>{this.handleAction("Confirm2")}} className={classes.button} disabled={!equalPassword}>Confirm</Button><Button onClick={this.closePopupCallBack} className={classes.button}>Cancel</Button></span>}
				/>
				<Card className={this.state.classes.card}>
					<CardContent>
						<Avatar className={this.state.classes.avatar}>
							<img src={icon} className={this.state.classes.avatar}/>
						</Avatar>
						<div style={{paddingTop: '40px'}}/>
						<TextField
							required
					        id="username"
					        name="username"
					        label="Username"
					        margin="normal"
					        variant="outlined"
					        placeholder="Astro Username (eg. SJTSOONJ)"
					        InputLabelProps={{
				               shrink: true,
				            }}
					        onChange={this.handleChange("username")}
					        value={this.state.username}
					        fullWidth
				        />
				        <TextField
				        	required
					        id="password"
					        label="Password"
					        margin="normal"
					        variant="outlined"
					        type="password"
					        placeholder="Password"
					        InputLabelProps={{
				               shrink: true,
				            }}
					        onChange={this.handleChange("password")}
					        fullWidth
				        />
				        <Typography color="error" variant="caption">{validUserName}</Typography>
				        <span className={classes.buttonLayout}>
				        
				        <Button onClick={()=>{loginUser(this.state.username.toLowerCase(), this.state.password)}} disabled={loginButton} className={classes.button}>
							Login
						</Button>
						<Button onClick={this.handleForgotPassword} className={classes.button}>
							Forgot Password
						</Button>
						</span>
					</CardContent>
				</Card>
			</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = ({}) => {

	return {}
}

export default connect(mapStateToProps, {loginUser, setResponseSnackbar})(withStyles(styles)(Login));