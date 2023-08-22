import { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
import ImageLoader from '../components/ImageLoader'
import Form  from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import StoriesList from '../components/StoriesList'
import ProfileRight from '../components/ProfileRight'




const TopBar = ({ }) => {

  
  return (
    <>

<div className='topbar'>
    <div className='container-fluid'>
        <Row className='align-items-center'>
            <Col lg={'3'}>
                <div className='kodagologo'>
                    <Link href="/destination-page">
                        <a className='d-inline-flex align-items-center'>
                            <ImageLoader
                                src='/images/weblogo.png'
                                width={147}
                                height={30}
                                alt='Square image'
                            />
                        </a>
                    </Link>
                </div>
            </Col>
            <Col lg={'5'}>
                <StoriesList/>
            </Col>
            <Col lg={'4'}>
                <ProfileRight/>
            </Col>
        </Row>
    </div>
</div>



    </>
  )
}

export default TopBar