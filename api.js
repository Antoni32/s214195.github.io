import { db, auth } from './firebaseConfig';

export async function fetchData() {
  try {
    const snapshot = await db.collection('users').get();
    const users = [];
    snapshot.forEach(doc => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.error('Błąd podczas pobierania danych z Firestore:', error);
    return [];
  }
}

export async function login(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential;
  } catch (error) {
    console.error('Błąd podczas logowania:', error);
    return null;
  }
}

export async function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    const result = await auth.signInWithPopup(provider);
    return result;
  } catch (error) {
    console.error('Błąd logowania przez Google:', error);
    return null;
  }
}

export async function loginWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();

  try {
    const result = await auth.signInWithPopup(provider);
    return result;
  } catch (error) {
    console.error('Błąd logowania przez Facebook:', error);
    return null;
  }
}