import React, {Component} from 'react';
import {connect} from 'react-redux';
import { } from '../../../actions/index';

import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import red from '@material-ui/core/colors/red';

// Bring in imports
import Ninjas from './Ninjas';
import AddMe from './AddMe';


class configurationCard extends Component {

    constructor() {
        super(); 
		this.state = 
		{ 
			ninjas : [
			{ id: 1, displayName:'Chris', username:'LWYWEIYE', mentor:'Joel Wong', memail:'joel_wong@astro.com.my',
      		joinDate: "2018-12-04", endDate: "2020-11-04", electives: ["apple", "bettle", "cards", "dungeon"], status: 'active' },
			{ id: 2, displayName:'Brianna', username:'CPSCPSBB', mentor:'Joel Wong', memail:'joel_wong@astro.com.my',
      		joinDate: "2018-12-04", endDate: "2020-11-04", electives: ["apple", "bettle", "cards", "dungeon"], status: 'active' },
			]
		}
		
    }

	AddAProtege = (ninja) => {

		let ninjas = [...this.state.ninjas, ninja];
		
		//console.log(this.state.ninjas.length)
		ninja.id = (this.state.ninjas.length) + 1;

    	this.setState({
			ninjas: ninjas
		})

	}

	// push updated "ninja"
    EditAProtege = (ninja) => {
		
		const oldNinja = this.state.ninjas.find( fruit => fruit.username === ninja.username );
		console.log("old nin is ", oldNinja)

		// -1 for the stupid count starting from 0
		var count = (ninja.id) - 1;

		// remainder ninja list
		const ninjaList = this.state.ninjas;
		console.log("remainder nin is ", ninjaList);
		
		// perform splice cut
		const cList = ninjaList.splice(count, 1);
		console.log("CList is ", cList)

		console.log("after cut ", cList);

		let oldninjaList = [...this.state.ninjas, ninja];
		console.log("old list is ", oldninjaList)
		
		const ninjas = oldninjaList.sort(function(a,b){return a.id - b.id});
		console.log("new list is ", ninjas)
		
		// readup on includes
		// readup on filter

    	this.setState({
			ninjas: ninjas
		})
    
    }

	DeleteAProtege = (ninja) => {
		
		const oldNinja = this.state.ninjas.find( fruit => fruit.username === ninja.username );
		console.log("In configuration, old nin is ", oldNinja)

		if (ninja.status === "active") {
			ninja.status = "inactive"
			console.log('ninja ', ninja.id, ' is dirty')
		} else if (ninja.status === "inactive") {
			ninja.status = "active"
			console.log('ninja ', ninja.id, ' is clean')
        }
		
		console.log("In configuration, ninja is ", ninja)

		let oldninjaList = [...this.state.ninjas, ninja];
		console.log("In configuration.DeleteAProtege, oldninjalist is ", oldninjaList)

		// -1 for the stupid count starting from 0
		var count = (ninja.id) - 1;

		// remainder ninja list
		// const ninjaList = this.state.ninjas;
		// console.log("remainder nin is ", ninjaList);
		
		// perform splice cut
		const cList = oldninjaList.splice(count, 1);
		console.log("In configuration.DeleteAProtege, cList (spliced entity) is ", cList)

		console.log("In configuration.DeleteAProtege, after splice newninjalist is ", oldninjaList)

		const ninjas = oldninjaList.sort(function(a,b){return a.id - b.id});
		console.log("new list is ", ninjas)

        this.setState({
			ninjas:ninjas
		})

	}

	render() {

		const { classes, theme } = this.props;

		return (

			<div className="App">
				<div> <Card> <Typography variant='display1' align='center' paragraph> Protégé Management </Typography> </Card> <br /> </div>
				<div> <Ninjas ninjas={this.state.ninjas} EditAProtege={this.EditAProtege} DeleteAProtege={this.DeleteAProtege} /> </div>
				<div> <Card> </Card> <br /> </div>
				<div> <AddMe AddAProtege={this.AddAProtege} /> </div>
			</div>

		);
	}
}

const mapStateToProps = ({}) => {
    return{}
};

export default connect(mapStateToProps)(configurationCard);
