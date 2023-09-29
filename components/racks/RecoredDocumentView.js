import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ImageLoader from '../ImageLoader'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const RecoredDocumentView = ({onHide,show}) => {


  return (
    <> 
        <Modal show={show} size="lg" centered  className="AssignementModal">
            <Modal.Header closeButton onHide={onHide}>
                <Modal.Title>Document List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="RackDocumantList p-2 pt-0">
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="RackDocumantBox text-center">
                                <div className="RackDocumantBoxTop">
                                    <img src="/images/docIcon.png" alt=""/>
                                    <h4 className="mb-0">untitled_document.pdf</h4>
                                </div>
                                <div className="DocumantListBottom d-flex justify-content-between">
                                    <a href="/">View</a>
                                    <a href="/"><i className="fi-download"></i></a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="RackDocumantBox text-center">
                                <div className="RackDocumantBoxTop">
                                    <img src="/images/pdfIcon.png" alt=""/>
                                    <h4 className="mb-0">untitled_document.pdf</h4>
                                </div>
                                <div className="DocumantListBottom d-flex justify-content-between">
                                    <a href="/">View</a>
                                    <a href="/"><i className="fi-download"></i></a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="RackDocumantBox text-center">
                                <div className="RackDocumantBoxTop">
                                    <img src="/images/pdfIcon.png" alt=""/>
                                    <h4 className="mb-0">untitled_document.pdf</h4>
                                </div>
                                <div className="DocumantListBottom d-flex justify-content-between">
                                    <a href="/">View</a>
                                    <a href="/"><i className="fi-download"></i></a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="RackDocumantBox text-center">
                                <div className="RackDocumantBoxTop">
                                    <img src="/images/imgIcon.png" alt=""/>
                                    <h4 className="mb-0">untitled_document.png</h4>
                                </div>
                                <div className="DocumantListBottom d-flex justify-content-between">
                                    <a href="/">View</a>
                                    <a href="/"><i className="fi-download"></i></a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="RackDocumantBox text-center">
                                <div className="RackDocumantBoxTop">
                                    <img src="/images/excelIcon.png" alt=""/>
                                    <h4 className="mb-0">untitled_document.xls</h4>
                                </div>
                                <div className="DocumantListBottom d-flex justify-content-between">
                                    <a href="/">View</a>
                                    <a href="/"><i className="fi-download"></i></a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-md-3">
                            <div className="RackDocumantBox text-center">
                                <div className="RackDocumantBoxTop">
                                    <img src="/images/docIcon.png" alt=""/>
                                    <h4 className="mb-0">untitled_document.pdf</h4>
                                </div>
                                <div className="DocumantListBottom d-flex justify-content-between">
                                    <a href="/">View</a>
                                    <a href="/"><i className="fi-download"></i></a>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal> 
    </>
    );

};

export default RecoredDocumentView;