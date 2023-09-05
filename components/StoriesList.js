import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Stories from "react-insta-stories";
import { useUserContext } from "../components/UserContext";
import { TimeAgo } from "../helper/helper";
// Swiper code here

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Mousewheel } from "swiper";
import useSWR from "swr";

SwiperCore.use([Navigation, Pagination, Mousewheel]);

const StoriesList = ({}) => {
  const [storyUserListings, setStoryUserListings] = useState([]);
  //get the userid and user token from userProvider
  const { userId, userToken } = useUserContext();
  const [stories, setStories] = useState([]);

  const [pageIndex, setPageIndex] = useState(1);

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
    setStoryUserListings(storiesResp?.data?.stories || []);
    //console.log("chatResp---->>>", storiesResp?.data?.stories);
  };

  const storyListFetcher = async (url) => {
    var formdata = new FormData();
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formdata.append("Userid", userId);
    formdata.append("Token", userToken);
    formdata.append("get_stories", 1); 
    const getStoryRecords = await fetch(url, {
      method: "POST",
      body: formdata,
      // mode: 'no-cors',
    });
    return await getStoryRecords.json();
  };
  const { data: allRecords, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_URL}groups/feeds`, pageIndex],
    storyListFetcher
  );

  const storyListngs = allRecords?.data?.stories || [];
  const userDetails = allRecords?.userDetail || {};
 

  useEffect(() => {
    //Call the function
    //loadTheStoryListings();
    localStorage.setItem('username',userDetails.name);
    localStorage.setItem('profile_pic',userDetails.profile_pic); 
  }, []);

  // Swiper code here

  //  modal change on arrow
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleShow = (story) => {
    //console.log("story--->>>>", story);
    let storyListAarry = [];

    story?.stories?.length > 0 &&
      story?.stories.map((uStory) => {
        let newStoryObject = {};

        if (
          uStory.field_type === "image" ||
          uStory.field_type === "document" ||
          uStory.field_type === "video"
        ) {
          //image and video
          let fileUrl = "";
          if (uStory.field_type === "image") {
            fileUrl = uStory?.image[0]?.mainURL;
          } else if (uStory.field_type === "document") {
            fileUrl = uStory?.document[0]?.thumbURL;
          } else {
            fileUrl = uStory?.video[0]?.mainURL;
          }

          newStoryObject = {
            url: fileUrl,
            type: uStory.field_type === "video" ? "video" : "image",
            header: {
              heading: story.name,
              subheading: TimeAgo(uStory?.last_update),
              profileImage: story.imageLink,
            },
          };

        } else {//For text
           //for text
           newStoryObject = {
            content: (props) => (
              <div className="h-100 w-100">
                <div
                  className="d-flex align-items-center justify-content-center h-100"
                  style={{
                    background:
                      "linear-gradient(180deg, #2d2db0 -65%, #2c8cf4 110%)",
                    padding: 20,
                  }}
                >
                  {/* <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1> */}
                  <h3
                    className="text-center"
                    style={{ marginTop: 5, color: "#fff" }}
                  >
                    {uStory.text}
                  </h3>
                </div>
                <div>{props.header}</div>{" "}
                {/* Display the header within the custom content */}
              </div>
            ),
          };
        } 

        storyListAarry.push(newStoryObject);
      });

    if (storyListAarry.length > 0) {
      setStories(storyListAarry);
    }
    //console.log('storyListAarry-------->>>>>>>',storyListAarry)

    setShow(true);
    setCurrentStoryIndex(0);
  };

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handleClose = () => {
    setShow(false);
    setCurrentStoryIndex(0);
  };

  // Stories Modal open code here
  const [show, setShow] = useState(false);

  return (
    <>
      {/* modal open code */}

      <Modal
        size="fullscreen"
        show={show}
        onHide={handleClose}
        className="StoriesPopup"
      >
        <Modal.Header closeButton></Modal.Header>

        <div
          style={{
            width: "500px",
            margin: "0 auto",
          }}
        >
          <div
            className="StoriesModal"
            style={{
              height: "99.5vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >

            {stories.length>1 && <i className="fi-chevron-left" onClick={goToPreviousStory}></i>}
            <Stories
              stories={stories}
              defaultInterval={3500}
              width={"100%"}
              height={"100%"}
              currentIndex={currentStoryIndex}
              className='justify-content-center'
            />
            {stories.length>1 &&<i className="fi-chevron-right" onClick={goToNextStory}></i>}
          </div>
        </div>
      </Modal> 
      <div className="StoriesList position-relative">
        {/* Swiper slider */}
        <Swiper
          direction="horizontal"
          mousewheel
          //loop
          grabCursor
          slidesPerView={11}
        >
          {storyListngs?.length > 0 &&
            storyListngs.map((story, index) => (
              <SwiperSlide className="d-flex" key={index}>
                <div
                  className="StoriesListShape"
                  onClick={() => handleShow(story)}
                >
                  <Link href="#!">
                    <a>
                      <ImageLoader
                        src={story?.imageLink}
                        width={45}
                        height={45}
                        alt="Square image"
                      />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div> 
    </>
  );
};

export default StoriesList;
