// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdxhotu_Ua4bZXRJCEXIznJTah6roIJg0",
  authDomain: "freelancer-task-app.firebaseapp.com",
  projectId: "freelancer-task-app",
  storageBucket: "freelancer-task-app.appspot.com", // ✅ fixed this line
  messagingSenderId: "326482085335",
  appId: "1:326482085335:web:3887a2d65b788018e0f792",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app; 
