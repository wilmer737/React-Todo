import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCZ2xBJlgcBeeHFx3DfrT5-unTvOxI5-1I",
    authDomain: "guerra-todo-app.firebaseapp.com",
    databaseURL: "https://guerra-todo-app.firebaseio.com",
    storageBucket: "guerra-todo-app.appspot.com",
    messagingSenderId: "119803997468"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0',
    },
    isRunning: true,
    user: {
        name: 'Wilmer',
        age: 25,
    },
});
/*

var notesRef = firebaseRef.child('notes');
notesRef.on('child_added', (snapshot) => {
    console.log('Child Added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('Child Changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('Child Removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({text: 'Walk Diego!'});
console.log('Todo Id', newNoteRef.key);*/

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('Child Added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Walk the dog'});
todosRef.push({text: 'Kickflip'});