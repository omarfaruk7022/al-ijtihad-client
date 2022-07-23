
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3nAOaWZ-nWlLS4KMh--4u5m6ddieJcyI",
  authDomain: "al-ijtihad.firebaseapp.com",
  projectId: "al-ijtihad",
  storageBucket: "al-ijtihad.appspot.com",
  messagingSenderId: "745002358100",
  appId: "1:745002358100:web:5c1964184d03e094b6a4c1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;