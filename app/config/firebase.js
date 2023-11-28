// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeSY-w12V7n-6x0c9pT2uy2KMJHBahYr0",
  authDomain: "eng-blog-58c5a.firebaseapp.com",
  projectId: "eng-blog-58c5a",
  storageBucket: "eng-blog-58c5a.appspot.com",
  messagingSenderId: "733748257034",
  appId: "1:733748257034:web:f4681f2c43464dca3f9af3",
  measurementId: "G-5Y1907SCWV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);