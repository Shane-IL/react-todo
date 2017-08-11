import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDSeSL8eZLbTEgRAyK4BTyngvx-lMq4uPk",
        authDomain: "react-todo-app-1f5b2.firebaseapp.com",
        databaseURL: "https://react-todo-app-1f5b2.firebaseio.com",
        projectId: "react-todo-app-1f5b2",
        storageBucket: "react-todo-app-1f5b2.appspot.com",
        messagingSenderId: "326054324319"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
