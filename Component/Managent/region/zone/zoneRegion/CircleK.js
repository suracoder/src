import React, { Component } from "react";
import { render } from "react-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import { connect } from "react-redux";

class MarkerK extends Component {
  constructor(props) {
    super(props);
  }

  onDragEnd = e => {
    this.props.position.lat = e.latLng.lat();
    this.props.position.lng = e.latLng.lng();
    // this.props.MARKER_MOVE(this.props);
  };

  toggleEdit = e => {
    this.props.CIRCLE_TOGGLE_EDIT(this.props.id);
    console.log(this.props.id);
  };

  getCenter = e => {
    console.log(e);
  };

  onCenterChanged() {
    const center = this.marker.getCenter();
    const radius = this.marker.getRadius();
    // console.log(center);
    // console.log(radius);
    this.props.center.lat = center.lat();
    this.props.center.lng = center.lng();
    // this.props.radius = radius;
    let obj = { ...this.props, radius: radius };
    // console.log(this.props.radius);
    this.props.CIRCLE_CHANGE(obj);
  }

  // onRadiusChanged() {
  //   const radius = this.marker.getRadius();
  //   console.log(radius);
  //   // this.props.center.lat = center.lat();
  //   // this.props.center.lng = center.lng();
  //   // console.log(this.props.center);
  //   // this.props.CIRCLE_MOVE(this.props);
  // }

  render() {
    const id = this.props.id;
    let selected = false;
    // if (this.props.marker_selecting === id) {
    //   selected = true;
    // }

    return (
      <Circle
        key={this.props.id}
        id={this.props.id}
        center={this.props.center}
        editable={true}
        color="blue"
        radius={this.props.radius}
        onClick={this.toggleEdit}
        onCenterChanged={this.onCenterChanged}
        onRadiusChanged={this.onCenterChanged}
        ref={input => (this.marker = input)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    // marker_selecting: state.marker_selecting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // MARKER_SELECTING: id => dispatch({ type: "MARKER_SELECTING", value: id }),
    // MARKER_MOVE: id => dispatch({ type: "MARKER_MOVE", value: id }),
    CIRCLE_CHANGE: id => dispatch({ type: "CIRCLE_CHANGE", value: id }),
    CIRCLE_TOGGLE_EDIT: id =>
      dispatch({ type: "CIRCLE_TOGGLE_EDIT", value: id })
  };
};

export default connect(
//   mapStateToProps,
null,
  mapDispatchToProps
)(MarkerK);
