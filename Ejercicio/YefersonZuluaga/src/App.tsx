import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/app.scss'
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    
    <div className="containerDistribution"> 
      <Header/>
      <div>
        <Body/>
      </div>
    </div>
  );
}

export default App;
