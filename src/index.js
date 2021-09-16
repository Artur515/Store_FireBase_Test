import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ProductStore from "./store/Store";
import {initializeApp} from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const firebaseConfig = {
    apiKey: "AIzaSyB91_aXB1EMN8geIouF8bLlAl5Lv3gkDTE",
    authDomain: "store-test-32a4e.firebaseapp.com",
    projectId: "store-test-32a4e",
    storageBucket: "store-test-32a4e.appspot.com",
    messagingSenderId: "231286257071",
    appId: "1:231286257071:web:09efb4135787963de62b5a",
    measurementId: "G-J9NC31RGZB"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        productStore: new ProductStore(),
    }}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById('root')
);

