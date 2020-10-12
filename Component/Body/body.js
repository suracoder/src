import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Na from "./NationEmployeeM"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
// import From from "./formComponent";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   paper: {
//     height: 440,
//     width: 400,
//   },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 440,
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
      console.log(event.target.value)
    setSpacing(Number(event.target.value));
  };
 const submit = values => {
    // print the form values to the console
    console.log(values)
  }
  const nation=()=>{
    return <div>home</div>
   }
  return (

    // <Grid container className={classes.root} spacing={1}>
<Router>
<Switch>
         
    <div>
    <Na/>
        <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12} sm={6} spacing={3}>
          <Paper className={classes.paper}>
            {/* <From onSubmit={submit}></From> */}
            </Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3} >
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} >
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      </div>
      <Route path="/nation" component={nation}>


</Route>
</Switch>
      </Router>
    //   {/* <Grid item xl={12}>
    //     <Grid container justify="center" spacing={spacing}>
    //       {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
    //         <Grid key={value} item>
    //           <Paper className={classes.paper} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Grid> */}
    //   {/* <Grid item lg={12}>
    //     <Paper className={classes.control}>
    //       <Grid container>
    //         <Grid item>
    //           <FormLabel>spacing</FormLabel>
    //           <RadioGroup
    //             name="spacing"
    //             aria-label="spacing"
    //             value={spacing.toString()}
    //             onChange={handleChange}
    //             row
    //           >
    //             {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
    //               <FormControlLabel
    //                 key={value}
    //                 value={value.toString()}
    //                 control={<Radio />}
    //                 label={value.toString()}
    //               />
    //             ))}
    //           </RadioGroup>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Grid> */}
    // // </Grid>
  );
}
