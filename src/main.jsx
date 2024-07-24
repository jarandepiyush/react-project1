import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// https://preview.colorlib.com/#justice
// http://localhost:5173/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
