import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import From from "react-bootstrap/Form";
import NewGroupAdd from "../components/NewGroupAdd";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { getDateTime, formatAmPm } from "../helper/helper";
import useSWR from "swr";
import { useUserContext } from "../components/UserContext";

const ChatGroupList = ({ setGroupID }) => {
  const [showContent, setShowContent] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [kogdagoGroupList, setKogdagoGroupList] = useState([]);
  const [selectedGroupChatId, setSelectedGroupChatId] = useState(0);
  const { userId, userToken } = useUserContext();

  const handleClick = () => {
    setShowContent(!showContent);
  };

  const groupListFetcher = async (url) => {
    var formdata = new FormData();
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);

    formdata.append("Userid", userId);
    formdata.append("Token", userToken);

    //formdata.append("app_version", process.env.REACT_APP_VERSION);
    const getGroupRecords = await fetch(url, {
      method: "POST",
      body: formdata,
      // mode: 'no-cors',
    });
    return await getGroupRecords.json();
  };

  const { data: allRecords, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_URL}groups/index`, pageIndex],
    groupListFetcher
  );
  const groupListngs = allRecords?.data || [];

  //searching function in the group by name
  const SearchGroupByName = (e) => {
    const keyword = e.target.value.toLowerCase(); // Convert the keyword to lowercase for case-insensitive search

    if (keyword != "" && keyword !== undefined && keyword !== null) {
      const filtered = groupListngs.filter((entry) =>
        entry.name.toLowerCase().includes(keyword)
      );

      setKogdagoGroupList(filtered || []);
    } else {
      // Get all records when keyword is empty
      setKogdagoGroupList(groupListngs);
    }
  };

  //set the group id when click on group
  const openChatByGroup = async (group_id) => {
    //console.log("group--id---", group_id);
    setSelectedGroupChatId(group_id);
    setGroupID(group_id);
  };

  //set the group listings in state
  useEffect(() => {
    if (groupListngs.length > 0) {
      setKogdagoGroupList(groupListngs);
    }
  }, [groupListngs]);

  return (
    <>
      <div className="ChatGroupList">
        {showContent && (
          <>
            <div className="ChatGroupHead d-flex align-items-center justify-content-between">
              <h5 className="m-0">Group</h5>
              {/* <Link href="#!">
                <a className="d-inline-flex" onClick={handleClick}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add New</Tooltip>}
                  >
                    <i className="fi-plus"></i>
                  </OverlayTrigger>
                </a>
              </Link> */}
            </div>

            <div className="ChatGroupSearch position-relative mb-4">
              <Form.Group controlId="text-input" className="GroupSearchInput">
                <Form.Control
                  placeholder="Search or start new chat"
                  onChange={SearchGroupByName}
                />
              </Form.Group>
              <i className="fi-search"></i>
            </div>
            <div className="ChatGroupListMain">
              {kogdagoGroupList && kogdagoGroupList.length > 0
                ? kogdagoGroupList.map((group, index) => (
                    <div
                      className={`ChatGroupListBox d-flex justify-content-between align-items-center ${
                        group.id == selectedGroupChatId ? "GroupActive" : ""
                      }`}
                      onClick={() => {
                        openChatByGroup(group.id);
                      }}
                      key={index}
                    >
                      <div className="ChatGroupListLeft d-flex align-items-center">
                        <div className="GroupAvatar position-relative">
                          <ImageLoader
                            src={group?.image}
                            quality={100}
                            layout="fill"
                            objectFit="contain"
                            className="position-relative"
                          />
                        </div>
                        <div className="GroupAvatarName">
                          <h4>{group.name}</h4>
                          {/* <p>Sending the Update</p> */}
                        </div>
                      </div>
                      <div className="ChatGroupListRight">
                        <h6>
                          {formatAmPm(
                            getDateTime(2, group.created_at),
                            1,
                            "H:i:s",
                            "H:i"
                          )}
                        </h6>
                        {group.notiTotal > 0 && (
                          <div className="msgcount">{group.notiTotal}</div>
                        )}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </>
        )}
        {!showContent && <NewGroupAdd />}
      </div>
    </>
  );
};

export default ChatGroupList;
