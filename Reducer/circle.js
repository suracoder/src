const initialState = {
    counter: 100,
    markers: [],
    circles: [],
    marker_selecting: ""
  };


const circle = (state = initialState, action) => {
//==================
switch (action.type) {
 case "ADD_CIRCLE":
   let max = 35.4;
   let min = 33.9;
   let lat = Math.random() * (max - min) + min;

    max = 152.5;
    min = 148.5;
   let lng = Math.random() * (2 - 3) + 1;

    const new_circle = {
      center: { lat: 7.68-lng, lng: 36.81+lng },
      radius: 12000
    };
    return {
      ...state,
      circles: [...state.circles, new_circle]
    };

  case "CIRCLE_TOGGLE_EDIT":
   let id = action.value;

    let selectedCircle = [];
    selectedCircle[id] = state.circles[id];
    selectedCircle[id] = {
      ...state.circles[id],
      editable: !selectedCircle[id].editable
    };

    let new_statCircle = Object.assign([...state.circles], selectedCircle);

    return {
      ...state,
      circles: new_statCircle
    };

  case "CIRCLE_CHANGE":
    let moving_circle = action.value;
    console.log(moving_circle);

    let obj = [];
    obj[moving_circle.id] = moving_circle;

   let copy = Object.assign([...state.circles], obj);
    console.log(copy);

    return {
      ...state,
      circles: copy
      // marker_selecting: moving_marker.id,
    };

  case "DEL_CIRCLE":
    let  index = action.value;
    console.log(index);
    var newArray = state.circles.slice();
    newArray.splice(index, 1);
    return {
      ...state,
      circles: newArray,
      marker_selecting: -1
    };
    default: return state;
}

  }

  export default circle;