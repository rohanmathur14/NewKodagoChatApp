import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import ImageLoader from '../components/ImageLoader'
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Topics from '../components/Topics'







const NewGroupLast = ({ }) => {
    const [showContent, setShowContent] = useState(true);
    


const [selectedImage, setSelectedImage] = useState(null);

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
};  


  
  return (
    <>

{showContent && (
    <>
        <div className='NewGroupAddHead d-flex align-items-center mb-3'>
            <Link href="/">
                <a className='d-inline-flex'>
                    <i className='fi-chevron-left'></i>
                </a>
            </Link>
            <Form.Group controlId='text-input' className='GroupSearchInput'>
                <Form.Control className='bg-transparent border-0 p-0 ps-3 h-100 fs-sm' placeholder='New Group' />
            </Form.Group>
        </div>

    <div className='GroupNameMain d-flex align-items-center'>    
      <div>
        <label htmlFor="upload" className='uploadLabel'>
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className='roundImage' />
          ) : (
            <div className='placeholderImg'>
                <i className='fi-image'></i>
              <span className='plusIcon'>+</span>
            </div>
          )}
        </label>
      </div>
      <div className="GroupNameType">
          <Form.Group controlId='text-input' className='GroupNameTypeInput'>
                  <Form.Control placeholder='Type group subject here....' />
          </Form.Group>
          <div className='GroupEmoji'></div>
      </div>
    </div>
    <div className='participants position-relative'>
      <h4>Participants</h4>
    <div className='SelectedContact mb-3'>
            <ul className='d-flex align-items-center'>
                <li>
                        <div className='GroupAvatar position-relative'>
                            <ImageLoader
                                src='/images/GroupAvatarImgOne.jpg'
                                quality={100}
                                layout='fill'
                                objectFit='contain'
                                className='position-relative'
                            />
                        </div>
                    <h5>DFC</h5>
                </li>
                <li>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <h5>DFC</h5>
                </li>
                <li>
                        <div className='GroupAvatar position-relative'>
                            <ImageLoader
                                src='/images/GroupAvatarImgOne.jpg'
                                quality={100}
                                layout='fill'
                                objectFit='contain'
                                className='position-relative'
                            />
                        </div>
                    <h5>DFC</h5>
                </li>
                <li>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <h5>DFC</h5>
                </li>
                <li>
                        <div className='GroupAvatar position-relative'>
                            <ImageLoader
                                src='/images/GroupAvatarImgOne.jpg'
                                quality={100}
                                layout='fill'
                                objectFit='contain'
                                className='position-relative'
                            />
                        </div>
                    <h5>DFC</h5>
                </li>
                <li>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <h5>DFC</h5>
                </li>
            </ul>
        </div>
        <div className='GroupNext'>
            <Link href="javascript:void(0)">
                <a className='d-inline-flex' >
                    <i className='fi-arrow-long-right'></i>
                </a>
            </Link>
        </div> 
    </div>
  </>
)}




    </>
  )
}

export default NewGroupLast