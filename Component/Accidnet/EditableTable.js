import React from "react"
import MaterialTable, { MTableToolbar } from 'material-table';
import {connect} from "react-redux"
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
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
import axios from "axios"
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
 function CellEditable(props) {
    const { useState } = React;
    let id= props.id
    var foundValue = props.getAccident.aData.filter(obj => obj.id == id);
    let row=[]
    const updateInjury=(id,status)=>{
      let parm={
        id:id,
        injury_status:status
      }
      axios.post(`http://localhost:9000/api/accident/updateInjuredStatus`, parm).
      then(response => {
        // this.setState({isDeleteLoading:false})
  
        if(response.data.hasOwnProperty("error")){
        // this.setState({error:"this not deleteed"})
        }
  
  
    
      }).catch(error => {
        // this.setState({isDeleteLoading:false})
  
      });
    }
    foundValue.map(i => {
      i.accident_injury_statuses.map(j => {
   console.log("melese fuck ",j)
        row.push(j)
         
      })
    })
    console.log("|||||||)()()()(Editable ",row)
    const [columns, setColumns] = useState([
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name', initialEditValue: 'initial edit value',editable :'never' },
      { title: 'Age', field: 'age',editable :'never'},
      {title: 'Education level', field: 'education_level',editable :'never'},
      {title: 'Injury status', field: 'injury_status' ,editable :{} ,
    
      lookup: { "death": 'death','slight_injurys':'slight injury','fata_injurys':'fatal injury','medium_injurys':'medium injury' },
    },
    ]);
  
    const [data, setData] = useState([
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);
  
    return (
      <MaterialTable
        title="Casulaty Person"
        columns={columns}
        icons={tableIcons}

        data={row}
        cellEditable={{
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
              console.dir('newValue: ' + newValue);
              let parm={
                id:rowData.id,
                injury_status:newValue
              }
              axios.post(`http://localhost:3333/api/accident/updateInjuredStatus`, parm).
              then(response => {
                // this.setState({isDeleteLoading:false})
          
                if(response.data.hasOwnProperty("error")){
                // this.setState({error:"this not deleteed"})
                }
          
          
            
              }).catch(error => {
                // this.setState({isDeleteLoading:false})
          
              });
              // updateInjury(rowData.id,newValue)
              setTimeout(resolve, 1000);
            });
          }
        }}
      />
    )
  }
  const mapStateToProps = state => ({

    regionData: state.regionData,
    zoneEmployee: state.zoneEmployee,
    getAccident: state.getAccident
})
  export default connect(mapStateToProps)(CellEditable);