import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
    margin: '25px',
    align: 'center',
    textAlign:'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin:'25px',
  },
  centre: {
    align:'center',
  }
};

 const Logout = (props) => {


  return (
    <div>
    <div>
    <Typography style={{textAlign:'center' , marginBottom: '100px' , marginTop:'100px'}} variant='h3'>
  Logout
    </Typography>
    </div>
      <Card style={{justifyContent:'center',  margin:'10px 200px'}}>

        <CardContent>




        <Typography style={{textAlign:'center'}} variant="h4">
        Are you sure you want to logout?
        </Typography>
          <br/>
          <br/>





       <CardActions style={{justifyContent:'center'}}>
          <Button size="large"  variant="contained" color="primary">YES</Button>

          <div style={{marginLeft:'200px'}}>
          <Button  size="large"  variant="contained" color="secondary">NO</Button>
          </div>


          </CardActions>

          </CardContent>
          </Card>
          </div>
);
}

export default withStyles(styles)(Logout)
