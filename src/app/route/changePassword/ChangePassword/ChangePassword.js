import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Form from './Form/Form'

const styles = {
  card: {
    width:'750px',
    margin: 'auto',
    marginTop:'50px',
    align: 'center',
    textAlign:'center',
    backgroundColor:'#f9f7g9'

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


const ChangePassword=(props)=> {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <form
      onSubmit={props.valsubmit}
       >
       <div>
        <CardContent>

        <Form />

        </CardContent>


        </div>
      </form>


    </Card>
  );
}

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangePassword);
