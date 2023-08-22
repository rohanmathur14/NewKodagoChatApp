import { useState, useRef, useEffect } from "react";
import NewModalPopUp from "./modals/NewModalPopUp";
const VideoPlayerComponent = ({ video }) => {
  //define the close modal popup variable
  const [selectedImage, setSelectedImage] = useState(null);
  //define the open modal popup variable
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //on click open modal popup function
  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };
  //onclick close modal popup function
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  function VideoPlayer({ videoURL }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const handleVideoClick = () => {
      //setIsPlaying(true);
    };
    useEffect(() => {
      const handleScroll = () => {
        if (videoRef.current && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const videoRect = videoRef.current.getBoundingClientRect();
          console.log("videoRect.top:", videoRect.top);
          console.log("containerRect.top:", containerRect.top);

          //if (rect.bottom < 0 || rect.top > window.innerHeight) {
          if (
            videoRect.top >= containerRect.top &&
            videoRect.bottom <= containerRect.bottom
          ) {
            setIsPlaying(false);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <div onClick={handleVideoClick} style={{ cursor: "pointer" }}>
        <video ref={videoRef} width="620" height="440" controls={isPlaying}>
          <source src={videoURL}></source>
        </video>
      </div>
    );
  }

  return (
    <>
      {isPopupOpen && (
        <NewModalPopUp
          fileURL={selectedImage}
          imageAlt="Selected Image"
          onClose={closePopup}
        />
      )}
      <div>
        <a href="#!" onClick={() => openPopup(video)}>
        <VideoPlayer videoURL={video} />
        </a>
        
      </div>
    </>
  );
};
export default VideoPlayerComponent;
