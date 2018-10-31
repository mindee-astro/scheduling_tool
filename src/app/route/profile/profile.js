import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
} from '../../../actions/index';

const styles = {
	title: {
		fontSize: '1em',
		paddingBottom: '20px'
	},
	fieldName: {
		fontSize: '0.8em',
		color: '#9f74fc'
	},
	text: {
		fontSize: '0.8em',
		color: '#000000'	
	}
};


class profileCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			classes: props.classes,
			width: 0,
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
  		this.setState({ width: window.innerWidth});
	}
 render() {
	 	return(
	 		<div>
	 			<Grid container spacing={8}>
	 				<Grid item xs={(this.state.width>850) ? 6 : 12}>
	 					<Card>
	 						<CardContent>
	 							<Typography className={this.state.classes.title}>Profile Information</Typography>
	 							<Typography className={this.state.classes.fieldName}>Name : <span style={{color: 'black'}}>{this.props.displayname}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>User Name : <span style={{color: 'black'}}>{this.props.username}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>Email : <span style={{color: 'black'}}>{this.props.email}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>Mentor : <span style={{color: 'black'}}>{this.props.mentor}</span></Typography>
	 							<Typography className={this.state.classes.fieldName}>Mentor Email : <span style={{color: 'black'}}>{this.props.mentoremail}</span></Typography>
	 						</CardContent>
	 					</Card>
	 				</Grid>
	 				<Grid item xs>
	 					<Card>
	 						<CardContent>
	 							<Typography className={this.state.classes.title}>Module Selection</Typography>
	 							<Typography className={this.state.classes.text}>
	 								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ligula urna, ut imperdiet lectus dignissim ac. Vestibulum sem odio, suscipit quis ipsum aliquet, faucibus euismod ante. Morbi tincidunt dignissim massa, a lacinia arcu ornare sit amet. Nullam eget consequat mi. Duis sed lacus metus. Phasellus volutpat scelerisque condimentum. Curabitur nec tincidunt purus. Nam eu metus arcu. Donec vitae vestibulum purus, at rhoncus turpis.
	 								Aliquam nec quam lacinia, pretium ligula at, sollicitudin felis. Morbi facilisis quam sed odio pretium tristique. Vestibulum nec dui eget sem scelerisque aliquet. Nullam dignissim erat non urna pretium venenatis. In vel finibus erat, ut iaculis diam. Proin blandit dignissim tellus, eget imperdiet ex viverra non. Integer sed dui euismod lorem tristique congue. Curabitur ultricies nisl ut augue maximus, vel aliquet est mattis. Mauris maximus magna eu lacus commodo, a auctor nibh hendrerit. Ut sed velit luctus, vestibulum ligula non, faucibus nibh. Proin bibendum auctor sapien. Phasellus tellus quam, scelerisque nec condimentum ut, ullamcorper sit amet metus. Nunc mattis lectus ac est venenatis, vitae mattis tortor ornare.
	 								Donec in elementum tortor, et blandit nunc. Nulla convallis interdum egestas. Integer at ullamcorper ipsum. Maecenas mattis aliquam diam, at sodales neque pulvinar sit amet. Morbi vel lorem nec erat aliquam commodo. Vestibulum dapibus congue turpis, tempus sodales nisi tincidunt sed. Sed sit amet rutrum sapien. Sed blandit nisi sed magna cursus, sed facilisis dui condimentum. Sed blandit vel nisi porttitor blandit.
	 								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ligula urna, ut imperdiet lectus dignissim ac. Vestibulum sem odio, suscipit quis ipsum aliquet, faucibus euismod ante. Morbi tincidunt dignissim massa, a lacinia arcu ornare sit amet. Nullam eget consequat mi. Duis sed lacus metus. Phasellus volutpat scelerisque condimentum. Curabitur nec tincidunt purus. Nam eu metus arcu. Donec vitae vestibulum purus, at rhoncus turpis.
	 								Aliquam nec quam lacinia, pretium ligula at, sollicitudin felis. Morbi facilisis quam sed odio pretium tristique. Vestibulum nec dui eget sem scelerisque aliquet. Nullam dignissim erat non urna pretium venenatis. In vel finibus erat, ut iaculis diam. Proin blandit dignissim tellus, eget imperdiet ex viverra non. Integer sed dui euismod lorem tristique congue. Curabitur ultricies nisl ut augue maximus, vel aliquet est mattis. Mauris maximus magna eu lacus commodo, a auctor nibh hendrerit. Ut sed velit luctus, vestibulum ligula non, faucibus nibh. Proin bibendum auctor sapien. Phasellus tellus quam, scelerisque nec condimentum ut, ullamcorper sit amet metus. Nunc mattis lectus ac est venenatis, vitae mattis tortor ornare.
	 								Donec in elementum tortor, et blandit nunc. Nulla convallis interdum egestas. Integer at ullamcorper ipsum. Maecenas mattis aliquam diam, at sodales neque pulvinar sit amet. Morbi vel lorem nec erat aliquam commodo. Vestibulum dapibus congue turpis, tempus sodales nisi tincidunt sed. Sed sit amet rutrum sapien. Sed blandit nisi sed magna cursus, sed facilisis dui condimentum. Sed blandit vel nisi porttitor blandit.
	 								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ligula urna, ut imperdiet lectus dignissim ac. Vestibulum sem odio, suscipit quis ipsum aliquet, faucibus euismod ante. Morbi tincidunt dignissim massa, a lacinia arcu ornare sit amet. Nullam eget consequat mi. Duis sed lacus metus. Phasellus volutpat scelerisque condimentum. Curabitur nec tincidunt purus. Nam eu metus arcu. Donec vitae vestibulum purus, at rhoncus turpis.
	 								Aliquam nec quam lacinia, pretium ligula at, sollicitudin felis. Morbi facilisis quam sed odio pretium tristique. Vestibulum nec dui eget sem scelerisque aliquet. Nullam dignissim erat non urna pretium venenatis. In vel finibus erat, ut iaculis diam. Proin blandit dignissim tellus, eget imperdiet ex viverra non. Integer sed dui euismod lorem tristique congue. Curabitur ultricies nisl ut augue maximus, vel aliquet est mattis. Mauris maximus magna eu lacus commodo, a auctor nibh hendrerit. Ut sed velit luctus, vestibulum ligula non, faucibus nibh. Proin bibendum auctor sapien. Phasellus tellus quam, scelerisque nec condimentum ut, ullamcorper sit amet metus. Nunc mattis lectus ac est venenatis, vitae mattis tortor ornare.
	 								Donec in elementum tortor, et blandit nunc. Nulla convallis interdum egestas. Integer at ullamcorper ipsum. Maecenas mattis aliquam diam, at sodales neque pulvinar sit amet. Morbi vel lorem nec erat aliquam commodo. Vestibulum dapibus congue turpis, tempus sodales nisi tincidunt sed. Sed sit amet rutrum sapien. Sed blandit nisi sed magna cursus, sed facilisis dui condimentum. Sed blandit vel nisi porttitor blandit.
	 								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ligula urna, ut imperdiet lectus dignissim ac. Vestibulum sem odio, suscipit quis ipsum aliquet, faucibus euismod ante. Morbi tincidunt dignissim massa, a lacinia arcu ornare sit amet. Nullam eget consequat mi. Duis sed lacus metus. Phasellus volutpat scelerisque condimentum. Curabitur nec tincidunt purus. Nam eu metus arcu. Donec vitae vestibulum purus, at rhoncus turpis.
	 								Aliquam nec quam lacinia, pretium ligula at, sollicitudin felis. Morbi facilisis quam sed odio pretium tristique. Vestibulum nec dui eget sem scelerisque aliquet. Nullam dignissim erat non urna pretium venenatis. In vel finibus erat, ut iaculis diam. Proin blandit dignissim tellus, eget imperdiet ex viverra non. Integer sed dui euismod lorem tristique congue. Curabitur ultricies nisl ut augue maximus, vel aliquet est mattis. Mauris maximus magna eu lacus commodo, a auctor nibh hendrerit. Ut sed velit luctus, vestibulum ligula non, faucibus nibh. Proin bibendum auctor sapien. Phasellus tellus quam, scelerisque nec condimentum ut, ullamcorper sit amet metus. Nunc mattis lectus ac est venenatis, vitae mattis tortor ornare.
	 								Donec in elementum tortor, et blandit nunc. Nulla convallis interdum egestas. Integer at ullamcorper ipsum. Maecenas mattis aliquam diam, at sodales neque pulvinar sit amet. Morbi vel lorem nec erat aliquam commodo. Vestibulum dapibus congue turpis, tempus sodales nisi tincidunt sed. Sed sit amet rutrum sapien. Sed blandit nisi sed magna cursus, sed facilisis dui condimentum. Sed blandit vel nisi porttitor blandit.
	 								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ligula urna, ut imperdiet lectus dignissim ac. Vestibulum sem odio, suscipit quis ipsum aliquet, faucibus euismod ante. Morbi tincidunt dignissim massa, a lacinia arcu ornare sit amet. Nullam eget consequat mi. Duis sed lacus metus. Phasellus volutpat scelerisque condimentum. Curabitur nec tincidunt purus. Nam eu metus arcu. Donec vitae vestibulum purus, at rhoncus turpis.
	 								Aliquam nec quam lacinia, pretium ligula at, sollicitudin felis. Morbi facilisis quam sed odio pretium tristique. Vestibulum nec dui eget sem scelerisque aliquet. Nullam dignissim erat non urna pretium venenatis. In vel finibus erat, ut iaculis diam. Proin blandit dignissim tellus, eget imperdiet ex viverra non. Integer sed dui euismod lorem tristique congue. Curabitur ultricies nisl ut augue maximus, vel aliquet est mattis. Mauris maximus magna eu lacus commodo, a auctor nibh hendrerit. Ut sed velit luctus, vestibulum ligula non, faucibus nibh. Proin bibendum auctor sapien. Phasellus tellus quam, scelerisque nec condimentum ut, ullamcorper sit amet metus. Nunc mattis lectus ac est venenatis, vitae mattis tortor ornare.
	 								Donec in elementum tortor, et blandit nunc. Nulla convallis interdum egestas. Integer at ullamcorper ipsum. Maecenas mattis aliquam diam, at sodales neque pulvinar sit amet. Morbi vel lorem nec erat aliquam commodo. Vestibulum dapibus congue turpis, tempus sodales nisi tincidunt sed. Sed sit amet rutrum sapien. Sed blandit nisi sed magna cursus, sed facilisis dui condimentum. Sed blandit vel nisi porttitor blandit.
	 								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ligula urna, ut imperdiet lectus dignissim ac. Vestibulum sem odio, suscipit quis ipsum aliquet, faucibus euismod ante. Morbi tincidunt dignissim massa, a lacinia arcu ornare sit amet. Nullam eget consequat mi. Duis sed lacus metus. Phasellus volutpat scelerisque condimentum. Curabitur nec tincidunt purus. Nam eu metus arcu. Donec vitae vestibulum purus, at rhoncus turpis.
	 								Aliquam nec quam lacinia, pretium ligula at, sollicitudin felis. Morbi facilisis quam sed odio pretium tristique. Vestibulum nec dui eget sem scelerisque aliquet. Nullam dignissim erat non urna pretium venenatis. In vel finibus erat, ut iaculis diam. Proin blandit dignissim tellus, eget imperdiet ex viverra non. Integer sed dui euismod lorem tristique congue. Curabitur ultricies nisl ut augue maximus, vel aliquet est mattis. Mauris maximus magna eu lacus commodo, a auctor nibh hendrerit. Ut sed velit luctus, vestibulum ligula non, faucibus nibh. Proin bibendum auctor sapien. Phasellus tellus quam, scelerisque nec condimentum ut, ullamcorper sit amet metus. Nunc mattis lectus ac est venenatis, vitae mattis tortor ornare.
	 								Donec in elementum tortor, et blandit nunc. Nulla convallis interdum egestas. Integer at ullamcorper ipsum. Maecenas mattis aliquam diam, at sodales neque pulvinar sit amet. Morbi vel lorem nec erat aliquam commodo. Vestibulum dapibus congue turpis, tempus sodales nisi tincidunt sed. Sed sit amet rutrum sapien. Sed blandit nisi sed magna cursus, sed facilisis dui condimentum. Sed blandit vel nisi porttitor blandit.
	 							</Typography>
	 						</CardContent>
	 					</Card>
	 				</Grid>
	 			</Grid>
	 		</div>
	 	)
	}
}

const mapStateToProps = ({auth}) => {
	const {username,displayname,joindate,mentor,accesslevel,email,mentoremail} = auth;
    return{username,displayname,joindate,mentor,accesslevel,email,mentoremail}
};

export default connect(mapStateToProps)(withStyles(styles)(profileCard));