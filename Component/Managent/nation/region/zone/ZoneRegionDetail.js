import React ,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
  import axios from "axios"
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [zoneRegion,setZoneRegion]=React.useState([])
  const bull = <span className={classes.bullet}>•</span>;
  useEffect(()=>{
    axios.get(`http://localhost:3333/api/zone/getZoneRegion`,{ headers: {"authorization" : `Bearer ${localStorage.getItem("token")}`} }).
    then(response => {
      console.log("register success",response.data)
  
      setZoneRegion(response.data)
      if(response.data.hasOwnProperty("error")){
      // this.setState({error:"this not deleteed"})
      console.log("register error")
      }
  
  
  
    }).catch(error => {
      // this.setState({isDeleteLoading:false})
  
    });
  },[])


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <List className={classes.root}>
        {
            zoneRegion.map(i=>{
                console.log("|||||=>>>>",i.lat)
                return(
                <ListItem>
                <ListItemAvatar>
                  <Avatar>

                    {/* <Location /> */}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={i.name} />
                <ListItemText primary={i.assignTrafficNo} />
                
              </ListItem>
                )
            })
        }
     
       
    </List>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary"  variant="contained" component={Link} to={`/zone/zoneRegion`}   > Create Zone Section</Button>
      </CardActions>
    </Card>
  );
}
