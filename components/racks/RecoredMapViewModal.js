import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ImageLoader from "../ImageLoader";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecoredMapView from "../racks/RecoredMapView";

const RecoredMapViewModal = ({ onHide, show, latLongs }) => {
  return (
    <>
      <Modal show={show} size="lg" centered className="AssignementModal">
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="RackDocumantList p-2 pt-0">
            <div className="row justify-content-center">
              <RecoredMapView
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAopcumfPIKkHn4Ym1z2AeU0RDEAAY0ZXo&v=3.exp&libraries=geometry,drawing,places`} // Replace YOUR_API_KEY with your actual Google Maps API key
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                latLongs={latLongs}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecoredMapViewModal;
