import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Table from "./VehicleDetailTabel"
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  media: {
    height: 100,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
console.log("on card table ",props)
let data={}
props.data.map(i=>{
  data.plate_no=i.plate_no
  data.engine_capacity=i.engine_capacity
  data.age_of_vehicle=i.age_of_vehicle
  data.vehicle_type=i.vehicle_type
  data.vehicle_propelsion_code=i.vehicle_propelsion_code
})
console.log("maruka ",data)
  return (
    <Card className={classes.root} variant="outlined">
         <CardHeader
        
        // title="Shrimp and Chorizo Paella"
        subheader="Technical Detail"
      />
      <CardMedia
          className={classes.media}
          image="https://placeimg.com/640/480/nature"
          title="Contemplative Reptile"
        />
        <Divider />
      <CardContent>
    

         <Table info={data}/>
      </CardContent>
     
    </Card>
  );
}

 