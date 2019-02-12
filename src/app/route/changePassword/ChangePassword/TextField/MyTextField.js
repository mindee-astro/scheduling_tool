import TextField from '@material-ui/core/TextField';
import React from 'react';


const MyTextField=(props)=> {

  return(
  <div>
 <TextField
    name={props.name}
    type="password"
    error={props.erro}
    label={props.label}
    autoComplete="current-password"
    margin="normal"
    variant="outlined"
    onChange={props.change}
    value={props.val}
  />


  </div>
)
}

export default MyTextField;
