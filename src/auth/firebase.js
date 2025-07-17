// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2jiiEnpWHm7ZSKB70u4_FFUv3AZeGxuA",
    authDomain: "nuevo-3f478.firebaseapp.com",
    projectId: "nuevo-3f478",
    storageBucket: "nuevo-3f478.firebasestorage.app",
    messagingSenderId: "140600174706",
    appId: "1:140600174706:web:73a10d9b3c2f97e22cbaeb"
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