import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button"
import AccountBoxIcon from '../../../../../icon/src/AccountBox';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '../../../../../icon/src/Send';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
// import ChatUi from "../zone/ChatUi"
import Grid from '@material-ui/core/Grid';
import PopupState, { bindToggle, bindPopper, bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@material-ui/core/Popover'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChatUi from "../../../../ChatUi"

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
import { fetchWeredaEmployee,fetchWeredaTraffic,makeNullWeredaEmployee,makeNullWeredaTraffic } from "../../../../../Action/index"
import { useSelector, useDispatch } from 'react-redux';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },

  {
    id: 'email',
    label: 'email',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'address',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'profile',
    label: 'profile',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'message',
    label: 'message',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, firsName, lastName, email, address) {

  let name = `${firsName} ${lastName}`
  return { id, name, email, address };
}



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  // poperStyle:{
  //   height: 5,
  // }
});

function ZoneEmpoyeeTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [id, setId] = React.useState();
  const dispatch=useDispatch()
  const name=props.name
  let rows = [];
  const handleClick = (newPlacement, id) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    setId(id)
  };
  const handleClose = () => {
    setOpen(false)
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(()=>{
   
    // rows.pop()
    console.log("AAAAAAAAAAAAAAAaaa~~@@E@@#$%^%^&^%$%^&%^&%%$#^%$#^$$%^%Y%#########################",props.weredaTraffic)
    // dispatch(makeNullWeredaTraffic())
    // dispatch(fetchWeredaTraffic(props.name))
  },[])
  console.log("^^^^%%$##%# zone empoye ", props)
  let data = Object.entries(props)
  console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ  ", rows,"WWWWWWWWw", props.weredaTraffic)
  // props.map(i=>console.log("****** ",i))
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  props.weredaTraffic.weredaTraffic.map(i => {
    console.log("+++++++++++++++++++", rows)

    let a = createData(i.user.id, i.user.firstName, i.user.lastName, i.user.email, i.user.address)

    rows.push(a)
  }

  )
  var result = rows.reduce((unique, o) => {
    if (!unique.some(obj => obj.email === o.email)) {
      unique.push(o);
    }
    return unique;
  }, []);
  console.log("%%$#@#$#$@#$#@$@#$@#$ unque ", result)
  return (
    <div>
<Grid container>
      {/* <Popper open={open} anchorEl={anchorEl} placement="bottom-end" modifiers={{
              

      flip: {
        enabled: true,
      },
      preventOverflow: {
        enabled: false,
        boundariesElement: 'window',
      },
      arrow: {
        enabled: false,
       
      },
    }}
  disablePortal={true}  placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
          <Grid contaner  xs={4}>
          <ChatUi   userId={id}  onClose={handleClose} />
        </Grid>
            
              
           </Fade>
        )}
      </Popper> */}
      
           
          <Typography variant="h6" className={classes.title}>
          Wereda Traffic
          </Typography>
      
      
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            {/* <TableHead> */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            {/* </TableHead> */}
            <TableBody>
              {result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                console.log("row $%#$#$# ", row)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (

                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'profile' ? <Button onClick={() => console.log("user is#@@@@@@ ", row.id)} variant="contained" color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<AccountBoxIcon />}
                            component={Link} to={`/wereda/traffic_profile/${row.id}`}
                          >
                            Profile
                           </Button>

                            : null}
                          {column.id === 'message' ?                    
                              <PopupState variant="popper" popupId="demo-popup-popper">
                                {(popupState) => (
                                  <div>

                                    <Button olor="primary"
                             size="small"
                             className={classes.button}
                             startIcon={<SendIcon /> }
                              variant="contained" color="primary" {...bindToggle(popupState)}>
                                      Chat
                             </Button>
                                    <Popper open={open}  {...bindPopper(popupState)} transition>
                                      {({ TransitionProps }) => (
                                            
                                        <Fade {...TransitionProps} timeout={100}>
                                     
                                          <ChatUi userId={row.id}   pops={popupState} onClose={handleClose} />
                                  
                                        </Fade>
                                     
                                      )}
                                    </Popper>
                                  </div>
                                )}
                              </PopupState>
                            //   <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            //   {({ TransitionProps }) => (
                            //     <Fade {...TransitionProps} timeout={350}>
                            //       <Paper>
                            //         <Typography className={classes.typography}>The content of the Popper.</Typography>
                            //       </Paper>
                            //     </Fade>
                            //   )}
                            // </Popper>

                            : null}
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5,10, 25, 100]}
          component="div"
          count={result.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      </Grid>
    </div>
  );
}
const mapStateToProps = state => ({

  regionData: state.regionData,
  weredaTraffic: state.weredaTraffic
})
export default connect(mapStateToProps)(ZoneEmpoyeeTable);

// <Button  {...bindToggle(popupState)} onClick={handleClick('bottom-end',row.id)  }   variant="contained"     color="primary"
//                              size="small"
//                              className={classes.button}
//                              startIcon={<SendIcon /> }
//                            >
//                              Chat 
//                            </Button>