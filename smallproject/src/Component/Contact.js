import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    const[inputValue,setInputValue]=useState(0)
    const[inputValue1,setInputValue1]=useState(0)
    const[result, setResult]=useState(0)
 function getChange(event){
 
 setInputValue(event.target.value)
 console.log(event.target)
    }

    function getChange1(event){
 
        setInputValue1(event.target.value)
        console.log(event.target)
           }
       
    console.log(inputValue)
    function clickMe(){
        const add=  parseInt(inputValue)+parseInt(inputValue1)
        setResult(add)
        
    }

    function clickMe1(){
        const mul=  parseInt(inputValue)*parseInt(inputValue1)
        setResult(mul)
        
    }

    function clickMe2(){
        const div=  parseInt(inputValue)/parseInt(inputValue1)
        setResult(div)
        
    }
    function clickMe3(){
        const sub=  parseInt(inputValue)-parseInt(inputValue1)
        setResult(sub)
        
    }

    function clickMe4(){
        const modul=  parseInt(inputValue)%parseInt(inputValue1)
        setResult(modul)
        
    }



    return (
        <div className="contactconainer">
        <div className="inputdes">
        <input onChange={getChange} value={inputValue}/>
        <input onChange={getChange1} value={inputValue1}/>
        </div>
       <div className="buttonDes">
       <button onClick={clickMe}>+</button>
       <button onClick={clickMe3}>-</button>
       <button onClick={clickMe1}>*</button>
       <button onClick={clickMe2}>/</button>
       <button onClick={clickMe4}>%</button>

       </div>


       <h1>{result}</h1>
   </div>
    )
}

Contact.propTypes = {

}

export default Contact
