import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
