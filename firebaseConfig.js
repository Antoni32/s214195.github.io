// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgznTMkxgRTJq34IlkPbv1b7go4Is_tQk",
  authDomain: "e-doctor-923d0.firebaseapp.com",
  projectId: "e-doctor-923d0",
  storageBucket: "e-doctor-923d0.appspot.com",
  messagingSenderId: "321148660890",
  appId: "1:321148660890:web:e20db85c65a91fd1c70323",
  measurementId: "G-BT5VX0BDF8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
