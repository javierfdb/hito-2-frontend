import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import './index.css'
import '@splidejs/react-splide/css';

import {BrowserRouter} from 'react-router-dom';
import TiendaProvider from './context/TiendaContext.jsx';

import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TiendaProvider>
        <CssBaseline/>   
          <App />
    </TiendaProvider>
  </BrowserRouter>
  
)
