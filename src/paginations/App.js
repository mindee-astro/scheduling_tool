import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AppContainer from '../app/index';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';
import {
  toggleSideBar,
  updatedisplayName,
} from '../actions/index';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      navbar: props.navbar,
      navtext: props.navtext,
      theme: props.theme,
      sidebar: props.sidebar,
      displayname: props.displayName,
    }
  }

  toggleSideBar = () => {
    this.props.toggleSideBar(!this.state.sidebar)
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <Navbar toggleSideBar={this.toggleSideBar}/>
        <Sidebar/>
        <AppContainer/> 
      </div>
    );
  }
}

const mapStateToProps = ({page}) => {
    const {navbar, theme, sidebar, displayName, navTitle} = page;
    return{navbar, theme, sidebar, displayName, navTitle}
};

export default connect(mapStateToProps, {toggleSideBar, updatedisplayName})(App);
