import React,{useState} from 'react';

import { getFileExtension } from "../../../helper/helper";

const ImagePopup = (props) => {
//const [fileType,setFileType] = useState()
const extension = getFileExtension(props.fileURL);

const downloadDocumentFile = (url)=> {
    window.open(url, "_blank");
    window.location = url;
  }

if(extension=='jpg' || extension=='jpeg' || extension=='png' || extension=='gif'){//images
    return (
        <div className="popup-backgroundchat" >
          <button className='close-buttonchat' onClick={props.onClose}>x</button>
          <div className="popup-contentchat">
                     
            <img src={props.fileURL} alt={props.imageAlt} />
          </div>
        </div>
      );
}else if(extension=='mp4' || extension=='mov' || extension=='3gp' || extension=='wmv'){//video
    return (
        <div className="popup-backgroundchat" >
          <button className='close-buttonchat' onClick={props.onClose}>x</button>   
          <div className="popup-contentchat">
                  
            <video width="500" height="450" controls autoPlay muted loop>
            <source src={props.fileURL} type="video/ogg"></source>
            Your browser does not support the video tag.
            </video>

          </div>
        </div>
      );
}else{//document file
    return (
        <div className="popup-backgroundchat" >
          <button className='close-buttonchat' onClick={props.onClose}>x</button>  
          <div className="popup-contentchat">
                   
            <img src={props.fileURL} alt={props.imageAlt} />
          </div>
        </div>
      );
}

 
};

// function getFileExtension(fileName) {
//     let fileExtension = fileName.split('.').pop()
//     return fileExtension
//   }

export default ImagePopup;