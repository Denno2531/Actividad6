// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl1I9aMBQ3g62AvtTM6lxtN9e1WiNMraI",
  authDomain: "actividad6-b8bcc.firebaseapp.com",
  projectId: "actividad6-b8bcc",
  storageBucket: "actividad6-b8bcc.appspot.com",
  messagingSenderId: "191420344607",
  appId: "1:191420344607:web:f7babd1b7c80bc6d3a682a",
  measurementId: "G-QXX288YYJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
console.log('Firebase Auth:', auth);
export { auth };