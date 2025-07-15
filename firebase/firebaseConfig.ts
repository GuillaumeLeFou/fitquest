// Remplace les valeurs par tes propres clés Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5x1bYkuosxQe8wioj-111CoWe0E1sBW8",
  authDomain: "fitquest-d9ab7.firebaseapp.com",
  projectId: "fitquest-d9ab7",
  storageBucket: "fitquest-d9ab7.firebasestorage.app",
  messagingSenderId: "40652036080",
  appId: "1:40652036080:web:5c103acf4259795c1baf35",
  measurementId: "G-CVRNZ7N8QM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);