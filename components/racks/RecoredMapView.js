import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ImageLoader from "../ImageLoader";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  latLongs,
} from "react-google-maps";

const RecoredMapView = withScriptjs(
  withGoogleMap((props) => (
    // <GoogleMap defaultZoom={8} defaultCenter={{ lat: 26.9059, lng: 75.7727 }}>       
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.latLongs[0].latitude, lng: props.latLongs[0].longitude }}>
      {/* Map over the latLongs prop to create markers */}
      {props.latLongs.map((latLong, index) => (
        <Marker
          key={index}
          position={{ lat: latLong.latitude, lng: latLong.longitude }}
          icon={{
            url: "/images/custom-marker.png",
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}
    </GoogleMap>
  ))
);

export default RecoredMapView;
