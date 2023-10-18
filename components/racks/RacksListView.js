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
import RacksCommentsList from "../racks/RacksCommentsList";
import RacksAssignment from "../racks/RacksAssignment";
import RacksHistory from "../racks/RacksHistory";
import RecoredImageView from "../racks/RecoredImageView";
import RecoredDocumentView from "../racks/RecoredDocumentView";
//import RecoredMapView from "../racks/RecoredMapView";
import RecoredMapViewModal from "../racks/RecoredMapViewModal";
import Form from "react-bootstrap/Form";
import { useFileRackContext } from "../../components/FileRackContext";

const RacksListView = ({ fileRackAllData }) => {
  const { sheetId, groupId, userId, userToken } = useFileRackContext();

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("Jenny"); // Set the initial value of the username
  const [fileRackRecordTheadListings, setFileRackRecordTheadListings] =
    useState(fileRackAllData?.data?.sheetFields || []);
  const [fileRackRecordDataListings, setFileRackRecordDataListings] = useState(
    fileRackAllData?.data?.sheetData || []
  );
  // console.log('fileRackRecordDataListings---',fileRackRecordDataListings)

  //define the pagination variable
  const [startRecord, setStartRecord] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [totalRecord, setTotalRecord] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
  //files data variable
  const [filesData, setFilesData] = useState();
  // Assignement Modal Code Here
  const [assignListshow, assignementsetShow] = useState(false);
  const handleAssignListsClose = () => assignementsetShow(false);
  const handleAssignListsShow = () => assignementsetShow(true);

  // History Modal Code Here
  const [historyshow, historysetShow] = useState(false);
  const handleHistoryClose = () => historysetShow(false);
  const handleHistoryShow = () => historysetShow(true);

  // Images Modal Code Here
  const [imgshowpopup, setimgshowpopup] = useState(false);
  const handleImgPopupShow = (files_data) => {
    setFilesData(files_data);
    setimgshowpopup(true);
  };
  const handleImgPopupShowClose = () => {
    setimgshowpopup(false);
  };

  // Document Modal Code Here
  const [docshowpopup, setdocshowpopup] = useState(false);
  const handleDocPopupShow = (files_data) => {
    setFilesData(files_data);
    setdocshowpopup(true);
  };
  const handleDocPopupShowClose = () => {
    setdocshowpopup(false);
  };

  // Document Modal Code Here
  const [mapshowpopup, setmapshowpopup] = useState(false);
  const handleMapPopupShow = (fileRackLatLongs) => {
    setmapshowpopup(true);
    setFileRackLatLongs(fileRackLatLongs);
  };
  const handleMapPopupShowClose = () => {
    setmapshowpopup(false);
  };

  const [fileRackLatLongs, setFileRackLatLongs] = useState([]);

  useEffect(async () => {
    //Call the function
    setFileRackRecordTheadListings(fileRackAllData?.data?.sheetFields || []);
    setFileRackRecordDataListings(fileRackAllData?.data?.sheetData || []);
    setTotalRecord(fileRackAllData?.data?.sheetData?.total);
    const totalPages = Math.ceil(
      fileRackAllData?.data?.sheetData?.total / perPage
    );
    setTotalPages(totalPages);
  }, [fileRackAllData]);

  useEffect(() => {
    // Make an API request to fetch data based on the current perPage and currentPage values
    // Replace this with your actual API endpoint
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let newStart = 0;
        if (currentPage > 1) {
          newStart = (currentPage - 1) * perPage;
        }
        // Make an API request here and set the response data in the 'data' state
        var formdata = new FormData();
        formdata.append("sheet_id", sheetId);
        formdata.append("group_id", groupId);

        formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
        formdata.append("Userid", userId);
        formdata.append("Token", userToken);
        formdata.append("start", newStart);
        formdata.append("perpage", perPage);
        const getFileRacksRecords = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "sheets/viewData_v1",
          {
            method: "POST",
            body: formdata,
            //mode: 'no-cors'
          }
        );
        const fileRackRecordRes = await getFileRacksRecords.json();
        setFileRackRecordTheadListings(
          fileRackRecordRes?.data?.sheetFields || []
        );
        setFileRackRecordDataListings(fileRackRecordRes?.data?.sheetData || []);
        setTotalRecord(fileRackRecordRes?.data?.sheetData?.total);
        const totalPages = Math.ceil(
          fileRackRecordRes?.data?.sheetData?.total / perPage
        );
        setTotalPages(totalPages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [perPage, currentPage]);

  {
    //console.log("perPage-------", perPage);
  }

  const generatePaginationItems = () => {
    const items = [];

    if (totalPages > 1) {
      // Add the "Prev" button
      items.push(
        <Pagination.Prev
          key="prev"
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
        >
          <i className="fi-chevron-left"></i> Prev
        </Pagination.Prev>
      );

      // Add the page numbers
      for (let page = 1; page <= totalPages; page++) {
        items.push(
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        );
      }

      // Add the "Next" button
      items.push(
        <Pagination.Next
          key="next"
          onClick={() =>
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
        >
          Next <i className="fi-chevron-right"></i>
        </Pagination.Next>
      );
    }

    return items;
  };

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

      {/* Recored Image View */}

      {imgshowpopup && (
        <RecoredImageView
          show={imgshowpopup}
          filesData={filesData}
          onHide={handleImgPopupShowClose}
          onSwap={handleImgPopupShow}
        />
      )}

      {/* Recored Document View */}

      {docshowpopup && (
        <RecoredDocumentView
          show={docshowpopup}
          filesData={filesData}
          onHide={handleDocPopupShowClose}
          onSwap={handleDocPopupShow}
        />
      )}

      {/* Recored Map View */}

      {/* {mapshowpopup && (
        <RecoredMapView
          show={mapshowpopup}
          onHide={handleMapPopupShowClose}
          onSwap={handleMapPopupShow}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAopcumfPIKkHn4Ym1z2AeU0RDEAAY0ZXo&v=3.exp&libraries=geometry,drawing,places`} // Replace YOUR_API_KEY with your actual Google Maps API key
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          latLongs={fileRackLatLongs}
        />
      )} */}

      {mapshowpopup && (
        <RecoredMapViewModal
          show={mapshowpopup}
          onHide={handleMapPopupShowClose}
          onSwap={handleMapPopupShow}
          latLongs={fileRackLatLongs}
        />
      )}

      <div className="RacksListMains">
        <div className="RacksListView">
        {!isLoading ? 
          <Table striped bordered hover responsive className="RacksListTable">
            <thead>
              <tr>
                {fileRackRecordTheadListings.length > 0 && (
                  <th key={"firstKey"}></th>
                )}
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
                            src={record.imageLink}
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
                    {record?.data.map((childRecord, childIndex) => (
                      <td key={childIndex}>
                        <div className="d-flex align-items-center px-2 TableDiv">
                          {childRecord?.files_data?.length > 0 &&
                          (childRecord.field_type == "image" ||
                            childRecord.field_type == "video") ? (
                            <div className="Changetext">
                              <span>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    handleImgPopupShow(childRecord.files_data)
                                  }
                                >
                                  View
                                </a>
                              </span>
                            </div>
                          ) : childRecord.full_URL &&
                            childRecord.field_type === "signature" ? (
                            <>
                              {
                                <div className="Changetext">
                                  <span>
                                    <a
                                      href="#!"
                                      onClick={() =>
                                        handleImgPopupShow([
                                          {
                                            file_type: "signature",
                                            mainUrl: childRecord.full_URL,
                                          },
                                        ])
                                      }
                                    >
                                      View
                                    </a>
                                  </span>
                                </div>
                              }
                            </>
                          ) : childRecord?.files_data?.length > 0 &&
                            childRecord.field_type === "document" ? (
                            <div className="Changetext">
                              <span>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    handleDocPopupShow(childRecord.files_data)
                                  }
                                >
                                  View
                                </a>
                              </span>
                            </div>
                          ) : childRecord.field_type === "location" &&
                            childRecord?.unserialize_data?.latlng?.length >
                              0 ? (
                            <div className="Changetext">
                              <span>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    handleMapPopupShow(
                                      childRecord.unserialize_data.latlng
                                    )
                                  }
                                >
                                  View
                                </a>
                              </span>
                            </div>
                          ) : (
                            <div className="Changetext">
                              <span>{childRecord.d_value}</span>
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    style={{ textAlign: "center" }}
                    colSpan={fileRackRecordTheadListings.length}
                  >
                    Record Not found
                  </td>
                </tr>
              )}
               
            </tbody>
          </Table>
          :<p style={{padding:'20px',textAlign:'center'}}>Loading...</p>}
        </div>

        
        <div className="RacksListPagination d-flex justify-content-center align-items-center mt-3">
          <Pagination>            
            <Pagination>{generatePaginationItems()}</Pagination>
          </Pagination>

          <Dropdown drop="up" className="ms-2">
            <Dropdown.Toggle variant="outline-secondary bg-transparent py-2 px-0 border-0">
              {perPage} per page
            </Dropdown.Toggle>
            <Dropdown.Menu className="mx-1">
              <Dropdown.Item eventKey="1" onClick={() => setPerPage(20)}>
                20 per page
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={() => setPerPage(50)}>
                50 per page
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={() => setPerPage(100)}>
                100 per page
              </Dropdown.Item>
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
