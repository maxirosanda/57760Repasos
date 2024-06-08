import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

