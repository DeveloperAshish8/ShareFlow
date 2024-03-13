// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv_U0ojnLlgmd2V59HShRQPa2YHqCstGY",
  authDomain: "shareflow-web.firebaseapp.com",
  projectId: "shareflow-web",
  storageBucket: "shareflow-web.appspot.com",
  messagingSenderId: "927792002059",
  appId: "1:927792002059:web:ca05251ab117a9ad08c30e",
  measurementId: "G-368JDXG8DD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
