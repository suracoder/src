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
    createData('Plate Number',props.info.plate_no ),
    createData('Engine Capacity', props.info.engine_capacity),
    createData('Age Of Vehicle', props.info.age_of_vehicle),
    createData('Vehicle Type', props.info.vehicle_type),
    createData('Vehicle Reference',props.info.vehicle_reference),
    createData('Vehicle Propelsion Code', props.info.vehicle_propelsion_code),
   
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
