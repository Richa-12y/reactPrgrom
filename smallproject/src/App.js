import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact'
function App() {
  const[navigationPage,setNavigationPage] =useState('Home')

  const getClick = () =>{
    setNavigationPage('Home')
  
  }
  const getClick1 = () =>{
    setNavigationPage('About')
  }

  const getClick2 = () =>{
    setNavigationPage('Contact')
  }
   console.log(navigationPage)
  return (
    <div className="App">
     <div className="topbar">topbar</div>
     <div className="belowcontainer">
     <div className="sidebar">
     <button onClick ={getClick}>Home</button>
     <button onClick ={getClick1}>About</button>
     <button onClick ={getClick2}>Contact</button>
     </div>
     <div className="Main-container">
     {
      navigationPage==='Home'&&<Home/>
     }

     {
      navigationPage==='About'&&<About/>
         }
   
     {
      navigationPage==='Contact'&&<Contact/>
     }
   
     </div>
     </div>
    </div>
  );
}

export default App;
