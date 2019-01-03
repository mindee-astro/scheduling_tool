import React, {Component} from 'react';
import {connect} from 'react-redux';
import { } from '../../../actions/index';

import ReactDOM from 'react-dom'

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

	render() {
		return (

			<div className="App">
				<div> <h1 align='center'>Protégé Management</h1> </div>
				<div> <Ninjas ninjas={this.state.ninjas} EditAProtege={this.EditAProtege} /> </div>
				<div> <AddMe AddAProtege={this.AddAProtege} /> </div>
			</div>

		);
	}
}

const mapStateToProps = ({}) => {
    return{}
};

export default connect(mapStateToProps)(configurationCard);
