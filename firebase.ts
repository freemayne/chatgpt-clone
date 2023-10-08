// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArFpVURqCF5R7wgkvortUpWv_fGhEXy-s",
  authDomain: "chatgpt-clone-37e2f.firebaseapp.com",
  projectId: "chatgpt-clone-37e2f",
  storageBucket: "chatgpt-clone-37e2f.appspot.com",
  messagingSenderId: "593707990135",
  appId: "1:593707990135:web:aea6934e5fec7677f39a72",
};

// Initialize Firebase (singleturn pattern)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
