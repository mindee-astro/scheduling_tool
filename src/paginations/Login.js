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
import {
	loginUser
} from '../actions/index';
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
	}
});

class Login extends Component{
	constructor(props){
		super(props)
		this.state={
			classes: props.classes,
			username: '',
			password: '',
		}
	}

	handleChange=name=>event=>{
		this.setState({
			...this.state,
			[name]: event.target.value
		})
	}

	render(){
		const { loginUser } = this.props;

		const loginButton = (this.state.username.length > 0 && this.state.password.length > 0) ? (false) : (true)

		return(
			<div style={{textAlign: 'center'}}>
				{console.log()}
				<Popup/>
				<ResponseSnackbar/>
				<Card className={this.state.classes.card}>
					<CardContent>
						<Avatar className={this.state.classes.avatar}>
							<PersonOutlineRounded/>
						</Avatar>
						<div style={{paddingTop: '40px'}}/>
						<TextField
							required
					        id="username"
					        name="username"
					        label="User Name"
					        margin="normal"
					        variant="outlined"
					        onChange={this.handleChange("username")}
					        fullWidth
				        />
				        <TextField
				        	required
					        id="password"
					        label="Password"
					        margin="normal"
					        variant="outlined"
					        type="password"
					        onChange={this.handleChange("password")}
					        fullWidth
				        />
				        <Button onClick={()=>{loginUser(this.state.username, this.state.password)}} disabled={loginButton}>
							Login
						</Button>
					</CardContent>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = ({}) => {

	return {}
}

export default connect(mapStateToProps, {loginUser})(withStyles(styles)(Login));