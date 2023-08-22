import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import ImageLoader from '../ImageLoader'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const RacksAssignment = ({ onHide, show }) => {
  const [isChecked, setIsChecked] = useState([false, false]);

  const handleCheckboxChange = (index) => {
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !newCheckedState[index];
    setIsChecked(newCheckedState);
  };

  
  return (
    <>

    <Modal show={show} size="md" centered className="AssignementModal">
        <Modal.Header closeButton onHide={onHide}>
            <Modal.Title>Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="RacksAssignmentList d-flex flex-wrap justify-content-center">
              <div className='RacksAssignmentListLine d-flex align-items-center mx-3'>
                <div className={`RacksAssignmentBox ${isChecked[0] ? 'RacksAssignmentBox-border' : ''}`}>
                  <input
                    type='checkbox'
                    id='check-1'
                    checked={isChecked[0]}
                    onChange={() => handleCheckboxChange(0)}
                  />
                  <label htmlFor="check-1" className='ps-3'>
                      <div className="GridBoxheadLeft d-flex align-items-center">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>   
                                <h6 className="m-0 fw-normal">Group Admin</h6> 
                            </div>
                        </div>
                  </label>
                </div>
              </div>

              <div className='RacksAssignmentListLine d-flex align-items-center mx-3'>
                <div className={`RacksAssignmentBox ${isChecked[1] ? 'RacksAssignmentBox-border' : ''}`}>
                  <input
                    type='checkbox'
                    id='check-2'
                    checked={isChecked[1]}
                    onChange={() => handleCheckboxChange(1)}
                  />
                  <label htmlFor="check-2" className='ps-3'>
                      <div className="GridBoxheadLeft d-flex align-items-center">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>   
                                <h6 className="m-0 fw-normal">Group Mamber</h6> 
                            </div>
                        </div>
                  </label>
                </div>
              </div>
              
              <div className='RacksAssignmentListLine d-flex align-items-center mx-3'>
                <div className={`RacksAssignmentBox ${isChecked[2] ? 'RacksAssignmentBox-border' : ''}`}>
                  <input
                    type='checkbox'
                    id='check-3'
                    checked={isChecked[2]}
                    onChange={() => handleCheckboxChange(2)}
                  />
                  <label htmlFor="check-3" className='ps-3'>
                      <div className="GridBoxheadLeft d-flex align-items-center">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>   
                                <h6 className="m-0 fw-normal">Group Mamber</h6> 
                            </div>
                        </div>
                  </label>
                </div>
              </div>

              <div className='RacksAssignmentListLine d-flex align-items-center mx-3'>
                <div className={`RacksAssignmentBox ${isChecked[3] ? 'RacksAssignmentBox-border' : ''}`}>
                  <input
                    type='checkbox'
                    id='check-4'
                    checked={isChecked[3]}
                    onChange={() => handleCheckboxChange(3)}
                  />
                  <label htmlFor="check-4" className='ps-3'>
                      <div className="GridBoxheadLeft d-flex align-items-center">
                            <div className="prof-pic position-relative">
                                <ImageLoader
                                src='/images/avtarimg-eight.jpg'
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                className="position-relative"
                            />
                            </div>
                            <div className="GridUserName ms-2">
                                <h5 className="mt-0 mb-0">Manish Saini</h5>   
                                <h6 className="m-0 fw-normal">Group Mamber</h6> 
                            </div>
                        </div>
                  </label>
                </div>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button className="fw-normal" variant='secondary' size='sm' onHide={onHide}>Close</Button>
            <Button className="fw-normal" variant='primary' size='sm' onHide={onHide}>Save </Button>
        </Modal.Footer>

    </Modal>

      
    </>
  );
};

export default RacksAssignment;
