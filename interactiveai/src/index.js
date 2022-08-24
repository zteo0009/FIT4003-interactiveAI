import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';
import { getFirestore, getDoc, doc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNiSXkYBtG_SUwu7RV3Qxpiur3WiIJQpI",
  authDomain: "fit4003-interactiveai.firebaseapp.com",
  projectId: "fit4003-interactiveai",
  storageBucket: "fit4003-interactiveai.appspot.com",
  messagingSenderId: "526897660959",
  appId: "1:526897660959:web:047283572ee7dbf182c12a",
  measurementId: "G-M236MH6LSV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
