"use client";
const bcrypt = require("bcryptjs");
import React, { useEffect, useState } from "react";
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import FileShare from "./_components/FileShare";
// import bcrypt from "bcryptjs";

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
    const securedPassword = await bcrypt.hash(password, 10);
    console.log(securedPassword);
    await updateDoc(docRef, {
      password: securedPassword || "",
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
