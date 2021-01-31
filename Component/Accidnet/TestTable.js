import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ArrowForwardIcon from '../../icon/src/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LayersIcon from '../../icon/src/Layers';
import KeyboardArrowDownIcon from '../../icon/src/KeyboardArrowDown';
import KeyboardArrowUpIcon from '../../icon/src/KeyboardArrowUp';
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
  { id: 1, label: '', minWidth: 50 },
  { id: 2, label: 'Drive Name', minWidth: 100 },
  {
    id: 3,
    label: 4,
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 5,
    label: 'Fatal Injury',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id:5,
    label: 'Medium Injury',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 7,
    label: 'Detail',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
 
];

function createData(id,name, death, fatal_injury, medium_injury,slight__injury,detail) {
 
  return { id,name, death, fatal_injury, medium_injury,slight__injury,detail,history:[] };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263,[]),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
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
  console.log("acccidnet id ",row.death)
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
        
          <TableCell align="right">{row.death}</TableCell>
          <TableCell align="right">{row.fatal_injury}</TableCell>
          <TableCell align="right">{row.medium_injury}</TableCell>
          {/* <TableCell align="right">{row.slight__injury}</TableCell> */}
          {/* <TableCell align="right">{row.slight__injury}</TableCell> */}
           <TableCell align="right">
          <IconButton   component={Link} to={`accident_detail/${row.id}`}  variant="contained" size="larg" color="primary">
              <ArrowForwardIcon/> 
              </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                Injury Statuses
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Full Name</TableCell>
                      <TableCell>Phone no</TableCell>
                      <TableCell align="right">injury status</TableCell>
                      <TableCell align="right">occupation</TableCell>
                      <TableCell align="right">detail</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) =>{ 
                       
                  return  <TableRow key={historyRow.id}>
                    
                        <TableCell component="th" scope="row">
                          {historyRow.name}
                        </TableCell>
                    <TableCell>{historyRow.phone_no}  </TableCell>
                        <TableCell align="right">{historyRow.injury_status}</TableCell>
                        <TableCell align="right">{historyRow.occupation}</TableCell>
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
  function StickyHeadTable(props) {
  const classes = useStyles();
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
console.log("normal array ",props)
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
let c=createData(o.id,o.driver_name,o.death,o.fatal_injury, o.medium_injury,o.slight__injury)

//  b.history.push({ date: '2020-01-05', customerId: '11091700', amount: 3 })
rows.push(c)


//    console.log("created arrya :",b)
//    console.log("wereda length",o[1].weredas.length)


o.accident_injury_statuses.map((r)=>{

c.history.push(r)
})

})

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) =>{
                console.log("c=>",column)
                return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              )})}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              console.log("row m=>",row)
              return (
               
                
                <Row key={row.id} row={row} />

                       
                
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
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
    getAccident:state.getAccident

  })
  export default connect(mapStateToProps)(StickyHeadTable);
  