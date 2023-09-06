import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";

const ProfileRight = ({ userDetails }) => {
  const handleLogout = async () => {
    window.open("about:blank", "_self");
    window.close();
  };

  return (
    <>
      <div className="ProfileRight text-end d-flex justify-content-end align-items-center">
        {/* <div className="Notification me-2">
          <Dropdown key={`1`}>
            <Dropdown.Toggle variant="" className="p-0">
              <i className="fi-notifications-new"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="my-1">
              <Dropdown.Item eventKey="1" key={`1`}>
                Action
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" key={`2`}>
                Another action
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3" key={`3`}>
                Something else
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <div className="ProfileName">
          <Dropdown key={`2`}>
            <Dropdown.Toggle
              variant=""
              className="d-flex align-items-center p-0"
            >
              <div className="ProfileImgShape">
                <ImageLoader
                  src={
                    userDetails?.profile_pic
                      ? userDetails.profile_pic
                      : "/images/profilelogo.png"
                  }
                  width={45}
                  height={45}
                  alt="Square image"
                />
              </div>
              {/* <span className="m-0">NKI India</span> */}
              {userDetails?.name && (
                <span className="m-0">{userDetails.name}</span>
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="my-1">
              {/* <Dropdown.Item eventKey="1" key={`1`}>
                Action
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" key={`2`}>
                Another action
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3" key={`3`}>
                Something else
              </Dropdown.Item> */}
              <Dropdown.Item onClick={handleLogout} eventKey="4" key={`4`}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default ProfileRight;
