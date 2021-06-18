import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import {Provider} from "react-redux";
import store from "./store"


const firebaseConfig = {
  apiKey: "AIzaSyCxd5c3_cDVIFXIEUo5KapDTC_MvX3K5aE",
  authDomain: "web-messenger-d4bf4.firebaseapp.com",
  projectId: "web-messenger-d4bf4",
  storageBucket: "web-messenger-d4bf4.appspot.com",
  messagingSenderId: "5356056101",
  appId: "1:5356056101:web:9361e4f2bf153954ec99cc",
  measurementId: "G-TE0M2HY1QL"
};

window.store = store;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
