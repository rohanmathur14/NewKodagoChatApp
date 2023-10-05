import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ImageLoader from "../ImageLoader";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RecoredImageView = ({ onHide, show, filesData }) => {
  console.log("filesData--------", filesData);
  return (
    <>
      <Modal show={show} size="lg" centered className="AssignementModal">
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title>{filesData[0].file_type === "video" ? "Video" : filesData[0].file_type === "signature" ? 'Signature' : filesData[0].file_type === "image" ? 'Image' : filesData[0].file_type === "document" ? "Document" :''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {filesData.length > 1 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={16}
              loop
              grabCursor
              className="swiper-nav-onhover swiper-pagination-light"
            >
              {filesData.map((file, index) => (
                <SwiperSlide className="d-flex" key={index}>
                  <div className="ShowRecordImg position-relative mx-auto">
                    {file.file_type === "image" || file.file_type ==="signature" ? (
                      <img
                        src={file.mainUrl}
                        alt="Square image"
                        layout="fill"
                        objectFit="contain"
                        loading="eager"
                      />
                    ) : file.file_type === "video" ? (
                      <video
                        controls // Add controls to the video player
                        autoPlay 
                        muted                         
                        width="100%"
                        height="100%"
                      >
                        <source src={file.mainUrl} type="video/mp4" />{" "}
                        {/* Provide the video URL */}
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Handle other media types if needed
                      <p>Unsupported media type</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              spaceBetween={16}
              grabCursor
              className="swiper-nav-onhover swiper-pagination-light"
            >
              {filesData.map((file, index) => (
                <SwiperSlide className="d-flex" key={index}>
                  <div className="ShowRecordImg position-relative mx-auto">
                    {file.file_type === "image" || file.file_type ==="signature" ? (
                      <img
                        src={file.mainUrl}
                        alt="Square image"
                        layout="fill"
                        objectFit="contain"
                        loading="eager"
                      />
                    ) : file.file_type === "video" ? (
                      <video
                        controls // Add controls to the video player
                        autoPlay 
                        muted                         
                        width="100%"
                        height="100%"
                      >
                        <source src={file.mainUrl} type="video/mp4" />{" "}
                        {/* Provide the video URL */}
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Handle other media types if needed
                      <p>Unsupported media type</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecoredImageView;
