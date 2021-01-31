import React, { useEffect, useState, useContext, Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polygon} from "react-google-maps"
import axios from "axios"
 
 
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
   
//     axios.get(`http://localhost:3333/location`).
//     then(response => {
  

// console.log("location data " ,response.data.routes)
// response.data.routes.map(i=>{
//     console.log("rote loca => ",i.geometry.coordinates)
//     this.setState({location: i.geometry.coordinates})
//     i.geometry.coordinates.map(j=>{
//         console.log(j[0])
//     })
// })
  
//     }).catch(error => {
 
//     });
  }



  render() {

console.log("on final lat long ",this.props.latLong)
    // console.log("state lostion rote  ",this.state.location)
    // this.props.onlineTraffic.map(i=>console.log("sura",i))
    return (

      <GoogleMap
      onClick={(e)=>console.log(e.latLng.lat())}
        defaultCenter={{ lat: this.props.latLong.latitude, lng: this.props.latLong.longitude }}
        defaultZoom={10}>
       

            <Marker position={{ lat: this.props.latLong.latitude, lng:this.props.latLong.longitude}}></Marker>
         

 
      </GoogleMap>
    )

  }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

  function MyMapComponent(props) {
      console.log("map for accident =>>>> ",props.latLng)
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGg3Vu4KpU7566Ghc-CqJy0pYR4Fhfa-A&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} >loading..</div>}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
       latLong={props.latLng}

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
