import React, { useEffect, useState, useContext, Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polygon} from "react-google-maps"
import axios from "axios"
import SocketContext from './SocketContext'
import { useSnackbar } from 'notistack';
import { getZoneData } from "../Action"
import MarkerDetail from "./markerDetail"
 
import Chat from "./chat"
import { useSelector, useDispatch, connect } from 'react-redux';
 
class Map extends Component {

  constructor() {
    super();

    this.state = {
      markers: [],
      isOpen: false,
      openInfoWindowMarkerId: "",
      location:[]

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
 


  componentDidMount() {
   
    axios.get(`http://localhost:3333/location`).
    then(response => {
  

console.log("location data " ,response.data.routes)
response.data.routes.map(i=>{
    console.log("rote loca => ",i.geometry.coordinates)
    this.setState({location: i.geometry.coordinates})
    i.geometry.coordinates.map(j=>{
        console.log(j[0])
    })
})
  
    }).catch(error => {
 
    });
  }



  render() {


    console.log("state lostion rote  ",this.state.location)
    // this.props.onlineTraffic.map(i=>console.log("sura",i))
    return (

      <GoogleMap
      onClick={(e)=>console.log(e.latLng.lat())}
        defaultCenter={{ lat: 7.013191, lng: 39.9746573 }}
        defaultZoom={10}>
        {
          this.state.location.map((i) => {
            console.log("my marker", i)

            return <Marker position={{ lat: i[0], lng:i[1]}}></Marker>
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
       

       />
    </div>
  )
}
const mapStateToProps = state => ({
  liveTraffic: state.liveTraffic
})
const mapDispatchToProps = dispatch => ({
 
})
export default connect(mapStateToProps, mapDispatchToProps)(MyMapComponent);
