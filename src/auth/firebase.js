import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// mi configuración de Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function crearUsuario(email, password) {
    return ( 
        new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Inicialización exitosa
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
                // inicio de sesión exitoso
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