import React, { useState } from 'react'

const Meet = () => {
    const [isRicha,setIsRicha]=useState(false)
    function getClick(){
        setIsRicha((p)=>!p)
      }

    return (     
      <>
       <div>
       <div className="App">
       <div className="mainbox">
       <div onClick ={getClick} className={isRicha? 'box1':'box2'}>{isRicha?'Richa':'Sanu'}</div>
       <div onClick ={getClick} className={!isRicha? 'box1':'box2'}>{!isRicha?'Richa':'Sanu'}</div>
       <button onClick ={getClick}>Click me</button>
      </div>
      </div>
       </div>
      </>
      
    
    );
}

export default Meet
