import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'

const config = {
  apiKey: "AIzaSyDZvI52Qh5tD1oBZOyVY-R8UqUZMq1mZXk",
  authDomain: "am4react.firebaseapp.com",
  databaseURL: "https://am4react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "am4react",
  storageBucket: "am4react.appspot.com",
  messagingSenderId: "25163535176",
  appId: "1:25163535176:web:4275eaafdcb0ddd7e8597d",
  measurementId: "G-HZJ56D3X5M"
}
 
firebase.initializeApp(config)

export default firebase
  
export const database = firebase.database()
