import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { useUserContext } from "../UserContext";

import { formatDateTime } from "../../helper/helper";
import CreateFileRack from "../racks/CreateFileRack";
import Dropdown from "react-bootstrap/Dropdown";

const RackList = ({ GroupId }) => {
  //get the userid and user token from userProvider
  const { userId, userToken } = useUserContext();
  //define the fileRacks variable
  const [fileRackListings, setFileRackListings] = useState([]);

  const getFileRackListings = async () => {
    //console.log('chatListingsByGroupId--->>>>')
    var formdata = new FormData();
    formdata.append("group_id", GroupId);

    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formdata.append("Userid", userId);
    formdata.append("Token", userToken);
    const getFileRacksRecords = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "sheets/index",
      {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      }
    );
    const fileRackRes = await getFileRacksRecords.json();
    setFileRackListings(fileRackRes?.data?.sheets || []);
  };

  useEffect(async () => {
    //Call the function
    getFileRackListings();
    //
  }, [GroupId]);

  return (
    <>
      <div className="RacksList">
        <div className="RacksListMain">
          {fileRackListings?.length > 0 ? (
            fileRackListings.map((fileRack, index) => (
              <div
                key={index}
                className="RacksListBox d-flex justify-content-between align-items-center"
              >
                <div className="RacksListBoxLeft d-flex justify-content-between align-items-center">
                  <div className="RacksListIcon">
                    <i className="fi-file"></i>
                  </div>
                  <div className="RacksListText">
                    <a href={`/fileracks/${fileRack.id}/${fileRack.group_id}/${userToken}/${userId}`}>
                      <h5>{fileRack.name}</h5>
                      <p>
                        Last update on
                        <span>{formatDateTime(fileRack.updated_at)}</span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* <div className="RacksListBoxRight">
                  <Dropdown>
                    <Dropdown.Toggle variant="" className="p-0">
                      <i className="fi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="my-1">
                      <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Assign Members</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Assign Category
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}
              </div>
            ))
          ) : (
            <CreateFileRack />
          )}
        </div>

        {/* <div className="AddFileRack AddFileRackBtn">
          <div className="AddFileRackBtn text-center">
            <div className="d-flex flex-wrap justify-content-center">
              <Button variant="primary">Custom file rack</Button>
              <Button variant="primary" className="mx-2">
                Choose template
              </Button>
              <Button variant="primary" className="">
                File Import
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default RackList;
