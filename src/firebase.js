// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
const firebaseAPI = process.env.REACT_APP_FIREBASE_KEY
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID

const firebaseConfig = {
  apiKey: firebaseAPI,
  authDomain: "relu-authentication-ae54f.firebaseapp.com",
  projectId: firebaseProjectId,
  storageBucket: "relu-authentication-ae54f.appspot.com",
 messagingSenderId : "16845284306",
  appId: "1:16845284306:web:ec7ddca38ceb0163849e0b",
  measurementId: "G-RJCNEJGV46"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

