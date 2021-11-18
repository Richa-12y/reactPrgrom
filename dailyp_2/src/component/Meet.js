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
       <div onClick ={getClick} className={isRicha? 'box1':'box2'}>Richa</div>
       <div onClick ={getClick} className={!isRicha? 'box1':'box2'}>Shanu</div>
       <button onClick ={getClick}>Click me</button>
      </div>
      </div>
      </>
      
    
    );
}

export default Meet
