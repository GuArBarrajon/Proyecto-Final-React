// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function crearUsuario(email, password) {
    return ( 
        new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log("credenciales ", userCredential);
                const user = userCredential.user;
                console.log(user);
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                reject(error);
            });
        })
    );
}

export function loginEmailPass(email, password) {
    return (
        new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log("credenciales ", userCredential);
                const user = userCredential.user;
                console.log(user);
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                reject(error);
            });
        })
    );
}