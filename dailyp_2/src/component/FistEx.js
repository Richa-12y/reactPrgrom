import { useState } from 'react';

function FistEx() {
  const [divsion,setDivison]=useState(100)
  function division(){
    setDivison(divsion/2)
  }
  return(
 <>
 <button onClick={division}>Click here</button>
 <h1>{divsion}</h1>
 </>
  );
}

export default FistEx;
