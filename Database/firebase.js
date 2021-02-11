import firebase from 'firebase';

import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCB0DQ6_dXtPWnanuXX_L_dfrP09fPWl7A',
  authDomain: 'oreview-76c6b.firebaseapp.com',
  databaseURL: 'https://oreview-76c6b-default-rtdb.firebaseio.com',
  projectId: 'oreview-76c6b',
  storageBucket: 'oreview-76c6b.appspot.com',
  messagingSenderId: '686236266559',
  appId: '1:686236266559:web:7c812cd2c95747fe76488a',
  measurementId: 'G-P7KHZZGTLD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
