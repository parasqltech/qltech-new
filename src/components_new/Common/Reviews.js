import React, { useState, useEffect, useRef } from "react";
import { Container,Image,Row,Col,Button,ListGroup,Form } from 'react-bootstrap';
import $ from "jquery";
import Cookies from 'universal-cookie';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
let autoComplete;
const cookies = new Cookies();

export default class Reviews extends React.Component{
constructor(props){
    super(props);
    this.state = {
      places: []
    }
  }


componentDidMount(){
 const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBddDWmrtLkRhg0HqWI6mACm6zSRc66HPI"
  })


let map = new window.google.maps.Map(document.getElementById("map"), {
    center: {lat:40.7575285, lng: -73.9884469}
  });

  let service = new window.google.maps.places.PlacesService(map);

service.getDetails({
    placeId: 'ChIJAUKRDWz2wokRxngAavG2TD8'
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(place.reviews);
      // Intended behavior is to set this.setState({places.place.reviews})
    }
  })
}
render(){
const { places } = this.state;
return(
  <div>
    <p>
      {
        places.map((place) => {
          return <p>{place.author_name}{place.rating}{place.text}</p>
        })
      }
    </p>
  </div>
  )
 }
}
