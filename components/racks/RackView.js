import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Offcanvas from 'react-bootstrap/Offcanvas'
import AdvanceFilter from '../racks/AdvanceFilter'
import RacksListView from '../racks/RacksListView'
import {Select2Wrapper} from './Select2Wrapper';
import FileRacks from './FileRacks'
import RacksGridView from '../racks/RacksGridView'
import RacksShowMoreEdit from '../racks/RacksShowMoreEdit'
import { useFileRackContext } from "../../components/FileRackContext";


const RackView = ({}) => {

const {sheetId, groupId, userId, userToken } = useFileRackContext();  

 
//define the fileRacks variable
const [fileRackRecordTheadListings, setFileRackRecordTheadListings] = useState([]);
const [fileRackRecordDataListings, setFileRackRecordDataListings] = useState([]);
//list and grid view variable
const [isListView, setIsListView] = useState(true);


const getFileRackRecordListings = async () => {
  //console.log('chatListingsByGroupId--->>>>')
  var formdata = new FormData();
  formdata.append("sheet_id", sheetId);
  formdata.append("group_id", groupId);

  formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
  formdata.append("Userid", userId);
  formdata.append("Token", userToken);
  const getFileRacksRecords = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "sheets/viewData_v1",
    {
      method: "POST",
      body: formdata,
      //mode: 'no-cors'
    }
  );
  const fileRackRecordRes = await getFileRacksRecords.json(); 
  setFileRackRecordTheadListings(fileRackRecordRes?.data?.sheetFields || []);
  setFileRackRecordDataListings(fileRackRecordRes?.data?.sheetData || []);  

};
useEffect(async () => {
  //Call the function
  getFileRackRecordListings(); 
}, [sheetId,groupId,userId,userToken]);

// console.log('fileRackRecordTheadListings------',fileRackRecordTheadListings)
// console.log('fileRackRecordDataListings------',fileRackRecordDataListings)

const handleViewIconClick = () => {
    // Your logic for the onClick action 
    setIsListView(!isListView);

  };

// Advance Filter   

const [show, setShow] = useState(false)
const filterClose = () => setShow(false)
const filterShow = () => setShow(true)

// Other File racks Show

const [fileshow, setfilerackShow] = useState(false)
const  filerackClose = () => setfilerackShow(false)
const filerackShow = () => setfilerackShow(true)



// Select 2 code here

const options1 = [
    { id: "1", text: "Alerts" },
    { id: "2", text: "Badges" },
    { id: "3", text: "Buttons" },
    { id: "4", text: "Cards" },
    { id: "5", text: "Forms" },
    { id: "6", text: "Modals" }
  ];

const handleSelectChange = (selectedValue) => {
    console.log('Selected Value:', selectedValue);
};

// Add new record code here

