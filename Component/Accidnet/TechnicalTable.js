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
    createData('number_of_vehicle',props.info.number_of_vehicle ),
    createData('speed_limt', props.info.speed_limt),
    createData('road_type', props.info.road_type),
    createData('light_condition', props.info.light_condition),
    createData('special_condition_on_site',props.info.special_condition_on_site),
    createData('junction_detail', props.info.junction_detail),
    createData('junction_control', props.info.junction_control),
    createData('cause_of_accident',props.info.cause_of_accident),
    createData('vehicle_manoeuvre', props.info.vehicle_manoeuvre),
   
  ];
 
  console.log("on table props ",props.info)
  return (
    <TableContainer  >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
             
             
          </TableRow>
        </TableHead>
        <TableBody>
       

          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
                
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
