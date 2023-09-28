import { useEffect, useState, } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import ImageLoader from "../components/ImageLoader";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import From from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

const ProjectList = ({ chatTopicList, loadTheChatTopicWise }) => {

// Dropdown open on hover

const [openItemId, setOpenItemId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setOpenItemId(itemId);
  };

  const handleMouseLeave = () => {
    setOpenItemId(null);
  };


  // const GetTopicTree = ({ itemList }) => {
  //   return (



      
  //     <ul className="d-flex">
  //       {itemList.slice(0, 5).map((item) => (
  //         <li key={item.id}>
  //           <div className="TopicMain" key={`drop`+item.id}
  //             onMouseEnter={() => handleMouseEnter(item.id)}
  //             onMouseLeave={handleMouseLeave}
  //             //show={openItemId === item.id}
  //             onClick={() => loadTheChatTopicWise(item.id)}
  //           >
  //             <h5
  //               onMouseEnter={() => handleMouseEnter(item.id)}
  //               onMouseLeave={handleMouseLeave}
  //               //show={openItemId === item.id}
  //             >
  //               {item.text}
  //             </h5>
  //             {item?.nodes && (
  //               <div className="TopicSub mt-0 ms-0"
                 
  //                 onMouseEnter={() => handleMouseEnter(item.id)}
  //                 onMouseLeave={handleMouseLeave}
  //               >
  //                 {item.nodes.map((menuItem) => (
  //                   <div className="TopicSubList"
  //                     key={menuItem.id}
  //                     eventKey={menuItem.id}
  //                     onClick={() => loadTheChatTopicWise(menuItem.id)}
  //                   >
  //                     {menuItem.text}
  //                     <div className="TopicSubListIn">
  //                       <div className="TopicSubListInList">ABC</div>
  //                       <div className="TopicSubListInList">ABC2</div>
  //                       <div className="TopicSubListInList">ABC3</div>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //           </div>
  //         </li>
  //       ))}
  //   </ul>
  //   );
  // };

  /*
  const GetTopicTree = ({ itemList }) => {
    const renderTopic = (topic) => (
      <li key={topic.id}>
        <div className="TopicMain">
          <h5>{topic.text}</h5>
          {topic.nodes && topic.nodes.length > 0 && (
            <div className="TopicSub mt-0 ms-0">
              <div className="TopicSubList">
              {topic.text}
                <div className="TopicSubListIn">
                  <ul>{topic.nodes.map(renderTopic)}</ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </li>
    );
  
    return <ul className="d-flex">{itemList.map(renderTopic)}</ul>;
  };*/

 

  
   

  const GetTopicTree = ({ itemList }) => {
    const handleClick = (itemId,event) => {
      // Handle the click event for the item with the given itemId
      //console.log(`Clicked item with ID: ${itemId}`);
      //setOpenItemId(itemId);
      loadTheChatTopicWise(itemId);
      event.stopPropagation(); // Prevent event from propagating to parent elements
    };
  
    const renderTopic = (item) => (
      <li key={item.id} onClick={(e) => handleClick(item.id,e)} >
        <div className={(item.text === 'All' || !item?.nodes)  ? 'hideTopicArrow TopicMain' : 'TopicMain'}>
          <h5>{item.text}</h5>
          {item.nodes && item.nodes.length > 0 && (
            <div className="TopicSub mt-0 ms-0">
              {item.nodes.map((subItem) => (
                <div
                  key={subItem.id}
                  //className="TopicSubList"
                  className={subItem.nodes && subItem.nodes.length > 0 ? 'TopicSubList' : 'TopicSubList hideTopicArrow'}
                  onClick={(e) => handleClick(subItem.id,e)}
                >
                  {subItem.text}
                  {subItem.nodes && subItem.nodes.length > 0 && (
                    <div className="TopicSubListIn">
                      {subItem.nodes.map((subSubItem) => (
                        <div
                          key={subSubItem.id}
                          className="TopicSubListInList"
                          onClick={(e) => handleClick(subSubItem.id,e)}
                        >
                          {subSubItem.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </li>
    );
  
    return <ul className="d-flex">{itemList.slice(0, 5).map(renderTopic)}</ul>;
  }; 
  return (
    <>
       
      {chatTopicList.length > 0 && (
        <div className="ProjectListMain">
          <GetTopicTree itemList={chatTopicList} />
          {/* <ul className="d-flex">
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="border-0">
                Project A
              </Dropdown.Toggle>
              <Dropdown.Menu className="my-1">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="border-0">
                Project B
              </Dropdown.Toggle>
              <Dropdown.Menu className="my-1">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="border-0">
                Project C
              </Dropdown.Toggle>
              <Dropdown.Menu className="my-1">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul> */}
        </div>
      )}
    </>
  );
};

export default ProjectList;
