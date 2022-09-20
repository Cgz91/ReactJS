// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjaYWdWwu-2GMfdmYH3N5mk0IwKlK9I2Q",
  authDomain: "chloe-tejidos.firebaseapp.com",
  projectId: "chloe-tejidos",
  storageBucket: "chloe-tejidos.appspot.com",
  messagingSenderId: "934167600338",
  appId: "1:934167600338:web:1b10220a35b9c4e3d0210b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

