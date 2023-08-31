import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ImageLoader from "../ImageLoader";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";

import Offcanvas from "react-bootstrap/Offcanvas";

import RacksShowMore from "../racks/RacksShowMore";
import RacksShowMoreEdit from "../racks/RacksShowMoreEdit";

import Modal from "react-bootstrap/Modal";

import DeleteRecord from "../racks/DeleteRecord";
import RacksCommentsList from "../racks//RacksCommentsList";
import RacksAssignment from "../racks/RacksAssignment";
import RacksHistory from "../racks/RacksHistory";
import { formatDateTime } from "../../helper/helper";

const RacksGridView = ({ fileRackRecordDataListings }) => {
  // Show More Sidebar Code Here
  const [rackMoreshow, showMoresetShow] = useState(false);
  const rackShowClose = () => showMoresetShow(false);
  const rackShowMore = () => showMoresetShow(true);

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
      {/* Delete Record code here */}

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
        <div className="">
          <div className="row">
            {fileRackRecordDataListings.total > 0 ? (
              fileRackRecordDataListings?.dbdata?.map((record, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="RacksGridBox RacksGridView mt-4">
                    <div className="RacksGridBoxhead d-flex justify-content-between">
                      <div className="GridBoxheadLeft d-flex align-items-center">
                        <div className="prof-pic position-relative">
                          <ImageLoader
                            src={record.imageLink}
                            quality={100}
                            layout="fill"
                            objectFit="contain"
                            className="position-relative"
                          />
                        </div>
                        <div className="GridUserName ms-2">
                          <h5 className="mt-0">{record.username}</h5>
                          <h6 className="m-0 fw-normal">
                            added on 
                            <span> {formatDateTime(record.created_at)}</span>
                          </h6>
                        </div>
                      </div>
                      <div className="GridBoxheadRight">
                        <Dropdown>
                          <Dropdown.Toggle variant="" className="p-0">
                            <i className="fi-dots-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="my-1">
                            <Dropdown.Item
                              eventKey="1"
                              onClick={handleHistoryShow}
                            >
                              History
                            </Dropdown.Item>
                            <Dropdown.Item
                              eventKey="2"
                              onClick={RacksAssignment}
                            >
                              Assignment
                            </Dropdown.Item>
                            <Dropdown.Item
                              eventKey="3"
                              onClick={handleDeleteRecordShow}
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    {record?.data?.length > 0  && record?.data.slice(0, 2).map((childRecord, childIndex) => (
                    <div className="RacksGridBoxbody" key={'child-'+childIndex}>
                      <div className="RacksGridLine">
                        <h6 className="m-0">{childRecord.field_name}</h6>
                        {/* <h5>28, Jul 2023</h5> */}
                        <h5>{childRecord.d_value}</h5>
                      </div>
                      {/* <div className="RacksGridLine">
                        <h6 className="m-0">Description</h6>
                        <h5>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry printing and typesetting industry
                        </h5>
                      </div> */}
                    </div> ))}

                    <div className="RacksGridBoxBody d-flex justify-content-between">
                      <h5 className="m-0" onClick={handleCommentsListShow}>
                        Show Comments
                      </h5>
                      {record?.data?.length >2 && <h6 className="m-0" onClick={rackShowMore}>
                        Show More
                      </h6>}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-3">
                <p>Record Not Found.</p>
              </div>
            )}
          </div>
        </div>
        {/* Pagination */}
        {/* <div className="RacksListPagination d-flex justify-content-center align-items-center mt-4">
            <Pagination className="">
                <Pagination.Item><i className="fi-chevron-left"></i> Prev </Pagination.Item>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>Next <i className="fi-chevron-right"></i> </Pagination.Item>
            </Pagination>

            

            <Dropdown drop='up' className="ms-2">
                <Dropdown.Toggle variant='outline-secondary bg-transparent py-2 px-0 border-0'>25 per page</Dropdown.Toggle>
                <Dropdown.Menu className='mx-1'>
                    <Dropdown.Item eventKey='1'>25 per page</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>50 per page</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>100 per page</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div> */}

        {/* Show More Here */}

        <Offcanvas
          show={rackMoreshow}
          onHide={rackShowClose}
          placement="end"
          className="ShowMoreOffcanvas"
        >
          <Offcanvas.Header closeButton className="border-bottom d-flex">
            <Offcanvas.Title>Manish Saini</Offcanvas.Title>
            <Link href="#!">
              <a className="me-4">Edit</a>
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <RacksShowMore/> */}

            {/* Racks Show More Edit */}

            <RacksShowMoreEdit />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default RacksGridView;
