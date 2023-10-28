import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import {
  apiKey,
  appIdFirebase,
  authDomain,
  messagingSenderId,
  projectId,
  storageBucket,
} from "../config/settings";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appIdFirebase,
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebaseAuth.initializeAuth(app);
