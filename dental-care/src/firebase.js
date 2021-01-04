import firebase from 'firebase/app'

import 'firebase/auth'


const Config = {
  apiKey: "AIzaSyDIHGVz8eOWwalYQ8wEnX1KJ1jG6zRnlB4",
  authDomain: "dashboard-spinebiz.firebaseapp.com",
  databaseURL: "https://dashboard-spinebiz.firebaseio.com",
  projectId: "dashboard-spinebiz",
  storageBucket: "dashboard-spinebiz.appspot.com",
  messagingSenderId: "729316181230",
  appId: "1:729316181230:web:5d80763fff191392325fff",
  measurementId: "G-7R6RY207WH"
  };

  
  firebase.initializeApp(Config)

  export default firebase


 