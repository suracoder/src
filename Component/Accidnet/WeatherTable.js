import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CloudIcon from '@material-ui/icons/Cloud';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import ToysTwoToneIcon from '@material-ui/icons/ToysTwoTone';
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import Brightness4TwoToneIcon from '@material-ui/icons/Brightness4TwoTone';
import SpeedTwoToneIcon from '@material-ui/icons/SpeedTwoTone';
import BubbleChartTwoToneIcon from '@material-ui/icons/BubbleChartTwoTone';
const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

 

export default function BasicTable(props) {
  const classes = useStyles();
  const rows = [
    createData('clouds',props.info.clouds ),
    createData('humidity', props.info.humidity),
    createData('light_condition', props.info.light_condition),
    createData('pressure', props.info.pressure),
    createData('temp',props.info.temp),
    createData('visibility', props.info.visibility),
    createData('weather_main', props.info.weather_main),
    createData('wind_speed',props.info.wind_speed),
    createData('rain', props.info.rain),
 
   
   
  ];
 
  console.log("on table props ",props.info)
  return (
    <TableContainer  >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Icon</TableCell>    
          </TableRow>
        </TableHead>
        <TableBody>
       

          {rows.map((row) => {
              console.log(">>>Weather",row )
              return(
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"> {row.calories}</TableCell>
              {row.name=="clouds"?<TableCell align="right"><CloudIcon/> </TableCell>:null}
              {row.name=="humidity"?<TableCell align="right"><InvertColorsIcon/> </TableCell>:null}
              {row.name=="light_condition"?<TableCell align="right"><Brightness6Icon/> </TableCell>:null}
              {row.name=="pressure"?<TableCell align="right"><ToysTwoToneIcon/> </TableCell>:null}
              {row.name=="temp"?<TableCell align="right"><WbIncandescentTwoToneIcon/> </TableCell>:null}
              {row.name=="visibility"?<TableCell align="right"><VisibilityTwoToneIcon/> </TableCell>:null}
              {row.name=="weather_main"?<TableCell align="right"><Brightness4TwoToneIcon/> </TableCell>:null}
              {row.name=="wind_speed"?<TableCell align="right"><SpeedTwoToneIcon/> </TableCell>:null}
              {row.name=="rain"?<TableCell align="right"><BubbleChartTwoToneIcon/> </TableCell>:null}

              
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
