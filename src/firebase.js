// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeqNkAU3KfVc7pBAe2ju7EysYYLxzH1qM",
  authDomain: "todo-app-6040a.firebaseapp.com",
  projectId: "todo-app-6040a",
  storageBucket: "todo-app-6040a.appspot.com",
  messagingSenderId: "188062256456",
  appId: "1:188062256456:web:f60743a7ea7f0dcc4b777d",
  measurementId: "G-ZTJ7C9CGC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
