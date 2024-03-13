"use client";
import { app } from "@/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import SharedPage from "./_components/SharedPage";

const page = ({ params }) => {
  const db = getFirestore(app);
  const [file, setFile] = useState();

  const fileData = async () => {
    const docRef = doc(db, "uploads", params?.fileid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    console.log(params?.fileid);
    params?.fileid && fileData();
  }, []);
  return (
    <div>
      <SharedPage file={file} />
    </div>
  );
};

export default page;
