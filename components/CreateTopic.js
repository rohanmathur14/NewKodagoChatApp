import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import ImageLoader from '../components/ImageLoader'
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Topics from '../components/Topics'





const CreateTopic = ({ }) => {

    const [show, setShow] = useState(false)

    const topicFormClose = () => setShow(false)
    const topicForm = () => setShow(true)    
  
  return (
    <>

<div className='CreateTopic'>
    <div className='row justify-content-between align-items-center'>
        <Col lg={10}>
            <h6 className='m-0'>Please Create Chat Topic</h6>
        </Col>
        <Col lg={2}>
            <button className='btn btn-primary' onClick={topicForm}>Create Topic</button>
        </Col>
    </div>
</div>

<Offcanvas show={show} onHide={topicFormClose} placement="end" className='TopicOffcanvas Offcanvaswidth'>
    <Offcanvas.Header closeButton className='border-bottom'>
        <Offcanvas.Title>Create Topic</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className='p-0'>
        
        {/* Topics Form code here */}
        <Topics/>

    </Offcanvas.Body>
</Offcanvas>



    </>
  )
}

export default CreateTopic