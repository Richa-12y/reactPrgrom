import React, { useState } from 'react'

const Zoom = () => {
    const [isZoom,setIsZoom]=useState(false)
    function getClick(){
        setIsZoom((p)=>!p)
      }

    return (     
      <>
       <div>
       <div className="App">
       <div className="mainbox">
       <div onClick ={getClick} className={isZoom? 'box3':'box4'}>Welcome to Zoom</div>
       <div onClick ={getClick} className={!isZoom? 'box3':'box4'}>You Are here For Meeting</div>
       <button onClick ={getClick}>Click me</button>
      </div>
      </div>
       </div>
      </>
      
    
    );
}

export default Zoom
