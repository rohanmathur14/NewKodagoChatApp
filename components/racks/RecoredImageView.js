import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ImageLoader from '../ImageLoader'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const RecoredImageView = ({onHide,show}) => {


  return (
    <> 
        <Modal show={show} size="lg" centered  className="AssignementModal">
            <Modal.Header closeButton onHide={onHide}>
                <Modal.Title>Imgaes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{clickable: true}}
                    spaceBetween={16}
                    loop
                    grabCursor
                    className='swiper-nav-onhover swiper-pagination-light'
                    >
                    <SwiperSlide className='d-flex'>
                        <div className="ShowRecordImg position-relative mx-auto">
                            <img
                                src="/images/croppedimg.png"
                                alt="Square image"
                                layout="fill"
                                object-fit= 'contain'
                                loading="eager"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Modal.Body>
        </Modal> 
    </>
    );

};

export default RecoredImageView;