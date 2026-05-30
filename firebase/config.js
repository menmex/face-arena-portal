// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh2NIz-ZZ7VXn_FLSIeDWlIGHKiDgjhos",
  authDomain: "face-arena-portal.firebaseapp.com",
  projectId: "face-arena-portal",
  storageBucket: "face-arena-portal.appspot.com",
  messagingSenderId: "149345956695",
  appId: "1:149345956695:web:e670f802e32b08cbe34412",
  measurementId: "G-Z35DH5D3L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in your project
export { app, analytics, db, storage };
