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
import { getDateTime } from "../../helper/helper";

const AdvanceFilter = ({ fileRackAllData }) => {
  const [createdFrom, setCreatedFrom] = useState(new Date());
  const [createdTo, setCreatedTo] = useState(new Date());
  const [filterDate, setCreatedfilterDate] = useState(new Date());
  const [joiningDate, setjoiningDate] = useState(new Date());
  const [filters, setFilters] = useState([]);

  // Select 2 code here
  const optionsadded = [
    { id: "7", text: "Alerts" },
    { id: "8", text: "Badges" },
  ];

  const handleOnChangeFilter = (newFilterObj) => {
    //console.log("Selected newFilterObj:", newFilterObj);

    // Clone the current filters array to a new variable
    let newFilters = [...filters];

    // Check if a filter with the same id already exists
    const index = newFilters.findIndex(
      (filter) => filter.id === newFilterObj.id
    );

    if (index !== -1) {
      // If a filter with the same id exists, remove it
      newFilters.splice(index, 1);
    }

    // Push the new filter object to the array
    newFilters.push(newFilterObj);

    // Update the state with the new filters array
    setFilters(newFilters);
  };

  const submitAdvancedFilterFrm = () => {

  };

  console.log("filters====", filters);
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
                        options={filter.values.map((item) => ({
                          id: item.user_id,
                          text: item.name,
                        }))}
                        defaultValue={filter.values[0].user_id}
                        onChange={(selectedValue) =>
                          handleOnChangeFilter({
                            id: filter.id,
                            value: selectedValue,
                          })
                        }
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
                        onChange={(date) =>
                          handleOnChangeFilter({
                            id: filter.id,
                            value: getDateTime(1, date),
                          })
                        }
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
                      <Form.Control
                        size="sm"
                        placeholder={filter.name}
                        onChange={(e) =>
                          handleOnChangeFilter({
                            id: filter.id,
                            value: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                )}
                {filter.field_type === "number" && (
                  <Col lg={6}>
                    <Form.Group controlId="input-small" className="mb-3">
                      <Form.Label className="fs-sm">{filter.name}</Form.Label>
                      <Form.Control
                        type="number"
                        size="sm"
                        placeholder={filter.name}
                        pattern="[0-9]*"
                        onChange={(e) =>
                          handleOnChangeFilter({
                            id: filter.id,
                            value: e.target.value,
                          })
                        }
                      />
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
            <Button
              type="button"
              variant="secondary"
              onClick={submitAdvancedFilterFrm}
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdvanceFilter;
