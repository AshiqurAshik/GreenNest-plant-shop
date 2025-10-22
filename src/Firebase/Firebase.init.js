// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6l_oTYgrqVtKqLcgAEEmyl2h1Yb-SG4g',
  authDomain: 'green-nest-plant-951de.firebaseapp.com',
  projectId: 'green-nest-plant-951de',
  storageBucket: 'green-nest-plant-951de.firebasestorage.app',
  messagingSenderId: '758912359789',
  appId: '1:758912359789:web:1701c68b56e8c0f8f30e64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
