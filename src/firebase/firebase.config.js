// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF12DwfR3pbfpByryBf6Kiz9I_2Jmk6Lw",
  authDomain: "the-news-dragon-74cb8.firebaseapp.com",
  projectId: "the-news-dragon-74cb8",
  storageBucket: "the-news-dragon-74cb8.appspot.com",
  messagingSenderId: "213922159462",
  appId: "1:213922159462:web:19b7e022a9889c5108c6a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app