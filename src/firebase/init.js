import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAiXfsW1QS4a4Zmk8QfUd_6BxW0IEvl20s',
    authDomain: 'ninja-smoothies-f90ad.firebaseapp.com',
    databaseURL: 'https://ninja-smoothies-f90ad.firebaseio.com',
    projectId: 'ninja-smoothies-f90ad',
    storageBucket: 'ninja-smoothies-f90ad.appspot.com',
    messagingSenderId: '568739087329',
    appId: '1:568739087329:web:325374a1e8cc993a8ac8a0',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots: true});
// export firestore database
export default firebaseApp.firestore();
