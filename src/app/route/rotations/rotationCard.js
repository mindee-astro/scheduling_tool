// Card imports
// import React from 'react';
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import NewDepartment from "../../../components/NewDepartment";

// Other imports
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {} from "../../../actions/index";
import { CardHeader } from "@material-ui/core/CardHeader";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  gridwrapper: {
    paddingLeft: 25
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  addButton: {
    textAlign: "center"
  },
  show: {
    display: "block"
  },
  hide: {
    display: "none"
  }
});

function handleClick(state) {
  // this.setState(state => ({
  // 	isToggleOn: !state.isToggleOn
  // }));
  // console.log(addButtonState);
  // addButtonState = !addButtonState;
  // console.log(addButtonState);
  console.log(state);
  return !state;
}

class rotationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes
    };
  }

  //TODO: get rotation
  // ...
  // ...

  saveRotation(rotation) {
    console.log("rotationCard -- saveRotation");
    console.log(rotation);
  }

  render() {
	  const classes = this.state.classes; //TODO: remove this when have department component
    return (
      <div className={this.state.classes.gridwrapper}>
        <Grid container spacing={24}>
          {/* get rotation: department component */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
              <div className={classes.iconPosition}>
                <IconButton aria-label="edit">
                  <Edit className={classes.actions} />
                </IconButton>
                <IconButton aria-label="delete">
                  <Delete className={classes.actions} />
                </IconButton>
              </div>
              <div className={classes.cardBottomPadding}>
                <p className={classes.cardheading}>Department Name</p>
                <p className={classes.carddata}>{"Project Management"}</p>
                <p className={classes.cardheading}>Rotation Period</p>
                <p className={classes.carddata}>{12 + " weeks"}</p>
                <p className={classes.cardheading}>Champion Name</p>
                <p className={classes.carddata}>{"Chow Siew Mun"}</p>
                <p className={classes.cardheading}>Champion Email</p>
                <p className={classes.carddata}>
                  {"siew-mun_chow@astro.com.my"}
                </p>
                <p className={classes.cardheading}>Max Protégé Capacity</p>
                <p className={classes.carddata}>{2 + " protégés"}</p>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
              <div className={classes.iconPosition}>
                <IconButton aria-label="edit">
                  <Edit className={classes.actions} />
                </IconButton>
                <IconButton aria-label="delete">
                  <Delete className={classes.actions} />
                </IconButton>
              </div>
              <div className={classes.cardBottomPadding}>
                <p className={classes.cardheading}>Department Name</p>
                <p className={classes.carddata}>{"Project Management"}</p>
                <p className={classes.cardheading}>Rotation Period</p>
                <p className={classes.carddata}>{12 + " weeks"}</p>
                <p className={classes.cardheading}>Champion Name</p>
                <p className={classes.carddata}>{"Chow Siew Mun"}</p>
                <p className={classes.cardheading}>Champion Email</p>
                <p className={classes.carddata}>
                  {"siew-mun_chow@astro.com.my"}
                </p>
                <p className={classes.cardheading}>Max Protégé Capacity</p>
                <p className={classes.carddata}>{2 + " protégés"}</p>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
              <div className={classes.iconPosition}>
                <IconButton aria-label="edit">
                  <Edit className={classes.actions} />
                </IconButton>
                <IconButton aria-label="delete">
                  <Delete className={classes.actions} />
                </IconButton>
              </div>
              <div className={classes.cardBottomPadding}>
                <p className={classes.cardheading}>Department Name</p>
                <p className={classes.carddata}>{"Project Management"}</p>
                <p className={classes.cardheading}>Rotation Period</p>
                <p className={classes.carddata}>{12 + " weeks"}</p>
                <p className={classes.cardheading}>Champion Name</p>
                <p className={classes.carddata}>{"Chow Siew Mun"}</p>
                <p className={classes.cardheading}>Champion Email</p>
                <p className={classes.carddata}>
                  {"siew-mun_chow@astro.com.my"}
                </p>
                <p className={classes.cardheading}>Max Protégé Capacity</p>
                <p className={classes.carddata}>{2 + " protégés"}</p>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
              <div className={classes.iconPosition}>
                <IconButton aria-label="edit">
                  <Edit className={classes.actions} />
                </IconButton>
                <IconButton aria-label="delete">
                  <Delete className={classes.actions} />
                </IconButton>
              </div>
              <div className={classes.cardBottomPadding}>
                <p className={classes.cardheading}>Department Name</p>
                <p className={classes.carddata}>{"Project Management"}</p>
                <p className={classes.cardheading}>Rotation Period</p>
                <p className={classes.carddata}>{12 + " weeks"}</p>
                <p className={classes.cardheading}>Champion Name</p>
                <p className={classes.carddata}>{"Chow Siew Mun"}</p>
                <p className={classes.cardheading}>Champion Email</p>
                <p className={classes.carddata}>
                  {"siew-mun_chow@astro.com.my"}
                </p>
                <p className={classes.cardheading}>Max Protégé Capacity</p>
                <p className={classes.carddata}>{2 + " protégés"}</p>
              </div>
            </Card>
          </Grid>

          {/* <Department></Department> */}
          <Grid item xs={12} md={6} lg={4}>
            <NewDepartment save={this.saveRotation} />
          </Grid>
        </Grid>
      </div>
    );
    // return (
    // 	<div className={classes.gridwrapper}>
    // 		<Grid container spacing={24}>
    // 			{/* Add card mode */}
    // 			{/* {AddCard({ classes: classes })} */}
    // 			<AddCard classes={classes} />

    // 			<Grid item xs={12} md={6} lg={4} xl={4}>
    // <Card className={classes.card}>
    // 	<div className={classes.iconPosition}>
    // 		<IconButton aria-label="edit">
    // 			<Edit className={classes.actions} />
    // 		</IconButton>
    // 		<IconButton aria-label="delete">
    // 			<Delete className={classes.actions} />
    // 		</IconButton>
    // 	</div>
    // 	<div className={classes.cardBottomPadding}>
    // 		<p className={classes.cardheading}>Department Name</p>
    // 		<p className={classes.carddata}>{'Project Management'}</p>
    // 		<p className={classes.cardheading}>Rotation Period</p>
    // 		<p className={classes.carddata}>{12 + ' weeks'}</p>
    // 		<p className={classes.cardheading}>Champion Name</p>
    // 		<p className={classes.carddata}>{'Chow Siew Mun'}</p>
    // 		<p className={classes.cardheading}>Champion Email</p>
    // 		<p className={classes.carddata}>{'siew-mun_chow@astro.com.my'}</p>
    // 		<p className={classes.cardheading}>Max Protégé Capacity</p>
    // 		<p className={classes.carddata}>{2 + ' protégés'}</p>
    // 	</div>
    // </Card>
    // 			</Grid>

    // 			<Grid item xs={12} md={6} lg={4} xl={4}>
    // 				<Card className={classes.card}>
    // 					<CardContent>
    // 						<Typography className={classes.carddata} variant="h1" component="h1">
    // 							Project Management
    // 						<IconButton aria-label="edit">
    // 								<Edit className={classes.actions} />
    // 							</IconButton>
    // 							<IconButton aria-label="delete">
    // 								<Delete className={classes.actions} />
    // 							</IconButton>
    // 						</Typography>
    // 					</CardContent>
    // 				</Card>
    // 			</Grid>

    // 			<Grid item xs={12} md={6} lg={4} xl={4}>
    // 				<Card className={classes.card}>
    // 					<CardContent>
    // 						<Typography className={classes.carddata} variant="h1" component="h1">
    // 							Project Management
    // 						<IconButton aria-label="edit">
    // 								<Edit className={classes.actions} />
    // 							</IconButton>
    // 							<IconButton aria-label="delete">
    // 								<Delete className={classes.actions} />
    // 							</IconButton>
    // 						</Typography>
    // 					</CardContent>
    // 				</Card>
    // 			</Grid>

    // 			{/* <Grid item xs={12} md={6} lg={4} xl={4} className={classes.addButton}>
    // 			<Card className={classes.card}>
    // 				<IconButton onclick=toggle{AddCard({ classes: classes })}>
    // 					<AddCircleOutline style={{ fontSize: 100 }} />
    // 				</IconButton>
    // 				<!toggle AddCard />
    // 			</Card>
    // 		</Grid> */}
    // 		</Grid>
    // 	</div>
    // );
  }
}

