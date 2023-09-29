import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ImageLoader from '../ImageLoader'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';



const RecoredMapView = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 0, lng: 0 }}>
        <Marker
          position={{ lat: 0, lng: 0 }}
          icon={{
            url: '/images/custom-marker.png', // Replace with the path to your custom marker image
            scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
          }}
        />
      </GoogleMap>
    ))
  );

  export default RecoredMapView;