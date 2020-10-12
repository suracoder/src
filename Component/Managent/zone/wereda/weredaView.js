import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 
 import Grid from "@material-ui/core/Grid"
import IconButton from '@material-ui/core/IconButton';
 
import { useSelector, useDispatch, connect } from 'react-redux';
import WeredaList from "./weredaList"
import DehazeIcon from '../../../../icon/src/Dehaze';
import GridOnIcon from '../../../../icon/src/GridOn';
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
gridBtn:{
  marginLeft:900
} ,
  profile:{
    height:50,
    width:50,
    color: 'red',
    marginBottom:20
  },
  icon: {
    color: 'red',
    height:50,
    width:50
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function RegionList(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
   const [gridSize ,setGridsize]=React.useState(6)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log("router hitory ", url)
  console.log("router path ", path)

  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("region props ", props)

  // props.zones.map((i) => {
  //   console.log("for wereda ", i)

  // })
  const dispatch = useDispatch()

  return (
    <div>
      
      <Grid container spacing={1}>
      <Grid container spacing={1} xs={12} md={12} sm={12} item>
       
        <Grid xs={3} md={3} sm={3} item>
        <IconButton className={classes.gridBtn} color="primary" onClick={()=>{
        if(gridSize===6){
          setGridsize(12)
        }else{

        
        setGridsize(6)
      }}}> {gridSize===6?<DehazeIcon/>:<GridOnIcon />} </IconButton>
        </Grid>
        
      </Grid>
    
        
        {
          props.weredaData.wereda.map((i) => {
            console.log("zone on loop @#@#@#@ ",i)
            return (
              <Grid xs={12} md={gridSize} sm={gridSize} item>
                <WeredaList  {...i}/>
{/* <RegionAccordance  {...i}/> */}
 
              </Grid>
            )
          })
        }
      
      </Grid>

   
    </div>
  );
}
const mapStateToProps = state => ({

  weredaData: state.weredaData
})
export default connect(mapStateToProps)(RegionList);
 