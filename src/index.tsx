import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBLaYk-2wCn0Oo8J-OXvUvDl3AJws4Ib1E',
    authDomain: 'shpora-widget.firebaseapp.com',
    projectId: 'shpora-widget',
    storageBucket: 'shpora-widget.appspot.com',
    messagingSenderId: '183747301370',
    appId: '1:183747301370:web:50f790d63b023328dade43'
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export const FirebaseContext = React.createContext<any>(null);

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebaseApp, firestore, auth }}>
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

