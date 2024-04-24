import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import ChatGroupList from "../components/ChatGroupList";
import Chat from "../components/Chat";
import HighLights from "../components/HighLights";
import { useUserContext } from "../components/UserContext";
import FileRacks from '../components/racks/FileRacks'

//const KodagoAdminBody = (props) => {
const KodagoAdminBody = ({}) => {
  const { userId, userToken } = useUserContext();
  const [groupID, setGroupID] = useState(0);

  return (
    <>
      <div className="KodagoAdminBody">
        <div className="container-fluid">
          <Row>
            <Col lg={"3"}>
              <ChatGroupList setGroupID={setGroupID} />
            </Col>
            <Col lg={"6"}>
              {/* {groupID && groupID > 0 ? (
                <Chat chatGroupId={groupID} />
              ) : (
                <HighLights />
              )} */}
              <HighLights />
            </Col>
            <Col lg={"3"}>              
              {groupID && groupID > 0 ? (<FileRacks GroupId={groupID} />) : ""}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default KodagoAdminBody;
