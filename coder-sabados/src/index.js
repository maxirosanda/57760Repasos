import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCV6tYyPYsLhB6e0Q962LQHTopK89NYIFw",
  authDomain: "cursocodersabados.firebaseapp.com",
  projectId: "cursocodersabados",
  storageBucket: "cursocodersabados.appspot.com",
  messagingSenderId: "181110480081",
  appId: "1:181110480081:web:1aaa60d1ee259943be39f0"
};

initializeApp(firebaseConfig);

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
