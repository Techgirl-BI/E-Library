// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa19soVprxPHBQ64ntHHgKk1dMXKizFjs",
  authDomain: "online-book-store-38a8c.firebaseapp.com",
  projectId: "online-book-store-38a8c",
  storageBucket: "online-book-store-38a8c.appspot.com",
  messagingSenderId: "861609902245",
  appId: "1:861609902245:web:8134e897284b8fded04d4c",
  measurementId: "G-7H5ZQRBBYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app