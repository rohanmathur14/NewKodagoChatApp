import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Table } from 'react-bootstrap';
import ImageLoader from '../ImageLoader'


import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import Pagination from 'react-bootstrap/Pagination'
import Dropdown from 'react-bootstrap/Dropdown'


 
const RacksShowMore = () => {



  return (
    <>

    <div className="RacksShowRight">
        <div className="RacksGridLine">
            <h6 className="m-0">S. No.</h6>
            <h5>KODAGO_0017</h5>    
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">DEFECT ID</h6>
            <h5>Group</h5>    
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">BUG TYPE</h6>
            <h5>Functionality</h5>    
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">DEFECT SUMMARY / DESCRIPTION</h6>
            <h5>Group liat on all groups are same details open in case of user open group details screen and if user group details screen on click back button but not redirect listing screen</h5>
            <Link href='#!'>
                <a>
                https://drive.google.com/file/d/1QDJ2eCYQ0Y6xZZQbdhM9MnQNC7FMQuH8/view?usp=sharing
                </a>
            </Link>    
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">PRIORITY</h6>
            <h5>Medium</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">SEVERITY</h6>
            <h5>Medium Risk</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">TESTING STATUS</h6>
            <h5>New</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">DETECTED ON DATE</h6>
            <h5>25-07-2023</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">Status - Dev</h6>
            <h5>Pending</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">ASSIGNED TO</h6>
            <h5>John Omar Larnell Adams</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">COMMENTS</h6>
            <Link href='#!'>
                <a>
                https://drive.google.com/file/d/1QDJ2eCYQ0Y6xZZQbdhM9MnQNC7FMQuH8/view?usp=sharing
                </a>
            </Link>   
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">Screenshot</h6>
            <h5>View</h5> 
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">TESTING STATUS</h6>
            <h5>New</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">DETECTED ON DATE</h6>
            <h5>25-07-2023</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">Status - Dev</h6>
            <h5>Pending</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">ASSIGNED TO</h6>
            <h5>John Omar Larnell Adams</h5>  
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">COMMENTS</h6>
            <Link href='#!'>
                <a>
                https://drive.google.com/file/d/1QDJ2eCYQ0Y6xZZQbdhM9MnQNC7FMQuH8/view?usp=sharing
                </a>
            </Link>   
        </div>
        <div className="RacksGridLine">
            <h6 className="m-0">Screenshot</h6>
            <h5>View</h5> 
        </div>
    </div>

    </>
  );
};

export default RacksShowMore;
