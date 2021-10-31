import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFv6jJWkrLfuAQen7z3-pSMI-KDau71e8",
  authDomain: "business-card-maker-2d6ea.firebaseapp.com",
  projectId: "business-card-maker-2d6ea",
  storageBucket: "business-card-maker-2d6ea.appspot.com",
  messagingSenderId: "293226709419",
  appId: "1:293226709419:web:43edac292163092e5f92ee",
  measurementId: "G-C0J4GKX72B"
};

const fire = initializeApp(firebaseConfig);

export default fire;