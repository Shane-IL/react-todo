import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDSeSL8eZLbTEgRAyK4BTyngvx-lMq4uPk",
    authDomain: "react-todo-app-1f5b2.firebaseapp.com",
    databaseURL: "https://react-todo-app-1f5b2.firebaseio.com",
    projectId: "react-todo-app-1f5b2",
    storageBucket: "react-todo-app-1f5b2.appspot.com",
    messagingSenderId: "326054324319"
};

firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

//calleing set on ref directly completely wipes data at current ref because using root ref
firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: "Bob",
        age: 30
    }
});

const notesRef = firebaseRef.child('notes');

const newNoteRef = notesRef.push({
    text: 'Walk the dinosaur'
});

// firebaseRef.on('value', (snapshot)=>{
//     console.log('Updated DB', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//     name: "Ned",
//     age: 24
// });
//
// firebaseRef.update({
//     'app/name': "Todo Application"
// });

// firebaseRef.child('app').once('value').then(
//     (snapshot)=>{
//         console.log("Got the DB", snapshot.val());
//     },
//     (error)=>console.log('Unable to fetch value.', error)
// );
//
// firebaseRef.on('value', (snapshot)=>{
//     console.log("Got Value", snapshot.val());
// });
//
// //passing in the callback passed to 'on' rmeoves only that callback
// firebaseRef.off();
//
// firebaseRef.update({isRunning: true});

/*************2 ways to remove data *********************/

//firebaseRef.child('app/name').remove();

//firebaseRef.child('app').update({
//     version: '1.0.1',
//     name:  null
// });

////2 ways to update////

// firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//     'name': 'Todo Application'
// })
