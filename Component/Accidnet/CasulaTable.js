import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux"
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, age, sex, occupation, phone_no, education_level, injury_status) {
  return { name, age, sex, occupation, phone_no, education_level, injury_status };
}



function BasicTable(props) {
  const classes = useStyles();
  const rows = [

  ];
  let id = props.id
  var foundValue = props.getAccident.aData.filter(obj => obj.id == id);
  console.log("casual tavle is ", foundValue)
  foundValue.map(i => {
    i.accident_injury_statuses.map(j => {

      let b = createData(j.name, j.age, j.sex, j.occupation, j.phone_no, j.education_level, j.injury_status)
      rows.push(b)
    })
  })

  return (

    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">occupation</TableCell>
            <TableCell align="right">Phone No</TableCell>
            <TableCell> Education Level</TableCell>
            <TableCell align="right">Injury Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.occupation}</TableCell>
              <TableCell align="right">{row.phone_no}</TableCell>
              <TableCell align="right">{row.education_level}</TableCell>
              {/* <TableCell align="right">{row.injury_status}</TableCell> */}
              <TableCell >
                {row.injury_status == 'slight_injurys' ? <Chip color="primary" size="small" label='slight injury' /> : null}
                {row.injury_status == 'death' ? <Chip color="secondary" size="small" label='death' /> : null}
                {row.injury_status == 'medium_injurys' ? <Chip style={{ background: "#33ab9f", color: "#fff" }} size="small" label='medium injury' /> : null}
                {row.injury_status == 'fatal_injurys' ? <Chip style={{ background: "#ffee33" }} size="small" label='fatal injury' /> : null}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const mapStateToProps = state => ({

  regionData: state.regionData,
  zoneEmployee: state.zoneEmployee,
  getAccident: state.getAccident
})
const mapDispatchToProps = dispatch => ({
  // getZoneEmp: (name) => dispatch(fetchZoneEmployee(name)),
  // getZoneTrf:(name)=>dispatch(fetchZoneTraffic(name))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicTable))

