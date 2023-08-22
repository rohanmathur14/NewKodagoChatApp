import { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import SignatureCanvas from 'react-signature-canvas'



 
const Signature  = () => {



return (
    <>

<SignatureCanvas penColor='green'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />

    </>
  );
};

export default Signature ;
