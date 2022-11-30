import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2cQXeS13EneqCSXPyrelBcP3YOjrYi1g",
  authDomain: "fire-backend-c14ce.firebaseapp.com",
  projectId: "fire-backend-c14ce",
  storageBucket: "fire-backend-c14ce.appspot.com",
  messagingSenderId: "90749499267",
  appId: "1:90749499267:web:7494fdb4f95227ae2768b6",
  measurementId: "G-7MFFHN3L7P"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
