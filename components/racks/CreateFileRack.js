import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import ImageLoader from '../ImageLoader'
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import From from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Offcanvas from 'react-bootstrap/Offcanvas'
import RackForm from '../racks/RackForm';





const CreateFileRack = ({ }) => {
    
// Create File Racks 

const [show, setShow] = useState(false)

const rackformClose = () => setShow(false)
const rackformShow = () => setShow(true)



  return (
    <>

<div className='TopicsHead'>
    <div className='AddFileRack'>
        <div className='text-center AddFileRackIn'>
            <div className='addfilesi'>
                <ImageLoader
                    src='/images/empty-racks.svg'
                    width={150}
                    height={137}
                    alt='Square image'
                />
            </div>
            <p className='fs-sm'>File Racks Not Found!</p>
            {/* <div className='AddFileRackBtn text-center mt-4'>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Button variant='primary'  onClick={rackformShow}>Custom file rack</Button>
                    <Button variant='primary' className='ms-2'>Choose template</Button>
                    <Button variant='primary' className='mt-2'>File Import</Button>
                </div>
            </div> */}
        </div>
    </div>
</div>


{/* create File Racks Add Form */}

<Offcanvas show={show} onHide={rackformClose} placement='end' className='Offcanvaswidth OffcanvaswidthRacks'>
    <Offcanvas.Header closeButton className='border-bottom'>
        <Offcanvas.Title>Create File Rack </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className='p-0' >
        
        <div className='RackForm' style={{display:'block'}}>
            <div className='RackFormTop'>
                <Row className='align-items-center'>
                    <Col md={8}>
                        <Form.Group controlId='text-input' className='mb-0'>
                            <Form.Control placeholder='Please Type File Rack Name' />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                    <div className='ActionButton text-end border-0' >
                        <Button className='me-2' type='submit' variant='primary'>Create</Button>
                        <Button className='Cancel-btn me-0' type='submit' variant='outline-primary'>Add More</Button>
                    </div> 
                    </Col>
                </Row>
            </div>
            <div className='RackFormBody'>
                {/* Rack Form */}
                <RackForm/>
            </div>
            
        </div>





    </Offcanvas.Body>
</Offcanvas>

    </>
  )
}

export default CreateFileRack