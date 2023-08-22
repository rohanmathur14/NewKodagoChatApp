import { useEffect,useState } from 'react'
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import RackList from '../racks/RackList';
import CreateFileRack from '../racks/CreateFileRack';






const FileRacks = ({GroupId}) => {

  
  return (
    <>

<div className='FileRacks'>
    <h4>File Racks</h4>
    {/* <CreateFileRack/> */}
    <RackList GroupId={GroupId}/>

</div>

    </>
  )
}

export default FileRacks