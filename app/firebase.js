// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnYtF5SappRBudn5kEwGw5jrRe9n1yTKM",
  authDomain: "inventory-tracker-e45bd.firebaseapp.com",
  projectId: "inventory-tracker-e45bd",
  storageBucket: "inventory-tracker-e45bd.appspot.com",
  messagingSenderId: "762613912438",
  appId: "1:762613912438:web:9d6fab44709449c6efa057",
  measurementId: "G-NSTLEVF440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);