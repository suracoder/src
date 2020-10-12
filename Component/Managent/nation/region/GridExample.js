import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteForever from '../../../../icon/src/DeleteForever';
import FavoriteIcon from '../../../../icon/src/Favorite';
import ShareIcon from '../../../../icon/src/Share';
import ExpandMoreIcon from '../../../../icon/src//ExpandMore';
import Edit from '../../../../icon/src/Edit';
import amhara from "../../../../asset/amhara.png"
import oromia from "../../../../asset/pic.PNG"
import { fetchRegion } from '../../../../Action/index';
import { useSelector, useDispatch, connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';

import { Grid, CardActionArea, Divider } from '@material-ui/core';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 150,
  },
  avatar: {
    width: 70,
    height: 30,
  },
  innerCard: {
    width: 100,
  },
  paper: {
    // height: 30,
    // width: 330,
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  

  return (
    <div>
      <Grid container >
        <Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid>
        <Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid> <Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid>
      </Grid>

      
    </div>
  );
}
 