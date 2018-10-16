import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AppContainer from '../app/index';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      navbar: props.navbar,
      navtext: props.navtext,
      loggedInUser: props.loggedIn
    }
  }

  render() {
    return (
      <div>
      {console.log(this.state)}
        <Navbar state={this.state}/>
        <AppContainer/> 
      </div>
    );
  }
}

const mapStateToProps = ({load}) => {
    const {navbar, navtext, loggedIn} = load;
    return{navbar, navtext, loggedIn}
};

export default connect(mapStateToProps)(App);
