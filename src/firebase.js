import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmC5XjgkBzm9o25OhYQqKTKYoewrfUzaw",
  authDomain: "onlineshop-6cfb6.firebaseapp.com",
  projectId: "onlineshop-6cfb6",
  storageBucket: "onlineshop-6cfb6.appspot.com",
  messagingSenderId: "783147288380",
  appId: "1:783147288380:web:979e95385a697b27800039",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
