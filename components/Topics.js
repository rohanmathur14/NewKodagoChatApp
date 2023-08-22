import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import ImageLoader from './ImageLoader'
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import From from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'





const Topics = ({ }) => {

    // when addsubtopic add then form open code here   

const [showForm,setShowForm] = useState(false);

const topicAddForm = () =>{
    setShowForm(true);
}

// when Done icon then form hide code here   

const topicAddDone = () => {
    setShowForm(false);
};

// Second Child onclick Last Child show code here
const [isLastChildVisible, setLastChildVisible] = useState(false);

const showLastTopic = () => {
    setLastChildVisible(!isLastChildVisible);
  };


  return (
    <>


    <>

    <div className='Topics'>
        <div className={`TopicsList px-4 py-4 position-relative`}>
            <div className='TopicsBox'>
                <div className='TopicsBoxInner'>
                    <div className='position-relative mb-1 d-flex align-items-center'>
                        <Form.Group controlId='text-input' className='GroupSearchInput'>
                            <Form.Control placeholder='Type topics' />
                        </Form.Group>
                        <div className='TopicsAdd d-flex align-items-center ms-2'>
                            <Link href="javascript:void(0)">
                                <a className='d-inline-flex align-items-center ms-2'>
                                    <OverlayTrigger
                                        placement='top'
                                        overlay={<Tooltip>Add New</Tooltip>}>
                                    <i className='fi-plus'></i>
                                    </OverlayTrigger>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='position-relative'>
                    <div className='TopicsSubList'>
                        <div className='TopicsSubListMain'>
                            <div className='TopicsSubListLine d-flex justify-content-between'>
                                <div className='d-flex align-items-center TopicsSubListLeft'>
                                    <i className='fi-chevron-down'></i>
                                    <h6 className='m-0'>Topic 1</h6>
                                </div>
                                <div className=' d-flex align-items-center ms-2'>
                                    <div className='TopicsAdd'>
                                        <Link href="javascript:void(0)">
                                            <a className='d-inline-flex align-items-center ms-2' onClick={topicAddForm}>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={<Tooltip>Add New SubTopic</Tooltip>}>
                                                <i className='fi-plus'></i>
                                                </OverlayTrigger>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='EditDeleteMenu ms-2'>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={<Tooltip>Action</Tooltip>}>
                                            <Dropdown >
                                                <Dropdown.Toggle variant=''>
                                                    <i className='fi-dots-vertical'></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className='my-1'>
                                                    <Dropdown.Item className='px-2' eventKey='1'> <i className='fi-editt'></i> Edit</Dropdown.Item>
                                                    <Dropdown.Divider className='mx-2 my-1' />
                                                    <Dropdown.Item className='px-2' eventKey='2'><i className='fi-trash'></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>

                            {/* Topic AddForm  code here */}
                            {showForm &&
                                <div className='TopicAddForm'>
                                    <div className='d-flex align-items-center'>
                                        <Form.Group controlId='input-small' className='my-2 w-100'>
                                            <Form.Control size='sm' placeholder='Add SubTopic' />
                                        </Form.Group>
                                        <div className='TopicAddFormRight TopicsAdd  d-flex align-items-center ms-2'>
                                            <Link href="javascript:void(0)">
                                                <a className='d-inline-flex align-items-center ms-2 TopicsinputDelete'>
                                                    <OverlayTrigger
                                                        placement='top'
                                                        overlay={<Tooltip>Remove</Tooltip>}>
                                                        <i className='fi-minus'></i>
                                                    </OverlayTrigger>
                                                </a>
                                            </Link>
                                            <Link href="/">
                                                <a className='d-inline-flex align-items-center ms-2 Topicsinputok' onClick={topicAddDone}>
                                                    <OverlayTrigger
                                                        placement='top'
                                                        overlay={<Tooltip>Done</Tooltip>}>
                                                        <i className='fi-check'></i>
                                                    </OverlayTrigger>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* Topics Second Step Code here */}

                            <div className='TopicsSubChild'>
                                <div className='TopicsSubListLine d-flex justify-content-between'>
                                    <div className='d-flex align-items-center TopicsSubListLeft' onClick={showLastTopic}>
                                        <i className='fi-chevron-down'></i>
                                        <h6 className='m-0'>Topic 1_1</h6>
                                    </div>
                                    <div className=' d-flex align-items-center ms-2'>
                                        <div className='TopicsAdd'>
                                            <Link href="javascript:void(0)">
                                                <a className='d-inline-flex align-items-center ms-2' onClick={topicAddForm}>
                                                    <OverlayTrigger
                                                        placement='top'
                                                        overlay={<Tooltip>Add New SubTopic</Tooltip>}>
                                                    <i className='fi-plus'></i>
                                                    </OverlayTrigger>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className='EditDeleteMenu ms-2'>
                                            <OverlayTrigger
                                                placement='top'
                                                overlay={<Tooltip>Action</Tooltip>}>
                                                <Dropdown >
                                                    <Dropdown.Toggle variant=''>
                                                        <i className='fi-dots-vertical'></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='my-1'>
                                                        <Dropdown.Item className='px-2' eventKey='1'> <i className='fi-editt'></i> Edit</Dropdown.Item>
                                                        <Dropdown.Divider className='mx-2 my-1' />
                                                        <Dropdown.Item className='px-2' eventKey='2'><i className='fi-trash'></i> Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </div>
                                {/* TopicAddForm  code here */}
                                {showForm &&
                                    <div className='TopicAddForm'>
                                        <div className='d-flex align-items-center'>
                                            <Form.Group controlId='input-small' className='my-2 w-100'>
                                                <Form.Control size='sm' placeholder='Add SubTopic' />
                                            </Form.Group>
                                            <div className='TopicAddFormRight TopicsAdd  d-flex align-items-center ms-2'>
                                                <Link href="javascript:void(0)">
                                                    <a className='d-inline-flex align-items-center ms-2 TopicsinputDelete'>
                                                        <OverlayTrigger
                                                            placement='top'
                                                            overlay={<Tooltip>Remove</Tooltip>}>
                                                            <i className='fi-x'></i>
                                                        </OverlayTrigger>
                                                    </a>
                                                </Link>
                                                <Link href="/">
                                                    <a className='d-inline-flex align-items-center ms-2 Topicsinputok' onClick={topicAddDone}>
                                                        <OverlayTrigger
                                                            placement='top'
                                                            overlay={<Tooltip>Done</Tooltip>}>
                                                            <i className='fi-check'></i>
                                                        </OverlayTrigger>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {/* Topics Third Step Code here */}

                                {isLastChildVisible && (
                                    <div className={`TopicsSubLastStep`}>
                                        <div className='TopicsSubListLine d-flex justify-content-between'>
                                            <div className='d-flex align-items-center TopicsSubListLeft'>
                                                <h6 className='m-0'>Topic 1_1_1</h6>
                                            </div>
                                            <div className=' d-flex align-items-center ms-2'>
                                                <div className='EditDeleteMenu ms-2'>
                                                    <OverlayTrigger
                                                        placement='top'
                                                        overlay={<Tooltip>Action</Tooltip>}>
                                                        <Dropdown >
                                                            <Dropdown.Toggle variant=''>
                                                                <i className='fi-dots-vertical'></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className='my-1'>
                                                                <Dropdown.Item className='px-2' eventKey='1'> <i className='fi-editt'></i> Edit</Dropdown.Item>
                                                                <Dropdown.Divider className='mx-2 my-1' />
                                                                <Dropdown.Item className='px-2' eventKey='2'><i className='fi-trash'></i> Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TopicAddForm  code here */}
                                        {showForm &&
                                            <div className='TopicAddForm'>
                                                <div className='d-flex align-items-center'>
                                                    <Form.Group controlId='input-small' className='my-2 w-100'>
                                                        <Form.Control size='sm' placeholder='Add SubTopic' />
                                                    </Form.Group>
                                                    <div className='TopicAddFormRight TopicsAdd  d-flex align-items-center ms-2'>
                                                        <Link href="javascript:void(0)">
                                                            <a className='d-inline-flex align-items-center ms-2 TopicsinputDelete'>
                                                                <OverlayTrigger
                                                                    placement='top'
                                                                    overlay={<Tooltip>Remove</Tooltip>}>
                                                                    <i className='fi-minus'></i>
                                                                </OverlayTrigger>
                                                            </a>
                                                        </Link>
                                                        <Link href="javascript:void(0)">
                                                            <a className='d-inline-flex align-items-center ms-2 Topicsinputok' onClick={topicAddDone}>
                                                                <OverlayTrigger
                                                                    placement='top'
                                                                    overlay={<Tooltip>Done</Tooltip>}>
                                                                    <i className='fi-check'></i>
                                                                </OverlayTrigger>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className='ActionButton text-end pt-2 px-3' >
            <Button className='me-2' type='submit' variant='primary'>Create</Button>
            <Button className='Cancel-btn' type='submit' variant='outline-primary'>Cancel</Button>
        </div> 

    </div>

</>




    </>
  )
}

export default Topics