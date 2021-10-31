import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjhZYS1zzVAAhA9LF7rNHxyI-JAT-RXKQ",
    authDomain: "netflix-clone-a5a42.firebaseapp.com",
    projectId: "netflix-clone-a5a42",
    storageBucket: "netflix-clone-a5a42.appspot.com",
    messagingSenderId: "665899201254",
    appId: "1:665899201254:web:dac3e0810ac8d09a408127"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  export {auth}
