import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import {imge_ip} from "../../ip"
const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

 let data={}
  props.data.map(i=>{
      data.full_name=i.driver_name;
      data.age=i.age_of_driver;
      data.licence_no=i.driver_license_no;
      data.sex=i.sex_of_driver;
      data.image=imge_ip+i.driver_license
  })
  console.log("imge ",imge_ip+data.image)
  let images= data.image
  return (
    <Card className={classes.root}>
        <CardHeader
        
        // title="Shrimp and Chorizo Paella"
        subheader="Driver Detail"
      />
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={images}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Full Name :{data.full_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sex :{data.sex}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Age  :{data.age}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Licence Id  :{data.licence_no}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
      {/* <CardActions> */}
        
    </Card>
  );
}
