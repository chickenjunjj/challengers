// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOOG7jSyKZHCxxd2MtulQ6eK1mpaA8Nko",
  authDomain: "challengers-fab2d.firebaseapp.com",
  projectId: "challengers-fab2d",
  storageBucket: "challengers-fab2d.firebasestorage.app",
  messagingSenderId: "968327885385",
  appId: "1:968327885385:web:894841299e2ce37b188598",
  measurementId: "G-C55NP0VZTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
