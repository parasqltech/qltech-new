import React, { useState, useEffect, useRef } from "react";
import { Container,Image,Row,Col,Button,ListGroup,Form } from 'react-bootstrap';
import $ from "jquery";
import Cookies from 'universal-cookie';
let autoComplete;
const cookies = new Cookies();
const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

export default class Reviews extends React.Component{
constructor(props){
    super(props);
    this.state = {
      places: []
    }
  }


componentDidMount(){



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
     useEffect(() => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyBddDWmrtLkRhg0HqWI6mACm6zSRc66HPI&libraries=places`);
  }, []);
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
