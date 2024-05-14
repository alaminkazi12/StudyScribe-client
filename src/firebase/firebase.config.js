import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyAT22Vc6ZdC5gNvXXuYWx7EpKTfVmZoKAQ",
  authDomain: "studyscribe-a50b5.firebaseapp.com",
  projectId: "studyscribe-a50b5",
  storageBucket: "studyscribe-a50b5.appspot.com",
  messagingSenderId: "48999924744",
  appId: "1:48999924744:web:9f70e72aeaeeab0cf77dbd",
};

import.meta.env.VITE_APIKEY;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
