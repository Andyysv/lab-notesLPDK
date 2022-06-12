import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () =>
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // eslint-disable-next-line no-unused-vars
    const token = credential.accessToken;
    // The signed-in user info.
    // eslint-disable-next-line no-unused-vars
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // eslint-disable-next-line no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line no-unused-vars
    const errorMessage = error.message;
    // The email of the user's account used.
    // eslint-disable-next-line no-unused-vars
    const email = error.email;
    // The AuthCredential type that was used.
    // eslint-disable-next-line no-unused-vars
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  export const Logout = () =>
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });