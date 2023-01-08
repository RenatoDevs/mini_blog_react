import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA00eBD2l5FC1uQiDc1ApVNEf5RidSZP84",
  authDomain: "mini-blog-rs.firebaseapp.com",
  projectId: "mini-blog-rs",
  storageBucket: "mini-blog-rs.appspot.com",
  messagingSenderId: "349995460538",
  appId: "1:349995460538:web:5f98de5cff6e96a23c1f83"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};