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
      openInfoWindowMarkerId: ""
    }

  }

  // for socket context
 

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
   
 

  }



  render() {

    
    
    // this.props.onlineTraffic.map(i=>console.log("sura",i))
    return (

      <GoogleMap
      onClick={(e)=>console.log(e.latLng.lat())}
        defaultCenter={{ lat: 7.013191, lng: 39.9746573 }}
        defaultZoom={10}>
    

 
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
})
const mapDispatchToProps = dispatch => ({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(MyMapComponent);

 