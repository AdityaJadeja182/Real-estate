// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d3899.firebaseapp.com",
  projectId: "real-estate-d3899",
  storageBucket: "real-estate-d3899.appspot.com",
  messagingSenderId: "934326406228",
  appId: "1:934326406228:web:0406fdd7fc144d2497f1c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);