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
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
 
import LayersIcon from '../../icon/src/Layers';
import KeyboardArrowDownIcon from '../../icon/src/KeyboardArrowDown';
import KeyboardArrowUpIcon from '../../icon/src/KeyboardArrowUp';
import Button from "@material-ui/core/Button"
import ArrowForwardIcon from '../../icon/src/ArrowForward';
import { Grid, Divider } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';

import {connect } from "react-redux"
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

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'calories', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'fat',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'carbs',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'protein',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
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
//   let { path, url } = useRouteMatch();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   }
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
        <IconButton   component={Link} to={`zone/${row.name}`}  variant="contained" size="larg" color="primary">
            <ArrowForwardIcon/> 
            </IconButton>
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
                     
                return  <TableRow key={historyRow.id}>
                  
                      <TableCell component="th" scope="row">
                        {historyRow.occupation}
                      </TableCell>
                  <TableCell>{historyRow.education_level}  </TableCell>
                      <TableCell align="right">{historyRow.education_level}</TableCell>
                      <TableCell align="right">
                      <IconButton    variant="contained" size="larg" color="primary">
                          <LayersIcon/> 
                          </IconButton>
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

 function CollapsibleTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    let rows = [
       
    ];
    console.log("normal array ",props.getAccident)
 let i=[];
//  i={...props.zones};
//  let myarray=Object.entries(i);
//  console.log("my array zone ",myarray)
//  myarray.map((i)=>{
//   console.log(i)
// })
 props.getAccident.aData.map((o)=>{
  

//    let a=createData( o[1].name,o[1].zoneManager.user.firstName, 6.0, 24, 4.0, 3.99,  {date: '2020-01-05', customerId: '11091700', amount: 3 } );
//    let b=createData( o[1].name,o[1].zoneManager.user.firstName, o[1].weredas.length, 0, 0);
   let c=createData(o.driver_name,o.driver_license_no,o.property_injury,0,0,0)
   
  //  b.history.push({ date: '2020-01-05', customerId: '11091700', amount: 3 })
   rows.push(c)
   
  
//    console.log("created arrya :",b)
//    console.log("wereda length",o[1].weredas.length)
   

   o.accident_injury_statuses.map((r)=>{
 
    c.history.push(r)
   })

 })
 
 console.log("table data 1",i[0])
//  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//     return (
//       <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//         {columns.map((column) => {
//           const value = row[column.id];
//           return (
//             {rows.map((row) => (
//                 <Row key={row.name} row={row} />
//               ))}
//           );
//         })}
//       </TableRow>
//     );
//   })}
  return (
      <Paper>
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
        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        {columns.map((column) => {
         
          return (
          
                <Row key={row.name} row={row} />
              
          );
        })}
      </TableRow>
    );
  })}
          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </Paper>
  );
}
const mapStateToProps=state=>({
    userPermission:state.userPermission,
    realPermission:state.realPermission,
    getAccident:state.getAccidnet

  })
  export default connect(mapStateToProps)(CollapsibleTable);
  