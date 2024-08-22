import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEh2VIIMRcZtbea4wMEPYXGXoJ8d3CQ38",
    authDomain: "netflix-clone-b619a.firebaseapp.com",
    projectId: "netflix-clone-b619a",
    storageBucket: "netflix-clone-b619a.appspot.com",
    messagingSenderId: "113863296904",
    appId: "1:113863296904:web:02d0a5961b7dbd4605dc3d"
};

const firebaseApp = firebase.initializeApp( firebaseConfig )
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };