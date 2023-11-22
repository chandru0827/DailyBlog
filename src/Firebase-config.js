// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx7o3Y5EbcEpJ4JdWM9V5oPSJr-pk8d-E",
  authDomain: "dailyblog-nm.firebaseapp.com",
  projectId: "dailyblog-nm",
  storageBucket: "dailyblog-nm.appspot.com",
  messagingSenderId: "692153291859",
  appId: "1:692153291859:web:4898f95fae4534f21aa2a6",
  measurementId: "G-C9XP250CSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
