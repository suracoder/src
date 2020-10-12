// import React, { PureComponent } from 'react';
// import {
//   ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
//   Legend, Scatter,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490,
//   },
//   {
//     name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590,
//   },
//   {
//     name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350,
//   },
//   {
//     name: 'Page D', uv: 1480, pv: 1200, amt: 1228, cnt: 480,
//   },
//   {
//     name: 'Page E', uv: 1520, pv: 1108, amt: 1100, cnt: 460,
//   },
//   {
//     name: 'Page F', uv: 1400, pv: 680, amt: 1700, cnt: 380,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';

//   render() {
//       console.log("chatt data" ,this.props.location)
//     return (
//       <ComposedChart
//         width={500}
//         height={400}
//         data={this.props.location}
//         margin={{
//           top: 20, right: 20, bottom: 20, left: 20,
//         }}
//       >
//         <CartesianGrid stroke="#f5f5f5" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//         <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//         <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//         {/* <Scatter dataKey="cnt" fill="red" /> */}
//       </ComposedChart>
//     );
//   }
// }
// import React, { PureComponent } from 'react';
// import {
//   ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
// } from 'recharts';

// const data = [
//   { x: 100, y: 200, z: 200 },
//   { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 },
//   { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 500 },
//   { x: 110, y: 280, z: 200 },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/uLysj0u2/';

//   render() {
//     return (
//       <ScatterChart
//         width={400}
//         height={400}
//         margin={{
//           top: 20, right: 20, bottom: 20, left: 20,
//         }}
//       >
//         <CartesianGrid />
//         <XAxis type="number" dataKey="x" name="stature" unit="cm" />
//         <YAxis type="number" dataKey="y" name="weight" unit="kg" />
//         <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//         <Scatter name="A school" data={data} fill="#8884d8" />
//       </ScatterChart>
//     );
//   }
// }

// import React, { PureComponent } from 'react';
// import {
//   ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
//   Legend,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 590, pv: 800, amt: 1400,
//   },
//   {
//     name: 'Page B', uv: 868, pv: 967, amt: 1506,
//   },
//   {
//     name: 'Page C', uv: 1397, pv: 1098, amt: 989,
//   },
//   {
//     name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
//   },
//   {
//     name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
//   },
//   {
//     name: 'Page F', uv: 1400, pv: 680, amt: 1700,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

//   render() {
//     return (
//       <ComposedChart
//         width={500}
//         height={400}
//         data={data}
//         margin={{
//           top: 20, right: 20, bottom: 20, left: 20,
//         }}
//       >
//         <CartesianGrid stroke="#f5f5f5" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="uv" barSize={20} fill="#413ea0" />
//         <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//       </ComposedChart>
//     );
//   }
// }

// import React, { PureComponent } from 'react';
// import {
//   Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
// } from 'recharts';

// const data = [
//   {
//     subject: 'Math', A: 120, B: 1610, fullMark: 10050,
//   },
//   {
//     subject: 'Chinese', A: 98, B: 130, fullMark: 150,
//   },
//   {
//     subject: 'English', A: 886, B: 1030, fullMark: 150,
//   },
//   {
//     subject: 'Geography', A: 99, B: 100, fullMark: 150,
//   },
//   {
//     subject: 'Physics', A: 850, B: 90, fullMark: 150,
//   },
//   {
//     subject: 'History', A: 65, B: 85, fullMark: 150,
//   },
//   {
//     subject: 'surafel', A: 665, B: 885, fullMark: 1650,
//   }

  
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

//   render() {
//     return (
//       <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
//         <PolarGrid />
//         <PolarAngleAxis dataKey="subject" />
//         <PolarRadiusAxis />
//         <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//       </RadarChart>
//     );
//   }
// }


// import React, { PureComponent } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 40000, pv: 40666666660, amt: 2423200,
//   },
//   {
//     name: 'Page B', uv: 35000, pv: 13976666668, amt: 222310,
//   },
//   {
//     name: 'Page C', uv: 20300, pv: 98777777700, amt: 225690,
//   },
//   {
//     name: 'Page D', uv: 233780, pv: 396666608, amt: 26556000,
//   },
//   {
//     name: 'Page E', uv: 189330, pv: 46666800, amt: 2185661,
//   },
//   {
//     name: 'Page F', uv: 239330, pv: 38066660, amt: 2565600,
//   },
//   {
//     name: 'Page G', uv: 349330, pv: 436666666666600, amt: 2156300,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

