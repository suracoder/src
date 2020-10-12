import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 
import Chip from "@material-ui/core/Chip"
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
import MapBox from "../../../Mapbox"
import DomainIcon from '../../../../icon/src/Domain';
import { Grid, CardActionArea, Divider } from '@material-ui/core';
import RegionAccordance from "./RegionAccordance"
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
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
          props.regionData.region.map((i) => {
            return (
              <Grid xs={12} md={gridSize} sm={gridSize} item>
                
<RegionAccordance  {...i}/>
{/* <Accordion expanded={expanded === i.name} onChange={handleChange(i.name)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
                {/* <RegionAccordance/> */}
                {/* <Card className={classes.root}>

                <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="30"
          image='https://placeimg.com/150/150/any'
          title="Contemplative Reptile"
        />

                   
                  
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h6">
                      {i.name}
          </Typography>

         
                    </CardContent>
              <CardContent>
              <Chip
        size="small"
        avatar={<Avatar alt="Natacha" src="https://placeimg.com/150/150/any" />}
        label="Manager"
        color="primary"
       
      />
          <Chip
        size="small"
        icon={<DomainIcon />}
        label={`Zone ${i.zones.length}`}
        clickable
        color="primary"
      
        deleteIcon={<DomainIcon />}
      />
              </CardContent>
                  <CardActions>
                  
                    <Button size="small" color="primary" component={Link} to={`${path}/${i.name}`}>
                      Learn More
        </Button>
                  </CardActions>
                </Card> */}
              </Grid>
            )
          })
        }
        {/* <Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid>
        <Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid><Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid> */}
      </Grid>

      {/* <Route  path={`region/my`} render={() => {
          
          return <div>my love route</div>}} /> */}
    </div>
  );
}
const mapStateToProps = state => ({

  regionData: state.regionData
})
export default connect(mapStateToProps)(RegionList);
 