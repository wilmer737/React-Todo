import firebase from 'firebase';

try {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyCZ2xBJlgcBeeHFx3DfrT5-unTvOxI5-1I",
        authDomain: "guerra-todo-app.firebaseapp.com",
        databaseURL: "https://guerra-todo-app.firebaseio.com",
        storageBucket: "guerra-todo-app.appspot.com",
        messagingSenderId: "119803997468"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;