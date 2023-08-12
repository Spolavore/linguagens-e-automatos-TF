import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Automato from './Automato';
import { useEffect, useState} from 'react';
import Definicoes from './Definições';
import ReconhecerLinguagem from './Funçao Reconhecedora';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Definicoes/>
    <Automato/>
    <ReconhecerLinguagem/>
  </React.StrictMode>
);
