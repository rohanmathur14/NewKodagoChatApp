import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";

const RacksCommentsList = ({onHide,show}) => {

    return (
        <>

        <Modal show={show} size="lg" centered  className="CommentsModal">
            <Modal.Header closeButton onHide={onHide}>
                <Modal.Title>Comments List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="RacksGridComments">
                <div className="d-flex CommentsBoxLine">
                    <div className="CommentsProfile d-flex align-items-center justify-content-center">
                    <span> S </span>
                    </div>
                    <div className="CommentsText">
                    <div className="CommentsHead d-flex align-items-center">
                        <h4>Shrawan Choudhary</h4>
                        <h6>13 Jul 2023</h6>
                        <h6>02:06 PM</h6>
                    </div>
                    <div className="CommentsBody">
                        <p className="m-0">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard
                        dummy text ever since the 1500s.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="d-flex CommentsBoxLine">
                    <div className="CommentsProfile d-flex align-items-center justify-content-center">
                    <span> S </span>
                    </div>
                    <div className="CommentsText">
                    <div className="CommentsHead d-flex align-items-center">
                        <h4>Shrawan Choudhary</h4>
                        <h6>13 Jul 2023</h6>
                        <h6>02:06 PM</h6>
                    </div>
                    <div className="CommentsBody">
                        <p className="m-0">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard
                        dummy text ever since the 1500s.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="d-flex CommentsBoxLine">
                    <div className="CommentsProfile d-flex align-items-center justify-content-center">
                    <span> S </span>
                    </div>
                    <div className="CommentsText">
                    <div className="CommentsHead d-flex align-items-center">
                        <h4>Shrawan Choudhary</h4>
                        <h6>13 Jul 2023</h6>
                        <h6>02:06 PM</h6>
                    </div>
                    <div className="CommentsBody">
                        <p className="m-0">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard
                        dummy text ever since the 1500s.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="CommentsBoxInput w-100 m-0">
                <Form className="d-flex">
                    <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Add a comment…"
                    />
                    <div className="SendIcon d-flex align-items-center justify-content-center ms-2">
                    <Button type="submit" variant="info">
                        <i className="fi-send"></i>
                    </Button>
                    </div>
                </Form>
                </div>
            </Modal.Footer>
        </Modal>

        

        </>
    );
};    

export default RacksCommentsList;    