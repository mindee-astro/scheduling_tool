import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete"
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

// Dialog
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";

// Import rotation api
import {
  getAllRotations,
  addRotation,
  updateRotation,
  removeRotation,
  removeRotationSuccess
} from "../../../../actions/index"

import axios from 'axios';

// Dialog Box Styling
const DialogTitle = withStyles(theme => ({
  root: {
    margin: 0
  }
}))(props => {
  const { children, classes } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

// Other styling
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
  carddata: {
    marginTop: 15,
    marginBottom: 15
  },
  addButton: {
    lineHeight: "410px"
  },
  show: {
    display: "block"
  },
  hide: {
    display: "none"
  },
  dialog: {
    textAlign: "center"
  },
  dialogButtonWrapper: {
    marginBottom: 30,
    margin: "0 auto"
  },
  dialogButton: {
    borderRadius: 8,
    width: 100
  },
});

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      deleteDialog: false,

      // Get rotation details 
      mode: props.mode,
      name: props.name,
      duration: props.duration,
      championName: props.championName,
      championEmail: props.championEmail,
      capacity: props.capacity,
      rotationID: props.rotationID
      // rotationDisplay: props.rotationDisplay,
    };

    // To enable usage in this page
    this.originalMode = props.mode
    
  }





  // save() {
  //   if (this.validate()) {
  //     console.log("inputs validated, saving this rotation");
  //     // Format into api interface
  //     let rotationData ={
  //         name: this.state.departmentName,
  //         duration: this.state.rotationPeriod,
  //         category: "core", //TODO: ask Akmal whether to set this
  //         capacity: this.state.capacity
  //       // championEmail: this.state.championEmail TODO: ask Akmal to include in API
  //       // championName: this.state.championName TODO: ask Akmal to include in API
  //     }
  //     console.log(rotationData);
  //     this.props.addRotation([rotationData]); 
  //   }
  // }

  // validate() {
  //   console.log("validating inputs...");
  //   return (
  //     this.state.departmentName &&
  //     this.state.rotationPeriod &&
  //     this.state.championName &&
  //     this.state.championEmail &&
  //     this.state.capacity
  //   );
  // }

  // clearInputs() {
  //   // Clear existing input value
  //   this.setState({
  //     // addButtonState: true,
  //     departmentName: "",
  //     rotationPeriod: "",
  //     championName: "",
  //     championEmail: "",
  //     capacity: ""
  //   });
  // }

  deleteRotation = async () => {
    // TODO: ask akmal how to use the removeRotationSuccess to get response
    await this.props.removeRotation(this.state.rotationID)
    const response = await this.props.removeRotationSuccess()
    console.log(response)

    // console.log('Removing rotation with id:', this.state.rotationID)
    // if (response){
    //   console.log('Rotation removed, getting all rotations')
    //   this.props.getAllRotations()
    // } else {
    //   return response
    // }

    // On removeRotationSuccess, close dialogBox
    this.closeDeleteDialog()

    // Get rotations after rotation is removed
    // this.props.getAllRotations()
  }

  showDeleteDialog = () => {
    this.setState({ deleteDialog: true});
  }

  closeDeleteDialog = () => {
    this.setState({ deleteDialog: false });
  };


  showEditMode = () => {
    this.setState({ mode: 2 });
    // this.setState(state => ({
    // this.state.editState = !this.state.editState
    // updatedDepartmentName: state.departmentName,
    // updatedRotationPeriod: state.rotationPeriod,
    // updatedChampionName: state.championName,
    // updatedChampionEmail: state.championEmail,
    // updatedCapacity: state.capacity
  };

  exitEditMode = () => {
    this.setState({ mode: this.originalMode});  
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

    // For Display Rotation
    const rotationHeaders = ['Department Name', 'Rotation Period', 'Champion Name', 'Champion Email', 'Max Capacity']
    const rotationValues = [this.state.name, this.state.duration + ((this.state.duration>1)? ' weeks':' week'), this.state.championName, this.state.championEmail, this.state.capacity + ((this.props.capacity>1)? ' protégés': ' protégé')];
    const endAdornment = ['','week(s)','','','protégé(s)']
    const fieldType = ['text','number','text','text','number']
    

    return (
      // Display Icons 
      <div>
        <div className={(this.state.mode ===1 || this.state.mode ===2)? classes.iconPosition : classes.hide}>
          <IconButton
            onClick={this.showEditMode.bind(this)}
            aria-label="edit"
            className={
              (this.state.mode===1) ? classes.showInline : classes.hide
            }
          >
            <Edit />
          </IconButton>

          <IconButton
            // onClick={this.save.bind(this)} //TODO: connect to save api 
            aria-label="save"
            className={
              (this.state.mode===2) ? classes.showInline : classes.hide
            }
          >
            <Save />
          </IconButton>

          <IconButton
            onClick={this.showDeleteDialog.bind(this)}
            aria-label="delete"
            className={
              (this.state.mode===1) ? classes.showInline : classes.hide
            }
          >
            <Delete />
          </IconButton>

          <IconButton
            onClick={this.exitEditMode.bind(this)}
            aria-label="cancel"
            className={(this.state.mode === 2)? classes.showInline: classes.hide}
          >
            <Cancel />
          </IconButton>
        </div>

        {/* Display rotations */}
        <div>
          {rotationHeaders.map((header, index) => {
            return (
              <div key={index}>
                <p className={`${(this.state.mode===1 || this.state.mode ===2)? classes.show : classes.hide} ${classes.cardheading}`}>{header}</p>
                <p className={`${(this.state.mode === 1) ? classes.show : classes.hide} ${classes.carddata}`}>{rotationValues[index]}</p>
                <div className={(this.state.mode === 2) ? classes.show : classes.hide}>
                  <Input
                    fullWidth
                    className={classes.input}
                    inputProps={{
                      "aria-label": header
                      // "aria-label": "Department Name"
                    }}
                    // value={rotationValues[index]} TODO: check how to change this on input change 
                    endAdornment={
                      <InputAdornment position="end">{endAdornment[index]}</InputAdornment> 
                    }
                    name={header}
                    type={fieldType[index]}
                    // name="departmentName"
                    onChange={this.handleInputChange.bind(this)}
                  />
                </div>
                
              </div>
            );
          })}
        </div>

        {/* Add rotation */}
        {/* TODO: connect to add rotation api */}
        <div onClick={this.showEditMode.bind(this)} className={`${(this.state.mode === 3) ? classes.show : classes.hide} ${classes.fullHeight}`}>
          <span className={classes.addButton}>
            <IconButton>
              <AddCircleOutline style={{ fontSize: 100 }} /> 
            </IconButton>
          </span>
        </div>

        {/* Dialog Box */}
        <Dialog
          open={this.state.deleteDialog}
          onClose={this.closeDeleteDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.dialog}
        >
          <DialogTitle>REMOVE ROTATION</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to remove "<b>{this.state.name}</b>" rotation?</DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogButtonWrapper}>
            <Button
              onClick={this.closeDeleteDialog}
              className={classes.dialogButton}
              color="primary"
            >Cancel</Button>
            <Button
              onClick={this.deleteRotation} //TODO: connect to delete api
              className={classes.dialogButton}
              color="primary"
              autoFocus>Remove</Button>
          </DialogActions>
        </Dialog>

      </div>
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
  { addRotation, getAllRotations, updateRotation, removeRotation, removeRotationSuccess }
)(withStyles(styles)(Department));
