import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC48IWuQ_aqH72ecfAMpbQMf5rP7O52ohQ",
  authDomain: "physicare-1f88a.firebaseapp.com",
  projectId: "physicare-1f88a",
  storageBucket: "physicare-1f88a.appspot.com",
  messagingSenderId: "331701498553",
  appId: "1:331701498553:web:c94a2246727d420b5c6168",
  measurementId: "G-KLVGPVQ13E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
