import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCL_95OODmr1BZ-fXzR_bWP0HnG1ENaOwM",
  authDomain: "appvideos-7a639.firebaseapp.com",
  projectId: "appvideos-7a639",
  storageBucket: "appvideos-7a639.appspot.com",
  messagingSenderId: "376319027362",
  appId: "1:376319027362:web:4754003a9af19814a2cffb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;