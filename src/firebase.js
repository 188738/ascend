// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANJzQXLf670cflnseXtX_CiOPRsD7CCUs",
  authDomain: "ascend-723fb.firebaseapp.com",
  projectId: "ascend-723fb",
  storageBucket: "ascend-723fb.firebasestorage.app",
  messagingSenderId: "837715149552",
  appId: "1:837715149552:web:d99ea31b9ba01578d47835",
  measurementId: "G-KY65TYHMBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
