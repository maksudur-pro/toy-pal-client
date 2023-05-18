// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMVhxIBmLnTg-BzxsoJtfDIXBV3w8Q6uw",
  authDomain: "toy-pal.firebaseapp.com",
  projectId: "toy-pal",
  storageBucket: "toy-pal.appspot.com",
  messagingSenderId: "388178801972",
  appId: "1:388178801972:web:28a2c5365e1d7e4fcaa161",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
