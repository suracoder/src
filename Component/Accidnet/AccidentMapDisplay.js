import React, { useEffect, useState, useContext, Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polygon} from "react-google-maps"
import axios from "axios"
 
 import {fetchAccidnet} from "../../Action/index"
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

console.log("on final lat long ",this.props.accident)
    // console.log("state lostion rote  ",this.state.location)
    // this.props.onlineTraffic.map(i=>console.log("sura",i))
    return (

      <GoogleMap
      onClick={(e)=>console.log(e.latLng.lat())}
        defaultCenter={{ lat: 7, lng: 36 }}
        defaultZoom={10}>
       
{this.props.accident.map(i=>{
    return      <Marker position={{ lat: i.latitude, lng:i.longitude}}></Marker>
})}
            
         

 
      </GoogleMap>
    )

  }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

  function MyMapComponent(props) {
    useEffect(()=>{
        console.log("this useEffect ",props.getAccident)
props.getAccidentAction()
    },[])
      console.log("map for accident =>>>> ",props.getAccident.aData)
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGg3Vu4KpU7566Ghc-CqJy0pYR4Fhfa-A&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} >loading..</div>}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
         accident={props.getAccident.aData}

       />
    </div>
  )
}
const mapStateToProps = state => ({
//   liveTraffic: state.liveTraffic,
  getAccident:state.getAccident
})
const mapDispatchToProps = dispatch => ({
 getAccidentAction:()=>dispatch(fetchAccidnet())
})
export default connect(mapStateToProps,mapDispatchToProps)(MyMapComponent);
