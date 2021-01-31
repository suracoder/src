import React from "react";
import { render } from "react-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow,
  Polyline
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import { Provider, connect } from "react-redux";
import Poligen from "./Poligen"
// import MarkerGroup from "./MarkerGroup";
// import MarkerLocation from "./MarkerLocation";
import CircleK from "./CircleK";

class BaseMap extends React.Component {
  render() {
      console.log("circle ",this.props)
    return (
      <GoogleMap
        options={{ gestureHandling: "greedy" }}
        defaultZoom={10}
        defaultCenter={{ lat: 7.6888624, lng: 36.8199542 }}
        defaultClickableIcons={true}
      >
          
        {/* {this.props.markers.map((marker, index) => {
          if (marker.isGroup)
            return (
              <MarkerGroup
                key={index}
                id={index}
                position={marker.position}
                isGroup={marker.isGroup}
                description={marker.description}
              />
            );
          // return (
          //   // <MarkerLocation
          //   //   key={index}
          //   //   id={index}
          //   //   position={marker.position}
          //   //   isGroup={marker.isGroup}
          //   //   description={marker.description}
          //   // />
          // );
        })} */}

        {this.props.circles.map((circle, index) => {
            
          return (
            <CircleK
              key={index}
              id={index}
              center={circle.center}
              editable={true}
              color="blue"
              radius={circle.radius}
            />
          );
        })}
      </GoogleMap>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // markers: state.markers,
    circles: state.circle.circles
  };
};

export default connect(mapStateToProps)(
  compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCGg3Vu4KpU7566Ghc-CqJy0pYR4Fhfa-A&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `500px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(BaseMap)
);
