import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyABuhvqJpDpfslSH_PfJENh80JUFAL9NWg",
    authDomain: "todo-641c2.firebaseapp.com",
    databaseURL: "https://todo-641c2.firebaseio.com",
    projectId: "todo-641c2",
    storageBucket: "todo-641c2.appspot.com",
    messagingSenderId: "467528014817",
    appId: "1:467528014817:web:44c537d846bda320a5d0a0"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;