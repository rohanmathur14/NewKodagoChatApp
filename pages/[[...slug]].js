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
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { slug } = router.query; // Access the passed arguments from the query object
  // Assuming you have a specific structure like /userid/token
  
  const userToken = slug?.[0] || "";
  const userId = slug?.[1] || "";
  
  function LoadingPage() {
    return <div>Loading...</div>;
  }
  
  useEffect(() => {
    // Check if both slug arguments are available
    if (slug && slug.length === 2) {
      // Perform any necessary data fetching or processing here

      // Simulate loading for demonstration purposes (you can remove this)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      // If one or both arguments are missing, show the error page
      setLoading(false);
    }
  }, [slug]);



  if (loading) {
    return <LoadingPage />;
  }else if (!slug || slug.length !== 2) {// If slug is not found or doesn't match your criteria, show the error page
    return <NotFound />;
  }


  // if (!userId && !userToken) {
  //   return <NotFound />;
  // }

  return (
    <>
      <UserProvider userId={userId} userToken={userToken}>
        <section className="full kodagoadmin">
          {/* TopBar */}
          <TopBar/>
          {/* KodagoAdminBody  */}
          <KodagoAdminBody/>
          {/* <RackView/> */}
        </section>
      </UserProvider>
    </>
  );
};

export default HomeAltPage;