const [addNewRecordshow, addNewRecordsetShow] = useState(false)
const addNewRecordClose = () => addNewRecordsetShow(false)
const addNewRecordShow = () => addNewRecordsetShow(true)


  return (
    <>

    <div className="RackView pb-3 pt-3 mt-5">
        <div className="Breadcrumb">
            <div className="container-fluid">
                {/* <Breadcrumb className="mx-3">
                    <Breadcrumb.Item linkAs={Link} href='#' className="mb-0">Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} href='#' className="mb-0">Library</Breadcrumb.Item>
                    <Breadcrumb.Item className="mb-0" active>Data</Breadcrumb.Item>
                </Breadcrumb> */}
            </div>
        </div>
        <div className="container-fluid">
            <div className="px-3">
                <div className="RackTop">
                    <div className="FilterSecond d-flex justify-content-between align-items-center">
                        <div className="FilterSecondLeft d-flex align-items-center">
                            {/* Total Record Code Here */}
                            <div className="TotalRecord me-3">
                                <h4 className="m-0">Total</h4>
                                <h5 className="mb-0 mt-0">11 <span>Record</span></h5>
                            </div>
                            {/* Grid and List button code here */}
                            <div className="GridListBtn">
                                <Link href="#!">
                                    <OverlayTrigger
                                        placement='top'
                                        overlay={<Tooltip>View your Records as a list </Tooltip>}
                                        >
                                            
                                        <a onClick={handleViewIconClick} className={`align-items-center justify-content-center ${isListView ? 'active' : ''}`}>
                                            <i className="fi-list"></i>
                                        </a>
                                    </OverlayTrigger>  
                                </Link>  
                                <Link href="#!">
                                    <OverlayTrigger
                                        placement='top'
                                        overlay={<Tooltip>View your Records as a Grid </Tooltip>}
                                        >
                                        <a onClick={handleViewIconClick} className={`align-items-center justify-content-center ${!isListView ? 'active' : ''}`}>
                                            <i className="fi-grid"></i>
                                        </a>
                                    </OverlayTrigger>  
                                </Link>  
                            </div>

                            
                            {/* Data usage code here */}
                            <div className="datausage ms-3">
                                <h6>Cricket Fan Club</h6>
                                <div className="d-flex align-items-center">
                                    <ProgressBar variant='info' now={45} style={{height: '4px'}} />
                                    <div className="ProgressText ms-3">5.57 MB (Data usage)</div>
                                </div>
                            </div>
                        </div>
                        <div className="FilterSecondRight">
                        <Button variant="outline-primary" onClick={() => window.history.back()}>Back</Button>
                            <Button variant='outline-primary' className="mx-2">Export</Button>
                            <Button variant='outline-primary' className="mx-2">Import</Button>
                            <Button variant='primary'  onClick={addNewRecordShow} >Add new</Button>
                        </div>
                    </div>
                    <div className="FilterThird">
                        <Row className="align-items-center">
                            <Col lg={7}>
                                <h6>Sorting</h6>
                                <div className="d-flex align-items-center">
                                    <Form>
                                        <div className="d-flex align-items-center FilterThirdSearch">
                                            <div className="me-3">
                                                <Select2Wrapper
                                                    options={options1}
                                                    defaultValue="1"
                                                    onChange={handleSelectChange}
                                                />
                                            </div>
                                            {/* select Ascending and Desending */}
                                            <Form.Group controlId='select-sm' className="me-3">
                                                <Form.Select size='sm' defaultValue='default'>
                                                    <option value='default'>Ascending</option>
                                                    <option value='1'>Descending</option>
                                                </Form.Select>
                                            </Form.Group>
                                            {/* Filter button */}
                                            <div className="d-flex Filterbtn align-items-center">
                                                <Button type="submit" variant='primary' className="me-3"> Search</Button>
                                                <Button type="submit" variant='secondary'>Reset</Button>
                                            </div>
                                        </div>
                                    </Form>
                                    <div className="text-end AdvanceFilterbtn ms-3">
                                        <div className="d-inline-block" onClick={filterShow}>
                                            <Link href='#!' >
                                                <a><i className="fi-filter-alt-horizontal"></i>Advance Filter</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="text-end OtherFileRacks d-flex justify-content-end align-items-center">
                                    <div className="TotalReacord me-3">
                                        <h6 className="m-0">Total Number of bugs <span>611</span></h6>
                                    </div>
                                    <div className="d-inline-block" onClick={filerackShow}>
                                        <Link href='#!' >
                                            <a>
                                                <button type="button" class="btn btn-outline-primary">
                                                    <i className="fi-file"></i>
                                                    File Racks
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {isListView ? <RacksListView fileRackRecordTheadListings={fileRackRecordTheadListings} fileRackRecordDataListings={fileRackRecordDataListings} /> : <RacksGridView fileRackRecordDataListings={fileRackRecordDataListings} />}
                {/* List View Table */}
                

                {/* Grid View Table */}
                {/* <RacksGridView/> */}


            </div>
        </div>
    </div>

{/* Advance Filter Code here */}

<Offcanvas show={show} onHide={filterClose} placement="end" className='FilterOffcanvas'>
    <Offcanvas.Header closeButton className='border-bottom'>
        <Offcanvas.Title>Advance Filter</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="pb-0">
        {/* Advance Filter */}
        <AdvanceFilter/>
    </Offcanvas.Body>
</Offcanvas>

{/* Other File Racks Code here */}

<Offcanvas  show={fileshow} onHide={filerackClose} placement="end" className='FileracksOffcanvas'>
    <Offcanvas.Header closeButton className='border-bottom'>
        <Offcanvas.Title>File Racks List</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="p-0">
        <FileRacks/>
    </Offcanvas.Body>
</Offcanvas>


{/* Add new record code here */}

<Offcanvas show={addNewRecordshow} onHide={addNewRecordClose} placement="end" className='ShowMoreOffcanvas'>
    <Offcanvas.Header closeButton className='border-bottom d-flex'>
        <Offcanvas.Title>Manish Saini</Offcanvas.Title>
        <Link href='#!'>
            <a className='me-4'>Save</a>
        </Link>
    </Offcanvas.Header>
    <Offcanvas.Body>

        {/* Racks Show More Edit */}
        
        <RacksShowMoreEdit/>
    </Offcanvas.Body>
</Offcanvas>

      
    </>
  );
};

export default RackView;
