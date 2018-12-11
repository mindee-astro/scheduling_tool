import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NewDepartment from "../../../components/NewDepartment";
import Department from "../../../components/Department";

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

// Import Get rotation api
import { getAllRotations } from "../../../actions/index";

// Other imports
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {} from "../../../actions/index";

const DialogTitle = withStyles(theme => ({
  root: {
    margin: 0,
  }
}))(props => {
  const { children, classes } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      </MuiDialogTitle>
  );
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  gridwrapper: {
    paddingLeft: 25
  },
  dialog: {
    textAlign: 'center'
  },
  dialogButtonWrapper: {
    marginBottom: 30,
    margin: '0 auto'
  },
  dialogButton: {
    borderRadius: 8,
    width: 100
  }
});

class rotationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      deleteDialog: false,
      dialogDepartmentName: ''
    };
  }

  getRotations() {
    //TODO: get rotation
    // ...
    // ...

    // Create mock array from getRotations
    let rotationArray = [
      {
        departmentName: "Project Management",
        rotationPeriod: 12,
        championName: "Chow Siew Mun",
        championEmail: "siew-mun_chow@astro.com.my",
        capacity: 2
      },
      {
        departmentName: "Product Management",
        rotationPeriod: 12,
        championName: "Yunus",
        championEmail: "yunus@astro.com.my",
        capacity: 2
      },
      {
        departmentName: "Product Engineering",
        rotationPeriod: 12,
        championName: "Michael Fu",
        championEmail: "michael-fu@astro.com.my",
        capacity: 2
      },
      {
        departmentName: "Software Engineering",
        rotationPeriod: 12,
        championName: "Nicholas Ngoo",
        championEmail: "nic@astro.com.my",
        capacity: 3
      }
    ];

    return rotationArray.map(r => (
      <Grid item xs={12} md={6} lg={4}>
        <Department departmentName={r.departmentName} 
        rotationPeriod={r.rotationPeriod}
        championName={r.championName}
        championEmail={r.championEmail}
        capacity={r.capacity}
        getRotations={this.getRotations}
        openDeleteDialog={this.openDeleteDialog}
        />
      </Grid>
    ));
  }

  openDeleteDialog = (dialogDepartmentName) => {
    this.setState({ deleteDialog: true });
    this.setState({dialogDepartmentName: dialogDepartmentName})
  };

  closeDeleteDialog = () => {
    this.setState({ deleteDialog: false });
  };

  render() {
    return (
      <div className={this.state.classes.gridwrapper}>
        <Grid container spacing={24}>
          {/* get rotation: department component */}
          {this.getRotations()}

          <Grid item xs={12} md={6} lg={4}>
            <NewDepartment getRotations={this.getRotations.bind(this)} />
          </Grid>
        </Grid>

        {/* Dialog Box for delete button */}
        <Dialog
          open={this.state.deleteDialog}
          onClose={this.closeDeleteDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={this.state.classes.dialog}
        >
          <DialogTitle>
            REMOVE ROTATION
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to remove "<b>{this.state.dialogDepartmentName}</b>" rotation?
            </DialogContentText>
          </DialogContent>
          <DialogActions className={this.state.classes.dialogButtonWrapper}>
            <Button onClick={this.closeDeleteDialog} className={this.state.classes.dialogButton} color="primary">
              Cancel
            </Button>
            <Button onClick={this.closeDeleteDialog} className={this.state.classes.dialogButton} color="primary" autoFocus>
              Remove
            </Button>
          </DialogActions>
        </Dialog>
        {/* End of dialog box for delete button */}
      </div>
    );
  }
}

rotationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  { getAllRotations }
)(withStyles(styles)(rotationCard));
