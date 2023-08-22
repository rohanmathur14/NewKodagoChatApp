import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import ImageLoader from '../ImageLoader'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



const DeleteRecord = ({onHide,show}) => {

  return (
    <>
    
    <Modal show={show} size="md" centered  className="AssignementModal">
        <Modal.Header closeButton onHide={onHide}>
            <Modal.Title>Delete Records</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <div className='DeleteImg'>
                <ImageLoader
                    src='/images/deleteicon.png'
                    width={100}
                    height={100}
                    alt='delete icon'
                />
            </div> 
            <div className='DeleteText'>   
                <p>Are you sure to want delete this record?</p>
                <div className='Deletebtn d-flex justify-content-center'>
                    <Button  variant='outline-secondary' className='me-3'>No, Keep it</Button>
                    <Button  variant='translucent-danger'>Yes, Delete!</Button>
                </div>
            </div>    
          </div>
        </Modal.Body>
    </Modal>
      
    </>
  );
};

export default DeleteRecord;
