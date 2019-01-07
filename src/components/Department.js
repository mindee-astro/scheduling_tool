import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import { connect } from "react-redux";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete"


// Import update rotation api
import { updateRotation } from "../actions/index";

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  card: {
    height: 410
  },
  carddata: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15
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
  show: {
    display: "block"
  },
  showInline: {
    display: "inline-block"
  },
  hide: {
    display: "none"
  }
});

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      editState: true,

      // Original state
      departmentName: props.departmentName,
      rotationPeriod: props.rotationPeriod,
      championName: props.championName, //TODO: ask akmal to include this in API
      championEmail: props.championEmail, //TODO: ask akmal to include this in API
      capacity: props.capacity,
      rotationID: "12345", // TODO: Ask Akmal how to obtain this from backend

      // Updated state
      updatedDepartmentName: "",
      updatedRotationPeriod: "",
      updatedChampionName: "",
      updatedChampionEmail: "",
      updatedCapacity: ""
    };
    // get Rotations from rotationCard
    this.getRotations = props.getRotations;
    this.openDeleteDialog = props.openDeleteDialog;

  }

  async save() {
    if (this.validate()) {
      console.log("inputs validated, saving this rotation");

      // Format into api interface
      let rotationData = {
        name: this.state.updatedDepartmentName,
        duration: this.state.updatedRotationPeriod,
        category: "core", //TODO: ask Akmal whether to set this
        capacity: this.state.updatedCapacity
        // championEmail: this.state.updatedChampionEmail TODO: ask Akmal to include in API
        // championName: this.state.updatedChampionName TODO: ask Akmal to include in API
      };
      console.log(rotationData);
      try {
        let response = await this.props.updateRotation(this.state.rotationID, [
          rotationData
        ]);
        console.log(response);
        // TODO: see what response is printed, if updateRotation successful, getRotations
        this.getRotations();
      } catch (error) {
        console.error(error);
      }
    }
  }

  

  delete() {
    this.openDeleteDialog(this.state.departmentName);
  }

  validate() {
    console.log("validating inputs...");

    return (
      this.state.updatedDepartmentName &&
      this.state.updatedRotationPeriod &&
      this.state.updatedChampionName &&
      this.state.updatedChampionEmail &&
      this.state.updatedCapacity
    );
  }

  toggleEditState(event) {
    this.setState(state => ({
      editState: !state.editState,
      updatedDepartmentName: state.departmentName,
      updatedRotationPeriod: state.rotationPeriod,
      updatedChampionName: state.championName,
      updatedChampionEmail: state.championEmail,
      updatedCapacity: state.capacity
    }));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let classes = this.state.classes;

    return (
        <Card className={classes.card}>
          <div className={classes.iconPosition}>
            <IconButton
              onClick={this.toggleEditState.bind(this)}
              aria-label="edit"
              className={
                this.state.editState ? classes.showInline : classes.hide
              }
            >
              <Edit />
            </IconButton>

            <IconButton
              onClick={this.save.bind(this)}
              aria-label="save"
              className={
                this.state.editState ? classes.hide : classes.showInline
              }
            >
              <Save />
            </IconButton>

            <IconButton
              onClick={this.delete.bind(this)}
              aria-label="delete"
              className={
                this.state.editState ? classes.showInline : classes.hide
              }
            >
              <Delete />
            </IconButton>

            <IconButton
              onClick={this.toggleEditState.bind(this)}
              aria-label="cancel"
              className={
                this.state.editState ? classes.hide : classes.showInline
              }
            >
              <Cancel />
            </IconButton>
          </div>
          {/* Show saved departments */}
          <div
            className={`${classes.cardBottomPadding} ${
              this.state.editState ? classes.show : classes.hide
            }`}
          >
            <p className={classes.cardheading}>Department Name</p>
            <p className={classes.carddata}>{this.state.departmentName}</p>
            <p className={classes.cardheading}>Rotation Period</p>
            <p className={classes.carddata}>{`${
              this.state.rotationPeriod
            } weeks`}</p>
            <p className={classes.cardheading}>Champion Name</p>
            <p className={classes.carddata}>{this.state.championName}</p>
            <p className={classes.cardheading}>Champion Email</p>
            <p className={classes.carddata}>{this.state.championEmail}</p>
            <p className={classes.cardheading}>Max Protégé Capacity</p>
            <p className={classes.carddata}>{`${
              this.state.capacity
            } protégés`}</p>
          </div>

          {/* Show edit mode */}
          <div className={this.state.editState ? classes.hide : classes.show}>
            <div>
              <p className={classes.cardheading}>Department Name</p>
              <Input
                fullWidth
                className={classes.input}
                inputProps={{
                  "aria-label": "Department Name"
                }}
                value={this.state.updatedDepartmentName}
                name="updatedDepartmentName"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <div>
              <p className={classes.cardheading}>Rotation Period</p>
              <Input
                fullWidth
                className={classes.input}
                endAdornment={
                  <InputAdornment position="end">weeks</InputAdornment>
                }
                type="number"
                value={this.state.updatedRotationPeriod}
                name="updatedRotationPeriod"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <div>
              <p className={classes.cardheading}>Champion Name</p>
              <Input
                fullWidth
                className={classes.input}
                value={this.state.updatedChampionName}
                name="updatedChampionName"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <div>
              <p className={classes.cardheading}>Champion Email</p>
              <Input
                fullWidth
                className={classes.input}
                value={this.state.updatedChampionEmail}
                name="updatedChampionEmail"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <div className={classes.cardBottomPadding}>
              <p className={classes.cardheading}>Max Protégé Capacity</p>
              <Input
                fullWidth
                className={classes.input}
                endAdornment={
                  <InputAdornment position="end">protégés</InputAdornment>
                }
                type="number"
                value={this.state.updatedCapacity}
                name="updatedCapacity"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
          </div>
        </Card>
    );
  }
}

Department.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  { updateRotation }
)(withStyles(styles)(Department));