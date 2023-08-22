import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Fade from "react-bootstrap/Fade";
import TopBar from "../components/TopBar";
import KodagoAdminBody from "../components/KodagoAdminBody";
import { useRouter } from "next/router";
import NotFound from "../components/NotFound";
import { UserProvider } from "../components/UserContext";


import RackView from "../components/racks/RackView";


const HomeAltPage = (props) => {
  const router = useRouter();
  const { slug } = router.query; // Access the passed arguments from the query object
  // Assuming you have a specific structure like /userid/token
  
  const userToken = slug?.[0] || "";
  const userId = slug?.[1] || "";

  if (!userId && !userToken) {
    return <NotFound />;
  }

  return (
    <>
      <UserProvider userId={userId} userToken={userToken}>
        <section className="full kodagoadmin">
          {/* TopBar */}
          <TopBar/>
          {/* KodagoAdminBody     */}
          <KodagoAdminBody/>
          {/* <RackView/> */}
        </section>
      </UserProvider>
    </>
  );
};

export default HomeAltPage;
