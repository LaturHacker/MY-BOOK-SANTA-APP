import firebase from 'firebase';

require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyCWaopHU4isIyKNliP2Nk5MVzwvKUdDlPs",
  authDomain: "booksantaapp-616f6.firebaseapp.com",
  databaseURL: "https://booksantaapp-616f6.firebaseio.com",
  projectId: "booksantaapp-616f6",
  storageBucket: "booksantaapp-616f6.appspot.com",
  messagingSenderId: "445980364275",
  appId: "1:445980364275:web:32cc8cdfdd7bd5bdd91686"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();