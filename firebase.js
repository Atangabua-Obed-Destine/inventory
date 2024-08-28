// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5IuWha986ga5syFYOp2lcNxSCF8g0EGU",
  authDomain: "inventory-cf923.firebaseapp.com",
  projectId: "inventory-cf923",
  storageBucket: "inventory-cf923.appspot.com",
  messagingSenderId: "65652776470",
  appId: "1:65652776470:web:c7d4e00cb1e083691a1f37",
  measurementId: "G-QNMNH6BVLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
