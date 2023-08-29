import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RackView from "../../components/racks/RackView";
import { FileRackProvider } from "../../components/FileRackContext";

const FileRackRecordsPage = (props) => {
  const router = useRouter();
  // Access the passed arguments from the query object
  const { fileracksrecord } = router.query; 
  const sheet_id = fileracksrecord?.[0] || "";
  const groupId = fileracksrecord?.[1] || "";
  const userToken = fileracksrecord?.[2] || "";
  const userId = fileracksrecord?.[3] || "";

  //console.log('sheetId----',sheet_id, groupId, userToken,userId )
  
  return (
    <>
      <FileRackProvider sheetId={sheet_id} groupId={groupId}  userId={userId} userToken={userToken}>
        <RackView/>
      </FileRackProvider>
    </>
  );
};

export default FileRackRecordsPage;
