import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import ImageLoader from '../components/ImageLoader'
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import NewGroupLast from '../components/NewGroupLast'



const NewGroupAdd = ({ }) => {
    const [showContent, setShowContent] = useState(true);
    

    const handleClick = () => {
        setShowContent(!showContent);
    };

  
  return (
    <>

{showContent && (
    <div className="NewGroupAdd position-relative">
        <div className='NewGroupAddHead d-flex align-items-center mb-3'>
            <Link href="javascript:void(0);">
                <a className='d-inline-flex'>
                    <i className='fi-chevron-left'></i>
                </a>
            </Link>
            <h6 className='mb-0 ms-2'>New Group</h6>
        </div>
        <div className='ChatGroupSearch position-relative mb-3'>
            <Form.Group controlId='text-input' className='GroupSearchInput'>
                <Form.Control placeholder='Search Contact' />
            </Form.Group>
            <i className='fi-search'></i>
        </div> 
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
                        <div className='CrossCheck'>
                            <i className='fi-x'></i>
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
                    <div className='CrossCheck'>
                    <i className='fi-x'></i>
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
                        <div className='CrossCheck'>
                            <i className='fi-x'></i>
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
                    <div className='CrossCheck'>
                    <i className='fi-x'></i>
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
                        <div className='CrossCheck'>
                            <i className='fi-x'></i>
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
                    <div className='CrossCheck'>
                    <i className='fi-x'></i>
                    </div>
                    <h5>DFC</h5>
                </li>
            </ul>
        </div> 
        <div className='ChatGroupListMain '>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>DFC</h4>
                        <p>Sending the Update</p>
                    </div>
                    <div className='SelectCheck'>
                        <i className='fi-check'></i>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>DFC</h4>
                        <p>Sending the Update</p>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>NHAI</h4>
                        <p>You: Ok, See you in To You: Ok, See you in To</p>
                    </div>
                    <div className='SelectCheck'>
                        <i className='fi-check'></i>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>DFC</h4>
                        <p>Sending the Update</p>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>DFC</h4>
                        <p>Sending the Update</p>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>NHAI</h4>
                        <p>You: Ok, See you in To You: Ok, See you in To</p>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>NHAI</h4>
                        <p>You: Ok, See you in To You: Ok, See you in To</p>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>NHAI</h4>
                        <p>You: Ok, See you in To You: Ok, See you in To</p>
                    </div>
                </div>
            </div>
            <div className='ChatGroupListBox d-flex justify-content-between align-items-center position-relative'>
                <div className='ChatGroupListLeft d-flex align-items-center'>
                    <div className='GroupAvatar position-relative'>
                        <ImageLoader
                            src='/images/GroupAvatarImgOne.jpg'
                            quality={100}
                            layout='fill'
                            objectFit='contain'
                            className='position-relative'
                        />
                    </div>
                    <div className='GroupAvatarName'>
                        <h4>NHAI</h4>
                        <p>You: Ok, See you in To You: Ok, See you in To</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='GroupNext'>
            <Link href="javascript:void(0)">
                <a className='d-inline-flex' onClick={handleClick}>
                    <i className='fi-arrow-long-right'></i>
                </a>
            </Link>
        </div>    
    </div>
)}

{!showContent && (
    <NewGroupLast/>       
)}



    </>
  )
}

export default NewGroupAdd