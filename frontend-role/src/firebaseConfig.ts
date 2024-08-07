// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4MaqBWC4EQSTkh8Rr_Acl3UNrj5dM5Rg",
  authDomain: "frontend-task-ffb0a.firebaseapp.com",
  projectId: "frontend-task-ffb0a",
  storageBucket: "frontend-task-ffb0a.appspot.com",
  messagingSenderId: "695417639506",
  appId: "1:695417639506:web:4d236d07f384c9f455c58b",
  measurementId: "G-E6G56EXRQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);