//   render() {
//     return (
//         <div>
//       <LineChart width={300} height={100} data={data}>
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        
//       </LineChart>
//         <LineChart width={300} height={100} data={data}>
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        
//       </LineChart>  <LineChart width={300} height={100} data={data}>
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        
//       </LineChart>
//       </div>
//     );
//   }
// }


// import React, { PureComponent } from 'react';
// import {
//   Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea,
// } from 'recharts';

// const data = [
//   { name: 1, cost: 4.11, impression: 100 },
//   { name: 2, cost: 2.39, impression: 120 },
//   { name: 3, cost: 1.37, impression: 150 },
//   { name: 4, cost: 1.16, impression: 180 },
//   { name: 5, cost: 2.29, impression: 200 },
//   { name: 6, cost: 3, impression: 499 },
//   { name: 7, cost: 0.53, impression: 50 },
//   { name: 8, cost: 2.52, impression: 100 },
//   { name: 9, cost: 1.79, impression: 200 },
//   { name: 10, cost: 2.94, impression: 222 },
//   { name: 11, cost: 4.3, impression: 210 },
//   { name: 12, cost: 4.41, impression: 300 },
//   { name: 13, cost: 2.1, impression: 50 },
//   { name: 14, cost: 8, impression: 190 },
//   { name: 15, cost: 0, impression: 300 },
//   { name: 16, cost: 9, impression: 400 },
//   { name: 17, cost: 3, impression: 200 },
//   { name: 18, cost: 2, impression: 50 },
//   { name: 19, cost: 3, impression: 100 },
//   { name: 20, cost: 7, impression: 100 },
// ];

// const getAxisYDomain = (from, to, ref, offset) => {
//   const refData = data.slice(from - 1, to);
//   let [bottom, top] = [refData[0][ref], refData[0][ref]];
//   refData.forEach((d) => {
//     if (d[ref] > top) top = d[ref];
//     if (d[ref] < bottom) bottom = d[ref];
//   });

//   return [(bottom | 0) - offset, (top | 0) + offset];
// };

// const initialState = {
//   data,
//   left: 'dataMin',
//   right: 'dataMax',
//   refAreaLeft: '',
//   refAreaRight: '',
//   top: 'dataMax+1',
//   bottom: 'dataMin-1',
//   top2: 'dataMax+20',
//   bottom2: 'dataMin-20',
//   animation: true,
// };

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nhpemhgs/';

//   constructor(props) {
//     super(props);
//     this.state = initialState;
//   }

//   zoom() {
//     let { refAreaLeft, refAreaRight, data } = this.state;

//     if (refAreaLeft === refAreaRight || refAreaRight === '') {
//       this.setState(() => ({
//         refAreaLeft: '',
//         refAreaRight: '',
//       }));
//       return;
//     }

//     // xAxis domain
//     if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

//     // yAxis domain
//     const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
//     const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

//     this.setState(() => ({
//       refAreaLeft: '',
//       refAreaRight: '',
//       data: data.slice(),
//       left: refAreaLeft,
//       right: refAreaRight,
//       bottom,
//       top,
//       bottom2,
//       top2,
//     }));
//   }

//   zoomOut() {
//     const { data } = this.state;
//     this.setState(() => ({
//       data: data.slice(),
//       refAreaLeft: '',
//       refAreaRight: '',
//       left: 'dataMin',
//       right: 'dataMax',
//       top: 'dataMax+1',
//       bottom: 'dataMin',
//       top2: 'dataMax+50',
//       bottom2: 'dataMin+50',
//     }));
//   }

//   render() {
//     const {
//       data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2,
//     } = this.state;

//     return (
//       <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
//         <button
//           // href="javascript: void(0);"
//           className="btn update"
//           onClick={this.zoomOut.bind(this)}
//         >
//           Zoom Out

