import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCqo3YneuLg3u7Nqr3EyAoZ-uPcMF0AjOs",
  authDomain: "realtime-portal.firebaseapp.com",
  databaseURL: "https://realtime-portal.firebaseio.com",
  projectId: "realtime-portal",
  storageBucket: "realtime-portal.appspot.com",
  messagingSenderId: "320031251851"
};
firebase.initializeApp(config);
export default firebase;