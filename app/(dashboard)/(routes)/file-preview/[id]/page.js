"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import FileShare from "./_components/FileShare";

const FilePreview = ({ params }) => {
  const db = getFirestore(app);
  const [data, setdata] = useState();

  const fileData = async () => {
    const docRef = doc(db, "uploads", params?.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setdata(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    // console.log(params?.id);
    params?.id && fileData();
  }, []);

  const id = params?.id;
  const onPasswordSave = async (password) => {
    const docRef = doc(db, "uploads", id);
    // console.log(password);
    await updateDoc(docRef, {
      password: password || "",
    });
  };
  return (
    <div>
      <FileShare
        file={data || {}}
        onPasswordSave={(password) => {
          onPasswordSave(password);
        }}
      />
    </div>
  );
};

export default FilePreview;
