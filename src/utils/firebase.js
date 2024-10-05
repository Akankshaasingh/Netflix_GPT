// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuDkyOpIVvHtSZ49KS286ON1dUCPJWpY0",
  authDomain: "netflixgpt-c2f5b.firebaseapp.com",
  projectId: "netflixgpt-c2f5b",
  storageBucket: "netflixgpt-c2f5b.appspot.com",
  messagingSenderId: "726723810607",
  appId: "1:726723810607:web:7a41d5a315129aa530fdda",
  measurementId: "G-PL8E783N04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);