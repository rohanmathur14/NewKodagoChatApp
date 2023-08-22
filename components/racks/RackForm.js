import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import From from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Offcanvas from 'react-bootstrap/Offcanvas'






const RackForm = ({ }) => {

// Tamplate Drag and Move



    

  return (
    <>

<div className='RackTamplate'>
    <Row>
        <Col lg={4}>
            <div className='RackTamplateForm'>
                <div className='RackFormHead d-flex align-items-center justify-content-between'>
                    <h6 className='m-0'>Id col_1</h6>
                    <div className='d-flex'>
                        <Link href="javascript:void(0)">
                            <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip>Move</Tooltip>}
                                    >
                                <a className='RackTamplateIcon  d-flex align-items-center justify-content-center me-2'>
                                    <i className='fi-drag'></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                        <Link href="javascript:void(0)">
                            <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip>Delete Record</Tooltip>}
                                    >
                                <a className='RackTamplateIcon RackTamplateDelete  d-flex align-items-center justify-content-center'>
                                    <i className='fi-trash'></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                    </div>
                </div>
                <div className='RackFormBottom'>
                    <From>
                        {/* Data lable */}
                        <Form.Group controlId='input-small' className='mb-2'>
                            <Form.Label className='fw-normal'>Data lable</Form.Label>
                            <Form.Control size='sm' placeholder='Field Name' />
                        </Form.Group>

                        {/* Data type */}
                        <Form.Group controlId='select-sm' className='mb-2'>
                            <Form.Label className='fw-normal'>Data type</Form.Label>
                            <Form.Select size='sm' defaultValue='default'>
                                <option value='default' disabled>Select Type</option>
                                <option value="text">Text</option>
                                <option value="location">Location</option>
                                <option value="document">Document</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                                <option value="date">Date</option>
                                <option value="signature">Signature</option>
                                <option value="dropdown">Dropdown</option>
                                <option value="number">Number</option>
                                <option value="DFOFR">Data From Other File Rack</option>
                                <option value="autoId">Auto ID</option>
                                <option value="time">Time</option>
                                <option value="userlist">Users List</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Required Option */}

                        <Form.Group className='mb-0'>
                            <Form.Label className='fw-normal'>Required Option</Form.Label>
                            <div className='d-block'>
                                <Form.Check
                                    type='checkbox'
                                    id='check-1'
                                    label='Mandatory'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-2'
                                    label='Highlight'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-3'
                                    label='Lock'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-4'
                                    label='Non-Editable'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-4'
                                    label='Check Duplication'
                                />
                            </div>
                        </Form.Group>

                    </From>
                </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className='RackTamplateForm'>
                <div className='RackFormHead d-flex align-items-center justify-content-between'>
                    <h6 className='m-0'>Id col_2</h6>
                    <div className='d-flex'>
                        <Link href="javascript:void(0)">
                            <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip>Move</Tooltip>}
                                    >
                                <a className='RackTamplateIcon  d-flex align-items-center justify-content-center me-2'>
                                    <i className='fi-drag'></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                        <Link href="javascript:void(0)">
                            <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip>Delete Record</Tooltip>}
                                    >
                                <a className='RackTamplateIcon  d-flex align-items-center justify-content-center'>
                                    <i className='fi-trash'></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                    </div>
                </div>
                <div className='RackFormBottom'>
                    <From>
                        {/* Data lable */}
                        <Form.Group controlId='input-small' className='mb-2'>
                            <Form.Label className='fw-normal'>Data lable</Form.Label>
                            <Form.Control size='sm' placeholder='Field Name' />
                        </Form.Group>

                        {/* Data type */}
                        <Form.Group controlId='select-sm' className='mb-2'>
                            <Form.Label className='fw-normal'>Data type</Form.Label>
                            <Form.Select size='sm' defaultValue='default'>
                                <option value='default' disabled>Select Type</option>
                                <option value="text">Text</option>
                                <option value="location">Location</option>
                                <option value="document">Document</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                                <option value="date">Date</option>
                                <option value="signature">Signature</option>
                                <option value="dropdown">Dropdown</option>
                                <option value="number">Number</option>
                                <option value="DFOFR">Data From Other File Rack</option>
                                <option value="autoId">Auto ID</option>
                                <option value="time">Time</option>
                                <option value="userlist">Users List</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Required Option */}

                        <Form.Group className='mb-0'>
                            <Form.Label className='fw-normal'>Required Option</Form.Label>
                            <div className='d-block'>
                                <Form.Check
                                    type='checkbox'
                                    id='check-1'
                                    label='Mandatory'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-2'
                                    label='Highlight'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-3'
                                    label='Lock'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-4'
                                    label='Non-Editable'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-4'
                                    label='Check Duplication'
                                />
                            </div>
                        </Form.Group>

                    </From>
                </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className='RackTamplateForm'>
                <div className='RackFormHead d-flex align-items-center justify-content-between'>
                    <h6 className='m-0'>Id col_2</h6>
                    <div className='d-flex'>
                        <Link href="javascript:void(0)">
                            <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip>Move</Tooltip>}
                                    >
                                <a className='RackTamplateIcon  d-flex align-items-center justify-content-center me-2'>
                                    <i className='fi-drag'></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                        <Link href="javascript:void(0)">
                            <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip>Delete Record</Tooltip>}
                                    >
                                <a className='RackTamplateIcon  d-flex align-items-center justify-content-center'>
                                    <i className='fi-trash'></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                    </div>
                </div>
                <div className='RackFormBottom'>
                    <From>
                        {/* Data lable */}
                        <Form.Group controlId='input-small' className='mb-2'>
                            <Form.Label className='fw-normal'>Data lable</Form.Label>
                            <Form.Control size='sm' placeholder='Field Name' />
                        </Form.Group>

                        {/* Data type */}
                        <Form.Group controlId='select-sm' className='mb-2'>
                            <Form.Label className='fw-normal'>Data type</Form.Label>
                            <Form.Select size='sm' defaultValue='default'>
                                <option value='default' disabled>Select Type</option>
                                <option value="text">Text</option>
                                <option value="location">Location</option>
                                <option value="document">Document</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                                <option value="date">Date</option>
                                <option value="signature">Signature</option>
                                <option value="dropdown">Dropdown</option>
                                <option value="number">Number</option>
                                <option value="DFOFR">Data From Other File Rack</option>
                                <option value="autoId">Auto ID</option>
                                <option value="time">Time</option>
                                <option value="userlist">Users List</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Required Option */}

                        <Form.Group className='mb-0'>
                            <Form.Label className='fw-normal'>Required Option</Form.Label>
                            <div className='d-block'>
                                <Form.Check
                                    type='checkbox'
                                    id='check-1'
                                    label='Mandatory'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-2'
                                    label='Highlight'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-3'
                                    label='Lock'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-4'
                                    label='Non-Editable'
                                />
                                <Form.Check
                                    type='checkbox'
                                    id='check-4'
                                    label='Check Duplication'
                                />
                            </div>
                        </Form.Group>

                    </From>
                </div>
            </div>
        </Col>
    </Row>
    
</div>

    </>
  )
}

export default RackForm