import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxT4gQYdiAdlidmS8ySN2knsnvRQhml2I",
  authDomain: "e-comerce-react-coder-4762a.firebaseapp.com",
  projectId: "e-comerce-react-coder-4762a",
  storageBucket: "e-comerce-react-coder-4762a.firebasestorage.app",
  messagingSenderId: "801081163424",
  appId: "1:801081163424:web:97509effe9ecedf20313c5",
  measurementId: "G-8EF1KBE3T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);