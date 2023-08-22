import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col, Modal, Row } from "react-bootstrap";
import ImageLoader from '../ImageLoader'

import {Select2Wrapper} from './Select2Wrapper';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import SignatureCanvas from './Signature'
import Map from './Map'

import TimePickers from './TimePickers'


 
const RacksShowMoreEdit = () => {

// Select 2 code here
const options1 = [
{ id: "1", text: "Functionality" },
{ id: "2", text: "Usability" },
{ id: "3", text: "UI" },
{ id: "4", text: "Suggestions" },
];

// options 2
const options2 = [
{ id: "high", text: "High" },
{ id: "medium", text: "Medium" },
{ id: "low", text: "Low" },
];

// options 3
const options3 = [
{ id: "highrisk", text: "High Risk" },
{ id: "mediumrisk", text: "Medium Risk" },
{ id: "lowrisk", text: "Low Risk" },
];

// options 4
const options4 = [
{ id: "new", text: "New" },
{ id: "pending", text: "Pending" },
{ id: "reopen", text: "Reopen" },
{ id: "progress", text: "In progress" },
{ id: "done", text: "Done" },
];

const handleSelectChange = (selectedValue) => {
    console.log('Selected Value:', selectedValue);
};

// Date

const [createdFrom, setCreatedFrom] = useState(new Date());
const [createdTo, setCreatedTo] = useState(new Date());
const [filterDate, setCreatedfilterDate] = useState(new Date());
const [joiningDate, setjoiningDate] = useState(new Date());

// Row add and delete
const [rows, setRows] = useState(1);
const handleAddRow = () => {
  setRows((prevRows) => prevRows + 1);
};
const handleRemoveRow = () => {
  if (rows > 1) {
    setRows((prevRows) => prevRows - 1);
  }
};

// Caption Show Modal
const [show, setShow] = useState(false)
const captionClose = () => setShow(false)
const captionShow = () => setShow(true)

// Edit Signature Show Modal
const [editSignatureshow, signaturesetShow] = useState(false)
const editSignatureClose = () => signaturesetShow(false)
const EditSignature = () => signaturesetShow(true)

// Edit Map Show Modal
const [editMapshow, mapsetShow] = useState(false)
const editMapClose = () => mapsetShow(false)
const Editmap = () => mapsetShow(true)


  return (
    <>

    <div className="RacksShowRight RacksShowEdit">
        <Form>
            <Form.Group controlId='textarea-input' className='mb-2'>
                <Form.Label>Text</Form.Label>
                <Form.Control className="TextareaSno" placeholder='Normal input placeholder'  as='textarea' />
            </Form.Group>
            <Form.Group controlId='textarea-input' className='mb-2'>
                <Form.Label>DEFECT ID</Form.Label>
                <Form.Control className="TextareaSno" placeholder='Type here'  as='textarea' />
            </Form.Group>
            <Form.Group controlId='select-input' className='mb-2'>
                <Form.Label>BUG TYPE</Form.Label>
                <Select2Wrapper
                    options={options1}
                    defaultValue="1"
                    onChange={handleSelectChange}
                />
            </Form.Group>
            <Form.Group controlId='textarea-input' className='mb-2'>
                <Form.Label>DEFECT SUMMARY / DESCRIPTION</Form.Label>
                <Form.Control rows={2} placeholder='Type here'  as='textarea' />
            </Form.Group>
            <Form.Group controlId='select-input' className='mb-2'>
                <Form.Label>PRIORITY</Form.Label>
                <Select2Wrapper
                    options={options2}
                    defaultValue="high"
                    onChange={handleSelectChange}
                />
            </Form.Group>
            <Form.Group controlId='select-input' className='mb-2'>
                <Form.Label>SEVERITY</Form.Label>
                <Select2Wrapper
                    options={options3}
                    defaultValue="highrisk"
                    onChange={handleSelectChange}
                />
            </Form.Group>
            <Form.Group controlId='select-input' className='mb-2'>
                <Form.Label>TESTING STATUS</Form.Label>
                <Select2Wrapper
                    options={options4}
                    defaultValue="new"
                    onChange={handleSelectChange}
                />
            </Form.Group>
            <Form.Group controlId='select-input' className='mb-2'>
                <Form.Label>DETECTED ON DATE</Form.Label>
                <DatePicker
                  selected={createdFrom}
                  onChange={(date) => setCreatedFrom(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  showYearDropdown
                  className="form-control"
                />
            </Form.Group>
            <Form.Group controlId='file-input' className=''>
                <Form.Label>Screenshot</Form.Label>
                {[...Array(rows)].map((_, index) => (
                <Row key={index} className='mb-2'>
                    <Col lg={10}>
                    <Form.Control type='file' />
                        <Form.Text id='fileHelpBlock'>
                            <div className='Formtext d-flex justify-content-between mt-1'>
                            <span>(Only jpg, jpeg, png and gif images allowed)</span>
                            <Link href='#!'>
                                <a onClick={captionShow}>Captions</a>
                            </Link>
                            </div>
                        </Form.Text>
                    </Col>
                    <Col lg={2}>
                    {index === rows - 1 ? (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Add More</Tooltip>}>
                        <Button size='xs' variant='success btn-icon' className='mt-1' onClick={handleAddRow}>
                            <i className='fi-plus'></i>
                        </Button>
                        </OverlayTrigger>
                    ) : (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Remove</Tooltip>}>
                        <Button
                            size='xs'
                            variant='success btn-icon'
                            className='mt-1'
                            onClick={handleRemoveRow}
                        >
                            <i className='fi-minus'></i>
                        </Button>
                        </OverlayTrigger>
                    )}
                    </Col>
                </Row>
                ))}
                
            </Form.Group>
            <Form.Group controlId='file-input' className=''>
                <Form.Label>Video</Form.Label>
                {[...Array(rows)].map((_, index) => (
                <Row key={index} className='mb-2'>
                    <Col lg={10}>
                    <Form.Control type='file' />
                        <Form.Text id='fileHelpBlock'>
                            <div className='Formtext d-flex justify-content-between mt-1'>
                                <span>(Only mp4, 3gp, wmv format allowed)</span>
                            </div>
                        </Form.Text>
                    </Col>
                    <Col lg={2}>
                    {index === rows - 1 ? (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Add More</Tooltip>}>
                        <Button size='xs' variant='success btn-icon' className='mt-1' onClick={handleAddRow}>
                            <i className='fi-plus'></i>
                        </Button>
                        </OverlayTrigger>
                    ) : (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Remove</Tooltip>}>
                        <Button
                            size='xs'
                            variant='success btn-icon'
                            className='mt-1'
                            onClick={handleRemoveRow}
                        >
                            <i className='fi-minus'></i>
                        </Button>
                        </OverlayTrigger>
                    )}
                    </Col>
                </Row>
                ))}
                
            </Form.Group>
            <Form.Group controlId='file-input' className='mb-2 EditSignature'>
                <Form.Label>Signature</Form.Label>
                <h6 onClick={EditSignature}>Edit Signature</h6>
            </Form.Group>
            <Form.Group controlId='file-input' className='mb-2 EditSignature'>
                <Form.Label>Project Location</Form.Label>
                <h6 onClick={Editmap}>Map</h6>
            </Form.Group>
            <Form.Group className='mb-2 EditSignature'>
                <Form.Label>Check-Out</Form.Label>
                <TimePickers />
            </Form.Group>
        </Form>

    </div>

