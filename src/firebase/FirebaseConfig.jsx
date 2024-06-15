// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD8JtUetdtac0aXjs_hikE_4tiUPR9oepY",
  authDomain: "myfirstapp-13c20.firebaseapp.com",
  projectId: "myfirstapp-13c20",
  storageBucket: "myfirstapp-13c20.appspot.com",
  messagingSenderId: "1094061680550",
  appId: "1:1094061680550:web:e0827c222d52a36b2b9167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export{fireDB,auth}