import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
   <h1>Hola perdi la apuesta</h1>
    <App/>
   
  </React.StrictMode>
  </BrowserRouter>
);