//         </button>

//         <LineChart
//           width={800}
//           height={400}
//           data={data}
//           onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
//           onMouseMove={e => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
//           onMouseUp={this.zoom.bind(this)}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             allowDataOverflow
//             dataKey="name"
//             domain={[left, right]}
//             type="number"
//           />
//           <YAxis
//             allowDataOverflow
//             domain={[bottom, top]}
//             type="number"
//             yAxisId="1"
//           />
//           <YAxis
//             orientation="right"
//             allowDataOverflow
//             domain={[bottom2, top2]}
//             type="number"
//             yAxisId="2"
//           />
//           <Tooltip />
//           <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
//           <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

//           {
//             (refAreaLeft && refAreaRight) ? (
//               <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null
//             }
//         </LineChart>

//       </div>
//     );
//   }
// }

// import React, { PureComponent } from 'react';
// import {
//   PieChart, Pie, Sector, Cell,
// } from 'recharts';

// const data01 = [
//   { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
// ];
// const data02 = [
//   { name: 'A1', value: 100 },
//   { name: 'A2', value: 300 },
//   { name: 'B1', value: 100 },
//   { name: 'B2', value: 80 },
//   { name: 'B3', value: 40 },
//   { name: 'B4', value: 30 },
//   { name: 'B5', value: 50 },
//   { name: 'C1', value: 100 },
//   { name: 'C2', value: 200 },
//   { name: 'D1', value: 150 },
//   { name: 'D2', value: 50 },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

//   render() {
//     return (
//       <PieChart width={400} height={400}>
//         <Pie data={this.props.location} dataKey="latitude" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
//         <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
//       </PieChart>
//     );
//   }
// }


// import React, { PureComponent } from 'react';
// import {
//   ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// const data01 = [
//   { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
// ];
// const data02 = [
//   { x: 200, y: 260, z: 240 }, { x: 240, y: 290, z: 220 },
//   { x: 190, y: 290, z: 250 }, { x: 198, y: 250, z: 210 },
//   { x: 180, y: 280, z: 260 }, { x: 210, y: 220, z: 230 },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

//   render() {
//     return (
//       <ScatterChart
//         width={400}
//         height={400}
//         margin={{
//           top: 20, right: 20, bottom: 20, left: 20,
//         }}
//       >
//         <CartesianGrid />
//         <XAxis type="number" dataKey="latitude" name="stature" unit="cm" />
//         <YAxis type="number" dataKey="longitude" name="weight" unit="kg" />
//         <ZAxis type="number" dataKey="batteryLevel" range={[60, 400]} name="score" unit="km" />
//         <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//         <Legend />
//         <Scatter name="A school" data={this.props.latitude} fill="#8884d8" shape="star" />
//         <Scatter name="B school" data={this.props.longitude} fill="#82ca9d" shape="triangle" />
//       </ScatterChart>
//     );
//   }
// }
 
// import React, { PureComponent } from 'react';
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

//   render() {
//     return (
//       <BarChart
//         width={500}
//         height={300}
//         data={this.props.location.longitude}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//         barSize={20}
//       >
//         <XAxis dataKey="longitude" scale="point" padding={{ left: 10, right: 10 }} />
//         <YAxis /> 
//         <Tooltip />
//         <Legend />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Bar dataKey="longitude" fill="#8884d8" background={{ fill: '#eee' }} />
//       </BarChart>
//     );
//   }
// }

// import React, { PureComponent } from 'react';
// import {
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 240000,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/2vyv694u/';

//   render() {
//     return (
//       <div>
//         <h4>A demo of synchronized AreaCharts</h4>
//         <AreaChart
//           width={500}
//           height={200}
//           data={data}
//           syncId="anyId"
//           margin={{
//             top: 10, right: 30, left: 0, bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//         <p>Maybe some other content</p>
//         <AreaChart
//           width={500}
//           height={200}
//           data={data}
//           syncId="anyId"
//           margin={{
//             top: 10, right: 30, left: 0, bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//         </AreaChart>
//       </div>
//     );
//   }
// }

// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import range from 'lodash/range'
// import shuffle from 'lodash/shuffle'
// import { AreaBump, Bump } from '../src'

// const generateData = () => {
//     const years = range(2000, 2005)
//     const ranks = range(1, 7)

//     const series = ranks.map(rank => {
//         return {
//             id: `Serie ${rank}`,
//             data: [],
//         }
//     })

//     years.forEach(year => {
//         shuffle(ranks).forEach((rank, i) => {
//             series[i].data.push({
//                 x: year,
//                 y: rank,
//                 extra: Math.random(),
//             })
//         })
//     })

//     return series
// }

// const commonProps = {
//     width: 900,
//     height: 360,
//     margin: { top: 40, right: 100, bottom: 40, left: 100 },
//     titleOffsetX: -80,
//     data: generateData(),
//     spacing: 80,
// }

// const stories = storiesOf('Bump', module)

// stories.add('default', () => <Bump {...commonProps} />)

// const CustomPoint = ({ x, y, isActive, isInactive, size, color, borderColor, borderWidth }) => {
//     return (
//         <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
//             <rect
//                 x={size * -0.5 - 4}
//                 y={size * -0.5 + 4}
//                 width={size + borderWidth}
//                 height={size + borderWidth}
//                 fill="rgba(0, 0, 0, .07)"
//             />
//             <rect
//                 x={size * -0.5}
//                 y={size * -0.5}
//                 width={size}
//                 height={size}
//                 fill={color}
//                 stroke={borderColor}
//                 strokeWidth={borderWidth}
//             />
//             {isActive && (
//                 <text textAnchor="middle" y={4} fill={borderColor}>
//                     A
//                 </text>
//             )}
//             {isInactive && (
//                 <text textAnchor="middle" y={4} fill={borderColor}>
//                     I
//                 </text>
//             )}
//         </g>
//     )
// }

// stories.add('Custom points', () => (
//     <Bump
//         {...commonProps}
//         pointComponent={CustomPoint}
//         pointSize={20}
//         activePointSize={24}
//         inactivePointSize={16}
//         pointBorderWidth={2}
//         activePointBorderWidth={4}
//         inactivePointBorderWidth={1}
//         pointColor="#ffffff"
//         pointBorderColor={{ from: 'serie.color' }}
//     />
// ))

// stories.add('Missing data', () => (
//     <Bump
//         {...commonProps}
//         pointSize={12}
//         activePointSize={16}
//         inactivePointSize={8}
//         data={[
//             {
//                 id: 'Serie A',
//                 data: [
//                     // missing data at the beginning
//                     { x: 0, y: null },
//                     { x: 1, y: 1 },
//                     { x: 2, y: 1 },
//                     { x: 3, y: 2 },
//                     { x: 4, y: 2 },
//                 ],
//             },
//             {
//                 id: 'Serie B',
//                 data: [
//                     { x: 0, y: 1 },
//                     { x: 1, y: 2 },
//                     // missing data in the middle
//                     { x: 2, y: null },
//                     { x: 3, y: 3 },
//                     { x: 4, y: 3 },
//                 ],
//             },
//             {
//                 id: 'Serie C',
//                 data: [
//                     { x: 0, y: 3 },
//                     { x: 1, y: 3 },
//                     { x: 2, y: 3 },
//                     { x: 3, y: 1 },
//                     // missing data at the end
//                     { x: 4, y: null },
//                 ],
//             },
//         ]}
//     />
// ))

// stories.add('Area with fill pattern', () => (
//     <AreaBump
//         {...commonProps}
//         indexBy="id"
//         defs={[
//             {
//                 id: 'dots',
//                 type: 'patternDots',
//                 background: 'inherit',
//                 color: '#38bcb2',
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//             },
//             {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: '#eed312',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//             },
//         ]}
//         fill={[
//             {
//                 match: {
//                     id: 'Serie 3',
//                 },
//                 id: 'lines',
//             },
//             {
//                 match: {
//                     id: 'Serie 5',
//                 },
//                 id: 'dots',
//             },
//         ]}
//     />
// ))

import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
