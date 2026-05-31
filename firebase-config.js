// firebase-config.js

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8MHzjq7LltU0VQIS_qA8HLyazHRhf9U",
  authDomain: "sheshield-60dc8.firebaseapp.com",
  projectId: "sheshield-60dc8",
  storageBucket: "sheshield-60dc8.firebasestorage.app",
  messagingSenderId: "323598027550",
  appId: "1:323598027550:web:e179773317ba0edcb3170f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();