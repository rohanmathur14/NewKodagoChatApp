// // Image Modal
// import GalleryItem from "../../GalleryItem";
// import LightGallery from "lightgallery/react";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgFullScreen from "lightgallery/plugins/fullscreen";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-fullscreen.css";

// const ImagePopup = (props) => {
//   return (
//     <>
//       <LightGallery plugins={[lgZoom, lgFullScreen]}>
//         <GalleryItem
//           href={props.fileURL}
//           thumb={[props.thumbnil, 400, 244]}
//           className="rounded p-0 h-100"
//           style={{ maxWidth: "400px" }}
//           layout="fill"
//           objectFit="cover"
//         />
//       </LightGallery>
//     </>
//   );
// };
// export default ImagePopup;


import GalleryItem from '../../GalleryItem'
import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-fullscreen.css'

const 
LightVideoImgPDF = ({ type = "image", url, caption = "", imageArray = [] }) => {
 console.log("Type is",type)
    if (type == "image") {
        return (
            <LightGallery
                plugins={[lgFullScreen]}
                speed="500" 
            >
                <GalleryItem
                    href={url}
                    thumb={imageArray}
                    caption={caption}
                    className='rounded'
                    style={{ maxWidth: '400px' }}
                />
            </LightGallery >

        )
    }
    else if (type == "video") {

        return (
            <LightGallery
                plugins={[lgVideo]}
                zoomFromOrigin={false}
                // youTubePlayerParams={{
                //     modestbranding: 1,
                //     showinfo: 0
                // }}
                speed="500" 
            >
                <GalleryItem
                    href={url}
                    video
                    thumb={imageArray}
                    caption={caption}
                    className='rounded'
                    style={{ maxWidth: '400px' }}

                />
            </LightGallery >

        )
    }
    else if (type == "pdf") {
        return (
            <LightGallery
                plugins={[lgFullScreen]}
                speed="500" 
                dynamic={true}
                dynamicEl={[{
                    "iframe": "true",
                    "src": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                }]}
            >
                <GalleryItem
                    //href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    thumb={imageArray}
                    caption={caption}
                    className='rounded'
                    style={{ maxWidth: '400px' }}

                />
            </LightGallery >
        )
    }
    else {

        return null
    }
        
    

}
export default LightVideoImgPDF;