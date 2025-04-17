import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_API_KEY,
  authDomain: "netflixgptai-6d16b.firebaseapp.com",
  projectId: "netflixgptai-6d16b",
  storageBucket: "netflixgptai-6d16b.firebasestorage.app",
  messagingSenderId: "38419130882",
  appId: "1:38419130882:web:81a4cbb12ea6b956e4d51b",
  measurementId: "G-5J27TYPCL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()