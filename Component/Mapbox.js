import React ,{Component} from "react"
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';


export default class MapBox extends Component{




    render(){
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic3VyYWZlbHdvcmt1IiwiYSI6ImNqemN1dHI4MTAxMHkzb3Vpbm9mZXBjcWIifQ.R2tpKx2T8vhzjhSSDqxD1A'
  });
   
 
return(
    
  <Map
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: '100vh',
      width: '100vw'
    }}
  >
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
    </Layer>
  </Map>
)
    }
}

// import React, { useRef, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';

// import './App.css';

// mapboxgl.accessToken ="pk.eyJ1Ijoic3VyYWZlbHdvcmt1IiwiYSI6ImNqemN1dHI4MTAxMHkzb3Vpbm9mZXBjcWIifQ.R2tpKx2T8vhzjhSSDqxD1A"

// const App = () => {
//   const mapContainerRef = useRef(null);

//   // initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       // See style options here: https://docs.mapbox.com/api/maps/#styles
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-104.9876, 39.7405],
//       zoom: 12.5,
//     });

//     // add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

//     // clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return <div className="map-container" ref={mapContainerRef} />;
// };

// export default App;