// function rotationCard(props) {
// 	const { classes } = props;

// 	return (
// 		<div className={classes.gridwrapper}>
// 			<Grid container spacing={24}>
// 				{/* Add card mode */}
// 				{/* {AddCard({ classes: classes })} */}
// 				<AddCard classes={classes} />

// 				<Grid item xs={12} md={6} lg={4} xl={4}>
// 					<Card className={classes.card}>
// 						<div className={classes.iconPosition}>
// 							<IconButton aria-label="edit">
// 								<Edit className={classes.actions} />
// 							</IconButton>
// 							<IconButton aria-label="delete">
// 								<Delete className={classes.actions} />
// 							</IconButton>
// 						</div>
// 						<div className={classes.cardBottomPadding}>
// 							<p className={classes.cardheading}>Department Name</p>
// 							<p className={classes.carddata}>{'Project Management'}</p>
// 							<p className={classes.cardheading}>Rotation Period</p>
// 							<p className={classes.carddata}>{12 + ' weeks'}</p>
// 							<p className={classes.cardheading}>Champion Name</p>
// 							<p className={classes.carddata}>{'Chow Siew Mun'}</p>
// 							<p className={classes.cardheading}>Champion Email</p>
// 							<p className={classes.carddata}>{'siew-mun_chow@astro.com.my'}</p>
// 							<p className={classes.cardheading}>Max Protégé Capacity</p>
// 							<p className={classes.carddata}>{2 + ' protégés'}</p>
// 						</div>
// 					</Card>
// 				</Grid>

