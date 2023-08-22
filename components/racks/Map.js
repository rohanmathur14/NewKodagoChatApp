import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import From from 'react-bootstrap/Form'



 
const Map  = () => {



return (
    <>
    <div className="MapForm">
        <Form>
            <Form.Group controlId='text-input' className='mb-3'>
                <Form.Control placeholder="Search place..." />
            </Form.Group>
        </Form>
    </div>

    </>
  );
};

export default Map ;
