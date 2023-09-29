import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import From from "react-bootstrap/Form";
import ProjectList from "../components/ProjectList";
import { getDateTime, getFileExtension, formatAmPm } from "../helper/helper";
import ImagePopup from "../components/common/modals/modalPopUp";
import { useForm } from "react-hook-form";
import { useUserContext } from "../components/UserContext";
import CreateTopic from "../components/CreateTopic";

import LightVideoImgPDF from "../components/common/modals/modalPopUp";

import NewModalPopUp from "../components/common/modals/NewModalPopUp";
import autosize from "autosize";

// Image Modal

import { css } from "@emotion/css";
import ScrollToBottom from "react-scroll-to-bottom";
import useSWR, { mutate } from "swr";
const Chat = ({ chatGroupId }) => {
  //define the chat listings variable
  const [chatListings, setChatListings] = useState([]);
  //define the chat topics variable
  const [chatTopics, setChatTopics] = useState([]);
  //define the chat message variable
  const [chatMessage, setChatMessage] = useState("");
  //define the group category id variable
  const [groupCategoryId, setGroupCategoryId] = useState(0);
  //define the pagination variable
  const [startRecord, setStartRecord] = useState(0);
  const [perPage, setPerPage] = useState(20);
  //define the open modal popup variable
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  //define the close modal popup variable
  const [selectedImage, setSelectedImage] = useState(null);
  //define the chat message variable
  const { register, handleSubmit, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  ////
  const [group_chat_id, setGroupCatId] = useState(0);

  const inputRef = useRef(null);
  //define the user data variable
  const [loginUserData, setLoginUserData] = useState({});
  //define the loadingmoreMessage variable
  const [loadingOlderMessages, setLoadingOlderMessages] = useState(false);

  //get the userid and user token from userProvider
  const { userId, userToken } = useUserContext();

  const chatContainerRef = useRef(null);

  const chatListingsByGroupId = async (topicId = 0) => {
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append("group_cat_id", topicId);
    formdata.append("group_id", chatGroupId);
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formdata.append("Userid", userId);
    formdata.append("Token", userToken);
    //console.log('topicId------',topicId)
    //console.log('groupCategoryId------',groupCategoryId)

    if (topicId !== groupCategoryId) {
      //for pagination
      formdata.append("start", 0);
    } else {
      //for pagination
      formdata.append("start", startRecord);
    }

    formdata.append("perpage", perPage);
    const getChatsRecords = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "groups/chats",
      {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      }
    );
    const chatResp = await getChatsRecords.json();
    setChatListings(chatResp?.data?.chat_data?.dbdata || []);

    //set login user date
    setLoginUserData(chatResp?.data?.loginUserData || {});
    //loading false
    setIsLoading(false);
    //when click on group first time set the topic data otherwise not
    if (group_chat_id !== chatGroupId) {
      if (chatResp.data?.topics?.length > 0) {
        chatResp.data?.topics.unshift({ id: "0", text: "All" });
        //set the chat topics
        setChatTopics(chatResp?.data?.topics || []);
      }
      // Scroll to the bottom when the chatListings change
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    } else if (group_chat_id === chatGroupId && topicId !== groupCategoryId) {
      //if new and old groupid match but new and old topic id not match then we scroll down scroll
      // Scroll to the bottom when the chatListings change
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  /*
  const chatListFetcher = async (url, chatGroupId22, group_cat_id) => {
    //set the group category id zero when new group chat start other wise not
    if (group_chat_id !== chatGroupId22) group_cat_id = 0;

    var formdata = new FormData();
    formdata.append("group_id", chatGroupId22);
    formdata.append("group_cat_id", group_cat_id);
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formdata.append("Userid", userId);
    formdata.append("Token", userToken);
    //for pagination
    formdata.append("start", startRecord);
    formdata.append("perpage", perPage);
    const getChatsRecords = await fetch(url, {
      method: "POST",
      body: formdata,
      //mode: 'no-cors'
    });
    return await getChatsRecords.json();

    // setChatListings(chatResp?.data?.chat_data?.dbdata || []);
    // //set login user date
    // setLoginUserData(chatResp?.data?.loginUserData || {});
    // //set the chat topics
    // setChatTopics(chatResp?.data?.topics || []);
  };
  const chatDataKey = [
    `${process.env.NEXT_PUBLIC_API_URL}groups/chats`,
    chatGroupId,
    groupCategoryId,
  ];

  const { data: allRecords, error } = useSWR(chatDataKey, (url) =>
    chatListFetcher(url, chatGroupId, groupCategoryId)
  );*/

  //topic wise chat listings
  const loadTheChatTopicWise = async (topicId = 0) => {
    //console.log('loadTheChatTopicWise topicId--------',topicId)
    //set the group cat id
    setGroupCategoryId(topicId);

    //start page set 0
    setStartRecord(0);
    //per page set 20
    //setPerPage(20);
    //call the api
    chatListingsByGroupId(topicId);
    //console.log('scrollHeight------',chatContainerRef.current.scrollHeight)
  };

  async function onSubmit(values) {
    if (chatMessage && chatMessage != "") {
      //append message in chat list
      let newMessage = chatMessage;

      let messageObj = {
        id: 0,
        group_cat_id: "0",
        sheet_id: "0",
        sheet_data_id: "0",
        member_id: loginUserData.id,
        member_name: "",
        member_image: "",
        message: newMessage,
        attachment: "",
        send_at: getDateTime(),
        imageLink: "",
        attachment_linkUrl: "",
        attachment_imageUrl: "",
        mime_type: "",
      };
      setChatMessage("");
      let newState = [...chatListings];
      newState.push(messageObj);
      await setChatListings(newState);
      //End
      var formdata = new FormData();
      formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);

      formdata.append("Userid", userId);
      formdata.append("Token", userToken);

      formdata.append("group_id", chatGroupId);
      formdata.append("msg", newMessage);
      formdata.append("group_cat_id", groupCategoryId);

      await fetch(process.env.NEXT_PUBLIC_API_URL + "groups/send_message", {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      })
        .then((response) => response.json())
        .then(async (result) => {});
    }
  }

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent form submission
      await onSubmit();
    }
  };
  const handleChangeField = async (e) => {
    const textMessage = e.target.value;
    await setChatMessage(textMessage);
  };

  //onclick trigger to open file browse modal
  const handleFileUpload = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  //after select execute this function for upload attachement
  const onSelectFile = async (e) => {
    const selectedFiles = e.target.files;

    const selectedFilesArray = Array.from(selectedFiles);
    //set the form data
    var formdata = new FormData();
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);

    formdata.append("Userid", userId);
    formdata.append("Token", userToken);

    // formdata.append("Userid", userId);
    // formdata.append("Token", uToken);

    //  formdata.append("app_version", process.env.REACT_APP_VERSION);
    formdata.append("group_id", chatGroupId);
    formdata.append("group_cat_id", groupCategoryId);
    let newState = [...chatListings];
    for (var i = 0; i < selectedFilesArray.length; i++) {
      formdata.append("files" + i, selectedFilesArray[i]);
      let linkURL = URL.createObjectURL(selectedFilesArray[i]);
      let fileExtension = getFileExtension(selectedFilesArray[i].name);
      let attachementImageURL = "";
      if (
        fileExtension == "jpg" ||
        fileExtension == "jpeg" ||
        fileExtension == "png" ||
        fileExtension == "gif"
      ) {
        //audio file
        attachementImageURL = linkURL;
      } else if (
        fileExtension == "mp4" ||
        fileExtension == "mov" ||
        fileExtension == "3gp" ||
        fileExtension == "wmv"
      ) {
        //video file
        attachementImageURL =
          "https://www.kodago.com/upload/img.php?src=video.png&w=170&h=170";
      } else {
        //other files
        if (fileExtension == "pdf") {
          attachementImageURL =
            "https://www.kodago.com/upload/img.php?src=pdf.png&w=170&h=170";
        } else if (fileExtension == "mp3") {
          attachementImageURL =
            "https://www.kodago.com/upload/img.php?src=document_icon.png&w=170&h=170";
        } else if (fileExtension == "xlsx" || fileExtension == "xls") {
          attachementImageURL =
            "https://www.kodago.com/upload/img.php?src=xlsx.png&w=170&h=170";
        } else if (fileExtension == "doc" || fileExtension == "docx") {
          attachementImageURL =
            "https://www.kodago.com/upload/img.php?src=docx.png&w=170&h=170";
        } else if (fileExtension == "ppt" || fileExtension == "pptx") {
          attachementImageURL =
            "https://www.kodago.com/upload/img.php?src=ppt.png&w=170&h=170";
        } else {
          //other extension image
          attachementImageURL =
            "https://www.kodago.com/upload/img.php?src=document_icon.png&w=170&h=170";
        }
      }

      let messageObj = {
        id: 0,
        group_cat_id: "0",
        member_id: loginUserData.id,
        member_name: "",
        member_image: "",
        message: "",
        attachment: selectedFilesArray[i].name,
        send_at: getDateTime(),
        imageLink: "",
        attachment_linkUrl: linkURL,
        attachment_imageUrl: attachementImageURL,
        mime_type: "",
      };
      newState.push(messageObj);
    }
    //append message in chat list
    await setChatListings(newState);
    //call the api for upload image
    await fetch(process.env.NEXT_PUBLIC_API_URL + "groups/uploadChat", {
      method: "POST",
      body: formdata,
      //mode: 'no-cors'
    })
      .then((response) => response.json())
      .then(async (result) => {
        //do something after response
      });
  };
  //Download document
  function downloadDocument(url) {
    window.open(url, "_blank");
    // window.location = url;
  }
  //on click open modal popup function
  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };
  //onclick close modal popup function
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  //set the chat listings and topics drop down when click on group
  useEffect(() => {
    //Call the function
    if (chatGroupId) {
      setGroupCatId(chatGroupId);
      chatListingsByGroupId();
    }
  }, [chatGroupId]);

  const GetChatAttachement = ({ chat }) => {
    let fileExtension = getFileExtension(chat.attachment);
    return (
      <>
        {chat?.attachment && (
          <div className="SenderImg position-relative 11" key={chat.id}>
            {chat.attachment != "" &&
            (fileExtension == "jpg" ||
              fileExtension == "jpeg" ||
              fileExtension == "png" ||
              fileExtension == "gif") ? (
              //images
              <img
                src={chat.attachment_imageUrl}
                style={{}}
                onClick={() => openPopup(chat.attachment_imageUrl)}
                alt={chat.attachment}
              />
            ) : //audio and video file
            chat.attachment != "" &&
              (fileExtension == "mp4" ||
                fileExtension == "mov" ||
                fileExtension == "3gp" ||
                fileExtension == "wmv") ? (
              <img
                src={chat.attachment_imageUrl}
                style={{}}
                onClick={() => openPopup(chat.attachment_linkUrl)}
                alt={chat.attachment}
              />
            ) : //link
            chat.attachment != "" &&
              (fileExtension == "mp3" ||
                fileExtension == "doc" ||
                fileExtension == "docx" ||
                fileExtension == "ppt" ||
                fileExtension == "pdf" ||
                fileExtension == "apk" ||
                fileExtension == "rar" ||
                fileExtension == "zip" ||
                fileExtension == "pdf" ||
                fileExtension == "xls" ||
                fileExtension == "xlsx" ||
                fileExtension == "csv" ||
                fileExtension == "txt" ||
                fileExtension == "rtf" ||
                fileExtension == "html" ||
                fileExtension == "pptx") ? (
              <img
                onClick={() => downloadDocument(chat.attachment_linkUrl)}
                src={chat.attachment_imageUrl}
                alt={chat.attachment}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </>
    );
  };

  //for scroll to bottom CSS
  const ROOT_CSS = css({
    height: 350,
    width: 640,
  });

  //Call every 5 second listOfChatGroup function
  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     var formdata = new FormData();
  //     formdata.append("group_cat_id", groupCategoryId);
  //     formdata.append("group_id", chatGroupId);
  //     formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
  //     formdata.append("Userid", userId);
  //     formdata.append("Token", userToken);
  //     formdata.append("start", 0);
  //     if (startRecord > 0) {
  //       formdata.append("perpage", startRecord);
  //     } else {
  //       formdata.append("perpage", perPage);
  //     }

  //     const getChatsRecords = await fetch(
  //       process.env.NEXT_PUBLIC_API_URL + "groups/chats",
  //       {
  //         method: "POST",
  //         body: formdata,
  //       }
  //     );
  //     const chatResp = await getChatsRecords.json();
  //     setChatListings(chatResp?.data?.chat_data?.dbdata || []);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [chatGroupId, groupCategoryId, startRecord]);

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

    return <p>{textArray}</p>;
  };

  //load more chat data
  const loadMoreChatData22 = async () => {
    const newStartRecord = startRecord + perPage;
    setStartRecord(newStartRecord);

    const moreChatData = await chatListFetcher(
      chatDataKey[0], // Use the same API URL
      chatGroupId,
      groupCategoryId,
      newStartRecord, // Pass the current start record index
      perPage
    );
    // Create a new array with abc at the beginning and spread chatListings
    const updatedChatListings = [
      ...(moreChatData.data?.chat_data?.dbdata || []),
      ...chatListings,
    ];

    setChatListings(updatedChatListings);
  };

  const loadMoreChatData = async () => {
    const newStartRecord = startRecord + perPage;
    setStartRecord(newStartRecord);

    var formdata = new FormData();
    formdata.append("group_cat_id", groupCategoryId);
    formdata.append("group_id", chatGroupId);
    formdata.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formdata.append("Userid", userId);
    formdata.append("Token", userToken);
    //for pagination
    formdata.append("start", newStartRecord);
    formdata.append("perpage", perPage);
    const getChatsRecords = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "groups/chats",
      {
        method: "POST",
        body: formdata,
        //mode: 'no-cors'
      }
    );
    const chatResp = await getChatsRecords.json();
    if (newStartRecord > 0) {
      const updatedChatListings = [
        ...(chatResp.data?.chat_data?.dbdata || []),
        ...chatListings,
      ];
      setChatListings(updatedChatListings);
    } else {
      setChatListings(chatResp.data?.chat_data?.dbdata || []);
    }
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    autosize(textareaRef.current);

    return () => {
      autosize.destroy(textareaRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = async () => {
      const scrollTop = chatContainerRef.current.scrollTop;
      const scrollHeight = chatContainerRef.current.scrollHeight;
      const clientHeight = chatContainerRef.current.clientHeight;
      // console.log("Yesss on scrollTop---", scrollTop);
      // console.log("Yesss on scrollHeight---", scrollHeight);
      // console.log("Yesss on clientHeight---", clientHeight);
      // Check if the user is near the top (e.g., within 50 pixels) and not loading older messages.
      //if (!loadingOlderMessages && scrollTop < 50) {
      if (
        !loadingOlderMessages &&
        chatContainerRef.current.scrollTop === 0 &&
        scrollHeight !== 440
      ) {
        console.log("Yesss on top section");
        setLoadingOlderMessages(true);
        loadMoreChatData(); //load more chat
        setLoadingOlderMessages(false);
      }
    };
    chatContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      chatContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [startRecord, loadingOlderMessages, chatListings]);

  // console.log("chatListings----->>>>>>", chatListings);
  // console.log("startRecord----->>>>>>", startRecord);
  // console.log("loadingOlderMessages----->>>>>>", loadingOlderMessages);
  return (
    <>
      {isPopupOpen && (
        <NewModalPopUp
          fileURL={selectedImage}
          imageAlt="Selected Image"
          onClose={closePopup}
        />
      )}
      <div className="ChatMain overflow-hidden11">
        <div className="ProjectList">
          {/* Create Topic code here */}
          {/* <CreateTopic/> */}

          <ProjectList
            chatTopicList={chatTopics}
            loadTheChatTopicWise={loadTheChatTopicWise}
            key={1}
          />
        </div>
        <div className="ChatConversation">
          <div
            className="ChatConversationList11 chat-container11"
            ref={chatContainerRef}
            style={{
              height: `440px`,
              overflowY: "auto",
              overflowX: "hidden",
              marginBottom: `20px` /* Pushes items to the bottom */,
            }}
          >
            {isLoading == true ? (
              <span
                style={{
                  textAlign: "center",
                  marginTop: "200px",
                  marginLeft: "270px",
                  position: "absolute",
                }}
              >
                Loading...
              </span>
            ) : (
              <ul className="list-unstyled mb-0">
                {chatListings.length > 0 &&
                  chatListings.map((chat, index) => {
                    let fileExtension = getFileExtension(chat.attachment);
                    //if (userId !== chat.member_id) {
                    if (loginUserData.id !== chat.member_id) {
                      return (
                        <li key={index} id={"chat-id-" + chat.id}>
                          <div className="ConversationList">
                            <div className="UserChatContent">
                              <div className="CtextWrapContent">
                                <div className="Sender">{chat.member_name}</div>
                                <div className="SenderMsg">
                                  {/* <TextWithLinks text={chat.message} /> */}
                                  {chat?.message &&
                                    chat.message
                                      .split("\n")
                                      .map((line, index2) => (
                                        <div key={index2}>
                                          <TextWithLinks text={line} />{" "}
                                          {/* Apply TextWithLinks to each line */}
                                        </div>
                                      ))}
                                </div>
                                <GetChatAttachement chat={chat} />
                                <div className="ChatTime">
                                  {formatAmPm(
                                    getDateTime(2, chat.send_at),
                                    1,
                                    "H:i:s",
                                    "H:i"
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className="RightChat"
                          id={"chat-id-" + chat.id}
                          key={index}
                        >
                          <div className="ConversationList">
                            <div className="UserChatContent">
                              <div className="CtextWrapContent">
                                <div className="SenderMsg">
                                  {/* {chat.message} */}
                                  {/* <TextWithLinks text={chat.message} /> */}
                                  {chat?.message &&
                                    chat.message
                                      .split("\n")
                                      .map((line, index2) => (
                                        <div key={index2}>
                                          <TextWithLinks text={line} />{" "}
                                          {/* Apply TextWithLinks to each line */}
                                        </div>
                                      ))}
                                </div>
                                <GetChatAttachement chat={chat} />
                                <div className="ChatTime">
                                  {formatAmPm(
                                    getDateTime(2, chat.send_at),
                                    1,
                                    "H:i:s",
                                    "H:i"
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  })}
              </ul>
            )}
          </div>
          <div className="MessageSentBox ">
            <Form
              className="d-flex"
              onSubmit={handleSubmit(onSubmit)}
              id="messageFrm"
              autoComplete="off"
            >
              <div className="MessageSentBoxInput">
                <Form.Group controlId="text-input" className="">
                  <Form.Control
                    ref={textareaRef}
                    as="textarea"
                    rows={1}
                    value={chatMessage}
                    onChange={handleChangeField}
                    onKeyDown={handleKeyDown} // Listen for keydown event
                    placeholder="Type a message"
                    name={`sendMessageFrm`}
                  />

                  <input
                    style={{ display: "none" }}
                    ref={inputRef}
                    type="file"
                    onChange={onSelectFile}
                    accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG, .gif, .GIF,.mp4,.mov,.3gp,.wmv,.pdf,.mp3,.xlsx,.xls,.csv,.doc,.docx,.ppt,.pptx "
                    multiple
                  />
                </Form.Group>
              </div>
              <div className="d-flex align-items-center">
                <div className="AttachIcon">
                  <span onClick={handleFileUpload}>
                    <i className="fi-attach"></i>
                  </span>
                </div>
                <div className="SendIcon d-flex align-items-center justify-content-center">
                  <Button type="submit" variant="info">
                    <i className="fi-send"></i>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
