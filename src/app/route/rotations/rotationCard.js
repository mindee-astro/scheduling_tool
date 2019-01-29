import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// Import Get rotation api
import { getAllRotations } from "../../../actions/ConfigActions";

// Other imports
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Department from "./components/Department";


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  gridwrapper: {
    paddingLeft: 25
  },
  card: {
    height: 410
  }
});

class rotationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,

      // For get rotations
      rotations: [],
      rotationDisplay: [],
    };
  }

  componentDidMount() {
    this.props.getAllRotations();
  }

  componentWillUpdate(prevState) {
    if (prevState.rotations !== this.state.rotations) {
      this.setState({
        ...this.state,
        rotations: this.props.rotations,
        rotationDisplay: this.props.rotations.map(r =>{
          return{
            ...r,
            mode: 1
          }
        })
      });
    }
  }

  render() {
    let classes = this.state.classes;

    return (
      <div className={classes.gridwrapper}>
        <Grid container spacing={24}>
          {this.state.rotationDisplay.map((r, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card className={classes.card}>
                  <Department name={r.name} duration={r.duration} championName={r.championName} championEmail={r.championEmail} capacity={r.capacity} rotationID={r.rotationID} mode={1} />
                </Card>
              </Grid>
            )
          })}
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
              <Department mode={3} />
            </Card>
          </Grid>
        </Grid>
      </div>

    )
  };
}

rotationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ rotation }) => {
  const { rotations } = rotation;
  return { rotations };
};

export default connect(
  mapStateToProps,
  { getAllRotations }
)(withStyles(styles)(rotationCard));
