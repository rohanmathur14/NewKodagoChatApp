import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { useUserContext } from "../components/UserContext";
import autosize from "autosize";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";

import { usePagination } from "../front_methods/Paginations";

import { getDateTime, formatDateTime, formatAmPm } from "../helper/helper";
import { useForm } from "react-hook-form";
//Import comment modal
import CommentModal from "../components/common/modals/CommentsModal";
import VideoPlayerComponent from "../components/common/VideoPlayer"

const HighLights = ({}) => {
  const [userFeeds, setUserFeeds] = useState([]);
  const { userId, userToken } = useUserContext();
  const [moreComment, setMoreComment] = useState([]);
  const [feedDetail, setFeedDetails] = useState({});
  const [commentMessage, setCommentMessage] = useState();
  const [pageIndex, setPageIndex] = useState(1);
  //define the chat message variable
  const { register, handleSubmit, setValue } = useForm();

  const buildFormData = async () => {
    const formData = new FormData();
    formData.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formData.append("Userid", userId);
    formData.append("Token", userToken);
    formData.append("get_feeds", "1");
    return formData;
  };

  const {
    recordListings,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    size,
    setSize,
    mutate,
  } = usePagination(`groups/feeds`, "", { get_feeds: "1" }, "feeds");

  const GetFeedAttachement = ({ feed }) => {
    if (feed.field_type == "video") {
      return (
        <>
          {/* <video width="620" height="440" controls>
            <source src={feed?.video[0]?.thumbURL}></source>
          </video> */}
          <VideoPlayerComponent video={feed?.video[0]?.thumbURL}/>
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
          <div className="HighLightstext">
            <p>{feed.text}</p>
          </div>
        </>
      );
    }
  };

  // View All Comments
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const allcomments = async (feed) => {
    var formdata = new FormData();
    formdata.append("sheet_data_id", feed.sheet_data_id);
    formdata.append("group_id", feed.sheet_id);
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);

    formdata.append("Userid", userId);
    formdata.append("Token", userToken);

    // formdata.append("start", 1);
    // formdata.append("end", 20);
    const getCommentRecords = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "sheets/loadComments",
      {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      }
    );
    const commentResponse = await getCommentRecords.json();
    setMoreComment(commentResponse?.data?.comments?.dbdata || []);
    //feed detail
    setFeedDetails((previous) => ({
      ...previous,
      ...feed
    }));
    setShow(true);
  };

  // Auto Resize Textarea

  const textareaRef = useRef(null);

  useEffect(() => {
    autosize(textareaRef.current);

    return () => {
      autosize.destroy(textareaRef.current);
    };
  }, []);

  //dd
  // useEffect(() => {
  //   if ( recordListings.length > 0) {
  //     setUserFeeds(recordListings|| []);
  //   }
  // }, []);
  const handleLoadMore = () => {
    // Simulate fetching more data (replace with actual data fetching)
    // In a real implementation, you would fetch more data and update recordListings
    // Here, I'm just using a dummy delay to simulate data fetching
    setTimeout(() => {
      setSize(size + 1);
      // Assuming recordListings is updated based on your data fetching logic
      // Example: setRecordListings([...recordListings, ...newData]);
    }, 1000);
  };
  const handleCommentSubmit = async (feed) => {
    if (commentMessage && commentMessage != "") {
      let commentObj = {
        id: 0,
        username: feed.name,
        imageLink: feed.imageLink,
        comment: commentMessage,
        created_at: getDateTime(),
      };
      setCommentMessage("");
      //shift the new object on top with push
      feed.comments.dbdata.unshift(commentObj);
      //increment in total when new comment is coming
      feed.comments.total++;
      //save the feed comment
      var formdata = new FormData();
      formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);

      formdata.append("Userid", userId);
      formdata.append("Token", userToken);

      formdata.append("group_id", feed.group_id);
      formdata.append("sheet_id", feed.sheet_id);
      formdata.append("sheet_data_id", feed.sheet_data_id);
      formdata.append("comment", commentMessage);

      await fetch(process.env.NEXT_PUBLIC_API_URL + "sheets/postComment", {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      })
        .then((response) => response.json())
        .then(async (result) => {});
    }
  };

  const handleChangeField = async (e) => {
    const textComment = e.target.value;
    await setCommentMessage(textComment);
    //console.log('chatMessage===',chatMessage)
  };

  return (
    <>
      {show && (
        <CommentModal
          show={show}
          handleClose={handleClose}
          commentListings={moreComment}
          feedUserDetail={feedDetail}
        />
      )}

      <InfiniteScroll
        next={() => setSize(size + 1)}
        hasMore={!isReachingEnd}
        loader={
          <div className="text-center my-3">
            <Spinner
              animation="grow"
              size="sm"
              role="status"
              className="me-2"
            />
            Loading...
          </div>
        }
        endMessage={""}
        dataLength={recordListings?.length ?? 0}
      >
        <div className="HighLights11 ">
          {recordListings?.length > 0 &&
            recordListings.map((feed, index) => (
              <div className="HighLightsBox" key={index}>
                <div className="HighLightsBoxHead d-flex align-items-center">
                  <div className="HighLightsShape position-relative d-flex align-items-center justify-content-center">
                    <ImageLoader
                      src={feed.imageLink}
                      quality={100}
                      layout="fill"
                      objectFit="contain"
                      className="position-relative"
                    />
                  </div>
                  <div className="HighLightsBoxRight ms-3">
                    <h5>{feed.name}</h5>
                    {feed.date_text && (
                      <p>
                        {/* 15 Aug 2022 <span>10:55 PM</span> */}
                        {feed.date_text.replace("Added on", "")}
                      </p>
                    )}
                  </div>
                </div>
                <GetFeedAttachement feed={feed} />

                {/* comments */}
                <div className="Comments">
                  <Row>
                    <Col lg={12}>
                      <div className="CommentsLine d-flex align-items-center justify-content-between">
                        <h5 className="m-0">Comments</h5>

                        {feed.comments.total > 2 && (
                          <div className="CommentsLineRight">
                            <Button
                              onClick={() => allcomments(feed)}
                              type="submit"
                              variant="secondary"
                            >
                              View All Comments
                            </Button>
                          </div>
                        )}
                      </div>
                      <div className="CommentsBox">
                        {feed?.comments?.total > 0 && (
                          <div className="CommentsBoxIn">
                            {feed?.comments?.dbdata
                              .slice(0, 2)
                              .map((feedComment, index1) => (
                                <div
                                  className="d-flex CommentsBoxLine"
                                  key={index1}
                                >
                                  <div className="CommentsProfile position-relative overflow-hidden">
                                    <ImageLoader
                                      src={
                                        feedComment.imageLink
                                          ? feedComment.imageLink
                                          : ""
                                      }
                                      quality={100}
                                      layout="fill"
                                      objectFit="contain"
                                      className="position-relative"
                                    />
                                  </div>
                                  <div className="CommentsText">
                                    <div className="CommentsHead d-flex align-items-center">
                                      <h4>{feedComment.username}</h4>
                                      <h6>
                                        {formatDateTime(feedComment.created_at)}
                                      </h6>
                                    </div>
                                    <div className="CommentsBody">
                                      <p className="m-0">
                                        {feedComment.comment}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}

                        <div className="CommentsBoxInput w-100 m-0 mt-3 ">
                          <Form
                            className="d-flex"
                            // onSubmit={handleSubmit(onSubmit)}
                          >
                            <Form.Control
                              ref={textareaRef}
                              as="textarea"
                              rows={1}
                              placeholder="Add a comment…"
                              onChange={handleChangeField}
                              value={commentMessage}
                            />

                            <div className="SendIcon d-flex  justify-content-center ms-2">
                              <Button
                                type="button"
                                variant="info"
                                onClick={() => handleCommentSubmit(feed)}
                              >
                                <i className="fi-send"></i>
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default HighLights;
