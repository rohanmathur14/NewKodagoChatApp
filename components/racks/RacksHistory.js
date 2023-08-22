import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import ImageLoader from '../ImageLoader'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const RacksHistory = ({onHide,show}) => {

    return (
        <>

        <Modal show={show} centered size='lg' className="HistoryModal">
            <Modal.Header closeButton onHide={onHide}>
                <Modal.Title>History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="RacksHistoryList">
                    <div className='RacksHistoryLine'>
                        <div className="GridBoxheadLeft d-flex mb-2 pb-1">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2 d-flex align-items-center">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>
                                <h6 className="mb-0 fw-normal ms-2">History on 28, Jul 2023 11:51 AM</h6> 
                            </div>
                        </div>
                        <div className='RacksHistoryDetails'>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>Total Number of bugs</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>60</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>80</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>DETECTED ON DATE</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>02-08-2023</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>03-08-2023</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>PRIORITY</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Medium</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>High</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>SEVERITY</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Medium Risk</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>High Risk</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>TESTING STATUS</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Pending</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>Done</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>ASSIGNED TO</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Manish Saini</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>Shrawan</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>Document</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>8</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>5</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>PRIORITY</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Medium</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>High</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>SEVERITY</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Medium Risk</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>High Risk</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>TESTING STATUS</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Pending</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>Done</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>ASSIGNED TO</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>Manish Saini</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>Shrawan</h6>
                                </div>
                            </div>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>Document</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>8</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>5</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RacksHistoryLine'>
                        <div className="GridBoxheadLeft d-flex mb-2 pb-1">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2 d-flex align-items-center">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>
                                <h6 className="mb-0 fw-normal ms-2">History on 28, Jul 2023 15:51 AM</h6> 
                            </div>
                        </div>
                        <div className='RacksHistoryDetails'>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>Screenshot</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>flower_lion_1920-64c9f948141d6.jpg</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>flower_lion_1920-64c9f948141d5.jpg</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RacksHistoryLine'>
                        <div className="GridBoxheadLeft d-flex mb-2 pb-1">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2 d-flex align-items-center">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>
                                <h6 className="mb-0 fw-normal ms-2">History on 28, Jul 2023 19:51 AM</h6> 
                            </div>
                        </div>
                        <div className='RacksHistoryDetails'>
                            <div className='RacksHistoryDetailsLine'>
                                <h4>COMMENTS</h4>
                                <div className='RacksHistoryData d-flex align-items-center'>
                                    <h6 className='m-0'>After create account successfully but user redirect login screen not a home screen."After OTP verfication"</h6>
                                    <div className='Midarrow'></div>
                                    <h6 className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tellus mi, ac euismod nisi suscipit vitae. Duis vehicula nibh quis felis tempor vulputate.</h6>
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

export default RacksHistory;    