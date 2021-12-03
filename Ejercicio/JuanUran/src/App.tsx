import React from 'react';
import './App.css';
import './style/app.scss';
import Header from './components/header/Header';
import Body from './components/Body';


function App() {
  return (
    <>  
        <Header/>
        <div className="">
        <Body/>
        </div>
    </>
  );
}

export default App;
