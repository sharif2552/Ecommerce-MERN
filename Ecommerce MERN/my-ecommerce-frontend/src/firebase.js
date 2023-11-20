

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_M9GvRQO7noq9EOJdWMjcq0BSxLZLxA8",
  authDomain: "ecommerce-fdc39.firebaseapp.com",
  projectId: "ecommerce-fdc39",
  storageBucket: "ecommerce-fdc39.appspot.com",
  messagingSenderId: "579529756586",
  appId: "1:579529756586:web:9176ace9e43aa21829a5d3",
  measurementId: "G-NFP2C1YFE3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
