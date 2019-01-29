import React, { Component } from 'react';
import ChangePassword from './ChangePassword/ChangePassword';
import Logout from './Logout/Logout'
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export default class ChangePasswordMain extends Component {



  render() {


    return (

      // <div>
      //
      //
      // <Logout />
      //
      //
      // </div>



      <div>
      <Typography
      style={{textAlign:'center'}}
      variant="h2"
      >Change Password
      </Typography>

      <ChangePassword />
      </div>

    );
  }

};
