// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmcb79bd89zC7Fuw_eOKNKQ42wLugvpxE",
    authDomain: "ascend-project-2024.firebaseapp.com",
    projectId: "ascend-project-2024",
    storageBucket: "ascend-project-2024.firebasestorage.app",
    messagingSenderId: "589992568590",
    appId: "1:589992568590:web:3750aeff785f5c9b2d995f"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
