import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCoUNC9G0Lvz4cwhEBzDzQv1nygLdDD7gw",
  authDomain: "student-attendace-app.firebaseapp.com",
  projectId: "student-attendace-app",
  databaseURL:"https://student-attendace-app-default-rtdb.firebaseio.com",
  storageBucket: "student-attendace-app.appspot.com",
  messagingSenderId: "207538124521",
  appId: "1:207538124521:web:db7ed257d58f392b51e278"
};
 firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 
