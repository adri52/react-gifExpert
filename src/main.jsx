import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  //strict Mode ayuda a idintificar problemas del life cicle 
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
