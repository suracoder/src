import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '../../../../icon/src/ExpandMore';
import Avatar from "@material-ui/core/Avatar"
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import MailIcon from '../../../../icon/src/Mail';
import Button from "@material-ui/core/Button"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import Popper from '@material-ui/core/Popper';
import Grid from "@material-ui/core/Grid"
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegionManagerCreate from './regionManagerCreate'
 
import {form_r_m_SendConfirm } from "../../../../Action/index"
import { useSelector, useDispatch, connect } from 'react-redux';

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
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        marginLeft: 20
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    bageStyle: {

        marginLeft: 150
    },
    buttonStyle: {
        marginLeft: 150
    },
    inline: {
        display: 'inline',
    },
    listStyle: {
        width: '100%',

    },
    avatar: {
        backgroundColor: 'red',
    },
}));
const defaultProps = {
    color: 'secondary',
    children: <MailIcon />,
};

  function ControlledAccordions(props) {
    const dispatch=useDispatch()
    const classes = useStyles();
    // const user = useContext(UserContext)
    const mynewArray = [];
    const mynewArray1 = [];
  
   console.log("REGION DATA FOR ID",props.regionData)
  
    for (var i in props.userPermission.permission.data) {
  
  
  
      props.userPermission.permission.data[i].map((o) => {
  
  
  
        mynewArray1.push(o)
  
        //  console.log("surafe",surafel)
      })
    }
  
// console.log("PERMISOIN ONTEX ",user)
    const [expanded, setExpanded] = React.useState(false);
    // const [firstName,setFirstName]=React.useState('');
    // const [lastName,setLastName]=React.useState('');
    // const [email,setEmail]=React.useState('');
    // const [address,setAddress]=React.useState('');
    const [regionId,setRegionId]=React.useState('');

    let { path, url } = useRouteMatch();
    const [open, setOpen] = React.useState(false);
 console.log("REGIONMANGER ",props)
    const handleClickOpen = () => {
        dispatch(form_r_m_SendConfirm(null))
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
     return (
        <div className={classes.root}>

<Grid  > 
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Avatar variant="square" alt="Remy Sharp" src="https://placeimg.com/640/480/people" />

                    <Typography className={classes.heading}>{props.name}</Typography>


                    <Typography className={classes.secondaryHeading}> accident </Typography>
                    {/* <Badge className={classes.bageStyle} badgeContent={9999} {...defaultProps} /> */}
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography> */}
                    <List className={classes.listStyle}>
                        {props.regionManager === null ? <ListItem button alignItems="flex-start">
                                 
                                <ListItemText
                                
                                    primary="no region manager "
                                    secondary="please create account for this region!"
                                />
                                <ListItemSecondaryAction>
                                {mynewArray1.map(i => {
            if (i.roleName === "regionManager" && i.create){
                              return      <Button edge="end"
                                        variant="contained" color="primary" 
                                        onClick={
                                            ()=>{
                                                setRegionId(props.id)
                                            },handleClickOpen}>

                                        create
</Button>
            }
        
        }
            )}

                                    
                                </ListItemSecondaryAction>
                            </ListItem> : <ListItem button alignItems="flex-start">
                                <ListItemAvatar>

                                    <Avatar alt="Remy Sharp" src="https://placeimg.com/150/150/any" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={props.regionManager.user.firstName+" "+props.regionManager.user.lastName}
                                    secondary="Manager"
                                />
                                <ListItemSecondaryAction>
                                    <Button edge="end"
                                        variant="contained" color="primary" component={Link} to={`${path}/${props.name}`}>

                                        View
</Button>
                                </ListItemSecondaryAction>
                            </ListItem>}

                        <Divider />
                        <ListItem alignItems="flex-start">

                            <ListItemAvatar>
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <MailIcon color="white" tyle={{ fontSize: 100 }} />
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText
                                // secondary={props.zones.length}
                                primary={
                                    <React.Fragment>
                                        <Typography

                                            variant="h5"
                                            className={classes.inline}
                                            color="textPrimary"

                                        >
                                            {props.zones.length}
                                        </Typography>

                                    </React.Fragment>
                                }
                                secondary="Zones"

                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
                <Divider />
                <AccordionSummary>
                    <Button className={classes.buttonStyle} variant="contained" color="primary" component={Link} to={`${path}/${props.name}`}>

                        Detail
</Button>
                </AccordionSummary>
            </Accordion>
           
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
           
          <RegionManagerCreate regionId={props.id} onDialogClose={handleClose}/>
        </DialogContent>
        
        <DialogActions>
      
        </DialogActions>
      </Dialog>
      </Grid>
        </div>
    );
}
 
const mapStateToProps = state => ({
    userPermission: state.userPermission,
    regionData: state.regionData
  })
  export default connect(mapStateToProps)(ControlledAccordions);
