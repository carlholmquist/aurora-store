import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyACFdpCYVK9Rs5N8_vS8OzqcO6NxQmEAp4",
    authDomain: "aurora-store.firebaseapp.com",
    databaseURL: "https://aurora-store.firebaseio.com",
    projectId: "aurora-store",
    storageBucket: "aurora-store.appspot.com",
    messagingSenderId: "336678135431",
    appId: "1:336678135431:web:755df86b31f9fab1f6fa22",
    measurementId: "G-15SQWB5KYY"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;