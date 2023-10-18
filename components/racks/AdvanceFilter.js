import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

//import Select2 from "react-select2-wrapper";
//import "react-select2-wrapper/css/select2.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Select2Wrapper } from "./Select2Wrapper";

const AdvanceFilter = ({ fileRackAllData }) => {
  //console.log("fileRackAllData------", fileRackAllData);
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
    console.log("Selected Value:", selectedValue);
    // Add your custom logic here to handle the selected value
  };

  return (
    <>
      <div className="AdvanceFilter">
        <Form>
          <Row>
            {fileRackAllData?.data?.sheet_filters?.map((filter, index) => (
              <React.Fragment key={index}>
                {filter.field_type === "created_by" && (
                  <Col lg={6}>
                    <Form.Group controlId="text-input" className="mb-3">
                      <Form.Label>{filter.name}</Form.Label>
                      <Select2Wrapper
                        options={optionsadded}
                        defaultValue="7"
                        onChange={handleSelectChange}
                      />
                    </Form.Group>
                  </Col>
                )}

                {filter.field_type === "date" && (
                  <Col lg={6}>
                    <Form.Group controlId="text-input" className="mb-3">
                      <Form.Label>{filter.name}</Form.Label>
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
                )}
                {filter.field_type === "text" && (
                  <Col lg={6}>
                     <Form.Group controlId="input-small" className="mb-3">
                      <Form.Label className="fs-sm">{filter.name}</Form.Label>
                      <Form.Control size="sm" placeholder={filter.name} />
                    </Form.Group>
                  </Col>
                )}
                {filter.field_type === "number" && (
                  <Col lg={6}>
                     <Form.Group controlId="input-small" className="mb-3">
                      <Form.Label className="fs-sm">{filter.name}</Form.Label>
                      <Form.Control type="number" size="sm" placeholder={filter.name} pattern="[0-9]*" />
                    </Form.Group>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
          <div className="d-flex justify-content-end Filterbtn align-items-center AdvanceFilterbtns pt-3">
            <Button type="submit" variant="primary" className="me-3">
              {" "}
              Search
            </Button>
            <Button type="submit" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdvanceFilter;
