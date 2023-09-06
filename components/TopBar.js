import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import StoriesList from "../components/StoriesList";
import ProfileRight from "../components/ProfileRight"; 
import { useUserContext } from "../components/UserContext";

const TopBar = ({}) => {
  const [loginUserDetails, setLoginUserDetails] = useState();
  const { userId, userToken } = useUserContext(); 
  
  const loadTheStoryListings = async () => {
    var formdata = new FormData();
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formdata.append("Userid", userId);
    formdata.append("Token", userToken);
    formdata.append("get_stories", 1);
    const getChatsRecords = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "groups/feeds",
      {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      }
    );

    const storiesResp = await getChatsRecords.json();
    setLoginUserDetails(storiesResp?.userDetail || {});
  };

  useEffect(() => {
    loadTheStoryListings();
  }, []);

  return (
    <>
      <div className="topbar" id="topbar-root">
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col lg={"3"}>
              <div className="kodagologo">
                <Link href="/destination-page">
                  <a className="d-inline-flex align-items-center">
                    <ImageLoader
                      src="/images/weblogo.png"
                      width={147}
                      height={30}
                      alt="Square image"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={"5"}>
              <StoriesList />
            </Col>
            <Col lg={"4"}>
              <ProfileRight userDetails={loginUserDetails} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default TopBar;
