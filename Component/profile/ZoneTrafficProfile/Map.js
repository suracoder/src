import React, { useEffect, useState, useContext, Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polygon} from "react-google-maps"
import axios from "axios"
 
import { useSnackbar } from 'notistack';
 
import { useSelector, useDispatch, connect } from 'react-redux';
 
class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      isOpen: false,
      openInfoWindowMarkerId: "",
      path:[]
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
    console.log("component did maount user ",this.props.userId)
let data={
  userId:this.props.userId,
  data:this.props.data
}
    console.log("@@@DEDE##@ ",this.props )
    axios.post(`http://localhost:3333/api/zone/getZoneTrafficAssignByIdWithData`,data).
    then(response => {
      // this.setState({ userLocation: response.data })
      response.data.map(i=>{
        this.setState({path:i.zoneRegion.zoneRegionLocations})
      })

      console.log(">>>> assigned ", response.data)
    }
    ).
    catch(error => {

    });

  }



  render() {
 
 
    console.log("passed location ",this.prstatops)
    // this.props.onlineTraffic.map(i=>console.log("sura",i))
    return (

      <GoogleMap
      onClick={(e)=>console.log(e.latLng.lat())}
        defaultCenter={{ lat:7.6, lng: 36.81 }}
        defaultZoom={10}>
        {
          this.props.userLocation.map((i) => {
            console.log("my marker", i)

            return <Marker position={{ lat: i.latitude, lng:i.longitude}}></Marker>
          })
        }
<Polygon
path={this.props.path}
/>
 
      </GoogleMap>
    )

  }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

  function MyMapComponent(props) {
      console.log("map props      ",props)
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGg3Vu4KpU7566Ghc-CqJy0pYR4Fhfa-A&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      userLocation={props.location}
      userId={props.userId}
      onLocationChange={props.newTrafficLocaation}
      path={props.path}
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
