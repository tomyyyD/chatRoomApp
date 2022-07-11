import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDiuvG3zI0wyUbqDwbgWOWSmo0micbXJ8k",
    authDomain: "chatroom-2db26.firebaseapp.com",
    databaseURL: 'https://chatroom-2db26-default-rtdb.firebaseio.com/',
    projectId: "chatroom-2db26",
    storageBucket: "chatroom-2db26.appspot.com",
    messagingSenderId: "418645791296",
    appId: "1:418645791296:web:63e0c11f38a8bc9f1a45a5",
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};
