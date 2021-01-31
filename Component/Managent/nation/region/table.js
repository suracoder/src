import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '../../../../icon/src/KeyboardArrowDown';
import KeyboardArrowUpIcon from '../../../../icon/src/KeyboardArrowUp';
import Button from "@material-ui/core/Button"
import LayersIcon from '../../../../icon/src/Layers';
import { Grid, Divider } from '@material-ui/core';
import ArrowForwardIcon from '../../../../icon/src/ArrowForward';

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
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
   
  },
  btn:{
    marginLeft:200
  }
});

function createData(name, calories, fat, carbs, protein, price,history) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history:[]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  let { path, url } = useRouteMatch();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">
        <IconButton   component={Link} to={`zone/${row.name}`}  variant="contained" size="larg" color="primary"><ArrowForwardIcon/> </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
              Weredas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Wereda Name</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) =>{ 
                    console.log("history row :",historyRow.weredaManager.user.firstName)
                return  <TableRow key={historyRow.id}>
                  
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                  <TableCell>{historyRow.weredaManager.user.firstName}  </TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                      <IconButton    variant="contained" size="larg" color="primary"><LayersIcon/> </IconButton>
                      </TableCell>
                  
                    </TableRow>
                    
})}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
// 4
// 15
// 10
// 10

export default function CollapsibleTable(props) {
    console.log("table data ",props.zones)
    let rows = [
       
    ];
    console.log("normal array ",rows)
 let i=[];
 i={...props.zones};
 let myarray=Object.entries(i);
 console.log("my array zone ",myarray)
 myarray.map((i)=>{
  console.log(i)
})
 myarray.map((o)=>{
  //  console.log("name ",o[1].zoneManager.user.firstName)

   let a=createData( o[1].name,o[1].zoneManager.user.firstName, 6.0, 24, 4.0, 3.99,  {date: '2020-01-05', customerId: '11091700', amount: 3 } );
   let b=createData( o[1].name,o[1].zoneManager.user.firstName, o[1].weredas.length, 0, 0, 0);
   
  //  b.history.push({ date: '2020-01-05', customerId: '11091700', amount: 3 })
   rows.push(b)
   
  
   console.log("created arrya :",b)
   console.log("wereda length",o[1].weredas.length)
   

   o[1].weredas.map((r)=>{
     console.log("wereda: " ,r.length)
    b.history.push(r)
   })

 })
 console.log("my array ",myarray)
 console.log("table data 1",i[0])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Zone Name</TableCell>
            
            <TableCell align="right">Manager</TableCell>
            <TableCell align="right">Weredas</TableCell>
            <TableCell align="right">New Accident &nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
