import React, { useEffect, useState, useContext, Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polygon} from "react-google-maps"
import axios from "axios"
import SocketContext from './SocketContext'
import { useSnackbar } from 'notistack';
import { getZoneData } from "../Action"
import MarkerDetail from "./markerDetail"
import InfoMarker from "./info"
import Chat from "./chat"
import { useSelector, useDispatch, connect } from 'react-redux';
import {fetchLiveTraffic}  from "../Action/index"
class Map extends Component {

  constructor() {
    super();

    this.state = {
      markers: [],
      isOpen: false,
      openInfoWindowMarkerId: ""
    }

  }

  // for socket context
  static contextType = SocketContext;

  handleToggleOpen = (markerId) => {

    this.setState({
      openInfoWindowMarkerId: markerId
    });
    this.setState({
      isOpen: true
    });
  }

  handleToggleClose = () => {
    console.log("window closed")
    this.setState({
      isOpen: false
    });
  }

  getData = () => {
    this.context.on("updatelocation", (data) => {
      this.props.onLocationChange()
      // let array = this.state.markers
      // let markerss = array.filter(function (i) {
        // console.log("fillter map ", i)
        // return i.userId !== data.userId;
      // });
      // this.setState({ markers: [...markerss, data] });
    })
  }


  componentDidMount() {
    this.getData()


  }



  render() {

    console.log("for gitup respositery " ,this.props)
    let markers=this.props.onlineTraffic
    
    // this.props.onlineTraffic.map(i=>console.log("sura",i))
    return (

      <GoogleMap
        defaultCenter={{ lat: 7.013191, lng: 39.9746573 }}
        defaultZoom={10}>
        {
          markers.map((i) => {
            console.log("my marker", i)

            return <InfoMarker {...i} />
          })
        }

 
      </GoogleMap>
    )

  }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

  function MyMapComponent(props) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGg3Vu4KpU7566Ghc-CqJy0pYR4Fhfa-A&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        {...props.liveTraffic}

      onLocationChange={props.newTrafficLocaation}
      />
    </div>
  )
}
const mapStateToProps = state => ({
  liveTraffic: state.liveTraffic
})
const mapDispatchToProps = dispatch => ({
    newTrafficLocaation: () => dispatch(fetchLiveTraffic())
})
export default connect(mapStateToProps, mapDispatchToProps)(MyMapComponent);

{/* <Marker
          onClick={() => this.handleToggleOpen(i.userId)}

          key={i.userId}
          position={{ lat: i.latitude, lng:i.longitude }}
   >
     {this.state.isOpen   (
              <InfoWindow 
              anchor={this.state.openInfoWindowMarkerId}
              onCloseClick={() => this.handleToggleClose()}>
                <span>Something</span>
              </InfoWindow>
            )}
     </Marker>
        */}


// import React from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
// import { render } from "@testing-library/react";
//  import Button from "@material-ui/core/Button"
// import SocketContext from './SocketContext'


// export default  class App extends React.Component {
//   static contextType = SocketContext;

//  render(){
//   console.log("contect @@@@  ", this.context)
//  let socket=this.context;
//  socket.emit('setUsername', "love");
//  console.log("passed socket", socket.json)
//   return (
//     <div style={{width:'50%' ,height:'100%'}}>
//       <Button onClick={()=> socket.emit('setUsername', "ethiopia")}> sdcd</Button>
//     <Map center={[45.4, -75.7]} zoom={12}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//     </Map>
//     </div>
//   );
//  }
// }
// const MyMapComponent = compose(

//   withProps({
//     googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

//  export  default class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }


// import React, { Component } from "react"
// import { compose } from "recompose"
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps"

// const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

//   return (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: 29.5, lng: -95 }}>
//       {props.markers.map(marker => {
//         const onClick = props.onClick.bind(this, marker)
//         return (
//           <Marker
//             key={marker.id}
//             onClick={onClick}
//             position={{ lat: marker.latitude, lng: marker.longitude }}
//           >
//             {props.selectedMarker === marker &&
//               <InfoWindow>
//                 <div>
//                   {marker.shelter}
//                 </div>
//               </InfoWindow>}
//             }
//           </Marker>
//         )
//       })}
//     </GoogleMap>
//   )
// })

// export default class ShelterMap extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       shelters: [],
//       selectedMarker: false
//     }
//   }
//   componentDidMount() {
//     fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
//       .then(r => r.json())
//       .then(data => {
//         this.setState({ shelters: data.shelters })
//       })
//   }
//   handleClick = (marker, event) => {
//     // console.log({ marker })
//     this.setState({ selectedMarker: marker })
//   }
//   render() {
//     return (
//       <MapWithAMarker
//         selectedMarker={this.state.selectedMarker}
//         markers={this.state.shelters}
//         onClick={this.handleClick}
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBgRcWr1IdsaG7Jb4exFVUTxzwRpu268nY"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     )
//   }
// }



// preive 

// function Map(){
// const [location ,setLocation]=useState([])
// let [markers,setMarkers]=useState([0])
// const socket = useContext(SocketContext)
// let markerss={accuracy: 1600,
//   altitude: 0,
//   altitudeAccuracy: 0,
//   batteryLevel: 0.30000001192092896,
//   course: 90,
//   courseAccuracy: 0,
//   fromMockProvider: false,
//   latitude: 7.013111,
//   longitude: 30.9573,
//   speed: 0,
//   speedAccuracy: 0,
//   timestamp: 1599654999766,
//   userId: 2}
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

// useEffect(() => {

//   // setMarkers({markerss})
//   console.log("!@!@!@!@!2",markers)
// //   axios.get('http://localhost:3333/api/traffic/getLocation'). then(response=>{
// //        console.log(response)

// //  let location=response.data
// //  setLocation(response.data)
// //   }).
// //   catch(error=>{

// //   });

//   socket.on("updatelocation",function(data){
//     console.log("user updated ",markers)
//   let  markerss = markers.filter(function(i) { 
//       console.log("fillter map ",i)
//       return i.userId !== data.userId; 
//     });
//     console.log("current marker ",markerss)
//     let name=data.latitude+"  "+data.longitude
//     console.log(name)
//     enqueueSnackbar(name);
//     setMarkers([data])

//     // markers.push(data)
//     // console.log("current marker ",markers)
//   })
// },[] )
// // console.log("changng ",markers)
// // console.log("function context ",markers)
// console.log("props ",useState)
// let o=0;
// // location[0].map(i=>console.log(i))
// // console.log("locatin data ", location.map((i)=>console.log(i)))
// // markers.map((i)=>console.log("#$#$#$ ",i.latitude))
// return(

//     <GoogleMap
//     defaultCenter={{lat:7.013191,lng:39.9746573}}
//     defaultZoom={10}>
//       {
//         markers.map((i)=>{
//           console.log("my marker",i)
//         o++;
//         return <Marker
//         onClick={()=>console.log(i)}
//         key={i.userId}
//         position={{ lat: i.latitude, lng:i.longitude }}
//         />})
//       }

//       </GoogleMap>
//   )
// }

// const socket = useContext(SocketContext)
// @@@@@@@@@@@@@2