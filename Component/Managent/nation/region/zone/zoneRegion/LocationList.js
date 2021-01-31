import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Location from "@material-ui/icons/LocationCity"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function FolderList(props) {
  const classes = useStyles();
console.log("Props onist ",props)
  return (
    <List className={classes.root}>
        {
            props.location.map(i=>{
                console.log("|||||=>>>>",i.lat)
                return(
                <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Location />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Lat   ${Math.floor(i.lat)}`} />
                <ListItemText primary={`Lng   ${Math.floor(i.lng,3)}`} />
              </ListItem>
                )
            })
        }
     
       
    </List>
  );
}