// 				<Grid item xs={12} md={6} lg={4} xl={4}>
// 					<Card className={classes.card}>
// 						<CardContent>
// 							<Typography className={classes.carddata} variant="h1" component="h1">
// 								Project Management
// 								<IconButton aria-label="edit">
// 									<Edit className={classes.actions} />
// 								</IconButton>
// 								<IconButton aria-label="delete">
// 									<Delete className={classes.actions} />
// 								</IconButton>
// 							</Typography>
// 						</CardContent>
// 					</Card>
// 				</Grid>

// 				<Grid item xs={12} md={6} lg={4} xl={4}>
// 					<Card className={classes.card}>
// 						<CardContent>
// 							<Typography className={classes.carddata} variant="h1" component="h1">
// 								Project Management
// 								<IconButton aria-label="edit">
// 									<Edit className={classes.actions} />
// 								</IconButton>
// 								<IconButton aria-label="delete">
// 									<Delete className={classes.actions} />
// 								</IconButton>
// 							</Typography>
// 						</CardContent>
// 					</Card>
// 				</Grid>

// 				{/* <Grid item xs={12} md={6} lg={4} xl={4} className={classes.addButton}>
// 					<Card className={classes.card}>
// 						<IconButton onclick=toggle{AddCard({ classes: classes })}>
// 							<AddCircleOutline style={{ fontSize: 100 }} />
// 						</IconButton>
// 						<!toggle AddCard />
// 					</Card>
// 				</Grid> */}
// 			</Grid>
// 		</div>
// 	);
// }

rotationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps)(withStyles(styles)(rotationCard));

// {/* <Card className={classes.card}>
// 		  <CardContent> */}
// 			{/* <Typography className={classes.title} color="textSecondary" gutterBottom>
// 			  Word of the Day
// 			</Typography> */}

// 	<Typography className={classes.title} variant="h1" component="h1">
// 		Project Management
// 		<IconButton aria-label="edit">
// 			<Edit className={classes.actions} />
// 		</IconButton>
// 		<IconButton aria-label="delete">
//       			<Delete className={classes.actions} />
//     			</IconButton>
// 	</Typography>
// </CardContent>

// {/* <Typography className={classes.subHeading} variant="h1" component="h2">
// 	Rotation Period
// </Typography>
// <Typography className={classes.subHeading} variant="h1" component="h2">
// 	Champion Name
// </Typography>
// <Typography className={classes.subHeading} variant="h1" component="h2">
// 	Champion Email
// </Typography>
// <Typography className={classes.subHeading} variant="h1" component="h2">
// 	Maximum Protégé Capacity
// </Typography>
// <Typography variant="h5" component="h2">
//   be
//   {bull}
//   nev
//   {bull}o{bull}
//   lent
// </Typography>
// <Typography className={classes.pos} color="textSecondary">
//   adjective
// </Typography>
// <Typography component="p">
//   well meaning and kindly.
//   <br />
//   {'"a benevolent smile"'}
// </Typography>
// </CardContent>
// <CardActions>
// <Button size="small">Learn More</Button>
// // </CardActions> */}
// {/* </Card> */}
