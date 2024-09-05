// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBblMbwVxTFh5Vy7VoPtgRgCYHbEQbQyqM",
  authDomain: "react-dragon-news-auth-e187b.firebaseapp.com",
  projectId: "react-dragon-news-auth-e187b",
  storageBucket: "react-dragon-news-auth-e187b.appspot.com",
  messagingSenderId: "614649414797",
  appId: "1:614649414797:web:69b16ab3b0c072d5f30ec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;