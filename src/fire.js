import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyConMlWd9By3h_6CbwhM9kb6ZcqGc8GBr8",
    authDomain: "reactregisterhellobuild.firebaseapp.com",
    projectId: "reactregisterhellobuild",
    storageBucket: "reactregisterhellobuild.appspot.com",
    messagingSenderId: "406536498199",
    appId: "1:406536498199:web:9a0d04f5cf38b1adae8052"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;