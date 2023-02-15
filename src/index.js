import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrimerUseState from './components/UseState';
import reportWebVitals from './reportWebVitals';
import Intro from './components/Intro';
import CustomHook from './components/CustomHook'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CustomHook />
   {/*  <PrimerUseState /> */}
   {/*  <Intro /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
