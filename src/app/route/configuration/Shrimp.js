import React from 'react';
import PropTypes from 'prop-types';
import Fish from './Fish'
import Crab from './Crab'
import { withStyles } from '@material-ui/core';


class suspendedProtege extends React.Component {

  constructor(props) {
    super(props); 
    this.passhandleSubmit = this.passhandleSubmit.bind(this);
    this.passhandleDeleteclick = this.passhandleDelete.bind(this);
  }

  passhandleDelete = (protege) => {

    this.props.DeleteAProtege(protege);

  }

  passhandleSubmit = (protege) => {
      
    this.props.EditAProtege(protege);

  }

  render() {
    
    const { ninjas } = this.props;
    const goodninjas = ninjas.filter(x => x.status === 'active' || x.status === 'onboarding');
    const badninjas = ninjas.filter(x => x.status === 'inactive');
    const ninjaList = goodninjas.map(ninja => {

      return (

        <div>
          <Fish ninja={ninja} passhandleSubmit={this.passhandleSubmit} passhandleDelete={this.passhandleDelete}/>
        </div>

      );
    
    })
  
    const badninjaList = badninjas.map(samurai => {

      return (

        <div>
          <Crab ninja={samurai} passhandleSubmit={this.passhandleSubmit} passhandleDelete={this.passhandleDelete}/>
        </div>

      )

    })

    return(

      <div>
        <div> { ninjaList } </div>
        <div> { badninjaList } </div>
      </div>
    
    )

  }
}

suspendedProtege.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (suspendedProtege);