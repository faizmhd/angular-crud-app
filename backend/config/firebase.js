// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

let firebaseConfig = {
    apiKey: "AIzaSyB7hCEx1bSi0uojfDx8xbei0tRmdoGc074",
    authDomain: "angular-dev-9d93e.firebaseapp.com",
    databaseURL: "https://angular-dev-9d93e.firebaseio.com",
    projectId: "angular-dev-9d93e",
    storageBucket: "angular-dev-9d93e.appspot.com",
    messagingSenderId: "455606730748",
    appId: "1:455606730748:web:4ea112d2c5c35b25adbc79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);