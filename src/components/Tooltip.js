import React, {Component} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';

const styles = {
	popover: {
		pointerEvents: 'none',
	},
	tooltip: {
		background: 'black',
		color: 'white',
		opacity: '0.7',
	},
};

class Tooltip extends Component {
	constructor(props){
		super(props)
		this.state = {
			anchorEl: null,
		}	

		this.handlePopoverOpen = this.handlePopoverOpen.bind(this)
		this.handlePopoverClose= this.handlePopoverClose.bind(this)
	}

	handlePopoverOpen = event => {
		this.setState({ 
			anchorEl: event.currentTarget 
		});
	}

	handlePopoverClose(){
		this.setState({
			anchorEl: null
		})
	}

	render(){
		const open = Boolean(this.state.anchorEl);
		const icon = (this.props.iconType=='help') ? 
		<HelpIcon
			fontSize="small"
			color={this.props.color}
		/> 
		: <InfoIcon/>

		return(
			<span
				aria-owns={open ? 'mouse-over-popover' : undefined}
		        aria-haspopup="true"
		        onMouseEnter={this.handlePopoverOpen}
		        onMouseLeave={this.handlePopoverClose}
			>
				{icon}
				<Popover
					id="mouse-over-popover"
					open={open}
					anchorEl={this.state.anchorEl}
					className={this.props.classes.popover}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					onClose={this.handlePopoverClose}
					disableRestoreFocus
					>
					<Typography variant="caption" className={this.props.classes.tooltip}>{this.props.message}</Typography>
				</Popover>
			</span>
		)	
	}

}

Tooltip.propTypes={
	iconType: PropTypes.string,
	message: PropTypes.string.isRequired,
	color: PropTypes.string,
}

export default withStyles(styles)(Tooltip);