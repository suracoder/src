import React, { PureComponent } from 'react';
import {fetchAccidnet} from "../../Action/index"
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import {connect} from "react-redux"
const data = [
  {
    name: 'Page A', uv: "male", pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: "male", pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv:"femal", pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: "male", pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: "male", pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv:"male", pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: "male", pv: 4300, amt: 2100,
  },
];

 class Example extends PureComponent {
    constructor() {
        super();
    
        this.state = {
           
    
        }
    
      }
     
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';
componentDidMount(){
    console.log("on Chart",this.props)


    this.props.getAccidentAction()
}
  render() {
      console.log("on Chart",this.props)
      let data=[]
      this.props.data.map(i=>console.log(i))
    return (
      <AreaChart
        width={500}
        height={400}
        data={this.props.data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="driver_name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pressure" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="clouds" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="temp" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
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
  