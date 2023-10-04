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
  return (
    <>
      <Modal show={show} size="lg" centered className="AssignementModal">
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title>Images</Modal.Title>
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
                    <img
                      src={file.imageUrl}
                      alt="Square image"
                      layout="fill"
                      objectFit="contain"
                      loading="eager"
                    />
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
                    <img
                      src={file.imageUrl}
                      alt="Square image"
                      layout="fill"
                      objectFit="contain"
                      loading="eager"
                    />
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
