import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1Na7XS6NsSfchysMFkgxeRuVXa38rAQ8",
    authDomain: "fir-realtime-database-cd25a.firebaseapp.com",
    databaseURL: "https://fir-realtime-database-cd25a.firebaseio.com",
    projectId: "fir-realtime-database-cd25a",
    storageBucket: "fir-realtime-database-cd25a.appspot.com",
    messagingSenderId: "28545622251",
    appId: "1:28545622251:web:6a977ea4f77aa036429eae"
};

firebase.initializeApp(firebaseConfig);

export default firebase;