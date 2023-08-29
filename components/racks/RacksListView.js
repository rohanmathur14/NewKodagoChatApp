import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ImageLoader from "../ImageLoader";

// import Card from 'react-bootstrap/Card'
// import GalleryItem from '../GalleryItem'
// import LightGallery from 'lightgallery/react'
// import lgZoom from 'lightgallery/plugins/zoom'
// import lgFullScreen from 'lightgallery/plugins/fullscreen'
// import 'lightgallery/css/lightgallery.css'
// import 'lightgallery/css/lg-zoom.css'
// import 'lightgallery/css/lg-fullscreen.css'

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";

import Offcanvas from "react-bootstrap/Offcanvas";
import DeleteRecord from "../racks/DeleteRecord";
import RacksCommentsList from "../racks//RacksCommentsList";
import RacksAssignment from "../racks/RacksAssignment";
import RacksHistory from "../racks/RacksHistory";
import Form from "react-bootstrap/Form";

const RacksListView = ({
  fileRackRecordTheadListings,
  fileRackRecordDataListings,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("Jenny"); // Set the initial value of the username

    console.log('fileRackRecordDataListings---',fileRackRecordDataListings)

  // Function to handle the click event on the h2 element
  const handleUsernameClick = () => {
    setIsEditing(true);
  };

  // Function to handle changes to the username input
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to handle blur event (when user clicks outside the input)
  const handleUsernameBlur = () => {
    setIsEditing(false);
  };

  // Data Save Change

  const [datasaveshow, dataSavesetShow] = useState(false);
  const dataSaveClose = () => dataSavesetShow(false);
  const dataSaveShow = () => {
    dataSavesetShow(true);
  };

  // Show All Comments Modal Code Here
  const [commentsListshow, commentssetShow] = useState(false);
  const handleCommentsListClose = () => commentssetShow(false);
  const handleCommentsListShow = () => commentssetShow(true);

  // Delete record Code Here
  const [deleterecordshow, deleterecordsetShow] = useState(false);
  const handleDeleteRecordShow = () => {
    deleterecordsetShow(true);
  };
  const handleDeleteRecordClose = () => {
    deleterecordsetShow(false);
  };

  // Assignement Modal Code Here
  const [assignListshow, assignementsetShow] = useState(false);
  const handleAssignListsClose = () => assignementsetShow(false);
  const handleAssignListsShow = () => assignementsetShow(true);

  // History Modal Code Here
  const [historyshow, historysetShow] = useState(false);
  const handleHistoryClose = () => historysetShow(false);
  const handleHistoryShow = () => historysetShow(true);

  return (
    <>
      {/* Delete record  */}

      <DeleteRecord
        show={deleterecordshow}
        onHide={handleDeleteRecordClose}
        onSwap={handleDeleteRecordShow}
      />

      {/* Show All Comments */}

      <RacksCommentsList
        show={commentsListshow}
        onHide={handleCommentsListClose}
        onSwap={handleCommentsListShow}
      />

      {/* Racks Assignment  */}

      <RacksAssignment
        show={assignListshow}
        onHide={handleAssignListsClose}
        onSwap={handleAssignListsShow}
      />

      {/* History */}

      <RacksHistory
        show={historyshow}
        onHide={handleHistoryClose}
        onSwap={handleHistoryShow}
      />

      <div className="RacksListMains">
        <div className="RacksListView">
          <Table striped bordered hover responsive className="RacksListTable">
            <thead>
              <tr>
                {fileRackRecordTheadListings.length>0 && <th key={'firstKey'}></th>}
                {fileRackRecordTheadListings.map((field, index) => (
                 
                  <th key={index}>{field.name}</th>
                ))}

                {/* <th>Create at</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Live Image</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Out time</th>
                    <th>Out time Photo</th>
                    <th>Task Performed Today</th>
                    <th>Date Of Joining	</th>
                    <th>Location</th>
                    <th>Attendance Approval</th> */}
              </tr>
            </thead>
            <tbody>
              {fileRackRecordDataListings.total > 0 ? (
                fileRackRecordDataListings?.dbdata?.map((record, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center px-2 TableDiv">
                      <div className="prof-pic position-relative">
                        <ImageLoader
                          src="/images/avtarimg-eight.jpg"
                          quality={100}
                          layout="fill"
                          objectFit="contain"
                          className="position-relative"
                        />
                      </div>
                      <div className="username ms-2">
                        <div className="Changetext position-relative">
                          <div className="UsernameDetails ">
                            <h2 className="mb-0">{record.username}</h2>
                            <div className="UserAction">
                              {/* Delete */}
                              <Link href="#!">
                                <a onClick={handleDeleteRecordShow}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Delete</Tooltip>}
                                  >
                                    <i className="fi-trash"></i>
                                  </OverlayTrigger>
                                </a>
                              </Link>

                              {/* Comments */}
                              <Link href="#!">
                                <a onClick={handleCommentsListShow}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Comments</Tooltip>}
                                  >
                                    <i className="fi-messenger"></i>
                                  </OverlayTrigger>
                                </a>
                              </Link>

                              {/* Group member */}
                              <Link href="#!">
                                <a onClick={handleAssignListsShow}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Assign member</Tooltip>}
                                  >
                                    <i className="fi-groupteam"></i>
                                  </OverlayTrigger>
                                </a>
                              </Link>

                              {/* History */}
                              <Link href="#!">
                                <a onClick={handleHistoryShow}>
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>History</Tooltip>}
                                  >
                                    <i className="fi-history"></i>
                                  </OverlayTrigger>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  { record?.data.map((childRecord, childIndex) => (
                  <td key={childIndex}>
                    <div className="d-flex align-items-center px-2 TableDiv">
                      <div className="Changetext">
                        <span>{childRecord.d_value}</span>
                      </div>
                    </div>
                  </td>
                  ))}
                </tr>))
              ) : (
                <tr>
                  <td style={{textAlign:"center"}} colSpan={fileRackRecordTheadListings.length}>Record Not found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="RacksListPagination d-flex justify-content-center align-items-center mt-3">
          <Pagination className="">
            <Pagination.Item>
              <i className="fi-chevron-left"></i> Prev{" "}
            </Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>
              Next <i className="fi-chevron-right"></i>{" "}
            </Pagination.Item>
          </Pagination>

          {/* Page Data Count */}

          <Dropdown drop="up" className="ms-2">
            <Dropdown.Toggle variant="outline-secondary bg-transparent py-2 px-0 border-0">
              25 per page
            </Dropdown.Toggle>
            <Dropdown.Menu className="mx-1">
              <Dropdown.Item eventKey="1">25 per page</Dropdown.Item>
              <Dropdown.Item eventKey="2">50 per page</Dropdown.Item>
              <Dropdown.Item eventKey="3">100 per page</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Data Save Change  */}

        <Offcanvas
          show={datasaveshow}
          placement="bottom"
          className="SaveChangeCanvas"
        >
          <Offcanvas.Body closeButton>
            <div className="DataSaveClose d-flex align-items-center">
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Button
                className="ms-3"
                variant="outline-primary"
                onClick={dataSaveClose}
              >
                Cancel
              </Button>
              <h5 className="my-0 ms-3">1 unsaved change</h5>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default RacksListView;
