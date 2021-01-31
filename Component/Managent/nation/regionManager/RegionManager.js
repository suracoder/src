import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios"

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box'
import HelpIcon from '../../../../icon/src/Help';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ContentR from "../../../Content"
import Chat from "../../../chat"
import { fetchRegionManager, fetchRegion } from "../../../../Action/index"
import { forwardRef } from 'react';
import MaterialTable from "material-table"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { emphasize } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddBox from '@material-ui/icons/AddBox';


import LockIcon from '@material-ui/icons/Lock';

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
const styles = (theme) => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    shape: 0

  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  paper: { padding: theme.spacing(2), textAlign: 'center', color: theme.palette.text.secondary }
  ,
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },

});




function Content(props) {
  const [location, setLocation] = useState([])
  const [user, setUser] = useState([])
  const [open, setOpen] = React.useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userId, setUserId] = useState(null)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const deleteOperator = () => {
    let data = {
      userId: userId
    }
    setIsDeleteLoading(true)

    axios.post(`http://localhost:3333/api/nation/deleteRegionManager`, data).
      then(response => {
        console.log(response.data)
        props.getAllReagionMangerAction();
        enqueueSnackbar("Region Manager deleted successfuly", {
          variant: 'error',
        })
        setIsDeleteLoading(false)
        if (response.data.hasOwnProperty("error")) {
          console.log("error ocure ", response.data)
          setError(response.data)
        }



      }).catch(error => {
        setIsDeleteLoading(false)

      });
  }



  console.log("all nation props ", props.getAllNationEmployee)
  const mynewArray1 = [];



  for (var i in props.userPermission.permission.data) {



    props.userPermission.permission.data[i].map((o) => {



      mynewArray1.push(o)

      //  console.log("surafe",surafel)
    })
  }

  useEffect(() => {

    props.getAllReagionMangerAction();
    props.getRegionAction()

  }, [])

  // const [value, setValue] = React.useState(0);
  console.log("region manager props=>>>>>>>>>>>>>>>>>>>>>>>", props.getRegion.region)
  let tableData = []
  props.getRegionManager.regionManger.map(i => {
    console.log("=>?>?>?>? ", i)
    let j = {
      name: `${i.user.firstName}    ${i.user.lastName}`,
      email: i.user.email,
      region: i.region.name,
      userId: i.user.id
    }
    tableData.push(j)
  })
  if (props.getRegionManager)


    return (
      <div>
        <Grid container >
          <Grid xs={12} md={6} sm={3} item>
            {mynewArray1.map(i => {
              if (i.roleName === "nationEmployee" && i.create)
                return <Button variant="outlined" size="medium" color="primary" component={Link} to={`/nation/createEmployee`}  >
                  Create
    </Button>



            })}
          </Grid>
          <Grid xs={12} md={12} sm={12} item>
            <MaterialTable
              icons={tableIcons}

              title="User"
              columns={[

                { title: 'Name', field: 'name' },
                { title: 'email', field: 'email' },
                { title: 'region', field: 'region' },

                // { title: 'Avatar', field: 'imageUrl', render: rowData => <Chips data={rowData} /> },

              ]}


              data={tableData}
              actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',


                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                },


              ]}
              components={{
                Action: props => (

                  <div>
                    <IconButton aria-label="delete" component={Link} to={`/role/detail/${props.data.id}`} onClick={() => { console.log("i ckiced ") }} >
                      <NavigateNextIcon fontSize="medium" />
                  {/* Detail */}
              </IconButton>

                    <IconButton aria-label="delete" onClick={() => {
                      console.log("clicke user data ", props.data)
                      setUserId(props.data.userId)
                      handleClickOpen()
                      // handleClickOpen()
                    }} >
                      {/* Delete */}
              <DeleteIcon fontSize="medium" />
                    </IconButton>
                  </div>
                ),
              }}
              options={{
                actionsColumnIndex: -1,
                filtering: true

              }}
            />
          </Grid>

          <Grid xs={12} md={6} sm={3} item>

          </Grid>
        </Grid>


        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Do u Want to delete operator?"}</DialogTitle>
          <DialogContent>

            {error !== null ? enqueueSnackbar(error.error, {
              variant: 'error',
            }) : null}
            <DialogContentText id="alert-dialog-description">
              are u sure .
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} disabled={isDeleteLoading ? true : false} color="primary">
              Disagree
          </Button>
            <Button onClick={() => {
              deleteOperator()
              handleClose()
            }} disabled={isDeleteLoading ? true : false} color="secondary" autoFocus>
              Agree
          </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
}


const mapStateToProps = state => ({
  userPermission: state.userPermission,
  realPermission: state.realPermission,
  getRegionManager: state.getRegionManager,
  getRegion:state.regionData
})
const mapDispatchToProps = dispatch => ({
  getAllReagionMangerAction: () => dispatch(fetchRegionManager()),
  getRegionAction: () => dispatch(fetchRegion())


})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
