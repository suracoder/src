import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import {fetchAccidnet} from "../../Action/index"
import {connect} from "react-redux"
const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
  class Example extends PureComponent {
    constructor() {
        super();
    
        this.state = {
           
    
        }
    
      }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';
  componentDidMount(){
    console.log("on Chart",this.props)


    this.props.getAccidentAction()
}
  render() {
    return (
      <LineChart width={500} height={300} data={this.props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="driver_name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pressure" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="clouds" stroke="#82ca9d" />
        <Line type="monotone" dataKey="temp" stroke="#ffc658" />
      </LineChart>
    );
  }
}
const mapStateToProps=state=>({
    userPermission:state.userPermission,
    realPermission:state.realPermission,
    getAccident:state.getAccidnet

  })
  const mapDispatchToProps = dispatch => ({
    getAccidentAction:()=>dispatch(fetchAccidnet())
   })
  export default connect(mapStateToProps,mapDispatchToProps)(Example);
  