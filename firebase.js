import * as firebase from '../Database/firebase';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPWSI0yMpDZpyueL5P2nwXKu_-mw8cCj0",
    authDomain: "react-native-firebase-3d61e.firebaseapp.com",
    databaseURL: "https://react-native-firebase-3d61e.appspot.com",
    projectId: "react-native-firebase-3d61e",
    StorageBucket: "react-native-firebase-3d61e.appspot.com",
    messagingSenderId: "0c4d61239c20263b9cf9c5",
    appId: "1:302742147232:android:0c4d61239c20263b9cf9c5",
};
firebase.initializeApp(firebaseConfig);
export default firebase;