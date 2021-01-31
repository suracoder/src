import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Table from "./WeatherTable"
import Divider from '@material-ui/core/Divider';

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
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
console.log("on card table ",props)
let data={}
props.data.map(i=>{
  data.clouds=i.clouds
  data.humidity=i.humidity
  data.light_condition=i.light_condition
  data.pressure=i.pressure
  data.temp=i.temp
  data.visibility=i.visibility
  data.weather_main=i.weather_main
  data.wind_speed=i.wind_speed
  data.rain=i.rain
  data.clouds=i.clouds
})
console.log("maruka ",data)
  return (
    <Card className={classes.root} variant="outlined">
         <CardHeader
        
        // title="Shrimp and Chorizo Paella"
        subheader="Weather Detail"
      />
        <Divider />
      <CardContent>
    

         <Table info={data}/>
      </CardContent>
       
    </Card>
  );
}


 