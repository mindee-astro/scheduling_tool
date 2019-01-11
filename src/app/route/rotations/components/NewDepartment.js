import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import { connect } from "react-redux";

// Import Add rotation api
import { addRotation } from "../../../../actions/index"

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  card: {
    height: 410
  },
  fullHeight: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  cardheading: {
    margin: 0,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1769aa"
  },
  iconPosition: {
    textAlign: "right",
    paddingTop: 10
  },
  cardBottomPadding: {
    paddingBottom: 15
  },
  addButton: {
    lineHeight: "410px"
  },
  show: {
    display: "block"
  },
  hide: {
    display: "none"
  }
});

class NewDepartment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      responseLabel: "",
      classes: props.classes,
      addButtonState: true,
      departmentName: "",
      rotationPeriod: "",
      championName: "",
      championEmail: "",
      capacity: ""
    };
    this.getRotations = props.getRotations
  }

  save() {
    if (this.validate()) {
      console.log("inputs validated, saving this rotation");
      // Format into api interface
      let rotationData ={
          name: this.state.departmentName,
          duration: this.state.rotationPeriod,
          category: "core", //TODO: ask Akmal whether to set this
          capacity: this.state.capacity
        // championEmail: this.state.championEmail TODO: ask Akmal to include in API
        // championName: this.state.championName TODO: ask Akmal to include in API
      }
      console.log(rotationData);
      this.props.addRotation([rotationData]); 
    }
  }

  validate() {
    console.log("validating inputs...");
    return (
      this.state.departmentName &&
      this.state.rotationPeriod &&
      this.state.championName &&
      this.state.championEmail &&
      this.state.capacity
    );
  }

  clearInputs() {
    // Clear existing input value
    this.setState({
      addButtonState: true,
      departmentName: "",
      rotationPeriod: "",
      championName: "",
      championEmail: "",
      capacity: ""
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggleButtonState(event) {
    this.setState(state => ({
      addButtonState: !state.addButtonState
    }));
  }

  render() {
    let classes = this.state.classes;

    return (
      <Card className={classes.card}>
        {/* Display add button by default */}
        <div
          onClick={this.toggleButtonState.bind(this)}
          className={`${
            this.state.addButtonState ? classes.show : classes.hide
          } ${classes.fullHeight}`}
        >
          {/* {this.state.isToggleOn} */}
          <div>
            <span className={classes.addButton}>
              <IconButton>
                <AddCircleOutline style={{ fontSize: 100 }} />
              </IconButton>
            </span>
          </div>
        </div>

        {/* Display form edit text field on add button click */}
        <div
          className={this.state.addButtonState ? classes.hide : classes.show}
        >
          <div className={classes.iconPosition}>
            <IconButton aria-label="save" onClick={this.save.bind(this)}>
              <Save className={classes.actions} />
            </IconButton>
            <IconButton
              aria-label="cancel"
              onClick={this.clearInputs.bind(this)}
            >
              <Cancel className={classes.actions} />
            </IconButton>
          </div>
          <div>
            <p className={classes.cardheading}>Department Name</p>
            <Input
              fullWidth
              placeholder="Project Management"
              className={classes.input}
              inputProps={{
                "aria-label": "Department Name"
              }}
              value={this.state.departmentName}
              name="departmentName"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div>
            <p className={classes.cardheading}>Rotation Period</p>
            <Input
              fullWidth
              placeholder="Rotation Period"
              className={classes.input}
              endAdornment={
                <InputAdornment position="end">weeks</InputAdornment>
              }
              type="number"
              value={this.state.rotationPeriod}
              name="rotationPeriod"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div>
            <p className={classes.cardheading}>Champion Name</p>
            <Input
              fullWidth
              placeholder="Chow Siew Mun"
              className={classes.input}
              value={this.state.championName}
              name="championName"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div>
            <p className={classes.cardheading}>Champion Email</p>
            <Input
              fullWidth
              placeholder="siew-mun_chow@astro.com.my"
              className={classes.input}
              value={this.state.championEmail}
              name="championEmail"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className={classes.cardBottomPadding}>
            <p className={classes.cardheading}>Max Protégé Capacity</p>
            <Input
              fullWidth
              placeholder="0"
              className={classes.input}
              endAdornment={
                <InputAdornment position="end">protégés</InputAdornment>
              }
              type="number"
              value={this.state.capacity}
              name="capacity"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
        </div>
      </Card>
    );
  }
}

NewDepartment.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  { addRotation }
)(withStyles(styles)(NewDepartment));