{/* Caption Modal */}

<Modal centered show={show} onHide={captionClose} className="CaptionModal">
    <Modal.Header closeButton>
        <Modal.Title>Caption</Modal.Title>
    </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId='textarea-input'>
                    <Form.Control as='textarea' rows={5} placeholder="Please type caption here" />
                </Form.Group>                            
            </Form>
        </Modal.Body>
    <Modal.Footer>
        <Button variant='primary' size='sm' onClick={captionClose}>
            Save
        </Button>
        <Button variant='secondary' size='sm' onClick={captionClose}>
            Close
        </Button>
    </Modal.Footer>
</Modal>

{/* Edit Signature Modal */}

<Modal centered show={editSignatureshow} onHide={editSignatureClose} className="CaptionModal">
    <Modal.Header closeButton>
        <Modal.Title>Signature</Modal.Title>
    </Modal.Header>
        <Modal.Body>
            <SignatureCanvas penColor='string' default='#000'/>
        </Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' size='sm'>
            Clear
        </Button>
        <Button variant='outline-info' size='sm'>
            Undo
        </Button>
        <Button variant='primary' size='sm' onClick={editSignatureClose}>
            Save
        </Button>
    </Modal.Footer>
</Modal>

{/* Edit Map Modal */}

<Modal size="lg" centered show={editMapshow} onHide={editMapClose} className="CaptionModal">
    <Modal.Header closeButton>
        <Modal.Title>Map</Modal.Title>
    </Modal.Header>
        <Modal.Body>
            {/* map */}
            <Map/>
        </Modal.Body>
    <Modal.Footer>
        <Button variant='primary' size='sm' onClick={editMapClose}>
            Save
        </Button>
        <Button variant='secondary' size='sm' onClick={editMapClose}>
            Close
        </Button>
    </Modal.Footer>
</Modal>


    </>
  );
};

export default RacksShowMoreEdit;
