"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import UploadForm from "./_components/UploadForm";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { shortURL } from "@/app/_components/_utils/ShortURL";
import { useRouter } from "next/navigation";
import Sucess from "./Sucess";

const Upload = () => {
  const storage = getStorage(app);
  const db = getFirestore(app);
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const [uploading, setuploading] = useState();
  const router = useRouter();

  //firebase configuration
  const uploadFile = (file) => {
    const metadata = {
      contentType: file?.type,
    };
    const storageRef = ref(storage, "uploads/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type);

    //progress bar data from firebase
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (e) => console.error(e, "err"),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setuploading(true);
            saveInfo(file, downloadURL);
          })
          .catch((e) => {
            console.error(e, "upload");
          });
      }
    );

    const saveInfo = async (file, fileURL) => {
      const DocId = shortURL().toString();
      // setid(DocId);
      await setDoc(doc(db, "uploads", DocId), {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileURL,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        password: "",
        id: DocId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "file/" + DocId,
      });

      router.push("/file-preview/" + DocId);
    };
  };

  useEffect(() => {
    progress == 100 && setTimeout(() => {}, 2000);
  }, [progress == 100]);

  // // pushing route
  // useEffect(() => {
  //   uploading &&
  //     setTimeout(() => {
  //       setuploading(false);
  //       router.push("/file-preview/" + id);
  //     }, 2000);
  // }, [uploading == true]);

  return (
    <div className="p-5 px-8 md:p-28">
      <h2 className="text-xl font-semibold text-center m-5 ">
        Super <strong className="text-primary font-semibold">simple</strong>{" "}
        file sharing!
      </h2>
      <UploadForm
        uploadbuttonClicked={(file) => {
          uploadFile(file);
        }}
        progress={progress}
      />
      {uploading ? <Sucess /> : null}
    </div>
  );
};

export default Upload;
