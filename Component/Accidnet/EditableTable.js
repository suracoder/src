import React from "react"
import MaterialTable, { MTableToolbar } from 'material-table';
import {connect} from "react-redux"

 function CellEditable(props) {
    const { useState } = React;
    let id= props.id
    var foundValue = props.getAccident.aData.filter(obj => obj.id == id);
    let row=[]
    foundValue.map(i => {
      i.accident_injury_statuses.map(j => {
   console.log("melese fuck ",j)
        row.push(j)
         
      })
    })
    console.log("|||||||)()()()(Editable ",row)
    const [columns, setColumns] = useState([
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name', initialEditValue: 'initial edit value' },
      { title: 'Age', field: 'age'},
      {title: 'Education level', field: 'education_level'},
      {title: 'Injury status', field: 'injury_status'  ,
    
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
        data={row}
        cellEditable={{
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
              console.log('newValue: ' + rowData.name);
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