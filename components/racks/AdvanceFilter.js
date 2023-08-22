import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

import Select2 from "react-select2-wrapper";
import 'react-select2-wrapper/css/select2.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {Select2Wrapper} from './Select2Wrapper'

const AdvanceFilter = () => {

  const [createdFrom, setCreatedFrom] = useState(new Date());
  const [createdTo, setCreatedTo] = useState(new Date());
  const [filterDate, setCreatedfilterDate] = useState(new Date());
  const [joiningDate, setjoiningDate] = useState(new Date());

// Select 2 code here
const optionsadded = [
  { id: "7", text: "Alerts" },
  { id: "8", text: "Badges" },
];

const handleSelectChange = (selectedValue) => {
  console.log('Selected Value:', selectedValue);
  // Add your custom logic here to handle the selected value
};  



  return (
    <>
      <div className='AdvanceFilter'>
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Added By</Form.Label>
                <Select2Wrapper
                    options={optionsadded}
                    defaultValue="7"
                    onChange={handleSelectChange}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Created From</Form.Label>
                <DatePicker
                  selected={createdFrom}
                  onChange={(date) => setCreatedFrom(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  showYearDropdown
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Created To</Form.Label>
                <DatePicker
                  selected={createdTo}
                  onChange={(date) => setCreatedTo(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  showYearDropdown
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Date</Form.Label>
                <DatePicker
                  selected={filterDate}
                  onChange={(date) => setCreatedfilterDate(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  showYearDropdown
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Name</Form.Label>
                {/* <Select2
                  className="form-control"
                  defaultValue="1"
                  options={options4}
                  data={[
                    { id: "15", text: "Forms" },
                    { id: "16", text: "Modals" },
                  ]}
                  onChange={(event) => setAddedBy(event.target.value)}
                /> */}
              </Form.Group>
            </Col>
            <Col lg={6}>
                <Form.Group controlId='input-small' className='mb-3'>
                    <Form.Label className='fs-sm'>Department</Form.Label>
                    <Form.Control size='sm' placeholder='Department' />
                </Form.Group>
            </Col>
            <Col lg={6}>
                <Form.Group controlId='input-small' className='mb-3'>
                    <Form.Label className='fs-sm'>Designation</Form.Label>
                    <Form.Control size='sm' placeholder='Designation' />
                </Form.Group>
            </Col>
            <Col lg={6}>
                <Form.Group controlId='input-small' className='mb-3'>
                    <Form.Label className='fs-sm'>Task Performed Today</Form.Label>
                    <Form.Control size='sm' placeholder='Task Performed Today' />
                </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Date Of Joining</Form.Label>
                <DatePicker
                  selected={joiningDate}
                  onChange={(date) => setjoiningDate(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  showYearDropdown
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
                <Form.Group controlId='input-small' className='mb-3'>
                    <Form.Label className='fs-sm'>Location</Form.Label>
                    <Form.Control size='sm' placeholder='Location' />
                </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId='text-input' className='mb-3'>
                <Form.Label>Attendance Approval</Form.Label>
                {/* <Select2
                  className="form-control"
                  defaultValue="1"
                  options={options5}
                  data={[
                    { id: "1", text: "Alerts" },
                    { id: "2", text: "Badges" },
                    { id: "3", text: "Buttons" },
                    { id: "4", text: "Cards" },
                    { id: "5", text: "Forms" },
                    { id: "6", text: "Modals" },
                  ]}
                  onChange={(event) => setAddedBy(event.target.value)}
                /> */}
              </Form.Group>
            </Col>
          </Row>
            <div className="d-flex justify-content-end Filterbtn align-items-center AdvanceFilterbtns pt-3">
                <Button type="submit" variant='primary' className="me-3"> Search</Button>
                <Button type="submit" variant='secondary'>Reset</Button>
            </div>
        </Form>
      </div>
    </>
  );
};

export default AdvanceFilter;
