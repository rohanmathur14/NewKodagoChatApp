import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import ImageLoader from "../../ImageLoader";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef } from "react";
import { formatDateTime, getDateTime } from "../../../helper/helper";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../components/UserContext";

const CommentModal = ({ show, handleClose, ...props }) => {
  //get the userid and user token from userProvider
  const { userId, userToken } = useUserContext();
  //define the chat message variable
  const { register, handleSubmit, setValue } = useForm();

  const [commentListings, setCommentListings] = useState(props.commentListings);
  const [commentMessage, setCommentMessage] = useState();

  const [userDetails, setUserDetails] = useState(null);

  const handleChangeField = async (e) => {
    const textComment = e.target.value;
    await setCommentMessage(textComment);
    //console.log('chatMessage===',chatMessage)
  };

  async function onSubmit(values) {
    if (commentMessage && commentMessage != "") {
      //console.log("commentMessage-----", commentMessage);
      let commentObj = {
        id: 0,
        username: userDetails.name,
        imageLink: userDetails.profile_pic,
        comment: commentMessage,
        created_at: getDateTime(),
      };
      setCommentMessage("");
      let newState = [...commentListings];
      newState.unshift(commentObj);
      await setCommentListings(newState);
      //update new comment on previous listing
      props.feedUserDetail.comments.dbdata.unshift(commentObj);

      var formdata = new FormData();
      formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);

      formdata.append("Userid", userId);
      formdata.append("Token", userToken);

      formdata.append("group_id", props.feedUserDetail.group_id);
      formdata.append("sheet_id", props.feedUserDetail.sheet_id);
      formdata.append("sheet_data_id", props.feedUserDetail.sheet_data_id);
      formdata.append("comment", commentMessage);

      await fetch(process.env.NEXT_PUBLIC_API_URL + "sheets/postComment", {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      })
        .then((response) => response.json())
        .then(async (result) => {});
    }
  }

  const GetFeedAttachement = ({ feed }) => {
    if (feed.field_type == "video") {
      return (
        <>
          <video width="500" height="300" controls>
            <source src={feed?.video[0]?.thumbURL}></source>
          </video>
        </>
      );
    } else if (
      feed.field_type == "image" ||
      feed.field_type == "document" ||
      feed.field_type == "signature"
    ) {
      let thumbURL = "";
      if (feed.field_type == "image") {
        thumbURL = feed?.image[0]?.thumbURL;
      } else if (feed.field_type == "signature") {
        thumbURL = feed?.signature[0]?.thumbURL;
      } else {
        thumbURL = feed?.document[0]?.thumbURL;
      }
      //console.log('thumbURL-------->>>',thumbURL)
      return (
        <>
          {thumbURL && (
            <div className="HighLightsImg position-relative">
              <ImageLoader
                src={thumbURL}
                quality={100}
                layout="fill"
                objectFit="contain"
                className="position-relative"
              />
            </div>
          )}
        </>
      );
    } else {
      //Text
      return (
        <>
          <HTMLTextWithLinks text={feed.text} />
          {/* <h4>{feed.text}</h4> */}
        </>
      );
    }
  };

  useEffect(() => {
    // Retrieve the user details from localStorage
    const storedUserDetails = localStorage.getItem("userDetails");

    if (storedUserDetails) {
      // If data is found in localStorage, parse and set it in state
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const TextWithLinks = ({ text }) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Split the text by URLs and create an array of text and links
    const textArray = text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        // Extract the actual URL from the matched part
        const url = part.match(urlRegex)[0];

        return (
          <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
            {url}
          </a>
        );
      }
      return part;
    });

    return <p className="m-0">{textArray}</p>;
  };

  const HTMLTextWithLinks = ({ text }) => {
    return <h4 dangerouslySetInnerHTML={{ __html: text }} />;
  };

  // Function to handle the "keydown" event
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // If Enter key is pressed without Shift key
      e.preventDefault(); // Prevent the ne wline from being added
      onSubmit(); // Submit the comment
    }
  };

  return (
    <>
      <Modal
        className="CoomentsBox"
        size="xl"
        centered
        show={show}
        onHide={handleClose}
        style={{ zIndex: "9999" }}
      >
        <div className="row">
          <Col lg={6} className="pe-0">
            <div className="CoomentsBoxImg position-relative">
              <GetFeedAttachement feed={props.feedUserDetail} />
            </div>
          </Col>
          <Col lg={6} className="ps-0">
            <div className="ModalRight">
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="HighLightsBoxHead d-flex align-items-center">
                    <div className="HighLightsShape position-relative d-flex align-items-center justify-content-center">
                      <ImageLoader
                        src={props.feedUserDetail.imageLink}
                        quality={100}
                        layout="fill"
                        objectFit="contain"
                        className="position-relative"
                      />
                    </div>
                    <div className="HighLightsBoxRight ms-3">
                      <h5>{props.feedUserDetail.name}</h5>
                      <p>
                        {props.feedUserDetail.date_text.replace("Added on", "")}
                      </p>
                    </div>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="CommentsBodyList">
                  {commentListings.map((feedComment, index) => (
                    <div className="d-flex CommentsBoxLine" key={index}>
                      <div className="CommentsProfile position-relative overflow-hidden">
                        <ImageLoader
                          src={feedComment.imageLink}
                          quality={100}
                          layout="fill"
                          objectFit="contain"
                          className="position-relative"
                        />
                      </div>
                      <div className="CommentsText">
                        <div className="CommentsHead d-flex align-items-center">
                          <h4>{feedComment.username}</h4>
                          <h6>{formatDateTime(feedComment.created_at)}</h6>
                        </div>
                        <div className="CommentsBody">
                          {/* <p className="m-0">
                            {feedComment.comment
                              .split("\n")
                              .map((line, index2) => (
                                <div key={index2}>{line}</div>
                              ))}
                          </p> */}
                          {feedComment.comment
                            .split("\n")
                            .map((line, index2) => (
                              <div key={index2}>
                                <TextWithLinks text={line} />{" "}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="CommentsBoxInput w-100 m-0">
                  <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="Add a comment…"
                      onChange={handleChangeField}
                      onKeyDown={(e) => handleKeyDown(e)} // Add this line
                      name="cc"
                      value={commentMessage}
                    />
                    <div className="SendIcon d-flex align-items-center justify-content-center ms-2">
                      <Button type="submit" variant="info">
                        <i className="fi-send"></i>
                      </Button>
                    </div>
                  </Form>
                </div>
              </Modal.Footer>
            </div>
          </Col>
        </div>
      </Modal>
    </>
  );
};
export default CommentModal;
