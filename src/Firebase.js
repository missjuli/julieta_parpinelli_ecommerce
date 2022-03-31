import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDj-GbgQOeNkl0Ls0lO4GweJwOL9L8wgeo",
  authDomain: "jazaar---e-commerce.firebaseapp.com",
  projectId: "jazaar---e-commerce",
  storageBucket: "jazaar---e-commerce.appspot.com",
  messagingSenderId: "283549677236",
  appId: "1:283549677236:web:ec8bc6a72373c81bb609e1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
