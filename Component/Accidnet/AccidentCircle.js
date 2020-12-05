 
import React from "react";
import ReactDOM from "react-dom";
import { DonutChart } from "bizcharts";
import {connect} from "react-redux"
 


 function Demo(props) {
  
 
  return (
    <DonutChart
      data={props.id || []}
      title={{
        visible: true,
        text: "Injury",
      }}
      // forceFit
      description={{
        visible: true,
        text: "Injurt status",
      }}
      radius={0.8}
      
      padding="auto"
      angleField="value"
      colorField="type"
      pieStyle={{ stroke: "white", lineWidth: 5 }}
    />
  );
}
 
const mapStateToProps = state => ({

    regionData: state.regionData,
    zoneEmployee: state.zoneEmployee,
    getAccident: state.getAccident
})


export default connect(mapStateToProps)(Demo);