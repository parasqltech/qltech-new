import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_ratings_total: 0,
      rating: 0
    };
  }

  render() {
  const containerStyle = {
  width: '4px',
  height: '4px'
};

const center = {lat:40.7575285, lng: -73.9884469};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBddDWmrtLkRhg0HqWI6mACm6zSRc66HPI",
    libraries: ["places"]
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    


  let service = new window.google.maps.places.PlacesService(map);

service.getDetails({
    placeId: 'ChIJAUKRDWz2wokRxngAavG2TD8'
  }, function(place, status) {
    console.log(place);
  console.log(status);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(place.user_ratings_total);
       console.log(place.rating);
      this.setState({ user_ratings_total: place.user_ratings_total });
      this.setState({ rating: place.rating });
      
      
    }
  })
    
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

    return (
      <div>
        {(isLoaded) ? (<>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
	  <p>{}</p><p></p>
      </>) : ("")}
      </div>
    );
  }
}
