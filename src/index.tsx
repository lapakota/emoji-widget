import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDuR-AE9QJCSpPN7pwyjEjABJvubdzBjcg',
    authDomain: 'shpora-emoji-widget.firebaseapp.com',
    projectId: 'shpora-emoji-widget',
    storageBucket: 'shpora-emoji-widget.appspot.com',
    messagingSenderId: '495862607282',
    appId: '1:495862607282:web:21dc2b88ed5ef37c7588ab',
    measurementId: 'G-PYCSWKQWFB'
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

