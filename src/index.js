import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Cards from './Components/Cards';
import Project from './Components/Project';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <About/>
    <Skills/>
    <Project/>      
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
