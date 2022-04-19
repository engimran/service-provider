// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdzbAX8cWKF1U-39V5Pl3Ld8bxSIb7fC0",
    authDomain: "photography-site-8b9c5.firebaseapp.com",
    projectId: "photography-site-8b9c5",
    storageBucket: "photography-site-8b9c5.appspot.com",
    messagingSenderId: "509646434733",
    appId: "1:509646434733:web:cf02364a4fe05e98ec3124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;